import React from 'react';

/**
 * WorkExperience Dataset & Component
 * Clean timeline rows displaying company logos, roles, employment types, and date ranges.
 */
export const EXPERIENCE_DATA = [
  {
    id: 'microtec',
    company: 'Microtec Solutions',
    role: 'UI/UX Designer',
    location: 'Egypt (Hybrid)',
    type: 'Full-Time',
    period: '2023 — Present',
    logoInitials: 'M',
    logoVariant: 'blue'
  },
  {
    id: 'prepchip',
    company: 'PrepChip Platform',
    role: 'Lead Product Designer',
    location: 'Saudi Arabia & Egypt',
    type: 'Contract',
    period: '2023 — 2024',
    logoInitials: 'PC',
    logoVariant: 'pink'
  },
  {
    id: 'global-saas',
    company: 'Global SaaS & Enterprise Products',
    role: 'Senior UI/UX & Systems Designer',
    location: 'MENA & Global (Remote)',
    type: 'Freelance',
    period: '2022 — Present',
    logoInitials: 'GL',
    logoVariant: 'mint'
  },
  {
    id: 'miami-center',
    company: 'Miami Center & Retail Tech',
    role: 'Product & Interface Designer',
    location: 'Egypt',
    type: 'Project-Based',
    period: '2022 — 2023',
    logoInitials: 'MC',
    logoVariant: 'orange'
  }
];

export default function WorkExperience({
  title = 'Companies & Experience',
  label = 'WORK HISTORY',
  subtitle = 'A timeline of products, design systems, and platforms I’ve worked on.',
  experiences = EXPERIENCE_DATA,
  className = ''
}) {
  return (
    <section className={`section section--alt ${className}`} id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section__header reveal">
          <span className="section__label">{label}</span>
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </div>

        {/* Experience List Rows */}
        <div className="experience-list">
          {experiences.map((item, index) => (
            <div
              key={item.id || index}
              className={`experience-item reveal reveal-delay-${(index % 4) + 1}`}
            >
              {/* Left Side: Logo + Company Info */}
              <div className="experience-company-wrap">
                <div
                  className={`experience-logo experience-logo--${item.logoVariant || 'blue'}`}
                  aria-hidden="true"
                >
                  <span>{item.logoInitials || item.company.slice(0, 2).toUpperCase()}</span>
                </div>
                <div className="experience-info">
                  <h3 className="experience-company">{item.company}</h3>
                  <div className="experience-role-location">
                    <strong className="experience-role">{item.role}</strong>
                    <span className="experience-location">— {item.location}</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Badges */}
              <div className="experience-badges">
                <span className="experience-badge experience-badge--type">
                  {item.type}
                </span>
                <span className="experience-badge experience-badge--date">
                  <svg
                    className="calendar-icon"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
