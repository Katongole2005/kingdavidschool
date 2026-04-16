<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <title>King David | About Us - Our Story & Mission</title>
  <meta name="description" content="Learn about King David Primary and Kindergarten School's history, mission, values, and the dedicated team shaping young minds since 2010." />
  
  <!-- Open Graph -->
  <meta property="og:title" content="King David School - About Us" />
  <meta property="og:description" content="Discover our journey of nurturing excellence and inspiring dreams since 2010." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="assets/images/logo/New Logo.png" />
  
  <!-- Favicon -->
  <link rel="icon" href="assets/images/logo/New Logo.png" type="image/png" />
  
  <!-- Fonts & Icons -->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  <!-- Font Awesome – NO integrity attribute (fixes icon issues) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
  <!-- Stylesheets -->
  <link rel="stylesheet" href="assets/css/main.css" />
  <link rel="stylesheet" href="assets/css/About us.css" />
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>

  <!-- Announcement Section -->
  <div class="announcement" role="region" aria-label="Admission announcement">
    <div class="announcement__inner">
      <span class="announcement__badge">Know More</span>
      <span class="announcement__text">Your child's future starts now — Registration open for Kindergarten & Primary!</span>
    </div>
  </div>

  <!-- Header Section -->
  <?php include("includes/header.php"); ?>

  <!-- Breadcrumbs -->
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <div class="container">
      <a href="index.php">Home</a>
      <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
      <span aria-current="page">About Us</span>
    </div>
  </nav>

  <main id="main" class="about-page">
    <!-- Hero Section -->
    <section class="about-hero-premium">
      <div class="container hero-flex">
        <div class="hero-text-content">
          <span class="badge">ESTABLISHED 2007</span>
          <h1>Nurturing Excellence, <span>Inspiring Dreams</span></h1>
          <p>Welcome to King David Primary & Kindergarten, where we build a strong foundation for a wonderful life together with our community.</p>
        </div>
        <div class="hero-image-container">
          <img src="assets/images/logo/New Logo.png" alt="King David School Logo" class="floating-logo">
        </div>
      </div>
    </section>

    <!-- Statistics Bar -->
    <section class="stats-bar">
    </section>

    <!-- Leadership Section (Director & Deputy Head) -->
    <section class="leadership-section container">
        <div class="section-header">
            <span class="section-subtitle">Our Leadership</span>
            <h2 class="section-title">Meet Our School Leaders</h2>
            <p class="section-description">Dedicated to guiding our students toward excellence</p>
        </div>

        <div class="leadership-grid">
            <!-- Director's Card -->
            <div class="p-card-modern">
                <div class="p-image-wrap">
                    <img src="assets/images/Director.jpg" alt="Ms. Jackie - Director of King David School">
                </div>
                <div class="p-content">
                    <i class="fas fa-quote-left" aria-hidden="true"></i>
                    <h2>A Word from the Director</h2>
                    <p>"Our goal is to ensure every child leaves King David not just with high marks, but with a character of gold. We believe in nurturing the soul as much as the mind."</p>
                    <div class="p-footer">
                        <strong>Ms. Jackie</strong>
                        <span>Head of School</span>
                    </div>
                </div>
            </div>

            <!-- Deputy Head's Card -->
            <div class="p-card-modern">
                <div class="p-image-wrap">
                    <img src="assets/images/Deputy.png" alt="Mr. Grace - Deputy Head of School">
                </div>
                <div class="p-content">
                    <i class="fas fa-quote-left" aria-hidden="true"></i>
                    <h2>A Word from the Deputy Head</h2>
                    <p>"I am committed to ensuring every child receives the support they need to excel academically and grow into responsible citizens. Together with our dedicated team, we foster a nurturing environment where each child is valued."</p>
                    <div class="p-footer">
                        <strong>Mr. Grace</strong>
                        <span>Deputy Head of School</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Vision, Mission & Promise Section -->
    <section class="vmp-section container">
        <div class="section-header">
            <span class="section-subtitle">Our Guiding Principles</span>
            <h2 class="section-title">Vision, Mission & Promise</h2>
            <p class="section-description">The foundation that shapes everything we do at King David School</p>
        </div>

        <div class="vmp-grid">
            <!-- Vision Card -->
            <div class="vmp-card vision-card">
                <div class="vmp-card__inner">
                    <div class="vmp-icon">
                        <i class="fas fa-eye"></i>
                    </div>
                    <h3>Our Vision</h3>
                    <p>To Create Well-Disciplined and Responsible individuals.<br>To be the leading educational
                     institution in Uganda that nurtures well-rounded, confident, and compassionate individuals</p>
                    <div class="vmp-hover-content">
                        <i class="fas fa-star"></i>
                        <span>Looking ahead with purpose</span>
                    </div>
                </div>
            </div>

            <!-- Mission Card -->
            <div class="vmp-card mission-card">
                <div class="vmp-card__inner">
                    <div class="vmp-icon">
                        <i class="fas fa-bullseye"></i>
                    </div>
                    <h3>Our Mission</h3>
                    <p>To groom and produce citizens who are self-reliant, and spiritually upright to meet challenges
                      of this world.<br>Committed to fostering a love for learning,
                         building strong character, and preparing children for lifelong success.</p>
                    <div class="vmp-hover-content">
                        <i class="fas fa-heart"></i>
                        <span>Dedicated to excellence every day</span>
                    </div>
                </div>
            </div>

            <!-- Promise Card -->
            <div class="vmp-card promise-card">
                <div class="vmp-card__inner">
                    <div class="vmp-icon">
                        <i class="fas fa-handshake"></i>
                    </div>
                    <h3>Our Promise</h3>
                    <p>We promise to partner with parents in the holistic development of each child, providing individualized attention, quality education, and a values-based foundation that prepares them not just for school, but for life.</p>
                    <div class="vmp-hover-content">
                        <i class="fas fa-shield-alt"></i>
                        <span>Committed to your child's future</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Growth Tree Timeline -->
    <section class="timeline-section container" aria-labelledby="timelineTitle">
      <h2 id="timelineTitle" class="section-title">Our Growth Story</h2>
      <div class="tree-timeline">
        <div class="tree-timeline__item tree-timeline__item--left">
          <div class="tree-timeline__branch"></div>
          <div class="tree-timeline__leaf">
            <i class="fas fa-seedling"></i>
          </div>
          <div class="tree-timeline__content">
            <h3>2007 – The Seed</h3>
            <p>The seed was planted with just 15 students and 2 dedicated classrooms, built on a dream of accessible, quality education.</p>
          </div>
        </div>
        <div class="tree-timeline__item tree-timeline__item--right">
          <div class="tree-timeline__branch"></div>
          <div class="tree-timeline__leaf">
            <i class="fas fa-leaf"></i>
          </div>
          <div class="tree-timeline__content">
            <h3>2018 – The Expansion</h3>
            <p>We received full accreditation as a center of excellence, expanding our facilities to include a new library and science lab.</p>
          </div>
        </div>
        <div class="tree-timeline__item tree-timeline__item--left">
          <div class="tree-timeline__branch"></div>
          <div class="tree-timeline__leaf">
            <i class="fas fa-tree"></i>
          </div>
          <div class="tree-timeline__content">
            <h3>Today – The Legacy</h3>
            <p>A thriving community of over 500 learners, celebrating a legacy of 100% First Grade passes and shaping future leaders.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="values-philosophy container" aria-labelledby="valuesTitle">
      <h2 id="valuesTitle" class="section-title">Core Philosophy</h2>
      <div class="hex-grid">
        <div class="hex-item">
          <div class="hex-inner">
            <i class="fas fa-brain" aria-hidden="true"></i>
            <h4>Innovation</h4>
          </div>
        </div>
        <div class="hex-item">
          <div class="hex-inner">
            <i class="fas fa-heart" aria-hidden="true"></i>
            <h4>Empathy</h4>
          </div>
        </div>
        <div class="hex-item">
          <div class="hex-inner">
            <i class="fas fa-shield-alt" aria-hidden="true"></i>
            <h4>Integrity</h4>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer Section -->
  <?php include("includes/footer.php"); ?>

  <!-- Scripts -->
  <script src="assets/js/main.js" defer></script>
  <script src="assets/js/About Us.js" defer></script>
</body>
</html>