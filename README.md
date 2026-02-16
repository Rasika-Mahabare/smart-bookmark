# Smart Bookmark Manager

## Live Demo

[https://smart-bookmark-xi-three.vercel.app]

##  GitHub Repository

[https://github.com/Rasika-Mahabare/smart-bookmark]

---

## About The Project

Smart Bookmark Manager is a full‑stack web application that allows users to securely save, manage, and access personal bookmarks from anywhere.

Users authenticate using Google OAuth, and their bookmarks are stored in a cloud database. Each user can only see and manage their own bookmarks using secure Row Level Security (RLS).

This project demonstrates authentication, database integration, CRUD operations, protected routes, and production deployment.

---

## 🚀 Features

* Google Authentication (Supabase Auth)
* Add bookmarks (Title + URL)
* Delete bookmarks
* Persistent cloud storage
* User‑specific private data
* Realtime updates
* Clean responsive UI using Tailwind CSS
* Deployed on Vercel

---

##  Tech Stack

### Frontend

* Next.js 16 (App Router)
* React
* Tailwind CSS

### Backend / Database

* Supabase (PostgreSQL)
* Supabase Authentication (Google OAuth)
* Supabase Realtime
* Row Level Security (RLS)

### Deployment

* Vercel

---

## Screenshots

public/Snapshots/bookmark.png
public/Snapshots/dashboard.png
public/Snapshots/login.png

---

## Environment Variables

Create a `.env.local` file in the root directory and add:

```
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

---

## Run Locally

Clone the repository:
git clone https://github.com/Rasika-Mahabare/smart-bookmark.git

Navigate into project folder:
cd smart-bookmark

Install dependencies:
npm install

Run development server:
npm run dev

Open in browser:
http://localhost:3000
---

## Database Schema

Table: `bookmarks`

| Column     | Type      | Description           |
| ---------- | --------- | --------------------- |
| id         | uuid      | Primary Key           |
| title      | text      | Bookmark title        |
| url        | text      | Website link          |
| user_id    | uuid      | Authenticated user ID |
| created_at | timestamp | Auto generated        |

---

## Security

* Google OAuth authentication
* Supabase Row Level Security (RLS)
* Users can only access their own bookmarks
* Secure environment variables

---

##  What I Learned

* Implementing OAuth authentication flow
* Managing protected routes in Next.js
* Using Supabase with Row Level Security
* Handling CRUD operations securely
* Deploying full‑stack apps to production
* Environment variable management in Vercel

---

## Author

**Rasika Mahabare**
GitHub: [https://github.com/Rasika-Mahabare]
LinkedIn: [https://linkedin.com/in/rasika-mahabare]

---
## License

This project was developed for learning and assignment purposes.
