import React, { useState, useEffect, useRef } from "react";
import "./SkillBar.css";

function SkillBar({ skill }) {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null);

  // Animation when the skill bar comes into view
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

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="skill-bar" ref={skillRef}>
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>

      <div className="skill-progress-bg">
        <div
          className={`skill-progress-fill ${isVisible ? "animate" : ""}`}
          style={{
            width: `${isVisible ? skill.level : 0}%`,
            backgroundColor: skill.color || "#8b5cf6",
          }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;
