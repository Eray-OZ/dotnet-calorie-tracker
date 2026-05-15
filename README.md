# VitalTrack

A simple calorie tracker powered by AI. Just describe your meal and get instant nutritional insights.

## Tech Stack

- **Backend:** .NET 9 Web API
- **AI:** Google Gemini AI
- **Database:** PostgreSQL (Neon.tech)
- **Containerization:** Docker
- **Frontend:** React
- **Deployment:** Render (Backend), Vercel (Frontend)

## Quick Start

### Backend
1. Set `ConnectionStrings__DefaultConnection` and `GOOGLE_API_KEY`.
2. Run `dotnet run` in `CalorieTracker.Api`.

### Frontend
1. Set `VITE_API_URL`.
2. Run `npm install` and `npm run dev` in `calorietracker-web`.
