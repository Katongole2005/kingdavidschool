import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { contact } from '../constants';

export function Contact() {
  return (
    <Layout badge="Call Now" text="Get in touch with us!">
      <div className="breadcrumbs container" style={{ padding: '1rem 0', fontSize: '0.9rem', color: 'var(--muted)' }}>
        <Link to="/">Home</Link> &gt; <span style={{ color: 'var(--brand)' }}>Contact Us</span>
      </div>

      <main id="main">
        <section className="page-hero">
          <div className="container">
            <span className="hero__badge">
              <i className="fas fa-envelope" aria-hidden="true" />
              Get in Touch
            </span>
            <h1 style={{ color: 'white' }}>Get in Touch With King David School</h1>
            <p className="subtitle" style={{ color: 'gold' }}>
              We'd love to hear from you! Please reach out using the details or the form below.
            </p>
          </div>
        </section>

        <section className="contact-grid">
          <div className="container grid-layout">
            <div className="contact-details">
              <h2 className="details-title">Visit or Call Us</h2>
              <p>Our dedicated staff are available to answer your questions and guide you through the enrollment process.</p>

              <div className="info-block"><h3>School Address:</h3></div>
              <p>10 Miles off Bombo-Road, Wattuba-Matugga</p>

              <div className="info-block"><h3>Telephone Contacts:</h3></div>
              <p>
                <span style={{ fontWeight: 600, color: '#505852' }}>Head Master:</span> +256 775 288 221
                <br />
                <span style={{ fontWeight: 600, color: '#505852' }}>Deputy Teacher:</span> +256 703 544 419
              </p>

              <div className="info-block"><h3>Email Address:</h3></div>
              <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>

              <div className="info-block"><h3>Working Hours</h3></div>
              <p>Monday-Friday: 7:00 AM - 6:00 PM</p>

              <h2 className="details-title map-title">Find Us (Google Maps)</h2>
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.888764835677!2d32.50204787508491!3d0.48911079949673326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177c988a03282b3d%3A0x6b49911964147c20!2sWattuba%2C%20Uganda!5e0!3m2!1sen!2sug!4v1700000000000!5m2!1sen!2sug"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="King David School Location Map"
                />
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2 className="details-title">Send Us a Quick Message</h2>
              <form className="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
                <p className="form-description">Have a question? Send a quick message!</p>

                <div className="form-group">
                  <label htmlFor="name">Your Full Name <span className="required">*</span></label>
                  <input type="text" id="name" name="name" className="form-control" placeholder="Enter your full name" required minLength={3} />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="required">*</span></label>
                  <input type="email" id="email" name="email" className="form-control" placeholder="Enter a valid email address" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="form-control" placeholder="E.g., +256 7XX XXX XXX" />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" className="form-control" placeholder="Brief subject of your message" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message <span className="required">*</span></label>
                  <textarea id="message" name="message" className="form-control" rows={6} placeholder="Type your detailed message here..." required />
                </div>

                <div className="form-actions">
                  <button type="submit" className="button button--primary btn-send">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
