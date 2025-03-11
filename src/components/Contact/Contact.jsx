import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // z EmailJS
        'YOUR_TEMPLATE_ID', // z EmailJS
        e.target,
        'YOUR_PUBLIC_KEY' // z EmailJS
      );

      if (result.text === 'OK') {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__content">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Kontakt</h2>
          <p>Masz pomysł na współpracę? Napisz do mnie!</p>
        </motion.div>

        <div className="contact__container">
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact__form-group">
              <label htmlFor="name">Imię</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="contact__form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="contact__form-group">
              <label htmlFor="message">Wiadomość</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button 
              type="submit" 
              className={`contact__submit ${loading ? 'loading' : ''}`}
              disabled={loading}
            >
              {loading ? 'Wysyłanie...' : 'Wyślij wiadomość'}
            </button>

            {status === 'success' && (
              <div className="contact__message success">
                Wiadomość została wysłana pomyślnie!
              </div>
            )}
            {status === 'error' && (
              <div className="contact__message error">
                Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.
              </div>
            )}
          </motion.form>

          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact__links">
              <a href="mailto:paweladamian@gmail.com" className="contact__link">
                <FaEnvelope />
                <span>paweladamian@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/damian-pawela-66868a139/" className="contact__link" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Kodecky" className="contact__link" target="_blank" rel="noopener noreferrer">
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 