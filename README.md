# Job Board Website

## Overview

Job Board Website is a web application that connects job seekers and employers. Users can search for jobs, view job details, register, log in, and apply for available positions.

## Features

* Home Page with featured jobs
* Job Listings Page
* Job Details Page
* Search Functionality
* User Registration
* User Login Authentication
* Candidate Dashboard
* Employer Dashboard
* Job Application Form
* MongoDB Database Integration
* Responsive User Interface

## Technologies Used

### Frontend

* React.js
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

## Installation

### Frontend

```bash
cd frontend
npm install
npm start
```

### Backend

```bash
cd backend
npm install
node server.js
```

## MongoDB Configuration

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
```

## Project Structure

```text
JobBoard
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   └── App.js
│
├── backend
│   ├── models
│   ├── server.js
│   └── .env
```

## Future Enhancements

* Resume Upload
* Email Notifications
* Admin Dashboard
* Advanced Job Filtering

## Author

Senorin Shafe
