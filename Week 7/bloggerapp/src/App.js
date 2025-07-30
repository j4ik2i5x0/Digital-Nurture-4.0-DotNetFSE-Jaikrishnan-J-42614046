import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [showCourses, setShowCourses] = useState(true);
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Blogger Dashboard</h1>
      </header>
      
      <div className="controls">
        <p>Toggle component visibility:</p>
        <button onClick={() => setShowCourses(!showCourses)}>Courses</button>
        <button onClick={() => setShowBooks(!showBooks)}>Books</button>
        <button onClick={() => setShowBlogs(!showBlogs)}>Blogs</button>
      </div>

      <main className="main-content">
        {showCourses && <div className="card"><CourseDetails /></div>}
        {showBooks && <div className="card"><BookDetails /></div>}
        {showBlogs && <div className="card"><BlogDetails /></div>}
      </main>
    </div>
  );
}

export default App;