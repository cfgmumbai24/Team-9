// src/components/CourseList.jsx
import React from 'react';
import './CourseList.css';

const courses = [
    { title: 'Law for Beginners', description: 'Learn the basics of law.' },
    { title: 'Delhi University', description: 'Deep dive into JavaScript.' },
    { title: 'Delhi University', description: 'Deep dive into JavaScript.' },
    { title: 'Delhi University', description: 'Deep dive into JavaScript.' },
    { title: 'Delhi University', description: 'Deep dive into JavaScript.' },
];

const CourseList = () => {
    return (
        <div className="course-list">
            <h2>Popular Courses</h2>
            <div className="courses">
                {courses.map((course, index) => (
                    <div className="course-card" key={index}>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseList;
