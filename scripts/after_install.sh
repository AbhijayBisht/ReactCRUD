#!/bin/bash

cd /home/ec2-user/server
npm install
#npm install --save react react-dom react-scripts react-particles-js
cp -r build/* /var/www/html
npm install pm2 -g
echo "Running post-installation steps..."