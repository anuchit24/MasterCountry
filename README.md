<p align="center">
  <a href="http://nestjs.com/" target="_blank">
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

โปรเจกต์นี้เป็น Backend API สำหรับแบบทดสอบตำแหน่ง **Backend Developer**  
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

โครงสร้างโปรเจกต์ถูกออกแบบแบบ **Module-based**  
เพื่อให้ง่ายต่อการดูแลและขยายระบบในอนาคต

```text
src/
├─ auth/                     # Authentication & Authorization
│  ├─ dto/
│  │  └─ login.dto.ts        # DTO สำหรับรับข้อมูล login
│  ├─ auth.controller.ts     # /auth/login
│  ├─ auth.service.ts        # ตรวจสอบผู้ใช้และสร้าง JWT
│  ├─ auth.module.ts
│  └─ jwt.strategy.ts        # JWT Strategy (Passport)
│
├─ user/                     # User Management
│  ├─ dto/
│  │  └─ register-user.dto.ts
│  ├─ user.controller.ts     # /users
│  ├─ user.service.ts
│  ├─ user.model.ts          # Typegoose schema
│  └─ user.module.ts
│
├─ country/                  # Master Country
│  ├─ dto/
│  │  └─ create-country.dto.ts
│  ├─ country.controller.ts  # /countries
│  ├─ country.service.ts
│  ├─ country.model.ts
│  └─ country.module.ts
│
├─ types/
│  └─ jwt-payload.type.ts    # โครงสร้างข้อมูลใน JWT
│
├─ app.module.ts
├─ main.ts
│
.env
.gitignore
package.json
tsconfig.json
README.md

📦 Installation
1️⃣ Clone Repository
git clone <your-repository-url>
cd backend-test-api

2️⃣ Install Dependencies

ติดตั้ง dependencies ทั้งหมด

npm install

📦 Package ที่ใช้งานหลัก
Core
npm install @nestjs/core @nestjs/common @nestjs/platform-express

Database
npm install mongoose @nestjs/mongoose @typegoose/typegoose

Authentication
npm install @nestjs/jwt @nestjs/passport passport passport-jwt

Security
npm install bcrypt

Config
npm install @nestjs/config

Swagger
npm install @nestjs/swagger swagger-ui-express


หมายเหตุ: ปกติใช้แค่ npm install ครั้งเดียวก็พอ
รายการด้านบนเป็นเพียงสรุปเทคโนโลยีที่ใช้

3️⃣Run Application
npm run start:dev