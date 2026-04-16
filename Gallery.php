<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>King David | Gallery</title>
  <meta name="description" content="King David Primary and Kindergarten School — nurturing curiosity, empowering young leaders." />
  <meta property="og:image" content="assets/images/logo/New Logo.png" />
  <link rel="icon" href="assets/images/logo/New Logo.png" type="image/jpeg" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  <link rel="stylesheet" href="assets/css/main.css" />
  <link rel="stylesheet" href="assets/css/gallery.css" />
</head>
<body>
  <div class="announcement" role="region">
    <div class="announcement__inner">
      <span class="announcement__badge">Check Us Now</span>
      <span class="announcement__text">View Our World — Where Your Child's Dreams Begin</span>
    </div>
  </div>

  <?php include("includes/header.php"); ?>

  <!-- Hero Banner -->
  <section class="gallery-hero">
    <div class="gallery-hero__image">
      <img src="assets/images/Gallery1.jpg" alt="School life" loading="eager">
    </div>
    <div class="gallery-hero__overlay"></div>
    <div class="gallery-hero__content">
      <h1 class="gallery-hero__title">Our <span>Gallery</span></h1>
      <p class="gallery-hero__subtitle">Moments that tell our story</p>
    </div>
  </section>

  <!-- Photo Counter -->
  <div class="container">
    <div class="photo-counter">
      Showing <span id="visibleCount">0</span> photos
    </div>
  </div>

  <!-- Filter Buttons -->
  <section class="section">
    <div class="container">
      <div class="gallery-filter">
        <button class="filter-btn active" data-filter="all">All Photos</button>
        <button class="filter-btn" data-filter="classroom">Classroom</button>
        <button class="filter-btn" data-filter="sports">Sports</button>
        <button class="filter-btn" data-filter="events">Events</button>
        <button class="filter-btn" data-filter="facilities">Facilities</button>
      </div>

      <!-- Dynamic Gallery Grid -->
      <div class="gallery-grid" id="galleryGrid">
        <!-- Gallery items will be loaded here dynamically -->
      </div>

      <!-- Load More Button -->
      <div class="load-more-container" id="loadMoreContainer">
        <button class="load-more-btn" id="loadMoreBtn">Load More Photos <i class="fas fa-arrow-down"></i></button>
      </div>
    </div>
  </section>

  <!-- Video Gallery -->
  <section class="video-gallery-new">
    <div class="container">
      <div class="section-header">
        <h2>Video <span>Gallery</span></h2>
        <p class="lead">Watch our school come to life – click to play</p>
      </div>

      <div class="video-grid-new">
        <div class="video-card-new" data-video="assets/images/Videos/Vid1.mp4">
          <div class="video-thumbnail">
            <div class="video-placeholder" style="background-color: #8b1e1e;"><span>Primary Six</span></div>
            <div class="play-button-new"><i class="fas fa-play"></i></div>
          </div>
          <div class="video-info-new">
            <h3>Primary Six Class Studies</h3>
            <div class="video-meta"><span class="duration"><i class="far fa-clock"></i> 20seconds</span></div>
            <p>Primary Students engaging in their learning activities.</p>
          </div>
        </div>

        <div class="video-card-new" data-video="assets/images/Videos/Vid2.mp4">
          <div class="video-thumbnail">
            <div class="video-placeholder" style="background-color: #f4c542; color: #5a1313;"><span>Playground</span></div>
            <div class="play-button-new"><i class="fas fa-play"></i></div>
          </div>
          <div class="video-info-new">
            <h3>Lower Section Playground Activity</h3>
            <div class="video-meta"><span class="duration"><i class="far fa-clock"></i> 49Seconds</span></div>
            <p>Our little ones engaging in a wonderful play time moment</p>
          </div>
        </div>

        <div class="video-card-new" data-video="assets/images/Videos/Vid3.mp4">
          <div class="video-thumbnail">
            <div class="video-placeholder" style="background-color: #8b1e1e;"><span>Primary one Students</span></div>
            <div class="play-button-new"><i class="fas fa-play"></i></div>
          </div>
          <div class="video-info-new">
            <h3>Primary one Students</h3>
            <div class="video-meta"><span class="duration"><i class="far fa-clock"></i> 34Seconds</span></div>
            <p>Our previous Topclass Graduates in there New Primary one level class</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Lightbox -->
  <div class="lightbox">
    <button class="lightbox-close"><i class="fas fa-times"></i></button>
    <div class="lightbox-nav">
      <button class="lightbox-prev"><i class="fas fa-chevron-left"></i></button>
      <button class="lightbox-next"><i class="fas fa-chevron-right"></i></button>
    </div>
    <div class="lightbox-content">
      <img src="" alt="">
      <div class="lightbox-info">
        <h3></h3>
        <p></p>
        <div class="gallery-date"></div>
      </div>
    </div>
  </div>

  <!-- Video Modal -->
  <div class="video-modal">
    <div class="video-modal-content">
      <span class="video-modal-close"><i class="fas fa-times"></i></span>
      <video controls>
        <source src="" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>

  <?php include("includes/footer.php"); ?>

  <script src="assets/js/main.js" defer></script>
  <script src="assets/js/gallery.js" defer></script>
</body>
</html>