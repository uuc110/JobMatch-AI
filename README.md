# **JobMatch AI - Comprehensive SaaS Platform for Job Aggregation and Resume Optimization**

## **Table of Contents**
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Objectives](#objectives)
- [Technologies Used](#technologies-used)
- [Project Architecture](#project-architecture)
- [Database Schema](#database-schema)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Security Measures](#security-measures)
- [Future Scope](#future-scope)
- [Contributors](#contributors)

## **Project Overview**
JobMatch AI is a SaaS platform designed to simplify the job search process for candidates by aggregating job postings from various sources and providing optimized resume suggestions. The platform intelligently matches resumes with job postings based on keywords and criteria, enhancing the chances of getting shortlisted.

## **Key Features**
- Aggregates job postings from multiple job boards and company websites.
- Optimizes and analyzes user resumes for keyword relevance.
- Matches candidates with the most suitable job opportunities.
- Provides easy-to-navigate user interfaces for job searching and application tracking.
- Supports secure and efficient user data handling.

## **Objectives**
1. **Job Aggregation**: Collect job listings from multiple sources in a single unified platform.
2. **Resume Optimization**: Suggest improvements for resumes to align with industry-specific keywords.
3. **Keyword Mapping**: Analyze and match resumes with job descriptions using keyword associations.
4. **User-Friendly Experience**: Create an intuitive interface for candidates to find, manage, and apply to jobs efficiently.

## **Technologies Used**
- **Frontend**: React.js, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Job Aggregation**: Integration with third-party job board APIs
- **Authentication**: JSON Web Tokens (JWT)
- **Data Storage**: Cloud-based services (AWS S3 / Firebase)
- **Version Control**: Git & GitHub

## **Project Architecture**
The project follows a modular architecture, segregating frontend, backend, and database functionalities:

- **Frontend**: Handles user interactions and job search interface.
- **Backend**: API layer to manage data flow, user authentication, and business logic.
- **Database**: NoSQL database (MongoDB) to store user, job, and resume data.
  
For more details, check the `docs/architecture.md` file.

## **Database Schema**
Here’s a quick overview of the primary collections in the database:

- **Users**: Stores user credentials and profile information.
- **Resumes**: Contains user-submitted resumes with content and metadata.
- **Companies**: List of companies offering jobs.
- **Job Boards**: External job boards integrated into the system.
- **Job Posts**: Job openings with descriptions and requirements.
- **Keyword Maps**: Links job posts and resumes using relevant keywords for better matching.

![Database Schema](path-to-your-image.png) 

## **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/uuc110/JobMatch-AI.git
   cd JobMatch-AI
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```plaintext
     PORT=5000
     DATABASE_URL=mongodb://localhost:27017/jobmatch
     JWT_SECRET=your-secret-key
     CLOUD_STORAGE_KEY=your-cloud-key
     ```

4. **Run the application**:
   ```bash
   npm start
   ```

## **Usage**
1. **Register**: Create an account using the registration form.
2. **Create Profile**: Upload or fill in your resume.
3. **Search Jobs**: Browse job listings aggregated from multiple sources.
4. **Match & Apply**: Get job recommendations based on resume analysis and apply.

## **API Endpoints**
### **Authentication**
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### **Jobs**
- `GET /api/jobs` - Fetch all job listings
- `GET /api/jobs/:id` - Get a specific job post by ID
- `POST /api/jobs` - Add a new job post (Admin only)

### **Resumes**
- `POST /api/resumes` - Upload a new resume
- `GET /api/resumes/:id` - Retrieve resume details

### **Users**
- `GET /api/users` - Get user information
- `PUT /api/users/:id` - Update user profile

## **Testing**
- Unit Testing using **Jest**
- API Testing using **Postman**
- Automated tests with **Cypress**

### **How to Run Tests**
   ```bash
   npm test
   ```

## **Security Measures**
- **Authentication**: Secure login with JWT tokens.
- **Encryption**: Passwords hashed using bcrypt.
- **Data Privacy**: Secure data storage and restricted access to sensitive information.
- **Regular Audits**: Codebase and dependencies audited for vulnerabilities.

## **Future Scope**
- Advanced AI-based matching algorithms.
- Integration with LinkedIn and other professional networks.
- Mobile application for Android and iOS.
- Enhancements in user profile analytics and job recommendations.
- Real-time notifications for job applications.

## **Contributors**
- [Sourabh Kushwah](https://github.com/uuc110) - Project Lead
- [Nikita Parmar](https://github.com/Nikitaparmar04) - Cloud Manager
- [Pranjal Solanki](https://github.com/Pranjal1713) - Backend Dev and AI Dev
- [Pushpendra yadav](https://github.com/XYZ) - Backend Dev and AI Dev
