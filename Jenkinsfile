pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'

                    // Forces the stage to use the same workspace for all the stages, to have all the necessary dependencies in check
                    reuseNode true
                }
            }
            steps {
                sh '''
                    # List all the files of the workspace
                    ls -la

                    # check (and "log") Node and NPM versions
                    node -v
                    npm -v

                    # Check for necessary depencies to later run the test Stage properly
                    npm ci
                    npm run build

                    # Check the directory to verify the existence of "build" and "node_modules" directories
                    ls -la
                '''
                
            }
        }

        stage ('Test') {
            agent {
                docker {
                    image 'node:18-alpine'

                    // Forces the stage to use the same workspace for all the stages, to have all the necessary dependencies in check
                    reuseNode true
                }
            }

            steps {
                sh '''
                # Test and verify, that the index.html exists in the "build" directory
                test -f build/index.html

                # Run the NPM test
                npm test



                '''
                
            }
        }
        
    }
}
