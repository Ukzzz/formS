# StellarForms - Premium Job Application Platform

A modern, professional web application designed for seamless job seeker applications. Built with a robust MVC architecture and a premium, responsive UI.

## Features

- **Premium UI/UX**: Clean, modern interface with smooth transitions and professional typography (Inter).
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop experiences.
- **MVC Architecture**: Clean separation of concerns for better maintainability and scalability.
- **Drag & Drop Upload**: Interactive file upload area for resumes with real-time feedback.
- **Data Validation**: Comprehensive backend validation with Mongoose for reliable data storage.
- **Secure File Handling**: Auto-generated unique filenames and size/type filtering for uploads.

## Tech Stack

- **Backend**: Node.js, Express.js (MVC Pattern)
- **Frontend**: EJS, Express-EJS-Layouts, Vanilla CSS (Premium Design System)
- **Database**: MongoDB with Mongoose ODM
- **File Upload**: Multer
- **Environment**: Dotenv for secure configuration

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally or a remote URI)
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Application-Form-
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment:
   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=mongodb://localhost:27017/application_form
   PORT=3000
   ```

4. Create Uploads Directory:
   ```bash
   mkdir -p public/uploads
   ```

## Running the Application

1. Start development server (with nodemon):
   ```bash
   npm run dev
   ```

2. Access the application:
   Navigate to `http://localhost:3000` in your browser.

## Project Structure

```
.
├── app.js                   # Main entry point & middleware setup
├── config/                  # Configuration files
│   ├── db.js                # Database connection
│   └── multer.js            # File upload settings
├── controllers/             # Business logic
│   └── user.controller.js   # Application form logic
├── model/                   # Data schemas
│   └── user.js              # User/Application model
├── public/                  # Static assets
│   ├── css/                 # Premium design system (main.css)
│   └── uploads/             # Stores resumes
├── routes/                  # Route definitions
│   └── user.routes.js       # Application routes
├── views/                   # EJS Templates
│   ├── partials/            # Header, Footer, etc.
│   ├── index.ejs            # Home Page
│   ├── 404.ejs              # Not Found Page
│   └── layout.ejs           # Main Layout Wrapper
├── package.json             # NPM dependencies
└── README.md                # Project documentation
```

## API Endpoints

- `GET /` - Renders the premium application form.
- `POST /submit` - Securely processes form data and resume uploads.

## License

This project is licensed under the ISC License.

## Acknowledgments

- Modernized and optimized for excellence by Antigravity.
