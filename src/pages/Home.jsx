import React, { useEffect, useRef, useState } from "react";

export default function Hero() {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi,</h1>
          <h1>I am Akinsola Abisola Tobiloba</h1>
          <p>
          Hi, I’m Akinsola Abisola Tobiloba — a passionate photographer who sees beauty in the everyday and stories in every frame. 
          Photography, for me, is more than just taking pictures; it’s about capturing emotions, preserving memories, and creating visuals that 
          speak louder than words. Whether I’m behind the camera at a quiet portrait session or an energetic event, I aim to make people feel seen, 
          confident, and connected through my work.
            With a deep love for natural light, creative composition, and honest moments, I bring both technical skill and a personal touch
             to every shoot. I take pride in being reliable, easy to work with, and always open to learning new things. Every client I work with 
             is unique, and I treat each project as a new opportunity to create something meaningful.💫
          </p>

        </div>

        <div className="hero-image">
          <img
            ref={imageRef}
            src="./assets/images/tachahome.jpg"
            alt="Profile"
            className={`fade-image ${isVisible ? "visible" : ""}`}
          />
        </div>
      </div>
    </section>
  );
}
