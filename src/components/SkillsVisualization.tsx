import React from 'react';

interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'languages';
}

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="skill-bar-container">
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">{skill.level}%</span>
      </div>
      <div className="skill-bar-bg">
        <div 
          className="skill-bar-fill" 
          style={{ 
            width: `${skill.level}%`,
            backgroundColor: getColorForCategory(skill.category)
          }} 
        />
      </div>
    </div>
  );
};

const getColorForCategory = (category: string): string => {
  switch (category) {
    case 'frontend':
      return 'var(--primary-color)';
    case 'backend':
      return 'var(--secondary-color)';
    case 'tools':
      return '#3498db';
    case 'languages':
      return '#9b59b6';
    default:
      return 'var(--tertiary-color)';
  }
};

const SkillsVisualization: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'React / React Native', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'SAP UI5', level: 95, category: 'frontend' },
    { name: 'HTML/CSS', level: 90, category: 'frontend' },
    { name: 'Ionic Angular', level: 75, category: 'frontend' },
    
    // Backend
    { name: 'Node.js / Express', level: 85, category: 'backend' },
    { name: 'Python', level: 80, category: 'backend' },
    { name: 'Java', level: 70, category: 'backend' },
    { name: 'ABAP', level: 60, category: 'backend' },
    
    // Tools
    { name: 'Git / GitHub', level: 90, category: 'tools' },
    { name: 'CI/CD', level: 80, category: 'tools' },
    { name: 'Cloud Foundry', level: 75, category: 'tools' },
    { name: 'SAP BTP', level: 85, category: 'tools' },
    
    // Languages/Concepts
    { name: 'Machine Learning', level: 70, category: 'languages' },
    { name: 'Neural Networks', level: 65, category: 'languages' },
    { name: 'Blockchain', level: 60, category: 'languages' },
  ];

  // Group skills by category
  const categories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
    languages: skills.filter(skill => skill.category === 'languages'),
  };

  return (
    <div className="skills-visualization">
      <div className="skills-categories">
        <div className="skills-category">
          <h3 className="category-title">Frontend</h3>
          {categories.frontend.map((skill, index) => (
            <SkillBar key={`frontend-${index}`} skill={skill} />
          ))}
        </div>
        
        <div className="skills-category">
          <h3 className="category-title">Backend</h3>
          {categories.backend.map((skill, index) => (
            <SkillBar key={`backend-${index}`} skill={skill} />
          ))}
        </div>
        
        <div className="skills-category">
          <h3 className="category-title">Tools & Platforms</h3>
          {categories.tools.map((skill, index) => (
            <SkillBar key={`tools-${index}`} skill={skill} />
          ))}
        </div>
        
        <div className="skills-category">
          <h3 className="category-title">Technologies & Concepts</h3>
          {categories.languages.map((skill, index) => (
            <SkillBar key={`languages-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsVisualization;