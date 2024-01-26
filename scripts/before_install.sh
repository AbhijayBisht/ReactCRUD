#!/bin/bash
cd /home/ec2-user/server
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
yum install -y nodejs
echo "Running pre-installation steps..."