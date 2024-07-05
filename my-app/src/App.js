// U5223-1368

import React from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
    const skills = [
        { id: 1, name: 'React', level: 'Beginner' },
        { id: 2, name: 'Python', level: 'Beginner' },
        { id: 3, name: 'Docker', level: 'Beginner' },
        { id: 4, name: 'JavaScript', level: 'Intermediate' },
        { id: 5, name: 'CSS', level: 'Advanced' },
        { id: 6, name: 'HTML', level: 'Expert' }
    ];

    const experiences = [
      { id: 1, title: 'Tech Team Member', company: 'Target', duration: 'May 2021 – December 2023' },
      { id: 2, title: 'Student Web Developer', company: 'USF Business Application Development', duration: 'Jun 2024 – Present' }
    ];

  return (
      <div className="App">
          <PersonalInfo />
          <Skills skills={skills} />
      </div>
  );
}

export default App;