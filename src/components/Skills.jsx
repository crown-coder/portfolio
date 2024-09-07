const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind css",
        "Bootstrap",
      ],
    },
    {
      category: "Backend Development",
      skills: ["Php", "MySQL"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Figma"],
    },
    {
      category: "Others",
      skills: ["UI/UX Design", "SEO", "Responsive Design"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skills-category">
            <h3>{skillCategory.category}</h3>
            <ul>
              {skillCategory.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
