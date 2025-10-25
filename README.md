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

`REACT_APP_TMDB_KEY`
`REACT_APP_OPENAI_KEY`
`REACT_APP_FIREBASE_API_KEY`
`REACT_APP_FIREBASE_AUTH_DOMAIN`
`REACT_APP_FIREBASE_PROJECT_ID`
`REACT_APP_FIREBASE_STORAGE_BUCKET`
`REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
`REACT_APP_FIREBASE_APP_ID`
`REACT_APP_FIREBASE_MEASUREMENT_ID`