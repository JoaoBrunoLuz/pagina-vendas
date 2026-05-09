# Script para conectar o ambiente local ao GitHub e realizar o primeiro push

Write-Host "Conectando ao repositório remoto..." -ForegroundColor Cyan

# Adiciona o repositório remoto
git remote add origin https://github.com/JoaoBrunoLuz/pagina-vendas.git

# Renomeia a branch principal para main (padrão atual do GitHub)
git branch -M main

# Realiza o push
Write-Host "Enviando arquivos para o GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host "Sucesso! Seu projeto está online." -ForegroundColor Green
