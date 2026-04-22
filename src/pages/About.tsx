import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ASSET_BASE, logoUrl } from '../constants';

const principles = [
  {
    className: 'vision-card',
    icon: 'fas fa-eye',
    title: 'Our Vision',
    text: 'To create well-disciplined and responsible individuals. To be the leading educational institution in Uganda that nurtures well-rounded, confident, and compassionate individuals.',
    hoverIcon: 'fas fa-star',
    hoverText: 'Looking ahead with purpose',
  },
  {
    className: 'mission-card',
    icon: 'fas fa-bullseye',
    title: 'Our Mission',
    text: 'To groom and produce citizens who are self-reliant and spiritually upright to meet the challenges of this world. We foster a love for learning, strong character, and lifelong success.',
    hoverIcon: 'fas fa-heart',
    hoverText: 'Dedicated to excellence every day',
  },
  {
    className: 'promise-card',
    icon: 'fas fa-handshake',
    title: 'Our Promise',
    text: 'We partner with parents in the holistic development of each child, providing individualized attention, quality education, and a values-based foundation for life.',
    hoverIcon: 'fas fa-shield-alt',
    hoverText: "Committed to your child's future",
  },
];

const timeline = [
  {
    align: 'left',
    icon: 'fas fa-seedling',
    title: '2007 - The Seed',
    text: 'The seed was planted with just 15 students and 2 dedicated classrooms, built on a dream of accessible, quality education.',
  },
  {
    align: 'right',
    icon: 'fas fa-leaf',
    title: '2018 - The Expansion',
    text: 'We received full accreditation as a center of excellence, expanding our facilities to include a new library and science lab.',
  },
  {
    align: 'left',
    icon: 'fas fa-tree',
    title: 'Today - The Legacy',
    text: 'A thriving community of over 500 learners, celebrating a legacy of 100% First Grade passes and shaping future leaders.',
  },
];

const values = [
  ['fas fa-brain', 'Innovation'],
  ['fas fa-heart', 'Empathy'],
  ['fas fa-shield-alt', 'Integrity'],
] as const;

export function About() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.hex-item, .tree-timeline__item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    elements.forEach((element) => observer.observe(element));
    const fallbackId = window.setTimeout(() => {
      elements.forEach((element) => element.classList.add('visible'));
    }, 800);

    return () => {
      window.clearTimeout(fallbackId);
      observer.disconnect();
    };
  }, []);

  return (
    <Layout
      showSkipLink
      badge="Know More"
      text="Your child's future starts now - Registration open for Kindergarten & Primary!"
    >
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <i className="fa-solid fa-chevron-right" aria-hidden="true" />
          <span aria-current="page">About Us</span>
        </div>
      </nav>

      <main id="main" className="about-page">
        <section className="about-hero-premium">
          <div className="container hero-flex">
            <div className="hero-text-content">
              <span className="badge">ESTABLISHED 2007</span>
              <h1>
                Nurturing Excellence, <span>Inspiring Dreams</span>
              </h1>
              <p>
                Welcome to King David Primary & Kindergarten, where we build a strong foundation for a wonderful life together with our community.
              </p>
            </div>
            <div className="hero-image-container">
              <img src={logoUrl} alt="King David School Logo" className="floating-logo" width="300" height="300" />
            </div>
          </div>
        </section>

        <section className="leadership-section container">
          <div className="section-header">
            <span className="section-subtitle">Our Leadership</span>
            <h2 className="section-title">Meet Our School Leaders</h2>
            <p className="section-description">Dedicated to guiding our students toward excellence</p>
          </div>

          <div className="leadership-grid">
            <div className="p-card-modern">
              <div className="p-image-wrap">
                <img src={`${ASSET_BASE}/images/Director.webp`} alt="Ms. Jackie - Director of King David School" loading="lazy" width="400" height="260" />
              </div>
              <div className="p-content">
                <i className="fas fa-quote-left" aria-hidden="true" />
                <h2>A Word from the Director</h2>
                <p>
                  "Our goal is to ensure every child leaves King David not just with high marks, but with a character of gold. We believe in nurturing the soul as much as the mind."
                </p>
                <div className="p-footer">
                  <strong>Ms. Jackie</strong>
                  <span>Head of School</span>
                </div>
              </div>
            </div>

            <div className="p-card-modern">
              <div className="p-image-wrap">
                <img src={`${ASSET_BASE}/images/Deputy.webp`} alt="Mr. Grace - Deputy Head of School" loading="lazy" width="400" height="260" />
              </div>
              <div className="p-content">
                <i className="fas fa-quote-left" aria-hidden="true" />
                <h2>A Word from the Deputy Head</h2>
                <p>
                  "I am committed to ensuring every child receives the support they need to excel academically and grow into responsible citizens. Together with our dedicated team, we foster a nurturing environment where each child is valued."
                </p>
                <div className="p-footer">
                  <strong>Mr. Grace</strong>
                  <span>Deputy Head of School</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="vmp-section container">
          <div className="section-header">
            <span className="section-subtitle">Our Guiding Principles</span>
            <h2 className="section-title">Vision, Mission & Promise</h2>
            <p className="section-description">The foundation that shapes everything we do at King David School</p>
          </div>

          <div className="vmp-grid">
            {principles.map((principle) => (
              <div className={`vmp-card ${principle.className}`} key={principle.title}>
                <div className="vmp-card__inner">
                  <div className="vmp-icon">
                    <i className={principle.icon} aria-hidden="true" />
                  </div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                  <div className="vmp-hover-content">
                    <i className={principle.hoverIcon} aria-hidden="true" />
                    <span>{principle.hoverText}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="timeline-section container" aria-labelledby="timelineTitle">
          <h2 id="timelineTitle" className="section-title">Our Growth Story</h2>
          <div className="tree-timeline">
            {timeline.map((item) => (
              <div className={`tree-timeline__item tree-timeline__item--${item.align}`} key={item.title}>
                <div className="tree-timeline__branch" />
                <div className="tree-timeline__leaf">
                  <i className={item.icon} aria-hidden="true" />
                </div>
                <div className="tree-timeline__content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="values-philosophy container" aria-labelledby="valuesTitle">
          <h2 id="valuesTitle" className="section-title">Core Philosophy</h2>
          <div className="hex-grid">
            {values.map(([icon, value]) => (
              <div className="hex-item" key={value}>
                <div className="hex-inner">
                  <i className={icon} aria-hidden="true" />
                  <h4>{value}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
