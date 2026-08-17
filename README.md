Calendar App with CI/CD
A full-stack Calendar Application built with Node.js and Express.js, with automated testing, Docker containerization, GitHub Actions CI/CD, Docker Hub image publishing, AWS EC2 deployment, and application monitoring.
This project demonstrates an end-to-end QA Automation + DevOps workflow from source code to cloud deployment.
Project Overview:
The Calendar App allows users to:
View the current month
Navigate between months
Highlight the current day
Create calendar events
Retrieve calendar events
Update calendar events
Delete calendar events

The application is tested at multiple levels and automatically built and deployed using a CI/CD pipeline.
Project Architecture
Developer
    │
    ▼
 GitHub Repository
    │
    │ Push
    ▼
GitHub Actions
    │
    ├── Install Dependencies
    ├── Jest Unit Tests
    ├── Supertest API Tests
    ├── Playwright E2E Tests
    ├── Docker Build
    └── Docker Push
            │
            ▼
       Docker Hub
            │
            ▼
         AWS EC2
            │
            ▼
     Docker Container
            │
            ▼
      Calendar App

      Technologies Used
Application
Node.js
Express.js
HTML5
CSS3
JavaScript
REST API
Testing
Jest
Supertest
Playwright
DevOps
Git
GitHub
GitHub Actions
Docker
Docker Hub
AWS EC2
Linux
Monitoring
Docker logs
Docker stats
Docker inspect
top
htop
free
df
journalctl

Project Structure
calendar-app/
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
├── e2e/
│   └── calendar.spec.js
│
├── tests/
│   └── app.test.js
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md

Application Setup
Prerequisites

Install the following:

Node.js
npm
Git
Docker
GitHub account
Docker Hub account
AWS account for EC2 deployment

Verify the installations:

node --version
npm --version
git --version
docker --version

