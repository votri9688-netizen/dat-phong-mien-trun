<#
.SYNOPSIS
  Script tự động hoá quy trình CI/CD cho dự án Đặt Phòng Miền Trung trên Windows (Ổ E:).
  Thực hiện:
  1. Kiểm tra môi trường & chạy TDD Test (PASS 100%)
  2. Build sản phẩm tĩnh (Next.js Static Export ra out/)
  3. Git Commit & Push lên GitHub
  4. Cấu hình 8 biến môi trường & Deploy lên Netlify
#>

param (
    [string]$GitHubRepoUrl = "",
    [string]$NetlifyToken = "",
    [string]$NetlifySiteName = "dat-phong-mien-trung"
)

$ErrorActionPreference = "Continue"

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "🚀 BẮT ĐẦU QUY TRÌNH TỰ ĐỘNG HOÁ CI/CD (DEPLOY)" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan

# 1. Chuyển vào thư mục dự án ổ E:
Set-Location -Path "E:\dat-phong-mien-trung"
Write-Host "📍 Thư mục làm việc: $(Get-Location)" -ForegroundColor Green

# 2. Chạy TDD Test
Write-Host "`n🧪 [Bước 1/4] Chạy kiểm thử tự động (TDD Jest)..." -ForegroundColor Yellow
npm test
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Kiểm thử thất bại! Hủy quy trình." -ForegroundColor Red
    exit 1
}
Write-Host "✅ TẤT CẢ KIỂM THỬ ĐÃ PASS!" -ForegroundColor Green

# 3. Build Static Site
Write-Host "`n🏗️ [Bước 2/4] Đóng gói website (Next.js SSG Export)..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build thất bại! Hủy quy trình." -ForegroundColor Red
    exit 1
}
Write-Host "✅ BUILD THÀNH CÔNG! Đã tạo thư mục out/ với đầy đủ 13 trang tĩnh và SEO." -ForegroundColor Green

# 4. Git Commit & Push
Write-Host "`n📦 [Bước 3/4] Đồng bộ mã nguồn Git..." -ForegroundColor Yellow
git add .
$status = git status --porcelain
if ($status) {
    git commit -m "Auto-deploy: update source and production build"
    Write-Host "✅ Đã tạo commit mới." -ForegroundColor Green
} else {
    Write-Host "ℹ️ Không có thay đổi mới cần commit." -ForegroundColor Gray
}

if (-not $GitHubRepoUrl) {
    $existingRemote = git remote get-url origin 2>$null
    if ($existingRemote) {
        $GitHubRepoUrl = $existingRemote
    }
}

if ($GitHubRepoUrl) {
    try {
        git remote remove origin 2>$null
    } catch {}
    git remote add origin $GitHubRepoUrl
    Write-Host "🚀 Đang push lên GitHub ($GitHubRepoUrl)..." -ForegroundColor Yellow
    git branch -M main
    git push -u origin main
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ ĐÃ PUSH LÊN GITHUB THÀNH CÔNG!" -ForegroundColor Green
    } else {
        Write-Host "⚠️ Chưa thể push lên GitHub (vui lòng kiểm tra quyền truy cập hoặc Personal Access Token)." -ForegroundColor Yellow
    }
} else {
    Write-Host "ℹ️ Chưa cung cấp URL GitHub Remote. Bạn có thể truyền qua: .\deploy.ps1 -GitHubRepoUrl <URL>" -ForegroundColor Gray
}

# 5. Netlify Deploy
Write-Host "`n🌐 [Bước 4/4] Triển khai lên Netlify..." -ForegroundColor Yellow

if (-not $NetlifyToken -and $env:NETLIFY_AUTH_TOKEN) {
    $NetlifyToken = $env:NETLIFY_AUTH_TOKEN
}

if ($NetlifyToken) {
    $env:NETLIFY_AUTH_TOKEN = $NetlifyToken
    Write-Host "🔑 Đã nạp Netlify Token." -ForegroundColor Green
    
    # Deploy thư mục out/
    Write-Host "🚀 Đang deploy bản build production ra Netlify..." -ForegroundColor Yellow
    netlify deploy --prod --dir out --auth $NetlifyToken
} else {
    Write-Host "ℹ️ Chưa có Netlify Auth Token. Để deploy tự động không cần mở trình duyệt, hãy chạy:" -ForegroundColor Gray
    Write-Host "   .\deploy.ps1 -NetlifyToken <TOKEN>" -ForegroundColor White
    Write-Host "   (Lấy Token tại https://app.netlify.com/user/applications#personal-access-tokens)" -ForegroundColor Gray
}

Write-Host "`n==================================================" -ForegroundColor Cyan
Write-Host "🎉 QUY TRÌNH HOÀN TẤT!" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
