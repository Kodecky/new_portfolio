import { motion } from 'framer-motion';
import { FaReact, FaJs, FaSass, FaPhp, FaWordpress, FaCode, FaGit, FaGithub, FaFigma, FaVuejs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { AiFillFileExcel } from "react-icons/ai";
import './About.scss';

const About = () => {
  const technologies = [
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaVuejs />, name: 'Vue' },
    { icon: <FaGit />, name: 'GIT' },
    { icon: <FaWordpress />, name: 'Wordpress' },
    { icon: <FaPhp />, name: 'PHP' },
    { icon: <FaSass />, name: 'Sass' },
    { icon: <SiTailwindcss />, name: 'TailwindCSS' },
    { icon: <FaGithub />, name: 'Github' },
    { icon: <FaFigma />, name: 'Figma' },
    { icon: <FaCode />, name: 'VBA' },
    { icon: <AiFillFileExcel />, name: 'Excel' },
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
            Jestem Damian lub inaczej Kodecky, frontend developer, który z pasją tworzy nowoczesne i funkcjonalne strony internetowe. Specjalizuję się w klasycznych witrynach oraz rozwiązaniach opartych na WordPress – łatwych do edycji i dostosowanych do indywidualnych potrzeb użytkowników. Dodatkowo zajmuję się tworzeniem makr w Excelu, które optymalizują i automatyzują codzienną pracę, oszczędzając czas i zwiększając efektywność. Każdy projekt traktuję jako nowe wyzwanie, łącząc estetykę, wydajność i wygodę użytkowania.
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