import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url("/images/hero-image.jpg")` }}
      >
        <div className="hero-overlay">
          <h1>Transforming Spaces with Style</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <div className="about-content">
          <h3>Who We Are</h3>
          <p>
            Cosa Nostra Design and Renovations is a dynamic, family-owned company specializing in
            renovating and modernizing apartments, condominiums, houses, and commercial spaces. Our
            focus is on acquiring, upgrading, and reselling properties, turning them into
            high-value assets with innovative design and top-quality craftsmanship.
          </p>
          <p>
            We enhance both aesthetics and functionality, using modern materials and sustainable
            technologies to meet contemporary standards. Plus, we offer custom interior design
            solutions, crafting bespoke decor tailored to your unique preferences.
          </p>

          <h3>Partnerships & Vision</h3>
          <p>
            We’re actively seeking strategic partnerships with investors, real estate agencies,
            and design studios to collaborate on innovative, high-value projects. We welcome
            investment to fund property acquisitions, renovations, and eco-friendly developments,
            ensuring profitable and sustainable outcomes.
          </p>
          <p>
            By working with real estate pros, we maximize property potential through expert
            renovation. We also partner with design studios to create unique interior solutions,
            aiming to build long-term relationships that drive growth and set new industry
            standards.
          </p>
        </div>
      </section>

      {/* Button Section */}
      <section className="buttons">
        <Link to="/contact" className="button-link contact-button">
          <div
            className="button-image contact-image"
            style={{ backgroundImage: `url("/images/contact-image.jpg")` }}
          >
            <span>Contact Us</span>
          </div>
        </Link>
        <Link to="/projects" className="button-link projects-button">
          <div
            className="button-image projects-image"
            style={{ backgroundImage: `url("/images/projects-image.jpg")` }}
          >
            <span>View Projects</span>
          </div>
        </Link>
      </section>

      {/* Bottom Section */}
      <section className="bottom">
        <img src="/images/logo.JPG" alt="Company Logo" className="bottom-logo" />
        <p>info@cosanostradesign.com</p>
      </section>
    </div>
  );
}

export default HomePage;