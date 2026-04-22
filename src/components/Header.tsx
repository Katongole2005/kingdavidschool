import { CSSProperties, useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { logoUrl, navItems } from '../constants';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuStyle, setMenuStyle] = useState<CSSProperties>({});
  const headerRef = useRef<HTMLElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const lastScrollRef = useRef(0);
  const tickingRef = useRef(false);
  const scrolledRef = useRef(false);
  const hiddenRef = useRef(false);

  useEffect(() => {
    const updateHeaderState = () => {
      const currentScroll = window.scrollY;
      const nextScrolled = currentScroll > 50;
      const nextHidden = currentScroll > lastScrollRef.current && currentScroll > 260 && !isOpen;

      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setIsScrolled(nextScrolled);
      }

      if (nextHidden !== hiddenRef.current) {
        hiddenRef.current = nextHidden;
        setHidden(nextHidden);
      }

      lastScrollRef.current = currentScroll;
      tickingRef.current = false;
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(updateHeaderState);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateHeaderState();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOpen]);

  useEffect(() => {
    const updateMenuPosition = () => {
      if (!isOpen) return;
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      const headerBottom = headerRef.current?.getBoundingClientRect().bottom ?? headerHeight;
      const availableOffset = Math.max(headerHeight, Math.round(headerBottom));
      setMenuStyle({
        top: `${headerHeight}px`,
        maxHeight: `calc(100vh - ${availableOffset}px)`,
      });
    };

    updateMenuPosition();
    window.addEventListener('resize', updateMenuPosition);
    return () => window.removeEventListener('resize', updateMenuPosition);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!isOpen || menuRef.current?.contains(target) || toggleRef.current?.contains(target)) return;
      setIsOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className={`site-header${isScrolled ? ' scrolled' : ''}`}
      id="site-header"
      style={hidden ? { transform: 'translateY(-100%)' } : undefined}
    >
      <div className="container">
        <Link to="/" className="brand" aria-label="King David School - Home" onClick={() => setIsOpen(false)}>
          <img src={logoUrl} alt="King David School Logo" className="brand__logo" width="55" height="55" loading="eager" />
          <div className="brand__text">
            <span className="brand__title">King David</span>
            <span className="brand__subtitle">Primary & Kindergarten</span>
          </div>
        </Link>

        <button
          ref={toggleRef}
          className="nav__toggle"
          id="navToggle"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          aria-controls="navMenu"
          type="button"
          onClick={() => setIsOpen((value) => !value)}
        >
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} aria-hidden="true" />
        </button>

        <nav className="nav" aria-label="Main navigation">
          <ul ref={menuRef} className={`nav__list${isOpen ? ' is-open' : ''}`} id="navMenu" style={isOpen ? menuStyle : undefined}>
            {navItems.map((item) => (
              <li className="nav__item" key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
                  onClick={() => setIsOpen(false)}
                  end={item.href === '/'}
                >
                  <i className={item.icon} aria-hidden="true" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
            <li className="nav__item nav__cta">
              <Link to="/contact-us.html" className="button button--primary button--sm" onClick={() => setIsOpen(false)}>
                <i className="fas fa-graduation-cap" aria-hidden="true" />
                <span>Enroll Now</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
