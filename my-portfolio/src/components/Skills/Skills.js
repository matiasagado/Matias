import React, { useState } from "react";
import "./Skills.css";
import SkillBar from "./SkillBar";

function Skills() {
  // State for active category
  const [activeCategory, setActiveCategory] = useState("frontend");

  // Skill data organized by categories
  const skillCategories = {
    frontend: {
      title: "Frontend",
      skills: [
        { name: "React", level: 90, color: "#61DAFB" },
        { name: "JavaScript", level: 85, color: "#F7DF1E" },
        { name: "HTML/CSS", level: 95, color: "#E34F26" },
        { name: "TypeScript", level: 80, color: "#3178C6" },
        { name: "Redux", level: 75, color: "#764ABC" },
      ],
    },
    backend: {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80, color: "#339933" },
        { name: "Express", level: 75, color: "#000000" },
        { name: "MongoDB", level: 70, color: "#47A248" },
        { name: "SQL", level: 65, color: "#4479A1" },
        { name: "GraphQL", level: 60, color: "#E10098" },
      ],
    },
    tools: {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 85, color: "#F05032" },
        { name: "Webpack", level: 70, color: "#8DD6F9" },
        { name: "Docker", level: 60, color: "#2496ED" },
        { name: "Jest", level: 75, color: "#C21325" },
        { name: "Figma", level: 65, color: "#F24E1E" },
      ],
    },
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-container">
        {/* Category tabs */}
        <div className="skill-categories">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              className={`category-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {skillCategories[category].title}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div className="skills-content">
          <div className="skills-list">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>

          {/* Skill description */}
          <div className="skills-description">
            <h3>My {skillCategories[activeCategory].title} Skills</h3>
            <p>
              {activeCategory === "frontend" &&
                "I specialize in building responsive, interactive user interfaces with modern JavaScript frameworks. I'm passionate about creating intuitive and performant web applications with clean, maintainable code."}
              {activeCategory === "backend" &&
                "I have experience developing robust server-side applications and APIs. I focus on creating scalable and secure backend systems that power modern web applications."}
              {activeCategory === "tools" &&
                "I'm proficient with various development tools and workflows that improve productivity and code quality. I value automation, testing, and continuous integration in my development process."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
