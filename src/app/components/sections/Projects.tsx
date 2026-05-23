interface Project {
  title: string;
  image: string;
  description: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Project Title',
    image: '/image-placeholder.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Project Title',
    image: '/image-placeholder.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Project Title',
    image: '/image-placeholder.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const PROJECT_CATEGORIES = ['AI', 'Frontend', 'Fullstack', 'Games'];

export default function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="flex-container">
        {PROJECT_CATEGORIES.map((category) => (
          <h3 key={category} className="project-section">
            {category}
          </h3>
        ))}
      </div>

      <div className="grid-container">
        {PROJECTS.map((project, index) => (
          <div key={index} className="item">
            <img src={project.image} alt={project.title} />
            <div className="item-content">
              <h3 className="project-title">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}