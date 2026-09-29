# 🛡️ Exam Guard AI

### Resilient and Trustworthy Online Assessment System

Exam Guard AI is a proposed intelligent and resilient online examination system designed to improve the **reliability, continuity, security, and monitoring** of online assessments.

The system focuses on real-time monitoring of candidate sessions and examination infrastructure, early detection and prediction of technical failures, automated incident management, backup and disaster recovery, and secure examination data storage.

> **Project Status:** Prototype / Proof of Concept
> **Hackathon:** Idea & Innovation Hackathon 2026

---

## 🎯 Problem Statement

Online examinations can be affected by various technical and operational problems such as:

* Network interruptions
* Server or infrastructure failures
* Candidate session disruptions
* Delayed detection of incidents
* Data integrity and security concerns
* Lack of effective disaster recovery mechanisms

These problems can interrupt examinations and create an unreliable experience for candidates and examination administrators.

---

## 💡 Proposed Solution

Exam Guard AI aims to provide a centralized and resilient platform that can:

1. Monitor candidate sessions and examination infrastructure in real time.
2. Detect and predict potential technical or operational failures at an early stage.
3. Automatically detect, classify, and escalate examination incidents.
4. Support backup and disaster-recovery mechanisms to maintain examination continuity.
5. Secure examination and response data using tamper-evident storage mechanisms.

---

## 🔄 Working Flow

```text
Candidate Starts Examination
            ↓
   Real-Time Monitoring
            ↓
Candidate & Infrastructure Events
            ↓
 AI-Based Detection & Prediction
            ↓
      Incident Detected
            ↓
   Incident Classification
            ↓
    Severity Determination
            ↓
   Real-Time Admin Alert
            ↓
     Admin Investigation
            ↓
   Action / Escalation
            ↓
 Backup & Recovery Mechanism
            ↓
     Examination Continuity
            ↓
 Secure & Tamper-Evident Storage
```

---

## 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │      Candidate      │
                    │   Examination UI    │
                    └──────────┬──────────┘
                               │
                         WebSocket
                         / REST API
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Node.js + Express.js│
                    │      Backend        │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
        ┌──────────┐     ┌───────────┐    ┌─────────────┐
        │  Redis   │     │ AI / ML   │    │  Database   │
        │  Live    │     │ Detection │    │ Exam Data   │
        │  State   │     │ Prediction│    │ Responses   │
        └──────────┘     └───────────┘    └─────────────┘
              │                │                │
              └────────────────┼────────────────┘
                               ▼
                    ┌─────────────────────┐
                    │   Admin Dashboard   │
                    │ Monitoring & Alerts │
                    └─────────────────────┘
```

---

## 🛠️ Technology Stack

### Current Prototype

**Frontend**

* HTML
* CSS
* JavaScript
* EJS (Embedded JavaScript Templates)

**Backend**

* Node.js
* Express.js

**Communication**

* REST APIs

**Data Storage**

* JSON-based prototype storage

### Planned Final System

**Frontend**

* HTML
* CSS
* JavaScript
* EJS

**Backend**

* Node.js
* Express.js

**Real-Time Communication**

* WebSocket

**Real-Time Data / Session Management**

* Redis

**Intelligence Layer**

* AI / ML
* Failure prediction
* Anomaly / incident detection
* Incident classification

**Data Storage**

* MondoDB
* Secure and tamper-evident storage mechanism, candidte data , users type data, and other important data

---

## 🚨 Core Functional Modules

### 1. Real-Time Monitoring

Continuously monitor:

* Candidate sessions
* Network/session events
* Examination infrastructure
* System health indicators

### 2. Failure Detection & Prediction

Identify abnormal system behavior and provide early warnings for possible:

* Network failures
* Server failures
* Infrastructure issues
* Operational problems

### 3. Automated Incident Management

The system is designed to:

```text
Detect
  ↓
Classify
  ↓
Determine Severity
  ↓
Create Incident
  ↓
Notify / Escalate
  ↓
Admin Action
```

### 4. Backup & Disaster Recovery

The system aims to maintain examination continuity during:

* Network interruptions
* Server failures
* Infrastructure problems
* Candidate session disruptions

### 5. Secure & Tamper-Evident Storage

Examination-related information and candidate responses are intended to be stored securely with mechanisms that can help detect unauthorized modification. 
# To ensure exam data cannot be modified after completion—even by an administrator.

---

## 👨‍💼 Admin Dashboard

The administrator interface is designed to provide centralized visibility into examination incidents.

### Admin can monitor:

* Active incidents
* Incident type
* Severity
* Incident status
* Candidate/session information
* Time of occurrence
* Required administrative action

Future versions will provide real-time updates using **WebSocket**.

---

## 👨‍🎓 Candidate Side

The candidate interface is designed to provide a reliable examination experience.

The system aims to:

* Start and manage examination sessions
* Monitor session health
* Detect interruptions
* Support session recovery
* Maintain examination continuity

---

## 🔮 Final Project includes

The prototype will be extended toward the complete proposed system with:

* Real-time monitoring using WebSocket
* Redis-based session and state management
* AI/ML-based anomaly detection
* Early technical failure prediction
* Automated incident classification
* Automated incident escalation
* Backup and disaster recovery
* Secure database integration
* Tamper-evident examination records
* Scalable architecture for large numbers of candidates
* Advanced administrator monitoring and analytics

---

## 🔐 Reliability & Security

The final system is designed around the following principles:

* **Reliability** — minimize examination disruption
* **Resilience** — recover from technical failures
* **Real-Time Visibility** — provide immediate system status
* **Security** — protect examination and response data
* **Integrity** — detect unauthorized data modification
* **Scalability** — support large-scale examinations

---

## 📁 Current Project Structure

```text
Exam_Guard_AI/
│
├── public/
│   ├── css/
│   ├── js/
│   └── ...
│
├── views/
│   ├── ...
│   └── ...
│
├── data/
│   └── incidents.json
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

> The project structure may evolve as additional modules and services are implemented.

---

## 🚀 Running the Prototype Locally

### 1. Clone the repository

```bash
git clone https://github.com/premk-rinhayat/Exam_Guard_AI.git

### 2. Navigate into the project

```bash
cd Exam_Guard_AI
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

```bash
node app.js
```

For development with Nodemon:

```bash
nodemon app.js
```

### 5. Open in browser

```text
http://localhost:8080
```
---

## 📌 Project Status

### Prototype

The current version demonstrates the basic workflow and administrative incident-management concept.

### Final Vision

The complete system will integrate:

```text
Real-Time Monitoring
        +
AI/ML Prediction
        +
Automated Incident Management
        +
WebSocket
        +
Redis
        +
Backup & Recovery
        +
Secure / Tamper-Evident Storage
```

---

## 👥 Team

**Team Name:** Code Cuddle

**Hackathon:** Idea & Innovation Hackathon 2026

**Project:** Exam Guard AI

**Problem Statement:** Resilient and Trustworthy Online Assessment System

---

## 📄 License

This project is developed as a hackathon prototype and educational project.
