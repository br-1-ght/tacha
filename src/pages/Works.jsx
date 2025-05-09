import React, { useEffect, useRef, useState } from "react";

export default function Projects() {
  const projectData = [
    {
      id: 1,
      image: './assets/images/tacha.jpg',
      title: "WHAT I DO",
      highlight: ""
    },
    {
      id: 2,
      image: './assets/images/tacha2.jpg',
      title: "WHAT I DO",
      highlight: ""
    },
    {
      id: 3,
      image: './assets/images/tacha3.jpg',
      title: "WHAT I DO",
      highlight: ""
    },
  ];

  const imageRefs = useRef([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const currentRefs = imageRefs.current; // snapshot to avoid stale ref issue
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting && !visibleIndexes.includes(index)) {
            setVisibleIndexes((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.4 }
    );
  
    currentRefs.forEach((el) => el && observer.observe(el));
  
    return () => {
      currentRefs.forEach((el) => el && observer.unobserve(el));
    };
  }, [visibleIndexes]);  

  return (
    <section className="projects-section">
      <h2 className="section-title">What I Do</h2>
      <h3 className="projects-subtitle">
        A Collection On What I Do 
      </h3>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={project.id} className="project-card">
            {project.highlight && (
              <div className="project-highlight">{project.highlight}</div>
            )}
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              data-index={index}
              src={project.image}
              alt={project.title}
              className={`project-image ${visibleIndexes.includes(index) ? "visible" : ""}`}
            />
            <div className="project-title"><h4>{project.title}</h4></div>
          </div>
        ))}
      </div>
    </section>
  );
}
