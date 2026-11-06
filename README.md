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