Clone the Repository
git clone [(https://github.com/Sudhindra1988/calendar-app.git)]

Navigate to the project:

cd calendar-app

Install Dependencies
npm install

Run the Application

Start the application:

npm start

The application runs on:

http://localhost:3000

Open the URL in a browser to access the Calendar App.

API Endpoints
Health Check
GET /health

Example response:

{
  "status": "OK"
}
Get Calendar Events
GET /api/calendar
Create Event
POST /api/calendar

Example request:

{
  "title": "QA Meeting",
  "date": "2026-08-17"
}
Update Event
PUT /api/calendar/:id
Delete Event
DELETE /api/calendar/:id
Testing

The project contains multiple testing layers.

                    Testing
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
      Jest         Supertest      Playwright
        │              │              │
      Unit           API             E2E
     Testing        Testing         Testing
Jest Unit Testing

Run Jest tests:

npm test

Expected result:

PASS

Jest validates application-level functionality.
Supertest API Testing

API tests validate the Express REST endpoints.

Example:

npm test

The API test suite covers endpoints such as:

GET
POST
PUT
DELETE
Playwright E2E Testing

Playwright validates the application from the user's perspective.

Run:

npm run test:e2e

Or:

npx playwright test

Run with the browser visible:

npx playwright test --headed

View the Playwright report:

npx playwright show-report
Docker

The application can be packaged and executed as a Docker container.

Build Docker Image
docker build -t calendar-app:latest .

Check the image:

docker images
Run Docker Container
docker run -d \
  --name calendar-app \
  -p 3000:3000 \
  calendar-app:latest

Verify:

docker ps

Access the application:

http://localhost:3000
Docker Logs

View application logs:

docker logs calendar-app

Follow logs continuously:

docker logs -f calendar-app
Docker Monitoring

Check container resource usage:

docker stats

Inspect the container:

docker inspect calendar-app

AWS EC2 Deployment

The application can be deployed to an AWS EC2 instance using Docker.

Deployment process:

GitHub
   │
   ▼
GitHub Actions
   │
   ▼
Docker Hub
   │
   ▼
AWS EC2
   │
   ▼
Docker Container
   │
   ▼
Calendar App

On the EC2 server:

docker pull <DOCKERHUB_USERNAME>/calendar-app:latest

Stop the existing container:

docker stop calendar-app || true

Remove the existing container:

docker rm calendar-app || true

Start the new container:

docker run -d \
  --name calendar-app \
  -p 3000:3000 \
  <DOCKERHUB_USERNAME>/calendar-app:latest

Verify:

docker ps
🔄 CI/CD Pipeline

GitHub Actions automates the build, test, and deployment process.

Pipeline:

Code Push
    │
    ▼
GitHub
    │
    ▼
Checkout
    │
    ▼
Install Dependencies
    │
    ▼
Jest Tests
    │
    ▼
API Tests
    │
    ▼
Playwright E2E Tests
    │
    ▼
Docker Build
    │
    ▼
Docker Hub
    │
    ▼
AWS EC2
    │
    ▼
Deployment
🔐 GitHub Secrets

Sensitive credentials should not be stored directly in the repository.

The CI/CD pipeline uses GitHub Secrets for values such as:

DOCKERHUB_USERNAME
DOCKERHUB_TOKEN
EC2_HOST
EC2_USERNAME
EC2_SSH_KEY

Never commit:

.env
*.pem
passwords
tokens
private keys
📊 Monitoring

The deployed application can be monitored using Docker and Linux commands.

Docker
docker ps
docker logs calendar-app
docker stats
docker images
docker inspect calendar-app
Linux
top
htop
free -h
df -h
journalctl
🩺 Health Check

The application provides a health-check endpoint:

GET /health

Expected response:

{
  "status": "OK"
}

This endpoint can be used to verify whether the application is running correctly after deployment.
Security Practices

The project follows basic DevOps security practices:

Secrets are stored in GitHub Secrets
.env files are excluded from Git
Private SSH keys are not committed
node_modules is excluded from Git
Docker build context is reduced using .dockerignore
Production credentials are not hardcoded
Docker containers are monitored after deployment

CI/CD Benefits Demonstrated

This project demonstrates:

Continuous Integration
Continuous Deployment
Automated Unit Testing
Automated API Testing
Automated E2E Testing
Docker Containerization
Docker Image Management
Cloud Deployment
Linux Administration
Application Monitoring
Git-based version control

Learning Outcomes

By completing this project, the following skills were practiced:

QA Automation
JavaScript
Jest
Supertest
Playwright
API testing
End-to-end testing
DevOps
Git
GitHub
GitHub Actions
Docker
Docker Hub
AWS EC2
Linux
CI/CD
Production Engineering
Health checks
Container monitoring
Application logs
Resource monitoring
Environment configuration
Deployment automation
🏆 Project Completion

The Calendar App was developed through multiple stages:

Module 1  → Node.js / Express
Module 2  → Calendar UI
Module 3  → Backend API
Module 4  → Git / GitHub
Module 5  → Docker
Module 6  → Docker Hub
Module 7  → Jest
Module 8  → Supertest API Testing
Module 9  → Playwright E2E
Module 10 → AWS EC2
Module 11 → GitHub Actions CI
Module 12 → Continuous Deployment
Module 13 → Monitoring
Module 14 → Advanced Testing / CI/CD
Module 15 → Productionization
👨‍💻 Author

Sudhindra Purushotham

QA Automation Engineer | Software Testing | API Testing | E2E Automation | CI/CD | Docker | Cloud

⭐ Project Summary

This project demonstrates an end-to-end software delivery pipeline where application code is:

Developed
   ↓
Tested
   ↓
Containerized
   ↓
Published
   ↓
Deployed
   ↓
Monitored

The goal is to demonstrate practical experience across Software Testing, Test Automation, CI/CD, Docker, Cloud Deployment, and Production Monitoring.
