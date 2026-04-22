import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ASSET_BASE } from '../constants';
import { galleryCategories, galleryImages, galleryImageUrl, type GalleryImage } from '../data/gallery';

const ITEMS_PER_PAGE = 12;
const PRIORITY_IMAGE_COUNT = 6;

type GalleryFilter = (typeof galleryCategories)[number]['key'];

function isGalleryFilter(value: string | null): value is GalleryFilter {
  return Boolean(value && galleryCategories.some((category) => category.key === value));
}

const videos = [
  {
    src: `${ASSET_BASE}/Videos/Vid1.mp4`,
    label: 'Primary Six',
    title: 'Primary Six Class Studies',
    duration: '20 seconds',
    description: 'Primary students engaging in their learning activities.',
    tone: '#8b1e1e',
  },
  {
    src: `${ASSET_BASE}/Videos/Vid2.mp4`,
    label: 'Playground',
    title: 'Lower Section Playground Activity',
    duration: '49 seconds',
    description: 'Our little ones engaging in a wonderful play time moment.',
    tone: '#f4c542',
    darkText: true,
  },
  {
    src: `${ASSET_BASE}/Videos/Vid3.mp4`,
    label: 'Primary One Students',
    title: 'Primary One Students',
    duration: '34 seconds',
    description: 'Our previous Top Class graduates in their new Primary One class.',
    tone: '#8b1e1e',
  },
  {
    src: `${ASSET_BASE}/Videos/Vid4.mp4`,
    label: 'School Events',
    title: 'School Events & Activities',
    duration: 'Video',
    description: 'Highlights from our latest school events and extracurricular activities.',
    tone: '#f4c542',
    darkText: true,
  },
];

const GalleryCard = memo(function GalleryCard({ image, index, onOpen }: { image: GalleryImage; index: number; onOpen: (index: number) => void }) {
  const categoryLabel = image.category.charAt(0).toUpperCase() + image.category.slice(1);
  const isPriority = index < PRIORITY_IMAGE_COUNT;

  return (
    <button className="gallery-item" data-category={image.category} data-index={index} type="button" onClick={() => onOpen(index)}>
      <div className="gallery-category">{categoryLabel}</div>
      <div className="gallery-image">
        <img
          src={galleryImageUrl(image)}
          alt={image.title}
          data-title={image.title}
          data-date={image.date}
          width="400"
          height="300"
          loading={isPriority ? 'eager' : 'lazy'}
          fetchPriority={isPriority ? 'high' : 'low'}
          decoding="async"
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
        />
      </div>
      <div className="gallery-overlay">
        <h3>{image.title}</h3>
        <p>{image.desc}</p>
      </div>
      <div className="gallery-info">
        <div className="gallery-date">{image.date}</div>
        <p>{image.desc}</p>
      </div>
    </button>
  );
});

