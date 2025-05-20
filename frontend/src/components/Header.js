import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Header() {
  useEffect(() => {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.classList.add('header-hidden');
      } else {
        // Scrolling up
        header.classList.remove('header-hidden');
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/logo.JPG" alt="Company Logo" className="logo" />
        <h1 className="company-name">Cosa Nostra Design and Renovation</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact-info">Contact Info</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;