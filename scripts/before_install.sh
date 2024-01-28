#!/bin/bash
chmod +x scripts/*
cd /home/ec2-user/server

apt-get install curl
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
#yum install -y nodejs
apt-get install nodejs -y
apt-get install npm -y
apt install nginx -y
#ufw allow 'Nginx HTTP'
ufw allow 3000

echo "Running pre-installation steps..."