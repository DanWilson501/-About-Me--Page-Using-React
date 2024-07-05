import React from 'react';

const Experience = ({ experiences }) => (
    <section>
        <h2>Experience</h2>
        {experiences.map(exp => (
            <div key={exp.id}>
                <h3>{exp.title} at {exp.company}</h3>
                <p>{exp.duration}</p>
            </div>
        ))}
    </section>
);

export default Experience;
