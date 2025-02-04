# 🚗 Car Parking System - Backend

This is the backend API for the **Car Parking System** in Addis Ababa. It provides parking session management, user authentication, payment processing (Telebirr), and SMS-based parking services.

## 🌟 Features
- User Authentication (JWT-based)
- Start & Manage Parking Sessions
- Telebirr Payment Integration
- SMS-based Parking (via ETO Telecom’s SMPP)
- Admin Panel API (Manage zones, payments, penalties)
- Traffic Police API (Verify parked cars)

## 🛠️ Tech Stack
- **Backend:** Node.js (Express.js)
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT
- **Payments:** Telebirr API
- **SMS Integration:** SMPP Server

## 🚀 Installation & Setup

### 1️⃣ Clone the repository:
```bash
git clone https://github.com/BekaB/car-parking-backend.git
cd car-parking-backend
```
### 2️⃣ Install dependencies:
```bash
npm install
```
### 3️⃣ Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
TELEBIRR_API_KEY=your_api_key
SMPP_SERVER=your_smpp_server_details

### 4️⃣ Run the backend server:
```bash
npm run dev
```
The server runs on http://localhost:5000

📄 API Documentation
(Coming soon - Will be available via Postman or Swagger)

🏗️ Deployment
Local: npm run dev
Production: Deployed on AWS EC2
👨‍💻 Contributing
Pull requests are welcome! Open an issue for bug reports or feature requests.


