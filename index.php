<?php
/**
 * Homepage
 * King David Primary & Kindergarten School
 */
$current_page = 'index';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    
    <!-- Primary Meta Tags -->
    <title>King David Primary & Kindergarten School | Excellence in Education</title>
    <meta name="title" content="King David Primary & Kindergarten School | Excellence in Education">
    <meta name="description" content="King David School nurtures curiosity, empowers young leaders, and builds foundations for lifelong learning. Enroll today for Kindergarten & Primary.">
    <meta name="keywords" content="school, kindergarten, primary school, education, Uganda, Wattuba, Matugga, King David School">
    <meta name="author" content="King David School">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://kingdavidschool.com/">
    <meta property="og:title" content="King David Primary & Kindergarten School">
    <meta property="og:description" content="Your child's future starts now. Nurturing excellence since 2010.">
    <meta property="og:image" content="assets/images/logo/New Logo.png">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://kingdavidschool.com/">
    <meta property="twitter:title" content="King David Primary & Kindergarten School">
    <meta property="twitter:description" content="Your child's future starts now.">
    <meta property="twitter:image" content="assets/images/logo/New Logo.png">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="assets/images/logo/New Logo.png">
    <link rel="apple-touch-icon" href="assets/images/logo/New Logo.png">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <!-- Font Awesome – NO integrity attribute (fixes icon issues) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/home.css">
