# vscode
Automated static analysis and vulnerability tracking dashboard for Visual Studio Code security research.
# VS Code Security Research Dashboard

Bu proje, Visual Studio Code (VS Code) kod tabanındaki potansiyel güvenlik zafiyetlerini (RCE, XSS, Path Traversal vb.) tespit etmek ve yönetmek için geliştirilmiş bir **Statik Analiz (SAST)** ve **Vulnerability Tracking** aracıdır.

## Hedef
Microsoft Open-Source Bounty Programı kapsamında, VS Code kaynak kodlarını analiz ederek "Critical" ve "Important" seviyesindeki zafiyetleri tespit etmek ve MSRC portalı üzerinden raporlamak.

## Kullanılan Araçlar
*   **Language**: Go
*   **Method**: Statik Analiz (SAST) - Desen eşleştirme (Pattern Matching)
*   **Target**: `microsoft/vscode` (Workbench, Platform, API modülleri)

## Özellikler
*   `CodeScanner`: Belirlenen güvenlik desenlerini (RCE, XSS, IPC) tarar.
*   `Vulnerability Tracker`: Bulguları `results.json` dosyasında yönetir.
*   `Dashboard`: Tespit edilen risklerin ciddiyetine göre önceliklendirilmesini sağlar.

## Kullanım
1. `go run main.go` komutu ile taramayı başlatın.
2. `results.json` dosyasını inceleyerek şüpheli kod satırlarını tespit edin.
3. Tespit edilen bulguları `investigating`, `reported` veya `false-positive` durumuna göre işaretleyin.
