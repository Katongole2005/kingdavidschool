export const ASSET_BASE = 'https://pub-05955d1747df4f86b7854058d3ab270b.r2.dev';

export const logoUrl = `${ASSET_BASE}/images/logo/New Logo.webp`;

export const contact = {
  address: '10 Miles off Bombo Road, Wattuba-Matugga',
  email: 'kdavidsp.school@gmail.com',
  phonePrimary: '+256 774 945 178',
  phonePrimaryHref: '+256774945178',
  phoneSecondary: '+256 754 517 047',
  phoneSecondaryHref: '+256754517047',
};

export const navItems = [
  { href: '/', label: 'Home', icon: 'fas fa-home' },
  { href: '/about-us.html', label: 'About Us', icon: 'fas fa-info-circle' },
  { href: '/gallery.html', label: 'Gallery', icon: 'fas fa-images' },
  { href: '/contact-us.html', label: 'Contact', icon: 'fas fa-envelope' },
] as const;