</head>
<body>
    <!-- Announcement Section -->
  <div class="announcement" role="region" aria-label="Admission announcement">
    <div class="announcement__inner">
      <span class="announcement__badge" style="text-align: center;">Welcome to King David Day & Boarding Primary & Kindergarten School</span>
    </div>
  </div>

    <!-- Header -->
    <?php include 'includes/header.php'; ?>

    <main id="main">
        <!-- Hero Section -->
        <section class="hero" aria-label="Hero section">
            <div class="hero__bg">
                <div class="hero__overlay"></div>
                <img src="assets/images/index/maroon.JPG" 
                     alt="Students learning at King David School" 
                     class="hero__image"
                     loading="eager">
            </div>
            
            <div class="container">
                <div class="hero__content">
                    <span class="hero__badge animate-fade-in-down">
                        <i class="fas fa-crown" aria-hidden="true"></i>
                        Established 2007
                    </span>
                    
                    <h1 class="hero__title animate-fade-in-up">
                        Merit The Crown
                        <span class="hero__accent">Shaping hearts, minds & futures</span>
                    </h1>
                    
                    <p class="hero__subtitle animate-fade-in-up">
                        We provide, teach, and work hard to ensure our students spark 
                        positive change in our community and the world.
                    </p>
                    
                    <div class="hero__actions animate-fade-in-up">
                        <a href="About Us.php" class="button button--primary button--lg">
                            <i class="fas fa-info-circle" aria-hidden="true"></i>
                            Discover Our Story
                        </a>
                        <a href="Contact Us.php" class="button button--ghost button--lg">
                            <i class="fas fa-graduation-cap" aria-hidden="true"></i>
                            Enroll Today
                        </a>
                    </div>
                    
                    <div class="hero__stats">
                        <div class="stat-item">
                            <span class="stat-number" data-count-to="500">0</span>
                            <span class="stat-label">Happy Students</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number" data-count-to="19">0</span>
                            <span class="stat-label">Years Excellence</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number" data-count-to="50">0</span>
                            <span class="stat-label">Expert Teachers</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="hero__wave" aria-hidden="true">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
                          fill="white"/>
                </svg>
            </div>
        </section>

        <!-- Programs Section -->
        <section class="section programs" aria-labelledby="programs-title">
            <div class="container">
                <div class="section__header">
                    <span class="section__subtitle">What We Offer</span>
                    <h2 id="programs-title" class="section__title">Programs That Grow With Your Child</h2>
                    <p class="section__lead">
                        From play-based discovery to leadership and literacy, we build 
                        strong foundations for lifelong learning.
                    </p>
                </div>
                
                <div class="programs__grid">
                    <!-- Kindergarten Card -->
                    <article class="program-card">
                        <div class="program-card__image">
                            <img src="assets/images/index/kindergarten.jpg" 
                                 alt="Children learning through play in Kindergarten"
                                 loading="lazy"
                                 width="400"
                                 height="300">
                            <div class="program-card__badge">
                                <i class="fas fa-child" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div class="program-card__content">
                            <h3>Kindergarten</h3>
                            <p>A nurturing environment where young learners grow through play-based activities, curiosity, and care.</p>
                            <div class="program-card__features">
                                <span><i class="fas fa-check-circle" aria-hidden="true"></i> Ages 3-5</span>
                                <span><i class="fas fa-check-circle" aria-hidden="true"></i> Play-based</span>
                            </div>
                            <a href="Contact Us.php" class="program-card__link">
                                Learn More <i class="fas fa-arrow-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </article>
                    
                    <!-- Scouts Card -->
                    <article class="program-card">
                        <div class="program-card__image">
                            <img src="assets/images/index/Scouts.jpg" 
                                 alt="School scouts practicing teamwork"
                                 loading="lazy"
                                 width="400"
                                 height="300">
                            <div class="program-card__badge">
                                <i class="fas fa-campground" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div class="program-card__content">
                            <h3>Prefecture Program</h3>
                            <p>Teamwork, leadership, problem-solving, character, and citizenship — all built through prefecture activities.</p>
                            <div class="program-card__features">
                                <span><i class="fas fa-check-circle" aria-hidden="true"></i> Leadership</span>
                                <span><i class="fas fa-check-circle" aria-hidden="true"></i> Character</span>
                            </div>
                            <a href="Gallery.php" class="program-card__link">
                                See Activities <i class="fas fa-arrow-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </article>
                    
                    <!-- Primary Card -->
                    <article class="program-card">
                        <div class="program-card__image">
                            <img src="assets/images/index/Primary.jpg" 
                                 alt="Primary students engaged in class"
                                 loading="lazy"
                                 width="400"
                                 height="300">
                            <div class="program-card__badge">
                                <i class="fas fa-book-open" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div class="program-card__content">
                            <h3>Primary School</h3>
                            <p>Curious, creative, and enthusiastic learners — passionate about making a difference in their world.</p>
                            <div class="program-card__features">
                                <span><i class="fas fa-check-circle" aria-hidden="true"></i> P1-P7</span>
                                <span><i class="fas fa-check-circle" aria-hidden="true"></i> Excellence</span>
                            </div>
                            <a href="About Us.php" class="program-card__link">
                                Discover More <i class="fas fa-arrow-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- Vision Section -->
        <section class="section vision" aria-labelledby="vision-title">
            <div class="container">
                <div class="vision__grid">
                    <div class="vision__content">
                        <span class="section__subtitle">Our Philosophy</span>
                        <h2 id="vision-title" class="vision__title">Nurturing Excellence, Inspiring Dreams</h2>
                        
                        <div class="vision__cards">
                            <div class="vision-card">
                                <div class="vision-card__icon">
                                    <i class="fas fa-brain"></i>
                                </div>
                                <div class="vision-card__content">
                                    <h3>Nurturing Curious Minds</h3>
                                    <p>We provide a stimulating environment that encourages creativity and critical thinking.</p>
                                </div>
                            </div>
                            
                            <div class="vision-card">
                                <div class="vision-card__icon">
                                    <i class="fas fa-crown"></i>
                                </div>
                                <div class="vision-card__content">
                                    <h3>Empowering Young Leaders</h3>
                                    <p>We cultivate confidence, compassion, and responsibility to make a positive impact.</p>
                                </div>
                            </div>
                            
                            <div class="vision-card">
                                <div class="vision-card__icon">
                                    <i class="fas fa-tree"></i>
                                </div>
                                <div class="vision-card__content">
                                    <h3>Foundations for Life</h3>
                                    <p>We spark passion for knowledge, a love of reading, and curiosity about the world.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="vision__image">
                        <img src="assets/images/index/All.jpg" 
                             alt="Students learning together"
                             loading="lazy"
                             class="vision__img">
                        <div class="vision__stats-card">
                            <div class="stats-mini">
                                <div class="stats-mini__item">
                                    <span class="stats-mini__number">100%</span>
                                    <span class="stats-mini__label">Pass Rate</span>
                                </div>
                                <div class="stats-mini__item">
                                    <span class="stats-mini__number">500+</span>
                                    <span class="stats-mini__label">Students</span>
                                </div>
                                <div class="stats-mini__item">
                                    <span class="stats-mini__number">15+</span>
                                    <span class="stats-mini__label">Years</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose Us Section -->
