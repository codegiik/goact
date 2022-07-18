FROM --platform=linux/x86_64 node:lts-bullseye-slim

RUN apt update && apt install -y curl

RUN curl https://dl.google.com/go/go1.18.4.linux-amd64.tar.gz --output /tmp/go.tar.gz
RUN rm -rf /usr/local/go && tar -C /usr/local -xzf /tmp/go.tar.gz

ENV PATH="/usr/local/go/bin:${PATH}"

RUN curl https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz --output /tmp/ngrok.tgz
RUN tar xvzf /tmp/ngrok.tgz -C /usr/local/bin

EXPOSE 3000
