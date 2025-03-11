import { motion } from 'framer-motion';
import { FaReact, FaJs, FaSass } from 'react-icons/fa';
import './About.scss';

const About = () => {
  const technologies = [
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaSass />, name: 'Sass' },
  ];

  return (
    <section id="about" className="about">
      <div className="about__content">
        <motion.div 
          className="about__text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>O mnie</h2>
          <p>
            Jestem Damian Pawela, Frontend Developer z pasją do tworzenia 
            nowoczesnych i intuicyjnych interfejsów użytkownika.
          </p>
        </motion.div>

        <motion.div 
          className="about__skills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3>Technologie</h3>
          <div className="about__technologies">
            {technologies.map((tech, index) => (
              <div key={index} className="about__tech-item">
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 