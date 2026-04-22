import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CountUp } from '../components/CountUp';
import { Layout } from '../components/Layout';
import { ASSET_BASE } from '../constants';

const programs = [
  {
    image: `${ASSET_BASE}/images/index/kindergarten.webp`,
    icon: 'fas fa-child',
    title: 'Kindergarten',
    description: 'A nurturing environment where young learners grow through play-based activities, curiosity, and care.',
    features: ['Ages 3-5', 'Play-based'],
    href: '/contact-us.html',
    linkLabel: 'Learn More',
  },
  {
    image: `${ASSET_BASE}/images/index/Scouts.webp`,
    icon: 'fas fa-campground',
    title: 'Prefecture Program',
    description: 'Teamwork, leadership, problem-solving, character, and citizenship built through prefecture activities.',
    features: ['Leadership', 'Character'],
    href: '/gallery.html',
    linkLabel: 'See Activities',
  },
  {
    image: `${ASSET_BASE}/images/index/Primary.webp`,
    icon: 'fas fa-book-open',
    title: 'Primary School',
    description: 'Curious, creative, and enthusiastic learners who are passionate about making a difference in their world.',
    features: ['P1-P7', 'Excellence'],
    href: '/about-us.html',
    linkLabel: 'Discover More',
  },
];

const visionCards = [
  {
    icon: 'fas fa-brain',
    title: 'Nurturing Curious Minds',
    text: 'We provide a stimulating environment that encourages creativity and critical thinking.',
  },
  {
    icon: 'fas fa-crown',
    title: 'Empowering Young Leaders',
    text: 'We cultivate confidence, compassion, and responsibility to make a positive impact.',
  },
  {
    icon: 'fas fa-tree',
    title: 'Foundations for Life',
    text: 'We spark passion for knowledge, a love of reading, and curiosity about the world.',
  },
];

const features = [
  ['fas fa-chalkboard-teacher', 'Qualified Teachers', 'Our dedicated, experienced educators nurture every child’s potential.'],
  ['fas fa-laptop', 'Modern Classrooms', 'Interactive learning spaces equipped with current technology.'],
  ['fas fa-futbol', 'Sports & Clubs', 'Wide range of extracurricular activities for holistic growth.'],
  ['fas fa-bus', 'Safe Transport', 'Reliable, supervised school transport for peace of mind.'],
  ['fas fa-heart', 'Caring Environment', 'A warm, inclusive community where every child feels valued.'],
  ['fas fa-trophy', 'Academic Excellence', 'Proven track record of outstanding results and achievements.'],
] as const;

