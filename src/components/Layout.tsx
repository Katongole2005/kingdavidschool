import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Announcement } from './Announcement';
import { Footer } from './Footer';
import { Header } from './Header';

type LayoutProps = {
  children: ReactNode;
  badge: ReactNode;
  text?: ReactNode;
  showSkipLink?: boolean;
};

export function Layout({ children, showSkipLink = false }: LayoutProps) {
  return (
    <>
      {showSkipLink ? <a href="#main" className="skip-link">Skip to main content</a> : null}
      <Announcement
        contained
        labelledBy="Admission announcement"
        badge="Admissions 2026"
        text="Registration is open for Day & Boarding Primary and Kindergarten."
        cta={(
          <Link to="/contact-us.html" className="announcement__cta">
            Apply Now <i className="fas fa-arrow-right" aria-hidden="true" />
          </Link>
        )}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
}
