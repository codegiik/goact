pipeline {
    tools {
      go 'go1.18.4'
    }
    environment {
        GOPATH = "${JENKINS_HOME}/jobs/${JOB_NAME}/builds/${BUILD_ID}"
    }
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('build') { 
            steps {
                sh 'npm install' 
                sh 'npm run build'
                sh 'go build goact.go'
            }
        }
    }
}
