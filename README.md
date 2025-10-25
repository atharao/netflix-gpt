# Netflix GPT

A Netflix clone application with GPT-powered movie recommendations.

## Features

- Login/Sign Up Authentication
- Browse movies by category (Now Playing, Popular, Top Rated, Upcoming)
- Play movie trailers
- GPT Search for movie recommendations
- Multi-language support

## Technologies Used

- React
- Redux Toolkit for state management
- Firebase for authentication
- Tailwind CSS for styling
- TMDB API for movie data
- OpenAI GPT API for movie recommendations

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/netflix-gpt.git
   cd netflix-gpt
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory based on `.env.example` and add your API keys and Firebase configuration.

4. Start the development server:
   ```bash
   npm start
   ```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

// TMDB Key
REACT_APP_TMDB_KEY="YOUR_TMDB_API_KEY_HERE"

// Firebase Keys
REACT_APP_API_KEY="YOUR_FIREBASE_API_KEY_HERE"
REACT_APP_AUTH_DOMAIN="your-app.firebaseapp.com"
REACT_APP_PROJECT_ID="your-app"
REACT_APP_STORAGE_BUCKET="your-app.appspot.com"
REACT_APP_MESSAGING_SENDER_ID="YOUR_SENDER_ID"
REACT_APP_APP_ID="YOUR_APP_ID"
REACT_APP_MEASUREMENT_ID="YOUR_MEASUREMENT_ID"

// Gemini Key
REACT_APP_GEMINI_KEY="YOUR_GEMINI_API_KEY_HERE"

I have hosted this application on firebase using `firebase deploy --only hosting:atharao-netflix-gpt`. If someone is having problems with the API, try using a VPN.