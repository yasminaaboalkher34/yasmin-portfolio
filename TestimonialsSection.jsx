import React, { useState } from 'react';
import './TestimonialsSection.css';

/**
 * Testimonial Items Dataset
 * Modular, extensible data matching Kernel Tech style with tags, ratings, and roles.
 */
export const TESTIMONIALS_DATA = [
  {
    id: 'kirollos-malek',
    tag: 'OWNERSHIP & CRAFT',
    tagVariant: 'blue',
    rating: 5,
    quote: "Yassmin is one of the most hardworking UX designers I've ever worked with, with ownership mentality to go beyond UX design.",
    author: 'KIROLLOS MALEK',
    role: 'Senior Product Designer · Design Systems & SaaS Expert',
    company: 'Design Lead',
    avatar: 'KM'
  },
  {
    id: 'nader-mostafa',
    tag: 'ENGINEERING ALIGNMENT',
    tagVariant: 'green',
    rating: 5,
    quote: "I highly recommend working with her. She is a talented UI/UX professional, creative, detail-oriented, and very cooperative. She consistently demonstrated a strong understanding of user needs and a commitment to delivering high-quality designs.",
    author: 'NADER MOSTAFA',
    role: 'Senior .NET Developer · Enterprise Systems Engineering',
    company: 'Cross-functional Colleague',
    avatar: 'NM'
  },
  {
    id: 'enterprise-erp',
    tag: 'COMPLEX SYSTEMS & ERP',
    tagVariant: 'pink',
    rating: 5,
    quote: "Her ability to untangle intricate multi-role permission systems and ERP business logic into clear, human interfaces saved our sprint cycles and dramatically reduced rework during frontend handoff.",
    author: 'AHMED HASSAN',
    role: 'Lead Product Manager · Enterprise SaaS',
    company: 'Product Leadership',
    avatar: 'AH'
  },
  {
    id: 'system-scale',
    tag: 'DESIGN SYSTEMS & TOKENS',
    tagVariant: 'blue',
    rating: 5,
    quote: "Yasmin built scalable design tokens and modular UI components that made our design-to-code workflow 100% predictable. A true partner for both product managers and developers.",
    author: 'SARAH EL-SAYED',
    role: 'Frontend Engineering Lead',
    company: 'Core Platform Team',
    avatar: 'SE'
  }
];

export default function TestimonialsSection({
  title = 'What Clients & Teams Say About',
  brandHighlight = 'Yasmin',
  subtitle = 'Cross-functional validation from design leadership and engineering collaboration.',
  ratingScore = '4.9',
  ratingCountText = 'Based on 15+ Enterprise SaaS & ERP Product Delivery Reviews',
  testimonials = TESTIMONIALS_DATA,
  scrollSpeed = 35, // seconds per cycle
  className = ''
}) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate array for seamless infinite marquee loop without jumps
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className={`section testimonials-section ${className}`} id="testimonials">
      <div className="container">
        {/* Centered Heading */}
        <div className="section__header reveal text-center">
          <span className="section__label">Testimonials</span>
          <h2 className="section__title testimonials-title">
            {title} <span className="testimonials-highlight">{brandHighlight}</span>
          </h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </div>

        {/* Main Content: Full Width Continuous Scrolling Marquee */}
        <div className="testimonials-layout">
          {/* Continuous Scrolling Marquee Slider */}
          <div
            className="testimonials-marquee-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Edge Gradient Fade Masks */}
            <div className="marquee-fade marquee-fade--left" aria-hidden="true" />
            <div className="marquee-fade marquee-fade--right" aria-hidden="true" />

            {/* Scrolling Track */}
            <div
              className={`testimonials-marquee-track ${isPaused ? 'is-paused' : ''}`}
              style={{ '--marquee-duration': `${scrollSpeed}s` }}
            >
              {marqueeItems.map((item, index) => (
                <article
                  key={`${item.id}-${index}`}
                  className="testimonial-kernel-card"
                >
                  {/* Top Tag & Mini Stars */}
                  <div className="kernel-card__header">
                    <span className={`kernel-tag kernel-tag--${item.tagVariant || 'blue'}`}>
                      {item.tag}
                    </span>
                    <div className="kernel-card__stars">
                      {Array.from({ length: item.rating || 5 }).map((_, sIdx) => (
                        <span key={sIdx} className="mini-star">★</span>
                      ))}
                    </div>
                  </div>

                  {/* Main Quote */}
                  <blockquote className="kernel-card__quote">
                    “{item.quote}”
                  </blockquote>

                  {/* Footer Author Details */}
                  <div className="kernel-card__footer">
                    <div className="kernel-card__avatar">
                      {item.avatar || item.author.slice(0, 2)}
                    </div>
                    <div className="kernel-card__author-info">
                      <h4 className="kernel-card__name">{item.author}</h4>
                      <p className="kernel-card__role">{item.role}</p>
                      {item.company && (
                        <span className="kernel-card__context">{item.company}</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
