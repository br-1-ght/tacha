import React, { useEffect, useRef, useState } from "react";

export default function Skills() {
  const skillsData = [
    { id: 1, image: './assets/images/tacha5.jpg', title: "MY WORKS" },
    { id: 2, image: './assets/images/tacha6.jpg', title: "MY WORKS" },
    { id: 3, image: './assets/images/tacha7.jpg', title: "MY WORKS" },
    { id: 4, image: './assets/images/tacha8.jpg', title: "MY WORKS" },
    { id: 5, image: './assets/images/tacha9.jpg', title: "MY WORKS" },
    { id: 6, image: './assets/images/tacha10.jpg', title: "MY WORKS" },
  ];

  const imageRefs = useRef([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const currentRefs = imageRefs.current;
  
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
    <section className="skills-section">
      <h2 className="section-title">SKILLS</h2>
      <div className="skills-header">
      Artistic Vision, Editing, Lighting, Exposure Settings
      </div>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={skill.id} className="skill-card">
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              data-index={index}
              src={skill.image}
              alt={skill.title}
              className={`skill-image ${visibleIndexes.includes(index) ? "visible" : ""}`}
            />
            <div className="skill-title">{skill.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
