import React, { useState } from 'react';
import './Grade.css';

const courses = [
  {
    title: 'Electrician Training',
    videoUrl: 'https://www.youtube.com/embed/pKa7CWmtHuc'
  },
  {
    title: 'Plumbing Training',
    videoUrl: 'https://www.youtube.com/embed/U-TLlwzvk28'
  },
  {
    title: 'Automotive Training',
    videoUrl: 'https://www.youtube.com/embed/zA_19bHxEYg'
  },
  {
    title: 'Plumbing Basics',
    videoUrl: 'https://www.youtube.com/embed/SCmtGb5SFfU'
  },
  {
    title: 'Painting Course',
    videoUrl: 'https://www.youtube.com/embed/GhKO0u92ef4'
  },
  {
    title: 'Carpentry Training',
    videoUrl: 'https://www.youtube.com/embed/lRgDCwb8cvI'
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