<section class="section features-section" aria-labelledby="features-title">
    <div class="container">
        <div class="section__header">
            <span class="section__subtitle">Why Us</span>
            <h2 id="features-title" class="section__title">Why Choose King David?</h2>
            <p class="section__lead">A place where your child grows, learns, and thrives</p>
        </div>

        <div class="features-grid">
            <?php
            $features = [
                [
                    'icon' => 'fas fa-chalkboard-teacher',
                    'title' => 'Qualified Teachers',
                    'desc'  => 'Our dedicated, experienced educators nurture every child’s potential.'
                ],
                [
                    'icon' => 'fas fa-laptop',
                    'title' => 'Modern Classrooms',
                    'desc'  => 'Interactive learning spaces equipped with current technology.'
                ],
                [
                    'icon' => 'fas fa-futbol',
                    'title' => 'Sports & Clubs',
                    'desc'  => 'Wide range of extracurricular activities for holistic growth.'
                ],
                [
                    'icon' => 'fas fa-bus',
                    'title' => 'Safe Transport',
                    'desc'  => 'Reliable, supervised school transport for peace of mind.'
                ],
                [
                    'icon' => 'fas fa-heart',
                    'title' => 'Caring Environment',
                    'desc'  => 'A warm, inclusive community where every child feels valued.'
                ],
                [
                    'icon' => 'fas fa-trophy',
                    'title' => 'Academic Excellence',
                    'desc'  => 'Proven track record of outstanding results and achievements.'
                ]
            ];

            foreach ($features as $feature):
            ?>
            <div class="feature-card">
                <div class="feature-card__icon">
                    <i class="<?php echo $feature['icon']; ?>" aria-hidden="true"></i>
                </div>
                <h3 class="feature-card__title"><?php echo $feature['title']; ?></h3>
                <p class="feature-card__desc"><?php echo $feature['desc']; ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

        <!-- Testimonials Section -->
        <section class="section testimonials" aria-labelledby="testimonials-title">
            <div class="container">
                <div class="section__header">
                    <span class="section__subtitle">Stories</span>
                    <h2 id="testimonials-title" class="section__title">What Our Community Says</h2>
                </div>
                
                <div class="testimonials__slider">
                    <div class="testimonials__track" id="testimonialTrack">
                        <!-- Testimonial 1 -->
                        <div class="testimonial-card">
                            <div class="testimonial-card__quote">
                                <i class="fas fa-quote-left" aria-hidden="true"></i>
                            </div>
                            <p class="testimonial-card__text">
                                "King David nurtured my daughter's curiosity — now she leads confidently. 
                                The teachers are incredibly supportive and truly care about each child's growth."
                            </p>
                            <div class="testimonial-card__author">
                                <img src="assets/images/staff2.jpg" 
                                     alt="Mr. Dean Bukenya" 
                                     class="testimonial-card__image"
                                     loading="lazy">
                                <div class="testimonial-card__info">
                                    <strong>Mr. Akeny Douglas</strong>
                                    <span>Parent</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Testimonial 2 -->
                        <div class="testimonial-card">
                            <div class="testimonial-card__quote">
                                <i class="fas fa-quote-left" aria-hidden="true"></i>
                            </div>
                            <p class="testimonial-card__text">
                                "The foundation I received here helped me excel in secondary school and beyond. 
                                King David doesn't just teach; they build character."
                            </p>
                            <div class="testimonial-card__author">
                                <img src="assets/images/staff3.jpg" 
                                     alt="Lawrence Bukenya" 
                                     class="testimonial-card__image"
                                     loading="lazy">
                                <div class="testimonial-card__info">
                                    <strong>Lawrence Bukenya</strong>
                                    <span>Alumnus, Class of 2019</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Testimonial 3 -->
                        <div class="testimonial-card">
                            <div class="testimonial-card__quote">
                                <i class="fas fa-quote-left" aria-hidden="true"></i>
                            </div>
                            <p class="testimonial-card__text">
                                "As a teacher here, I've seen countless success stories. The values taught 
                                here are world-class, and the community support is amazing."
                            </p>
                            <div class="testimonial-card__author">
                                <img src="assets/images/staff1.jpg" 
                                     alt="Mr Godfrey Hanghuja" 
                                     class="testimonial-card__image"
                                     loading="lazy">
                                <div class="testimonial-card__info">
                                    <strong>Tr. Godfrey Hanghuja</strong>
                                    <span>Public Relations Officer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="testimonials__dots" id="testimonialDots">
                        <span class="dot active"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <?php include 'includes/footer.php'; ?>

    <!-- Scripts -->
    <script src="assets/js/main.js" defer></script>
    <script src="assets/js/home.js" defer></script>
</body>
</html>