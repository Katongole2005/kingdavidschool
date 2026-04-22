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

export function Layout({ children, badge, text, showSkipLink = false }: LayoutProps) {
  return (
    <>
      {showSkipLink ? <a href="#main" className="skip-link">Skip to main content</a> : null}
      <Announcement badge={badge} text={text} labelledBy="Admission announcement" />
      <Header />
      <Announcement
        contained
        labelledBy="Announcements"
        badge={<><i className="fas fa-star" aria-hidden="true" /> NEW</>}
        text="Registration Open for 2026 - Limited Spaces Available!"
        cta={(
          <Link to="/contact-us.html" className="announcement__cta">
            Apply Now <i className="fas fa-arrow-right" aria-hidden="true" />
          </Link>
        )}
      />
      {children}
      <Footer />
    </>
  );
}
