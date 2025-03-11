import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Offer.scss';

const Offer = () => {
  const offer = [
    {
      title: 'Strony WordPress',
      description: 'Nowoczesne i responsywne strony internetowe na WordPress, dostosowane do Twoich potrzeb i łatwe w zarządzaniu. Optymalizacja pod kątem SEO oraz dostępności, a także pełne wsparcie techniczne.',
      technologies: [],
      image: '/images/wordpress.svg'
    },
    {
      title: 'Strony Wizytówki',
      description: 'Estetyczne i nowoczesne strony wizytówki, które skutecznie prezentują Twoją działalność w internecie. Strona będzie responsywna, szybka i zoptymalizowana pod SEO i dostępności, zapewniając profesjonalny wizerunek. Oferuję również wsparcie techniczne i możliwość późniejszej rozbudowy.',
      technologies: [],
      image: '/images/web-design.svg'
    },
    {
      title       : 'Marka w Excelu',
      description : 'Zaawansowane makra w Excelu przy użyciu VBA, które automatyzują powtarzalne zadania i usprawniają pracę. Tworzę spersonalizowane rozwiązania dopasowane do Twoich potrzeb, poprawiające efektywność i oszczędzające czas. O wszelkich zmianach w Twoich plikach, np. kończącym się czasie na wykonanie zadania, możesz być automatycznie informowany mailem.',
      technologies: [],
      image       : '/images/file-excel-full.svg'
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