import { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { title: 'O mnie', to: 'about' },
    { title: 'Oferta', to: 'offer' },
    { title: 'Kontakt', to: 'contact' }
  ];

  return (
    <header className="header">
      <div className="header__content">
        <Link to="hero" className="header__logo">
          Kodecky
        </Link>

        <nav className={`header__nav ${isOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="header__link"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <button 
          className={`header__toggle ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 