import React from 'react';

const Skills = ({ skills }) => (
    <section>
        <h2>Skills</h2>
        <ul>
            {skills.map(skill => (
                <li key={skill.id}>{skill.name} – {skill.level}</li>
            ))}
        </ul>
    </section>
);

export default Skills;
