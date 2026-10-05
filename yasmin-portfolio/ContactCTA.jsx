import React from 'react';
import Button from './Button';

/**
 * ArrowUpRight Icon Component
 */
export function ArrowUpRightIcon({ width = 16, height = 16, className = 'icon-arrow', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

/**
 * ContactCTA Component
 * Features the signature brand pink (#FF8BD2) CTA button with high-contrast text and mailto link.
 */
export default function ContactCTA({
  email = 'yasminaboalkher34@gmail.com',
  subject = 'Product Design Inquiry',
  resumePath = 'assets/Yasmin Aboalkhair Resume.pdf',
  className = ''
}) {
  return (
    <footer className={`footer ${className}`} id="contact">
      <div className="container">
        <div className="footer__cta reveal">
          <h2 className="footer__headline">
            Have a complex product in mind?<br />Let's connect.
          </h2>
          <p className="footer__subtext">
            Currently open to Product Design opportunities where I can solve complex problems,
            scale design systems, and drive measurable business impact.
          </p>
          <div className="footer__actions">
            {/* Primary Brand Pink CTA Button */}
            <Button
              variant="pink"
              size="large"
              email={email}
              subject={subject}
              isMailto={true}
              icon="✉️"
              aria-label="Send an email to Yasmin"
            >
              Get in Touch
            </Button>

            {/* Secondary Ghost Button */}
            <Button
              variant="ghost"
              size="large"
              href={resumePath}
              target="_blank"
              icon={<ArrowUpRightIcon />}
              aria-label="View Yasmin's Resume"
            >
              View Resume
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
