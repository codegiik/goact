FROM node:lts-bullseye-slim

RUN apt update && apt install -y curl

RUN curl https://dl.google.com/go/go1.18.4.linux-amd64.tar.gz --output go.tar.gz
RUN rm -rf /usr/local/go && tar -C /usr/local -xzf go.tar.gz
RUN echo "export PATH=$PATH:/usr/local/go/bin" >> $HOME/.profile
RUN . $HOME/.profile

EXPOSE 3000
