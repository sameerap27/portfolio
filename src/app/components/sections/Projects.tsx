'use client';

import { useState } from 'react';
import { PROJECTS, PROJECT_CATEGORIES } from '@/app/data/projects';

const PREVIEW_COUNT = 6;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expanded, setExpanded] = useState(false);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === activeCategory);

  const visibleProjects = expanded
    ? filteredProjects
    : filteredProjects.slice(0, PREVIEW_COUNT);

  const hasMore = filteredProjects.length > PREVIEW_COUNT;

  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="flex-container">
        {PROJECT_CATEGORIES.map((category) => (
          <h3
            key={category}
            className={`project-section ${activeCategory === category ? 'active-category' : ''} btn`}
            onClick={() => {
              setActiveCategory(category);
              setExpanded(false);
            }}
          >
            {category}
          </h3>
        ))}
      </div>

      <div className="grid-container">
        {visibleProjects.map((project, index) => (
          <div key={index} className="item">
            <img src={project.image} alt={project.title} />
            <div className="item-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="item-description">{project.description}</p>
              <div className="skill-list">
                {project.skills.map((skill) => (
                  <p className="skill-tag" style={{padding: '2px 5px', fontSize: '12px', borderRadius: '15px', backgroundColor:'#92AE89',}} key={skill}>{skill}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <button className="btn view-all-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show Less' : `View All (${filteredProjects.length})`}
        </button>
      )}
    </section>
  );
}