// U5223-1368

import React from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';

function App() {
    const skills = [
        { id: 1, name: 'React', level: 'Beginner' },
        { id: 2, name: 'Python', level: 'Beginner' },
        { id: 3, name: 'Docker', level: 'Beginner' },
        { id: 4, name: 'JavaScript', level: 'Intermediate' },
        { id: 5, name: 'CSS', level: 'Advanced' },
        { id: 6, name: 'HTML', level: 'Expert' }
    ];

  return (
      <div className="App">
          <PersonalInfo />
          <Skills skills={skills} />
      </div>
  );
}

export default App;