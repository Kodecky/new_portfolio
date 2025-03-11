import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.scss';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce App',
      description: 'Aplikacja sklepu internetowego z wykorzystaniem React i Redux. Zawiera koszyk, system płatności i panel administracyjny.',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
      github: 'https://github.com/username/ecommerce',
      live: 'https://ecommerce-demo.com',
      image: 'https://via.placeholder.com/600x400?text=E-commerce+App'
    },
    {
      title: 'Task Manager',
      description: 'Aplikacja do zarządzania zadaniami z funkcją drag & drop, filtrowaniem i kategoryzacją zadań.',
      technologies: ['React', 'TypeScript', 'Firebase'],
      github: 'https://github.com/username/task-manager',
      live: 'https://task-manager-demo.com',
      image: 'https://via.placeholder.com/600x400?text=Task+Manager'
    },
    {
      title: 'Weather App',
      description: 'Aplikacja pogodowa z wykorzystaniem API OpenWeather, pokazująca prognozy i statystyki pogodowe.',
      technologies: ['React', 'API REST', 'Chart.js'],
      github: 'https://github.com/username/weather-app',
      live: 'https://weather-app-demo.com',
      image: 'https://via.placeholder.com/600x400?text=Weather+App'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects__content">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Moje Projekty
        </motion.h2>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="projects__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="projects__image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="projects__info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="projects__technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="projects__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="projects__links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Kod
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 