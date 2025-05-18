# Nirogya
<a href="https://disease-prediction-sigma.vercel.app/">Test It Out</a>
<div align="center">
  
**Personal Disease Prediction Application Powered by AI**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-v15.2.4-black)](https://nextjs.org/)
[![Flask](https://img.shields.io/badge/Flask-v2.0.0-green)](https://flask.palletsprojects.com/)
[![Python](https://img.shields.io/badge/Python-v3.11-blue)](https://www.python.org/)

</div>

## Overview

Nirogya is an intelligent disease prediction system that leverages machine learning to analyze user-reported symptoms and provide potential disease diagnoses. Unlike traditional symptom checkers, Nirogya uses advanced AI models trained on comprehensive medical datasets to deliver more accurate predictions and personalized health insights.

## The Problem We Solve

Healthcare access remains a challenge for many people worldwide:
- Limited access to medical professionals in remote areas
- Long waiting times for appointments
- High costs of medical consultations
- Difficulty in interpreting symptoms without medical knowledge

Nirogya bridges this gap by providing an accessible first assessment tool that helps users understand their symptoms and potential conditions.

## Key Features

### Symptom-Based Disease Prediction
- Input multiple symptoms through an intuitive interface
- Receive AI-powered disease predictions ranked by probability
- View detailed information about predicted conditions

### Comprehensive Symptom Library
- Access a database of over 17 distinct symptoms
- Detailed descriptions of each symptom to ensure accurate reporting
- Continuously expanding symptom database

### Personalized Health Insights
- Receive recommendations based on prediction results
- Track symptom history over time
- Export results to share with healthcare providers

### User-Friendly Experience
- Clean, accessible interface
- Step-by-step symptom reporting
- Simple language that avoids complex medical terminology

## Technology Stack

### Backend
- **Python** - Core ML model development and API logic
- **Flask** - Lightweight web framework for API endpoints
- **Scikit-learn/TensorFlow** - Machine learning model training and inference
- **Pandas** - Data processing and analysis

### Frontend
- **Next.js** - React framework for server-side rendering
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Responsive, modern styling
- **Axios** - API communication

### Machine Learning
- **Supervised Learning Models** - Classification algorithms for disease prediction
- **Data Preprocessing** - Feature engineering and normalization
- **Model Validation** - Cross-validation and performance metrics

## Getting Started

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/nirogya](https://github.com/SarthakShrivastav-a/Disease-Prediction)
   cd Disease-Prediction
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

4. Start the development environment:
   ```bash
   # Terminal 1 - Backend
   cd backend
   python app.py

   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## How It Works

### Data Collection and Preprocessing
Nirogya's models are trained on comprehensive datasets mapping symptoms to diseases, with careful preprocessing to ensure data quality and relevance.

### Model Training
The application employs supervised learning techniques to create classification models that can predict diseases based on symptom input patterns.

### Prediction Process
1. User inputs their symptoms through the interface
2. The backend processes these symptoms and passes them to the trained model
3. The model returns probability scores for potential diseases
4. Results are presented to the user with relevant information

### SnapShots
![image](https://github.com/user-attachments/assets/b144b523-5b60-4fca-9ca5-3b389f13c6c3)

![image](https://github.com/user-attachments/assets/2f160025-f8db-4614-a98e-fb9f1dbcad35)


### Continuous Improvement
The system continuously improves through:
- Regular model retraining with new data
- Performance monitoring and refinement
- User feedback integration

## Future Directions

- **Expanded Symptom Database**: Add more symptoms for greater coverage
- **Multi-lingual Support**: Make the application accessible in multiple languages
- **Telemedicine Integration**: Connect users with healthcare providers
- **Wearable Device Integration**: Incorporate data from health monitors
- **Mobile Application**: Develop native mobile apps for wider accessibility

## Important Disclaimer

Nirogya is designed as a preliminary assessment tool only and should not replace professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider for medical concerns.

<div align="center">
  <p>Built with care by Sarthak!</p>
  <p>
    <a href="mailto:sarthakshrivastavacontact@gmail.com">Contact Us</a> •
    <a href="https://disease-prediction-sigma.vercel.app/">Live Demo</a> •
  </p>
</div>