const testimonials = [
  {
    text: 'King David nurtured my daughter’s curiosity. Now she leads confidently. The teachers are incredibly supportive and truly care about each child’s growth.',
    image: `${ASSET_BASE}/images/staff2.webp`,
    name: 'Mr. Akeny Douglas',
    role: 'Parent',
  },
  {
    text: 'The foundation I received here helped me excel in secondary school and beyond. King David does not just teach; they build character.',
    image: `${ASSET_BASE}/images/staff3.webp`,
    name: 'Lawrence Bukenya',
    role: 'Alumnus, Class of 2019',
  },
  {
    text: 'As a teacher here, I have seen countless success stories. The values taught here are world-class, and the community support is amazing.',
    image: `${ASSET_BASE}/images/staff1.webp`,
    name: 'Tr. Godfrey Hanghuja',
    role: 'Public Relations Officer',
  },
];

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    if (isPaused) return;
    const intervalId = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    const nextIndex = (index + testimonials.length) % testimonials.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="testimonials__slider">
      <div
        className="testimonials__track"
        id="testimonialTrack"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={(event) => {
          touchStartX.current = event.changedTouches[0]?.screenX ?? 0;
        }}
        onTouchEnd={(event) => {
          const touchEndX = event.changedTouches[0]?.screenX ?? 0;
          const diff = touchEndX - touchStartX.current;
          if (Math.abs(diff) > 50) goToSlide(currentIndex + (diff > 0 ? -1 : 1));
        }}
      >
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.name}>
            <div className="testimonial-card__quote">
              <i className="fas fa-quote-left" aria-hidden="true" />
            </div>
            <p className="testimonial-card__text">"{testimonial.text}"</p>
            <div className="testimonial-card__author">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-card__image" loading="lazy" />
              <div className="testimonial-card__info">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonials__dots" id="testimonialDots">
        {testimonials.map((testimonial, index) => (
          <button
            className={`dot${currentIndex === index ? ' active' : ''}`}
            key={testimonial.name}
            type="button"
            aria-label={`Show testimonial ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export function Home() {
  const heroImageRef = useRef<HTMLImageElement | null>(null);
  const heroContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `translateY(${scrolled * 0.3}px) scale(1.05)`;
      }
      if (heroContentRef.current) {
        heroContentRef.current.style.transform = `translateY(${scrolled * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Layout badge="Welcome to King David Day & Boarding Primary & Kindergarten School">
      <main id="main">
        <section className="hero" aria-label="Hero section">
          <div className="hero__bg">
            <div className="hero__overlay" />
            <img
              ref={heroImageRef}
              src={`${ASSET_BASE}/images/index/maroon.webp`}
              alt="Students learning at King David School"
              className="hero__image"
              loading="eager"
            />
          </div>

          <div className="container">
            <div ref={heroContentRef} className="hero__content">
              <span className="hero__badge animate-fade-in-down">
                <i className="fas fa-crown" aria-hidden="true" />
                Established 2007
              </span>

              <h1 className="hero__title animate-fade-in-up">
                Merit The Crown
                <span className="hero__accent">Shaping hearts, minds & futures</span>
              </h1>

              <p className="hero__subtitle animate-fade-in-up">
                We provide, teach, and work hard to ensure our students spark positive change in our community and the world.
              </p>

              <div className="hero__actions animate-fade-in-up">
                <Link to="/about-us.html" className="button button--primary button--lg">
                  <i className="fas fa-info-circle" aria-hidden="true" />
                  Discover Our Story
                </Link>
                <Link to="/contact-us.html" className="button button--ghost button--lg">
                  <i className="fas fa-graduation-cap" aria-hidden="true" />
                  Enroll Today
                </Link>
              </div>

              <div className="hero__stats">
                <div className="stat-item">
                  <CountUp target={500} className="stat-number" />
                  <span className="stat-label">Happy Students</span>
                </div>
                <div className="stat-item">
                  <CountUp target={19} className="stat-number" />
                  <span className="stat-label">Years Excellence</span>
                </div>
                <div className="stat-item">
                  <CountUp target={50} className="stat-number" />
                  <span className="stat-label">Expert Teachers</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero__wave" aria-hidden="true">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        <section className="section programs" aria-labelledby="programs-title">
          <div className="container">
            <div className="section__header">
              <span className="section__subtitle">What We Offer</span>
              <h2 id="programs-title" className="section__title">Programs That Grow With Your Child</h2>
              <p className="section__lead">
                From play-based discovery to leadership and literacy, we build strong foundations for lifelong learning.
              </p>
            </div>

            <div className="programs__grid">
              {programs.map((program) => (
                <article className="program-card" key={program.title}>
                  <div className="program-card__image">
                    <img src={program.image} alt={`${program.title} at King David School`} loading="lazy" width="400" height="300" />
                    <div className="program-card__badge">
                      <i className={program.icon} aria-hidden="true" />
                    </div>
                  </div>
                  <div className="program-card__content">
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <div className="program-card__features">
                      {program.features.map((feature) => (
                        <span key={feature}>
                          <i className="fas fa-check-circle" aria-hidden="true" /> {feature}
                        </span>
                      ))}
                    </div>
                    <Link to={program.href} className="program-card__link">
                      {program.linkLabel} <i className="fas fa-arrow-right" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section vision" aria-labelledby="vision-title">
          <div className="container">
            <div className="vision__grid">
              <div className="vision__content">
                <span className="section__subtitle">Our Philosophy</span>
                <h2 id="vision-title" className="vision__title">Nurturing Excellence, Inspiring Dreams</h2>

                <div className="vision__cards">
                  {visionCards.map((card) => (
                    <div className="vision-card" key={card.title}>
                      <div className="vision-card__icon">
                        <i className={card.icon} aria-hidden="true" />
                      </div>
                      <div className="vision-card__content">
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="vision__image">
                <img src={`${ASSET_BASE}/images/index/All.webp`} alt="Students learning together" loading="lazy" className="vision__img" />
                <div className="vision__stats-card">
                  <div className="stats-mini">
                    <div className="stats-mini__item">
                      <span className="stats-mini__number">100%</span>
                      <span className="stats-mini__label">Pass Rate</span>
                    </div>
                    <div className="stats-mini__item">
                      <span className="stats-mini__number">500+</span>
                      <span className="stats-mini__label">Students</span>
                    </div>
                    <div className="stats-mini__item">
                      <span className="stats-mini__number">15+</span>
                      <span className="stats-mini__label">Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section features-section" aria-labelledby="features-title">
          <div className="container">
            <div className="section__header">
              <span className="section__subtitle">Why Us</span>
              <h2 id="features-title" className="section__title">Why Choose King David?</h2>
              <p className="section__lead">A place where your child grows, learns, and thrives</p>
            </div>

            <div className="features-grid">
              {features.map(([icon, title, text]) => (
                <div className="feature-card" key={title}>
                  <div className="feature-card__icon">
                    <i className={icon} aria-hidden="true" />
                  </div>
                  <h3 className="feature-card__title">{title}</h3>
                  <p className="feature-card__desc">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonials" aria-labelledby="testimonials-title">
          <div className="container">
            <div className="section__header">
              <span className="section__subtitle">Stories</span>
              <h2 id="testimonials-title" className="section__title">What Our Community Says</h2>
            </div>
            <TestimonialSlider />
          </div>
        </section>
      </main>
    </Layout>
  );
}