export function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter');
  const currentFilter: GalleryFilter = isGalleryFilter(filterParam) ? filterParam : 'all';
  const currentPage = Math.max(1, Number.parseInt(searchParams.get('page') ?? '1', 10) || 1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const filteredImages = useMemo(() => {
    if (currentFilter === 'all') return galleryImages;
    return galleryImages.filter((image) => image.category === currentFilter);
  }, [currentFilter]);

  const visibleImages = useMemo(() => filteredImages.slice(0, currentPage * ITEMS_PER_PAGE), [currentPage, filteredImages]);
  const nextPageImages = useMemo(
    () => filteredImages.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE),
    [currentPage, filteredImages],
  );
  const lightboxImage = lightboxIndex === null ? null : filteredImages[lightboxIndex];
  const totalVisible = Math.min(currentPage * ITEMS_PER_PAGE, filteredImages.length);

  const updateGalleryState = (filter: GalleryFilter, page: number) => {
    const nextParams = new URLSearchParams();
    if (filter !== 'all') nextParams.set('filter', filter);
    if (page > 1) nextParams.set('page', String(page));
    setSearchParams(nextParams, { replace: false });
  };

  useEffect(() => {
    document.body.style.overflow = lightboxImage || activeVideo ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeVideo, lightboxImage]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (event.key === 'Escape') setLightboxIndex(null);
      if (event.key === 'ArrowRight') setLightboxIndex((index) => (index === null ? index : Math.min(index + 1, filteredImages.length - 1)));
      if (event.key === 'ArrowLeft') setLightboxIndex((index) => (index === null ? index : Math.max(index - 1, 0)));
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [filteredImages.length, lightboxIndex]);

  useEffect(() => {
    if (!activeVideo || !videoRef.current) return;
    videoRef.current.load();
    videoRef.current.play().catch(() => undefined);
  }, [activeVideo]);

  useEffect(() => {
    if (!nextPageImages.length) return;

    const preloadImages = () => {
      nextPageImages.forEach((image) => {
        const preloadImage = new Image();
        preloadImage.decoding = 'async';
        preloadImage.loading = 'lazy';
        preloadImage.src = galleryImageUrl(image);
        preloadImage.decode?.().catch(() => undefined);
      });
    };

    const idleCallback = window.requestIdleCallback?.(preloadImages, { timeout: 2500 });
    if (!idleCallback) {
      const timeoutId = window.setTimeout(preloadImages, 1000);
      return () => window.clearTimeout(timeoutId);
    }

    return () => window.cancelIdleCallback?.(idleCallback);
  }, [nextPageImages]);

  const closeVideo = () => {
    videoRef.current?.pause();
    setActiveVideo(null);
  };

  return (
    <Layout badge="Check Us Now" text="View Our World - Where Your Child's Dreams Begin">
      <main id="main">
        <section className="gallery-hero visible">
          <div className="gallery-hero__image">
            <img
              src={`${ASSET_BASE}/images/Gallery1.webp`}
              alt="School life"
              width="1600"
              height="900"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="gallery-hero__overlay" />
          <div className="gallery-hero__content">
            <h1 className="gallery-hero__title">Our <span>Gallery</span></h1>
            <p className="gallery-hero__subtitle">Moments that tell our story</p>
          </div>
        </section>

        <div className="container">
          <div className="photo-counter">
            Showing <span id="visibleCount">{totalVisible} of {filteredImages.length} photos</span>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="gallery-filter">
              {galleryCategories.map((category) => (
                <button
                  className={`filter-btn${currentFilter === category.key ? ' active' : ''}`}
                  data-filter={category.key}
                  key={category.key}
                  type="button"
                  onClick={() => {
                    updateGalleryState(category.key, 1);
                    setLightboxIndex(null);
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="gallery-grid" id="galleryGrid">
              {visibleImages.map((image, index) => (
                <GalleryCard image={image} index={index} key={`${image.folder}${image.filename}`} onOpen={setLightboxIndex} />
              ))}
            </div>

            {totalVisible < filteredImages.length ? (
              <div className="load-more-container" id="loadMoreContainer">
                <button className="load-more-btn" id="loadMoreBtn" type="button" onClick={() => updateGalleryState(currentFilter, currentPage + 1)}>
                  Load More Photos <i className="fas fa-arrow-down" aria-hidden="true" />
                </button>
              </div>
            ) : null}
          </div>
        </section>

        <section className="video-gallery-new">
          <div className="container">
            <div className="section-header">
              <h2>Video <span>Gallery</span></h2>
              <p className="lead">Watch our school come to life - click to play</p>
            </div>

            <div className="video-grid-new">
              {videos.map((video) => (
                <button className="video-card-new" key={video.src} type="button" data-video={video.src} onClick={() => setActiveVideo(video.src)}>
                  <div className="video-thumbnail">
                    <div className="video-placeholder" style={{ backgroundColor: video.tone, color: video.darkText ? '#5a1313' : undefined }}>
                      <span>{video.label}</span>
                    </div>
                    <div className="play-button-new"><i className="fas fa-play" aria-hidden="true" /></div>
                  </div>
                  <div className="video-info-new">
                    <h3>{video.title}</h3>
                    <div className="video-meta">
                      <span className="duration"><i className="far fa-clock" aria-hidden="true" /> {video.duration}</span>
                    </div>
                    <p>{video.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className={`lightbox${lightboxImage ? ' active' : ''}`} onClick={(event) => {
          if (event.currentTarget === event.target) setLightboxIndex(null);
        }}>
          <button className="lightbox-close" type="button" onClick={() => setLightboxIndex(null)} aria-label="Close image">
            <i className="fas fa-times" aria-hidden="true" />
          </button>
          <div className="lightbox-nav">
            <button
              className="lightbox-prev"
              type="button"
              onClick={() => setLightboxIndex((index) => (index === null ? index : Math.max(index - 1, 0)))}
              aria-label="Previous image"
              disabled={lightboxIndex === 0}
            >
              <i className="fas fa-chevron-left" aria-hidden="true" />
            </button>
            <button
              className="lightbox-next"
              type="button"
              onClick={() => setLightboxIndex((index) => (index === null ? index : Math.min(index + 1, filteredImages.length - 1)))}
              aria-label="Next image"
              disabled={lightboxIndex === filteredImages.length - 1}
            >
              <i className="fas fa-chevron-right" aria-hidden="true" />
            </button>
          </div>
          {lightboxImage ? (
            <div className="lightbox-content">
              <img src={galleryImageUrl(lightboxImage)} alt={lightboxImage.title} width="1200" height="900" decoding="async" />
              <div className="lightbox-info">
                <h3>{lightboxImage.title}</h3>
                <p>{lightboxImage.desc}</p>
                <div className="gallery-date">{lightboxImage.date}</div>
              </div>
            </div>
          ) : null}
        </div>

        <div className={`video-modal${activeVideo ? ' active' : ''}`} onClick={(event) => {
          if (event.currentTarget === event.target) closeVideo();
        }}>
          <div className="video-modal-content">
            <button className="video-modal-close" type="button" onClick={closeVideo} aria-label="Close video">
              <i className="fas fa-times" aria-hidden="true" />
            </button>
            <video ref={videoRef} controls>
              {activeVideo ? <source src={activeVideo} type="video/mp4" /> : null}
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </main>
    </Layout>
  );
}
