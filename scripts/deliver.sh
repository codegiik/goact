#!/usr/bin/env sh

set -x
./goact &
ngrok http 3000 --log=ngrok_log.txt > /dev/null &
sleep 1
cat ngrok_log.txt
sleep 1
echo $! > .pidfile
set +x
