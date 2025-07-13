<<<<<<< HEAD
# Career Guidance Web Application

A comprehensive career guidance platform that helps students find the perfect college and career path based on their interests, academic performance, and aptitude test results.

## 🚀 Features

- **Multi-Domain Support**: Engineering, Medical, Commerce, Arts, Law, and Science
- **Comprehensive College Database**: 12+ colleges across different domains
- **Domain-Specific Aptitude Tests**: Specialized tests for each academic field
- **Smart Filtering**: Filter colleges by domain, location, fees, and ranking
- **User Profiles**: Personalized profiles with academic information
- **Beautiful UI**: Modern design with smooth animations and transitions
- **Firebase Integration**: Real-time database and authentication

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Firebase (Authentication, Firestore, Hosting)
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (v16 or higher)
- npm or yarn
- Firebase account
- Git

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/career-guidance-app.git
cd career-guidance-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication (Email/Password)
4. Create Firestore Database
5. Enable Hosting
6. Get your Firebase config from Project Settings

### 4. Environment Variables

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Fill in your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 5. Firebase CLI Setup

```bash
npm install -g firebase-tools
firebase login
firebase init
```

Select:
- Firestore
- Hosting
- Use existing project (select your Firebase project)

### 6. Deploy Firestore Rules

```bash
firebase deploy --only firestore:rules
firebase deploy --only firestore:indexes
```

## 🚀 Development

### Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 🌐 Deployment

### Deploy to Firebase Hosting

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

Your app will be live at `https://your-project-id.web.app`

### Deploy Everything (Firestore + Hosting)

```bash
firebase deploy
```

## 📊 Seeding Data

To populate your Firestore database with sample colleges:

1. Uncomment the last line in `src/utils/seedData.ts`
2. Run the app once
3. Comment the line back to prevent duplicate data

## 🔐 Security Rules

The app includes comprehensive Firestore security rules:
- Users can only access their own data
- Colleges are publicly readable
- Only admins can modify college data
- Test results are private to each user

## 📱 Features Overview

### For Students:
- Register and create profiles
- Take domain-specific aptitude tests
- Browse and filter colleges
- View detailed college information
- Get personalized recommendations

### For Colleges:
- Register institutional profiles
- Manage college information
- View student applications

### For Admins:
- Manage all colleges
- View analytics
- Moderate content

## 🎨 Domains Supported

1. **Engineering**: IIT Delhi, IIT Bombay, MIT
2. **Medical**: AIIMS Delhi, Harvard Medical School, CMC Vellore
3. **Commerce**: SRCC, London School of Economics
4. **Management**: IIM Ahmedabad
5. **Arts**: Jawaharlal Nehru University
6. **Law**: National Law School of India
7. **Science**: Indian Institute of Science

## 🧪 Testing

Each domain has specialized aptitude tests:
- **Engineering**: Mathematics, Physics, Logical Reasoning
- **Medical**: Biology, Chemistry, Physics
- **Commerce**: Economics, Accounting, Business
- **Arts**: Literature, History, Geography
- **Law**: Legal Studies, Constitution, Reasoning
- **Science**: Chemistry, Biology, Physics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@careerguide.com or create an issue on GitHub.

## 🙏 Acknowledgments

- Firebase for backend services
- Tailwind CSS for styling
- Lucide React for icons
- Pexels for stock images
=======
# CareerGuide
>>>>>>> 362c5fe73fd211a84382e0dec1e4b8fc3fd9e54e
