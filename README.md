# Task Management System

## 📌 Short Description
A simple and efficient Task Management System where users can add, edit, delete, and reorder tasks. Tasks are categorized as **To-Do, In Progress, and Done**. Users can drag and drop tasks between categories, and all changes are instantly synced with the database.

## 🔗 Live Links
- **Live Demo:** https://module-49-1f59d.web.app/
- **Backend API:** https://job-task-server-ten-hazel.vercel.app/

## 📦 Dependencies
This project uses the following dependencies:

### **Frontend (React + Vite)**
- `react`
- `react-dom`
- `@hello-pangea/dnd` (For Drag & Drop functionality)
- `react-router-dom`
- `axios` (For API requests)
- `tailwindcss` (For styling)

### **Backend (Node.js + Express)**
- `express`
- `mongoose`
- `cors`
- `dotenv`
- `jsonwebtoken`

## 🚀 Installation Steps
Follow these steps to set up the project locally:

### **1️⃣ Clone the Repository**
```sh
 git clone https://github.com/sabila111/job-task-clientSide
 cd task-management
```

### **2️⃣ Install Dependencies**
#### **For Frontend:**
```sh
cd client
npm install
```

#### **For Backend:**
```sh
cd server
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file inside the `server` folder and add the following:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### **4️⃣ Run the Project**
#### **Start Backend Server:**
```sh
cd server
npm run dev
```
#### **Start Frontend:**
```sh
cd client
npm run dev
```

### **5️⃣ Open in Browser**
Visit `http://localhost:5173/` to see the application in action.

## 🛠 Technologies Used
- **Frontend:** React.js, Vite, Tailwind CSS, @hello-pangea/dnd
- **Backend:** Node.js, Express.js, MongoDB, JWT Authentication
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JSON Web Tokens (JWT)

---

🎯 **Now you’re ready to manage tasks efficiently!** 🚀 If you face any issues, feel free to open an issue in the repository.

👨‍💻 **Developed By:** Sharmin Sharker

