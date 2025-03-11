import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  const menuItems = [
    { title: 'O mnie', to: 'about' },
    { title: 'Oferta', to: 'offer' },
    { title: 'Kontakt', to: 'contact' }
  ];

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      url: 'https://github.com/Kodecky', 
      label: 'GitHub' 
    },
    { 
      icon: <FaLinkedin />, 
      url: 'https://www.linkedin.com/in/damian-pawela-66868a139/', 
      label: 'LinkedIn' 
    },
    { 
      icon: <FaEnvelope />, 
      url: 'mailto:paweladamian@gmail.com', 
      label: 'Email' 
    }
  ];

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__main">
          <div className="footer__info">
            <h3>Damian Pawela</h3>
            <p>Frontend Developer</p>
          </div>

          <nav className="footer__nav">
            <h4>Menu</h4>
            <ul>
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="footer__link"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__social">
            <h4>Social Media</h4>
            <div className="footer__social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Damian Pawela. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 