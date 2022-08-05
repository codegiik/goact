FROM --platform=linux/x86_64 node:lts-bullseye-slim

RUN apt update && apt install -y curl

RUN curl https://dl.google.com/go/go1.18.4.linux-amd64.tar.gz --output /tmp/go.tar.gz
RUN rm -rf /usr/local/go && tar -C /usr/local -xzf /tmp/go.tar.gz

ENV PATH="/usr/local/go/bin:${PATH}"

RUN npm i -g esbuild

WORKDIR /app
COPY . .

EXPOSE 3000

RUN npm i

CMD ["npm", "start"]
