import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Offer.scss';

const Offer = () => {
  const offer = [
    {
      title: 'Strony WordPress',
      description: 'Aplikacja sklepu internetowego z wykorzystaniem React i Redux. Zawiera koszyk, system płatności i panel administracyjny.',
      technologies: [],
      image: 'https://via.placeholder.com/600x400?text=E-commerce+App'
    },
    {
      title: 'Strony Wizytówki',
      description: 'Aplikacja do zarządzania zadaniami z funkcją drag & drop, filtrowaniem i kategoryzacją zadań.',
      technologies: [],
      image: 'https://via.placeholder.com/600x400?text=Task+Manager'
    },
    {
      title: 'Marka w Excelu',
      description: 'Aplikacja pogodowa z wykorzystaniem API OpenWeather, pokazująca prognozy i statystyki pogodowe.',
      technologies: [],
      image: 'https://via.placeholder.com/600x400?text=Weather+App'
    }
  ];

  return (
    <section id="offer" className="offer">
      <div className="offer__content">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Moja Oferta
        </motion.h2>

        <div className="offer__grid">
          {offer.map((offer, index) => (
            <motion.div
              key={index}
              className="offer__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="offer__image">
                <img src={offer.image} alt={offer.title} />
              </div>
              <div className="offer__info">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <div className="offer__technologies">
                  {offer.technologies.map((tech, i) => (
                    <span key={i} className="offer__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <div className="offer__links">
                  <a href={offer.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Kod
                  </a>
                  <a href={offer.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer; 