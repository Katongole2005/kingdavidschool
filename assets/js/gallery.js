document.addEventListener("DOMContentLoaded", function() {
  // ----- HERO FADE-IN -----
  const hero = document.querySelector('.gallery-hero');
  if (hero) setTimeout(() => hero.classList.add('visible'), 100);

  // ----- GALLERY DATA (ADD YOUR IMAGES HERE) -----
  // Format: { category, folder, filename, title, description, date }
  const allImages = [
    // Classroom Activities
    { category: 'classroom', folder: 'classroom/', filename: 'TopClass1.webp', title: 'Top Class', desc: 'Language lesson', date: 'March 15, 2026' },
    { category: 'classroom', folder: 'classroom/', filename: 'Art.webp', title: 'Art Class', desc: 'Creative arts', date: 'April 10, 2025' },
     { category: 'classroom', folder: 'classroom/', filename: 'Primary5.webp', title: 'Primary Five', desc: 'Primary school education', date: 'march 29, 2026' },
    { category: 'classroom', folder: 'classroom/', filename: 'BabyClass.webp', title: 'Baby Class', desc: 'Early childhood education', date: 'April 3, 2026' },
    { category: 'classroom', folder: 'classroom/', filename: 'Middle Class.webp', title: 'Middle Class', desc: 'Elementary education', date: 'Feb 18, 2026' },
    { category: 'classroom', folder: 'classroom/', filename: 'Music.webp', title: 'Music Lesson', desc: 'Learning instruments', date: 'June 18, 2025' },
    { category: 'classroom', folder: 'classroom/', filename: 'Primary3.webp', title: 'Primary Three', desc: 'Primary school education', date: 'march 29, 2026' },
    { category: 'classroom', folder: 'classroom/', filename: 'Primary6.webp', title: 'Primary Six', desc: 'Primary school education', date: 'march 29, 2026' },

    // Sports
    { category: 'sports', folder: 'Sports/', filename: 'Sports.webp', title: 'Sports Day', desc: 'Athletic events', date: 'Aug 15, 2025' },
    { category: 'sports', folder: 'Sports/', filename: 'Volleyball2.webp', title: 'Volleyball Team', desc: 'Skills acquisition', date: 'Feb 26, 2026' },
    { category: 'sports', folder: 'Sports/', filename: 'Football.webp', title: 'Football Team', desc: 'Ready for championships', date: 'Nov 22, 2025' },
    { category: 'sports', folder: 'Sports/', filename: 'Volleyball.webp', title: 'Volleyball', desc: 'Skills acquisition', date: 'Feb 26, 2026' },
    { category: 'sports', folder: 'Sports/', filename: 'Football2.webp', title: 'Football Team', desc: 'Ready for championships', date: 'Nov 22, 2025' },
    
    
    // Events
    { category: 'events', folder: 'Events/', filename: 'Culture1.webp', title: 'Cultural Day', desc: 'Traditional dances', date: 'Oct 20, 2025' },
    { category: 'events', folder: 'Events/', filename: 'Culture2.webp', title: 'Cultural Day', desc: 'Traditional dances', date: 'Oct 20, 2025' },
    { category: 'events', folder: 'Events/', filename: 'Culture3.webp', title: 'Cultural Day', desc: 'Traditional dances', date: 'Oct 20, 2025' },
    { category: 'events', folder: 'Events/', filename: 'Graduation.webp', title: 'Graduation Day', desc: 'Kindergarten ceremony', date: 'Nov 10, 2025' },
    { category: 'events', folder: 'Events/', filename: 'Graduation2.webp', title: 'Graduation Day', desc: 'Kindergarten ceremony', date: 'Nov 10, 2025' },
    { category: 'events', folder: 'Events/', filename: 'Graduation3.webp', title: 'Graduation Day', desc: 'Kindergarten ceremony', date: 'Nov 10, 2025' },
    { category: 'events', folder: 'Events/', filename: 'P7 consecration day 2.webp', title: 'Coronation Day', desc: 'P7 blessing', date: 'Nov 4, 2025' },
    { category: 'events', folder: 'Events/', filename: 'P7 consecration day 3.webp', title: 'Coronation Day', desc: 'P7 blessing', date: 'Nov 4, 2025' },
    { category: 'events', folder: 'Events/', filename: 'Golden1.webp', title: 'Golden Time Ceremony', desc: 'Crafting and Music sessions', date: 'April 4, 2026' },
    { category: 'events', folder: 'Events/', filename: 'Golden2.webp', title: 'Golden Time Ceremony', desc: 'Crafting and Music sessions', date: 'April 4, 2026' },
    { category: 'events', folder: 'Events/', filename: 'Golden3.webp', title: 'Golden Time Ceremony', desc: 'Crafting and Music sessions', date: 'April 4, 2026' },
    { category: 'events', folder: 'Events/', filename: 'Golden4.webp', title: 'Golden Time Ceremony', desc: 'Crafting and Music sessions', date: 'April 4, 2026' },
    { category: 'events', folder: 'Events/', filename: 'Golden5.webp', title: 'Golden Time Ceremony', desc: 'Crafting and Music sessions', date: 'April 4, 2026' },
    { category: 'events', folder: 'Events/', filename: 'Golden6.webp', title: 'Golden Time Ceremony', desc: 'Crafting and Music sessions', date: 'April 4, 2026' },
    { category: 'events', folder: 'Events/', filename: 'Golden7.webp', title: 'Golden Time Ceremony', desc: 'Crafting and Music sessions', date: 'April 4, 2026' },
    { category: 'events', folder: 'Events/', filename: 'Golden8.webp', title: 'Golden Time Ceremony', desc: 'Crafting and Music sessions', date: 'April 4, 2026' },
    { category: 'events', folder: 'Events/', filename: 'Golden9.webp', title: 'Golden Time Ceremony', desc: 'Crafting and Music sessions', date: 'April 4, 2026' },
    { category: 'events', folder: 'Events/', filename: 'Golden10.webp', title: 'Golden Time Ceremony', desc: 'Crafting and Music sessions', date: 'April 4, 2026' },

    // Facilities
    { category: 'facilities', folder: 'Facilities/', filename: 'Playground.webp', title: 'Playground', desc: 'Safe play area', date: 'Ongoing' },
    { category: 'facilities', folder: 'Facilities/', filename: 'Dom.webp', title: 'Dormitories', desc: 'Comfortable accommodation', date: 'Ongoing' },
    { category: 'facilities', folder: 'Facilities/', filename: 'Playground2.webp', title: 'Playground', desc: 'Safe play area', date: 'Ongoing' },
    { category: 'facilities', folder: 'Facilities/', filename: 'Dom2.webp', title: 'Dormitories', desc: 'Comfortable accommodation', date: 'Ongoing' },
    { category: 'facilities', folder: 'Facilities/', filename: 'Playground3.webp', title: 'Playground', desc: 'Safe play area', date: 'Ongoing' },
    
    
    // ========== ADD NEW IMAGES HERE ==========
    // Just copy the line below, change the values, and paste it above this comment
    // { category: 'classroom', folder: 'classroom/', filename: 'YourImage.webp', title: 'Your Title', desc: 'Short description', date: 'Date' },
  ];

  // ----- CONFIGURATION -----
  const ITEMS_PER_PAGE = 12;  // Show 12 images per load
  let currentFilter = 'all';
  let currentPage = 1;
  let filteredImages = [...allImages];

  // DOM Elements
  const galleryGrid = document.getElementById('galleryGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const loadMoreContainer = document.getElementById('loadMoreContainer');
  const visibleCountSpan = document.getElementById('visibleCount');

  // ----- Helper Functions -----
  function getFilteredImages() {
    if (currentFilter === 'all') {
      return [...allImages];
    }
    return allImages.filter(img => img.category === currentFilter);
  }

  function updateVisibleCount() {
    const totalVisible = Math.min(currentPage * ITEMS_PER_PAGE, filteredImages.length);
    visibleCountSpan.textContent = `${totalVisible} of ${filteredImages.length} photos`;
    
    // Hide load more button if all images are shown
    if (totalVisible >= filteredImages.length) {
      loadMoreContainer.style.display = 'none';
    } else {
      loadMoreContainer.style.display = 'block';
    }
  }

  function createGalleryItem(img, index) {
    const path = 'https://pub-05955d1747df4f86b7854058d3ab270b.r2.dev/images/' + (img.folder || '') + img.filename;
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-category', img.category);
    item.setAttribute('data-index', index);
    item.innerHTML = `
      <div class="gallery-category">${img.category.charAt(0).toUpperCase() + img.category.slice(1)}</div>
      <div class="gallery-image">
        <img src="${path}" alt="${img.title}" data-title="${img.title}" data-date="${img.date}" loading="lazy">
      </div>
      <div class="gallery-overlay">
        <h3>${img.title}</h3>
        <p>${img.desc}</p>
      </div>
      <div class="gallery-info">
        <div class="gallery-date">${img.date}</div>
        <p>${img.desc}</p>
      </div>
    `;
    return item;
  }

  function renderGallery() {
    // Clear grid
    galleryGrid.innerHTML = '';
    
    // Get images to show for current page
    const startIndex = 0;
    const endIndex = currentPage * ITEMS_PER_PAGE;
    const imagesToShow = filteredImages.slice(startIndex, endIndex);
    
    // Create and append items
    imagesToShow.forEach((img, idx) => {
      const item = createGalleryItem(img, idx);
      galleryGrid.appendChild(item);
    });
    
    // Update counter
    updateVisibleCount();
    
    // Re-attach lightbox events to new items
    attachLightboxEvents();
  }

  function resetAndRender() {
    currentPage = 1;
    filteredImages = getFilteredImages();
    renderGallery();
  }

  function loadMore() {
    currentPage++;
    renderGallery();
  }

  // ----- LIGHTBOX FUNCTIONALITY -----
  let currentLightboxIndex = 0;
  let lightboxImages = [];

  function attachLightboxEvents() {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item, idx) => {
      // Remove old listener to avoid duplicates (simple approach)
      const newItem = item.cloneNode(true);
      item.parentNode.replaceChild(newItem, item);
      
      newItem.addEventListener('click', () => {
        const imgData = filteredImages[idx];
        if (imgData) {
          openLightbox(idx);
        }
      });
    });
    
    // Rebuild lightbox images array
    lightboxImages = filteredImages;
  }

  // Lightbox functions
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const lightboxImg = lightbox.querySelector('img');
    const lightboxTitle = lightbox.querySelector('h3');
    const lightboxDesc = lightbox.querySelector('.lightbox-info p');
    const lightboxDate = lightbox.querySelector('.gallery-date');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    function openLightbox(index) {
      currentLightboxIndex = index;
      const img = lightboxImages[currentLightboxIndex];
      if (!img) return;
      
      const path = 'assets/images/' + (img.folder || '') + img.filename;
      lightboxImg.src = path;
      lightboxTitle.textContent = img.title;
      lightboxDesc.textContent = img.desc;
      lightboxDate.textContent = img.date;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function nextImage() {
      if (currentLightboxIndex + 1 < lightboxImages.length) {
        currentLightboxIndex++;
        openLightbox(currentLightboxIndex);
      }
    }

    function prevImage() {
      if (currentLightboxIndex - 1 >= 0) {
        currentLightboxIndex--;
        openLightbox(currentLightboxIndex);
      }
    }

    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    });
  }

  // ----- FILTER SYSTEM -----
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentFilter = this.dataset.filter;
      resetAndRender();
    });
  });

  // ----- LOAD MORE -----
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', loadMore);
  }

  // ----- VIDEO MODAL -----
  const modal = document.querySelector('.video-modal');
  if (modal) {
    const modalVideo = modal.querySelector('video');
    const modalSource = modalVideo.querySelector('source');
    const modalClose = modal.querySelector('.video-modal-close');

    document.querySelectorAll('.video-card-new').forEach(card => {
      card.addEventListener('click', function(e) {
        e.stopPropagation();
        const videoPath = this.dataset.video;
        if (videoPath) {
          modalSource.src = videoPath;
          modalVideo.load();
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
          modalVideo.play().catch(e => console.log('Autoplay prevented:', e));
        }
      });
    });

    modalClose.addEventListener('click', () => {
      modalVideo.pause();
      modalSource.src = '';
      modalVideo.load();
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modalVideo.pause();
        modalSource.src = '';
        modalVideo.load();
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ----- SCROLL REVEAL (optional) -----
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('revealed');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.gallery-item, .video-card-new').forEach(el => revealObserver.observe(el));

  // ----- INITIAL RENDER -----
  resetAndRender();
});