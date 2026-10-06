import React from 'react';
import BorderGlow from './BorderGlow';
import './ApproachSection.css';

const BRAND_COLORS = ['#3B82F6', '#FF8BD2', '#A5E1C4'];

const approachData = [
  {
    number: '01',
    title: 'Product Thinking',
    desc: 'Moving teams from ambiguous feature requests to framed, measurable product outcomes.',
    colorClass: 'blue',
    skills: ['Problem Framing', 'Journey Mapping', 'Prioritization', 'Product Strategy']
  },
  {
    number: '02',
    title: 'Experience Design',
    desc: 'Turning complicated business logic into flows detailed enough to build effortlessly.',
    colorClass: 'pink',
    skills: ['Information Architecture', 'Interaction Design', 'Responsive Web & Mobile', 'Prototyping']
  },
  {
    number: '03',
    title: 'Systems & Scale',
    desc: 'Patterns and architectures that survive the next release, not just the current screen.',
    colorClass: 'green',
    skills: ['Design Systems', 'Roles & Permissions (RBAC)', 'State Models', 'RTL & LTR Parity']
  },
  {
    number: '04',
    title: 'Delivery',
    desc: 'Staying close to implementation so design intent survives handoff 100%.',
    colorClass: 'blue',
    skills: ['Engineering Collaboration', 'Design Tokens', 'QA & Staging Testing', 'AI-Assisted Workflows']
  }
];

export default function ApproachSection() {
  return (
    <section className="section section--alt" id="approach">
      <div className="container">
        <div className="approach__intro reveal">
          <span className="section__label">Approach</span>
          <h2 className="approach__quote">Good interfaces begin with an understood system.</h2>
          <p className="approach__desc">
            I design clear, scalable products across enterprise SaaS, ERP, and complex multi-role
            platforms working from problem diagnosis through to production handoff.
          </p>
        </div>

        <div className="pillars-grid">
          {approachData.map((item, index) => (
            <BorderGlow
              key={index}
              className={`pillar-card reveal reveal-delay-${index + 1}`}
              backgroundColor="#FFFFFF"
              borderRadius={24}
              edgeSensitivity={35}
              glowRadius={30}
              glowIntensity={0.8}
              colors={BRAND_COLORS}
            >
              <div className="pillar-card__content">
                <span className={`pillar-card__number pillar-card__number--${item.colorClass}`}>
                  {item.number}
                </span>
                <h3 className="pillar-card__title">{item.title}</h3>
                <p className="pillar-card__desc">{item.desc}</p>
                <div className="skill-chips">
                  {item.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className={`skill-chip skill-chip--${item.colorClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
