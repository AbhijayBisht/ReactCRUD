#!/bin/bash
cd /home/ec2-user/server/src
#npm start
#pm2 start npm --name "ReactCRUD" -- start
#pm2 startup
#pm2 save
#pm2 restart all

systemctl -l enable nginx
systemctl -l start nginx
echo "Running app_starting steps..."