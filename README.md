# Microservices-Based E-Commerce Platform

A modern, containerized, cloud-native E-Commerce web application built on a microservices architecture. This project demonstrates containerization with Docker, orchestration using Kubernetes (Minikube), automated Ingress routing, and persistent storage on AWS EBS.

---

## 🏗️ Architecture & Tech Stack

* **Frontend:** HTML5, CSS, and Vanilla JavaScript served via **NGINX** (`/services/frontend`).
* **Backend API:** **Node.js** & **Express** REST API handling product data and business logic (`/services/product-service`).
* **Database:** **PostgreSQL** deployed with persistent storage backed by Kubernetes Persistent Volume Claims (PVC).
* **Orchestration & Networking:** **Kubernetes** running on an AWS EC2 instance, utilizing **NGINX Ingress Controller** for path-based traffic routing.

---

## 📁 Repository Structure

```text
Microservices-Based-E-Commerce/
├── k8s/
│   ├── backend/
│   │   └── product-service.yaml
│   ├── config/
│   │   └── secret.yaml
│   ├── frontend/
│   │   └── frontend-deployment.yaml
│   ├── networking/
│   │   └── ingress.yaml
│   ├── namespace.yaml
│   └── postgres/
│       ├── deployment.yaml
│       └── pvc.yaml
└── services/
    ├── frontend/
    │   ├── Dockerfile
    │   └── index.html
    └── product-service/
        ├── Dockerfile
        └── server.js


**Deployment Guide (Local / AWS EC2)**
1. Prerequisites
Docker installed and running.

Minikube and kubectl configured.

2. Build and Load Docker Images into Minikube
        # Build and load Product Service
cd services/product-service
docker build -t product-service:latest .
minikube image load product-service:latest

# Build and load Frontend
cd ../frontend
docker build -t frontend:latest .
minikube image load frontend:latest

**Apply Kubernetes Manifests**
Navigate back to the project root and apply your configurations in order:
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/config/secret.yaml
kubectl apply -f k8s/postgres/pvc.yaml
kubectl apply -f k8s/postgres/deployment.yaml
kubectl apply -f k8s/backend/product-service.yaml
kubectl apply -f k8s/frontend/frontend-deployment.yaml
kubectl apply -f k8s/networking/ingress.yaml

**Verify Pods**
kubectl get pods -n ecom-shop

**🌐 Accessing the Application
To test and view the storefront locally via port forwarding:**
kubectl port-forward svc/frontend-service 8080:80 -n ecom-shop --address 0.0.0.0

Open your browser and navigate to: http://<your-ec2-public-ip>:8080
