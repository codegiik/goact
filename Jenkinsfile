pipeline {
    agent {
        dockerfile true
    }
    stages {
        stage('Install dependencies') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Build the Frontend') { 
            steps {
                sh 'npm run build'
            }
        }
        stage('Build the Backend') {
            steps {
                sh 'go build goact.go'
            }
        }
        stage('Deliver') {
            steps {
                sh './scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './scripts/kill.sh' 
            }
        }
    }
}
