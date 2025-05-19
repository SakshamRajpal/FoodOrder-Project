![Screenshot 2024-10-14 183646](https://github.com/user-attachments/assets/37ac4906-f161-4ab2-892d-7104715cbd5a)
![Screenshot 2024-10-14 183759](https://github.com/user-attachments/assets/582369d9-2fc2-45dd-87de-6433c5ab9fad)
![Screenshot 2024-10-14 183819](https://github.com/user-attachments/assets/0a8825be-2b79-47a6-9b1e-228108bf3a94)
![Screenshot 2024-10-14 184340](https://github.com/user-attachments/assets/894c8237-aecd-4a53-8ec6-7b3747bc613a)
![Screenshot 2024-10-14 184111](https://github.com/user-attachments/assets/3e93ab5b-6a24-4fe8-ae09-ce160b612a81)

# 🍔 QuickBite - Online Food Ordering Platform

**QuickBite** is a full-stack web development project—a dynamic food ordering website that enables users to explore a variety of cuisines, place orders from the comfort of their homes, and make secure online payments with ease.

---

## ⚙️ Technologies Used:

- **Backend:** Node.js  
- **Frontend:** HTML, CSS, Bootstrap, React.js  
- **Database:** MongoDB  
- **API Testing:** Postman  

---

## 📑 Key Features:

### 🛒 Streamlined Ordering (ExpressJS)
- Cart management system built using ExpressJS.
- Allows item addition, removal, and real-time quantity updates.

### 🌐 Media Handling with Cloudinary
- Efficient image storage and retrieval for menu items using Cloudinary APIs.

### 🔐 User Authentication
- Secure login/logout system integrated with **Mailtrap** for testing authentication flows.

### 💰 Payment Integration
- Stripe integration for seamless and secure payment processing.

### 📲 Responsive Design
- Optimized layout for mobile and desktop using Bootstrap and `Redux`.

---

## 📘 What I Learned:

- ✔️ **Bootstrap** significantly improves responsiveness and aesthetics with minimal effort.
- ✔️ **MongoDB** uses JSON format and supports encrypted storage of sensitive user data via JWT (JSON Web Tokens).
- ✔️ Understanding React hooks like `useState`, `useEffect`, and `useSelector` is essential for modern frontend development.
- ✔️ Prefer using `BrowserRouter`, `Route`, and `Link` from **React Router DOM** over standard anchor tags for client-side routing.
- ✔️ Regular testing saves significant debugging time during later stages of development.
- ✔️ Organizing code by splitting tasks into multiple files boosts maintainability and clarity.
- ✔️ Tools like **Mailtrap** and **Stripe** are beginner-friendly and highly useful for practical web development.

---

## 🔗 Project Repository:

📁 **GitHub:** [https://lnkd.in/gMKuu8Um](https://lnkd.in/gMKuu8Um)  
🚧 *Deployment is in progress. The live version will be shared soon!*

---

## 🤸 Quick Start:

Follow these steps to get the project running locally.

### 🔧 Prerequisites

Ensure you have the following installed or login:
- Git
- Firebase
- Node.js
- npm (Node Package Manager)

### 📦 Clone the Repository
```bash
git clone https://github.com/SakshamRajpal/FoodOrder-Project.git
cd FoodOrder-Project
```


### 📥 Install Dependencies
```bash
npm install
```

### 🔐 Set Up Environment Variables
- Create a .env.local file in the root directory:
```bash
PORT = 4000
NODE_ENV = DEVELOPMENT

DB_LOCAL_URI = mongodb://127.0.0.1:27017/Internship

JWT_SECRET=
JWT_EXPIRES_TIME=90

#CLOUDINARY
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

#MAIL-TRAP
EMAIL_USERNAME=
EMAIL_PASSWORD=
EMAIL_HOST=sandbox.smtp.mailtrap.io
EMAIL_PORT=2525

FRONTEND_URL="http://localhost:3000"

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_API_KEY=


```
Replace the placeholders with your actual credentials.

###  ▶️ Run the Development Server
```bash
npm run start
```
Visit http://localhost:3000 in your browser.

---

## 🤝 Contributing:

- Found a bug or want to contribute?
- Feel free to fork the repo, make changes, and open a pull request.
- ⭐ If you like this project, consider giving it a star!
