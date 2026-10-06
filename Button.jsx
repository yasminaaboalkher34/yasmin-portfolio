import React from 'react';

/**
 * Reusable Button Component
 * Supports design system variants: pink (#FF8BD2 with white text), primary, ghost, blue, and large.
 */
export default function Button({
  children = 'Get in Touch',
  variant = 'pink', // 'pink' | 'primary' | 'ghost' | 'blue'
  size = 'medium', // 'medium' | 'large'
  href,
  isMailto = false,
  email = 'yasminaboalkher34@gmail.com',
  subject = 'Product Design Inquiry',
  icon,
  className = '',
  target,
  rel,
  onClick,
  ...props
}) {
  const sizeClass = size === 'large' ? 'btn--large' : '';
  const variantClass = `btn--${variant}`;
  const combinedClasses = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  // Compute mailto target if specified
  const computedHref = isMailto || (variant === 'pink' && !href)
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : href;

  if (computedHref) {
    return (
      <a
        href={computedHref}
        className={combinedClasses}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        onClick={onClick}
        {...props}
      >
        <span>{children}</span>
        {icon && <span className="btn__icon" aria-hidden="true">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="btn__icon" aria-hidden="true">{icon}</span>}
    </button>
  );
}
