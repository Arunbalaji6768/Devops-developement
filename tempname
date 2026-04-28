pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
        IMAGE_NAME = "arunbalaji6768/devops-app" 
    }
    stages {
        stage('Checkout') {
            steps { checkout scm }
        }
        stage('Build Image') {
            steps { bat "docker build -t %IMAGE_NAME%:latest ." }
        }
        stage('Push to Docker Hub') {
            steps {
                bat "docker login -u %DOCKERHUB_CREDENTIALS_USR% -p %DOCKERHUB_CREDENTIALS_PSW%"
                bat "docker push %IMAGE_NAME%:latest"
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                bat "kubectl --kubeconfig=C:/Users/Arun/.kube/config apply -f deployment.yaml"
                bat "kubectl --kubeconfig=C:/Users/Arun/.kube/config rollout restart deployment devops-app-deployment"
            }
        }
    }
}