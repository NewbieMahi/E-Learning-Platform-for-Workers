import React, { useState } from 'react';
import './Grade.css';

const courses = [
  {
    title: 'Electrician Training',
    videoUrl: 'https://www.youtube.com/embed/pKa7CWmtHuc'
  },
  {
    title: 'React Hooks',
    videoUrl: 'https://www.youtube.com/embed/dpw9EHDh2bM'
  },
  {
    title: 'React Router',
    videoUrl: 'https://www.youtube.com/embed/91F8reC8kvo'
  },
  {
    title: 'Redux Basics',
    videoUrl: 'https://www.youtube.com/embed/93p3LxR9xfM'
  },
  {
    title: 'React Native Crash Course',
    videoUrl: 'https://www.youtube.com/embed/QYw1qjC5EHo'
  },
  {
    title: 'Advanced React Patterns',
    videoUrl: 'https://www.youtube.com/embed/4L4fWfDuCfs'
  }
];

const Grades = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="Search Courses" value={searchTerm} onChange={handleSearch} />
      <div className="course-list">
        {courses.filter(course => course.title.toLowerCase().includes(searchTerm.toLowerCase())).map(course => (
          <div className="course-item" key={course.title}>
            <h2>{course.title}</h2>
            <div>
              <iframe
                title={course.title}
                width="100%"
                height="auto"
                src={course.videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grades;
