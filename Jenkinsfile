pipeline {
    agent any

    stages {
        stage('without docker') {
            steps {
                sh '''
                    echo "Without Docker lallallaa"
                    ls -la
                    
                '''
                
            }
        }
        stage('with docker') {
            agent {
                docker{ 
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    echo "With Docker"
                    ls -la
                    echo "NPM version:"
                    npm --version
                    
                '''
            }
        }
    }
}
