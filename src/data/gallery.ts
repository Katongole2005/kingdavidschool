import { ASSET_BASE } from '../constants';

export type GalleryCategory = 'classroom' | 'sports' | 'events' | 'facilities';

export type GalleryImage = {
  category: GalleryCategory;
  folder: string;
  filename: string;
  title: string;
  desc: string;
  date: string;
};

export const galleryImages: GalleryImage[] = [
  { category: 'classroom', folder: 'classroom/', filename: 'TopClass1.webp', title: 'Top Class', desc: 'Language lesson', date: 'March 15, 2026' },
  { category: 'classroom', folder: 'classroom/', filename: 'Art.webp', title: 'Art Class', desc: 'Creative arts', date: 'April 10, 2025' },
  { category: 'classroom', folder: 'classroom/', filename: 'Primary5.webp', title: 'Primary Five', desc: 'Primary school education', date: 'March 29, 2026' },
  { category: 'classroom', folder: 'classroom/', filename: 'BabyClass.webp', title: 'Baby Class', desc: 'Early childhood education', date: 'April 3, 2026' },
  { category: 'classroom', folder: 'classroom/', filename: 'Middle Class.webp', title: 'Middle Class', desc: 'Elementary education', date: 'Feb 18, 2026' },
  { category: 'classroom', folder: 'classroom/', filename: 'Music.webp', title: 'Music Lesson', desc: 'Learning instruments', date: 'June 18, 2025' },
  { category: 'classroom', folder: 'classroom/', filename: 'Primary3.webp', title: 'Primary Three', desc: 'Primary school education', date: 'March 29, 2026' },
  { category: 'classroom', folder: 'classroom/', filename: 'Primary6.webp', title: 'Primary Six', desc: 'Primary school education', date: 'March 29, 2026' },
  { category: 'sports', folder: 'Sports/', filename: 'Sports.webp', title: 'Sports Day', desc: 'Athletic events', date: 'Aug 15, 2025' },
  { category: 'sports', folder: 'Sports/', filename: 'Volleyball2.webp', title: 'Volleyball Team', desc: 'Skills acquisition', date: 'Feb 26, 2026' },
  { category: 'sports', folder: 'Sports/', filename: 'Football.webp', title: 'Football Team', desc: 'Ready for championships', date: 'Nov 22, 2025' },
  { category: 'sports', folder: 'Sports/', filename: 'Volleyball.webp', title: 'Volleyball', desc: 'Skills acquisition', date: 'Feb 26, 2026' },
  { category: 'sports', folder: 'Sports/', filename: 'Football2.webp', title: 'Football Team', desc: 'Ready for championships', date: 'Nov 22, 2025' },
  { category: 'events', folder: 'Events/', filename: 'Culture1.webp', title: 'Cultural Day', desc: 'Traditional dances', date: 'Oct 20, 2025' },
  { category: 'events', folder: 'Events/', filename: 'Culture2.webp', title: 'Cultural Day', desc: 'Traditional dances', date: 'Oct 20, 2025' },
  { category: 'events', folder: 'Events/', filename: 'Culture3.webp', title: 'Cultural Day', desc: 'Traditional dances', date: 'Oct 20, 2025' },
  { category: 'events', folder: 'Events/', filename: 'Graduation.webp', title: 'Graduation Day', desc: 'Kindergarten ceremony', date: 'Nov 10, 2025' },
  { category: 'events', folder: 'Events/', filename: 'Graduation2.webp', title: 'Graduation Day', desc: 'Kindergarten ceremony', date: 'Nov 10, 2025' },
  { category: 'events', folder: 'Events/', filename: 'Graduation3.webp', title: 'Graduation Day', desc: 'Kindergarten ceremony', date: 'Nov 10, 2025' },
  { category: 'events', folder: 'Events/', filename: 'P7 consecration day 2.webp', title: 'Coronation Day', desc: 'P7 blessing', date: 'Nov 4, 2025' },
  { category: 'events', folder: 'Events/', filename: 'P7 consecration day 3.webp', title: 'Coronation Day', desc: 'P7 blessing', date: 'Nov 4, 2025' },
  { category: 'events', folder: 'Events/', filename: 'Golden1.webp', title: 'Golden Time Ceremony', desc: 'Crafting and music sessions', date: 'April 4, 2026' },
  { category: 'events', folder: 'Events/', filename: 'Golden2.webp', title: 'Golden Time Ceremony', desc: 'Crafting and music sessions', date: 'April 4, 2026' },
  { category: 'events', folder: 'Events/', filename: 'Golden3.webp', title: 'Golden Time Ceremony', desc: 'Crafting and music sessions', date: 'April 4, 2026' },
  { category: 'events', folder: 'Events/', filename: 'Golden4.webp', title: 'Golden Time Ceremony', desc: 'Crafting and music sessions', date: 'April 4, 2026' },
  { category: 'events', folder: 'Events/', filename: 'Golden5.webp', title: 'Golden Time Ceremony', desc: 'Crafting and music sessions', date: 'April 4, 2026' },
  { category: 'events', folder: 'Events/', filename: 'Golden6.webp', title: 'Golden Time Ceremony', desc: 'Crafting and music sessions', date: 'April 4, 2026' },
  { category: 'events', folder: 'Events/', filename: 'Golden7.webp', title: 'Golden Time Ceremony', desc: 'Crafting and music sessions', date: 'April 4, 2026' },
  { category: 'events', folder: 'Events/', filename: 'Golden8.webp', title: 'Golden Time Ceremony', desc: 'Crafting and music sessions', date: 'April 4, 2026' },
  { category: 'events', folder: 'Events/', filename: 'Golden9.webp', title: 'Golden Time Ceremony', desc: 'Crafting and music sessions', date: 'April 4, 2026' },
  { category: 'events', folder: 'Events/', filename: 'Golden10.webp', title: 'Golden Time Ceremony', desc: 'Crafting and music sessions', date: 'April 4, 2026' },
  { category: 'facilities', folder: 'Facilities/', filename: 'Playground.webp', title: 'Playground', desc: 'Safe play area', date: 'Ongoing' },
  { category: 'facilities', folder: 'Facilities/', filename: 'Dom.webp', title: 'Dormitories', desc: 'Comfortable accommodation', date: 'Ongoing' },
  { category: 'facilities', folder: 'Facilities/', filename: 'Playground2.webp', title: 'Playground', desc: 'Safe play area', date: 'Ongoing' },
  { category: 'facilities', folder: 'Facilities/', filename: 'Dom2.webp', title: 'Dormitories', desc: 'Comfortable accommodation', date: 'Ongoing' },
  { category: 'facilities', folder: 'Facilities/', filename: 'Playground3.webp', title: 'Playground', desc: 'Safe play area', date: 'Ongoing' },
];

export const galleryImageUrl = (image: GalleryImage) => `${ASSET_BASE}/images/${image.folder}${image.filename}`;

export const galleryCategories = [
  { key: 'all', label: 'All Photos' },
  { key: 'classroom', label: 'Classroom' },
  { key: 'sports', label: 'Sports' },
  { key: 'events', label: 'Events' },
  { key: 'facilities', label: 'Facilities' },
] as const;
