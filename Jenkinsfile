pipeline {
    agent {
        dockerfile true
    }
    stages {
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
