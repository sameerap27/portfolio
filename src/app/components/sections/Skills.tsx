interface SkillCategory {
  title: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend',
    skills: ['Python', 'Java', 'C', 'Node.js', 'SQL', 'MySQL', 'Spring Boot'],
  },
  {
    title: 'Frontend',
    skills: ['JavaScript', 'HTML5', 'CSS3', 'React', 'Tailwind CSS', 'Figma'],
  },
  {
    title: 'DevOp & Tools',
    skills: ['Git', 'CI/CD', 'REST APIs', 'Bootstrap', 'VS Code', 'Eclipse IDE', 'Android Studio', 'Godot', 'Postman'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <h1>Skills</h1>
      <div className="grid-container-skills">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title} className="skill-title">
            <h3>{category.title}</h3>
            <div className="skill-list">
              {category.skills.map((skill) => (
                <h6 key={skill}>{skill}</h6>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}