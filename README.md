# Streamify - Fullstack Chat & Video Calling App

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7+-green.svg)](https://www.mongodb.com/)

## 📋 Description

Streamify is a comprehensive fullstack application that enables real-time messaging and video calling. Built with modern web technologies, it provides a seamless experience for 1-on-1 and group communications, featuring advanced functionalities like screen sharing, recording, and a variety of UI themes. The platform is designed for scalability and ease of deployment.

## ✨ Features

- **Real-time Messaging**: Instant messaging with typing indicators and emoji reactions
- **Video Calling**: High-quality 1-on-1 and group video calls with screen sharing and recording capabilities
- **Authentication**: Secure JWT-based authentication with protected routes
- **Theming**: 32 unique UI themes for personalized user experience
- **State Management**: Efficient global state handling using Zustand
- **Error Handling**: Comprehensive error management on both frontend and backend
- **Scalable Architecture**: Built with Stream API for robust performance
- **Deployment Ready**: Optimized for free and easy deployment

## 📸 Screenshots

![Demo App](/frontend/public/screenshot-for-readme.png)

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **TanStack Query** - Data fetching and caching
- **Zustand** - State management
- **Vite** - Build tool and development server

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **JWT** - Authentication
- **Stream API** - Real-time communication

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **MongoDB** (local or cloud instance)
- **npm** or **yarn** package manager

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/streamify-video-calls.git
   cd streamify-video-calls
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   cd ..
   ```

## 🔧 Environment Variables

Create `.env` files in both `backend` and `frontend` directories.

### Backend (`.env` in `/backend`)
```
PORT=5001
MONGO_URI=your_mongo_uri
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
JWT_SECRET_KEY=your_jwt_secret
NODE_ENV=development
```

### Frontend (`.env` in `/frontend`)
```
VITE_STREAM_API_KEY=your_stream_api_key
```

> **Note:** Replace the placeholder values with your actual API keys and database URI.

## ▶️ Running the Application

1. **Start the backend server:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the frontend development server:**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Access the application:**
   Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions or support, please open an issue on GitHub or contact the maintainers.

---

*Built with ❤️ using modern web technologies.*
