#!/bin/bash

echo "Script para descargar un respaldo de la base de datos"
echo ""
echo "> Iniciando script..."

read -p "Dirección IP del servidor: " server
read -p "Nombre de usuario: " username
echo ""
read -p "Base de datos a descargar: " nmsdb

# Conectarse al servidor remoto, crear el respaldo, comprimirlo y descargarlo
ssh "$username@$server" "mongodump --db $nmsdb --out E:/Deploy/backupdb/$nmsdb"
ssh "$username@$server" "tar -czf E:/Deploy/backupdb/$nmsdb.tar.gz E:/Deploy/backupdb/$nmsdb"
scp "$username@$server:E:/Deploy/backupdb/$nmsdb.tar.gz" ./

# Eliminar el archivo comprimido remoto después de descargarlo
ssh "$username@$server" "del E:\\Deploy\\backupdb\\$nmsdb.tar.gz"

# Verificación del éxito de la copia
if [ $? -eq 0 ]; then
    echo "El respaldo se ha completado y el archivo comprimido ha sido descargado."
else
    echo "Ha ocurrido un error durante la copia del respaldo."
fi