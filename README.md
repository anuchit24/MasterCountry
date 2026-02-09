<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<h1 align="center">Backend Test API</h1>

<p align="center">
  Backend API สำหรับแบบทดสอบตำแหน่ง <b>Backend Developer</b><br/>
  พัฒนาด้วย <b>NestJS</b>, <b>MongoDB Atlas</b> และ <b>JWT Authentication</b>
</p>

---

## 📌 Description

โปรเจกต์นี้เป็น Backend API สำหรับแบบทดสอบตำแหน่ง Backend Developer  
โดยออกแบบและพัฒนาตามโจทย์ที่กำหนด ดังนี้

- Master Country
- Register User (อ้างอิง Country)
- Login ด้วย JWT Authentication
- Fetch รายชื่อผู้ใช้ด้วย Bearer Token
- Swagger UI สำหรับทดสอบ API

---

## 🧰 Tech Stack

- **Node.js**
- **NestJS**
- **MongoDB Atlas**
- **Mongoose + Typegoose**
- **Passport + JWT**
- **Swagger (OpenAPI)**

---

## 📂 Features

- ✅ Create & Get Country (Master Data)
- ✅ Register User (reference Country)
- ✅ Login และออก JWT Token
- ✅ Fetch User List ด้วย Bearer Authentication
- ✅ Swagger UI (`/api`)

---

## 📁 Project Structure

โครงสร้างโปรเจกต์ถูกออกแบบโดยแยกตามความรับผิดชอบ (Module-based)  
เพื่อให้ง่ายต่อการดูแลและขยายระบบในอนาคต

src/
├─ auth/ # Authentication & Authorization
│ ├─ dto/
│ │ └─ login.dto.ts # DTO สำหรับรับข้อมูล login
│ ├─ auth.controller.ts # Controller สำหรับ /auth/login
│ ├─ auth.service.ts # ตรวจสอบผู้ใช้และสร้าง JWT Token
│ ├─ auth.module.ts # Auth module
│ └─ jwt.strategy.ts # JWT Strategy (Passport)
│
├─ user/ # User Management
│ ├─ dto/
│ │ └─ register-user.dto.ts # DTO สำหรับ register user
│ ├─ user.controller.ts # Controller สำหรับ /users
│ ├─ user.service.ts # Business logic ของ user
│ ├─ user.model.ts # User schema (Typegoose)
│ └─ user.module.ts # User module
│
├─ country/ # Master Country
│ ├─ dto/
│ │ └─ create-country.dto.ts # DTO สำหรับสร้าง country
│ ├─ country.controller.ts # Controller สำหรับ /countries
│ ├─ country.service.ts # Business logic ของ country
│ ├─ country.model.ts # Country schema (Typegoose)
│ └─ country.module.ts # Country module
│
├─ types/
│ └─ jwt-payload.type.ts # Interface โครงสร้างข้อมูลใน JWT
│
├─ app.module.ts # Main application module
├─ main.ts # Entry point ของแอปพลิเคชัน
│
.env # Environment variables
.gitignore # Git ignore file
package.json # Dependencies และ scripts
tsconfig.json # TypeScript configuration
README.md # Project documentation

### 🧠 แนวคิดในการจัดโครงสร้าง

- แยกเป็น module ตามหน้าที่ (auth / user / country)
- ใช้ DTO เพื่อควบคุมรูปแบบ request และใช้กับ Swagger
- ใช้ Typegoose เพื่อจัดการ MongoDB schema ด้วย TypeScript
- Route ที่ต้องป้องกัน ใช้ JWT Guard ผ่าน Passport

## 📦 Installation

### 1️⃣ Clone Repository

```bash
git clone <your-repository-url>
cd backend-test-api
2️⃣ Install Dependencies
ติดตั้ง package ที่จำเป็นทั้งหมดด้วยคำสั่ง

npm install
โปรเจกต์นี้ใช้ package หลักดังต่อไปนี้

Core Framework
npm install @nestjs/core @nestjs/common @nestjs/platform-express
Database (MongoDB + Typegoose)
npm install mongoose @nestjs/mongoose @typegoose/typegoose
Authentication (JWT + Passport)
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
Security
npm install bcrypt
Configuration
npm install @nestjs/config
API Documentation (Swagger)
npm install @nestjs/swagger swagger-ui-express
หมายเหตุ: package ส่วนใหญ่จะถูกติดตั้งอัตโนมัติผ่าน npm install จาก package.json

3️⃣ Environment Variables
สร้างไฟล์ .env ที่ root ของโปรเจกต์ และกำหนดค่าเช่น

MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<db-name>
JWT_SECRET=your_jwt_secret_key
4️⃣ Run Application
# development mode
npm run start:dev
เมื่อรันสำเร็จ ระบบจะเปิดที่

API: http://localhost:3000

Swagger UI: http://localhost:3000/api