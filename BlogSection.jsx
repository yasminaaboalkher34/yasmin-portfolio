import React from 'react';

/**
 * BlogSection Component (Kernel Tech Style Split Layout)
 * Features a fixed/sticky left sidebar and rich right article card.
 */
export default function BlogSection({
  label = 'Writing & Research',
  title = 'Featured',
  highlight = 'Articles',
  subtitle = 'Practical guides, UX research insights, and thoughts on building scalable product experiences.',
  mediumProfileUrl = 'https://medium.com/@yasminaaboalkher34',
  article = {
    title: 'Mastering Usability Testing: A Key to Perfecting User Experience',
    url: 'https://medium.com/@yasminaaboalkher34/mastering-usability-testing-a-key-to-perfecting-user-experience-05d46ee6edf5',
    imageSrc: 'assets/blog-cover.jpg',
    tags: [
      { label: 'UX RESEARCH', variant: 'blue' },
      { label: 'MEDIUM ARTICLE', variant: 'pink' }
    ],
    excerpt: 'A practical guide on structuring usability test plans, uncovering hidden user friction, and turning qualitative feedback into measurable UI improvements.'
  },
  className = ''
}) {
  return (
    <section className={`section section--alt blog-section ${className}`} id="blog">
      <div className="container">
        <div className="blog-split-grid">
          
          {/* Left Sidebar: Header & CTA */}
          <div className="blog-sidebar reveal">
            <span className="section__label">{label}</span>
            <h2 className="blog-sidebar__title">
              {title} <span className="text-accent">{highlight}</span>
            </h2>
            <p className="blog-sidebar__subtitle">{subtitle}</p>
            <div className="blog-sidebar__action">
              <a
                href={mediumProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-cta-btn"
              >
                <span>View Medium Profile</span>
                <span className="blog-cta-btn__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon-arrow"
                    aria-hidden="true"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right Side: Blog Card Component */}
          <div className="blog-content reveal reveal-delay-1">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
              aria-label={`Read article: ${article.title}`}
            >
              {/* Image Cover */}
              <div className="blog-card__image-wrapper">
                <img
                  src={article.imageSrc}
                  alt={article.title}
                  className="blog-card__img"
                  loading="lazy"
                />
                <div className="blog-card__overlay-badge">
                  <span>Medium</span>{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon-arrow"
                    aria-hidden="true"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>

              {/* Card Body */}
              <div className="blog-card__body">
                {/* Badges */}
                <div className="blog-card__tags">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`blog-tag blog-tag--${tag.variant || 'blue'}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="blog-card__title">{article.title}</h3>

                {/* Excerpt */}
                <p className="blog-card__excerpt">{article.excerpt}</p>

                {/* Footer Link */}
                <div className="blog-card__footer">
                  <span className="blog-card__read-more">
                    <span>CONTINUE READING</span>{' '}
                    <span className="read-more-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon-arrow"
                        aria-hidden="true"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
