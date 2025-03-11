import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <motion.div 
          className="hero__image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src={`${process.env.PUBLIC_URL}/images/profile-image.png`}
            alt="Damian Pawela"
          />
        </motion.div>

        <motion.div 
          className="hero__text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Cześć, jestem Damian</h1>
          <p>Tworzę intuicyjne i nowoczesne strony internetowe</p>
          <motion.button 
            className="hero__cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="offer"
              smooth={true}
              duration={500}
            >
              Zobacz moją ofertę
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 