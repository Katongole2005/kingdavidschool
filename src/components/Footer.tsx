import { Link } from 'react-router-dom';
import { contact, logoUrl } from '../constants';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col footer__brand">
            <img
              src={logoUrl}
              alt="King David School Logo"
              className="footer__logo"
              width="150"
              height="150"
              loading="lazy"
            />
            <p className="footer__tagline">
              Nurturing curiosity, empowering young leaders, and building a foundation for lifelong learning.
            </p>
            <div className="footer__social">
              <a href="https://www.facebook.com/@king.david.school" className="social__link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f" aria-hidden="true" />
              </a>
              <a href="https://www.tiktok.com/@king.david.school" className="social__link" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <i className="fab fa-tiktok" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/@king.david.school" className="social__link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram" aria-hidden="true" />
              </a>
              <a href="https://twitter.com/@king.david.school" className="social__link" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us.html">About Us</Link></li>
              <li><Link to="/gallery.html">Gallery</Link></li>
              <li><Link to="/contact-us.html">Contact</Link></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Use</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">Contact Info</h3>
            <ul className="footer__list footer__list--contact">
              <li>
                <i className="fas fa-map-marker-alt" aria-hidden="true" />
                <span>{contact.address}</span>
              </li>
              <li>
                <i className="fas fa-phone-alt" aria-hidden="true" />
                <span>
                  <a href={`tel:${contact.phonePrimaryHref}`}>{contact.phonePrimary}</a>
                  <br />
                  <a href={`tel:${contact.phoneSecondaryHref}`}>{contact.phoneSecondary}</a>
                </span>
              </li>
              <li>
                <i className="fas fa-envelope" aria-hidden="true" />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">Post-Office Box</h3>
            <p className="footer__newsletter-text">P.O.BOX 115343, Wakiso</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; 2026 King David Primary & Kindergarten School. All rights reserved.
          </p>
          <ul className="footer__legal">
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#terms">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
