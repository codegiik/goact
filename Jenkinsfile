pipeline {
    agent {
        dockerfile true
    }
    stages {
        stage('Installing dependencies') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Building the Frontend') { 
            steps {
                sh 'npm run build'
            }
        }
        stage('Building the Backend') {
            steps {
                sh 'go build goact.go'
            }
        }
    }
}
