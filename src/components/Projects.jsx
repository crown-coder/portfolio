import Blog from "../Assets/blog.png";
import Affiliate from "../Assets/affiliate.png";
import Ngo from "../Assets/ngo.png";
import Nike from "../Assets/nike1.png";

const Projects = () => {
  const projectList = [
    {
      title: "Flex Blog",
      description:
        "A web application that helps users read and write blog, users can generate images for their blog using Del-E API to help them bring out their vision. the project is not yet completed.",
      imageUrl: Blog,
      technologies: ["React.js", "JavaScript", "CSS"],
      liveDemoLink: "https://yourproject1demo.com",
      sourceCodeLink: "https://github.com/crown-coder/FlexBlog",
    },
    {
      title: "Arewa Digital Marketing",
      description:
        "An e-learning website with a user-friendly interface. build for an affiliate marketer to showcase his courses",
      imageUrl: Affiliate,
      technologies: ["HTML", "CSS", "JavaScript", "Php", "MySQl"],
      liveDemoLink: "https://adm-courses.com.ng/",
      sourceCodeLink: "https://github.com/yourusername/project-two",
    },
    {
      title: "Nike Website",
      description:
        "Develop a nike shoe website for learning purpose where user can buy shoes.",
      imageUrl: Nike,
      technologies: ["React.js", "Vite", "Tailwind css"],
      liveDemoLink: "https://yourproject2demo.com",
      sourceCodeLink: "https://github.com/crown-coder/Nike-web/tree/master",
    },
    {
      title: "SAPCEDI Website",
      description:
        "A website for NGO named Save The Less Priviledged Children And Environment Development initiative",
      imageUrl: Ngo,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveDemoLink: "https://crown-coder.github.io/sapcedi/source/",
      sourceCodeLink: "https://github.com/crown-coder/sapcedi",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="project__wrapper">
        <h2>Projects</h2>
        <div className="project-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.imageUrl} alt={`${project.title} Thumbnail`} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <div className="project-links">
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
