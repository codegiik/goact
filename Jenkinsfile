pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Installing Go') { 
            steps {
                sh 'curl https://go.dev/dl/go1.18.4.linux-amd64.tar.gz --output go.tar.gz'
                sh 'rm -rf /usr/local/go && tar -C /usr/local -xzf go.tar.gz'
                sh 'echo "export PATH=$PATH:/usr/local/go/bin" >> $HOME/.profile' 
                sh 'source $HOME/.profile'
                sh 'go version'
            }
        }
        stage('Building Frontend') { 
            steps {
                sh 'npm install' 
                sh 'npm run build'
            }
        }
        stage('Building Backend') {
            steps {
                sh 'go build goact.go'
            }
        }
    }
}
