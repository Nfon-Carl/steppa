'use client';

const programs = [
  {
    number: '01',
    title: 'Online Coaching',
    description:
      'Fully personalised training programs delivered to your phone. Weekly check-ins, nutrition guidance, and 24/7 support — wherever you are in the world.',
    tags: ['Custom Program', 'Nutrition Plan', 'Weekly Check-ins', '24/7 Support'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 24h10M14 20v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: '1-on-1 Training',
    description:
      'Train directly with Steppa in-person or via live video. Every session is tailored, coached in real-time, and designed to push you further than you go alone.',
    tags: ['Live Coaching', 'Form Correction', 'Real-time Feedback', 'Flexible Scheduling'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 24c0-4.418 3.582-8 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="14" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 24c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Group Sessions',
    description:
      'Small-group training with maximum energy. Build strength, burn fat, and stay motivated alongside a crew of driven individuals all chasing the same goal.',
    tags: ['Small Groups', 'Community', 'High Energy', 'Strength & Conditioning'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 22c0-3.314 2.686-6 6-6M20 16c3.314 0 6 2.686 6 6M8 22c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Programs() {
  return (
    <section id="programs" style={{ padding: '120px 24px', background: 'var(--bg-base)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <span className="section-number">02 — Programs</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
            maxWidth: 600,
          }}>
            TRAINING BUILT
            <br /><span style={{ color: 'var(--lime)' }}>AROUND YOU</span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
        }}>
          {programs.map((p, i) => (
            <div
              key={p.number}
              className="card-hover"
              style={{
                background: i === 1 ? 'var(--bg-elevated)' : 'var(--bg-surface)',
                border: i === 1 ? '1px solid rgba(201,243,29,0.15)' : '1px solid var(--border)',
                padding: '48px 36px',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              {/* Number */}
              <div style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: '4rem',
                color: 'rgba(255,255,255,0.04)',
                lineHeight: 1,
                position: 'absolute',
                top: 24,
                right: 28,
                letterSpacing: '-0.02em',
              }}>{p.number}</div>

              {/* Icon */}
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 2,
                background: i === 1 ? 'var(--lime)' : 'rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 28,
                color: i === 1 ? '#0C0C0C' : 'var(--text-muted)',
              }}>
                {p.icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: '1.8rem',
                letterSpacing: '0.02em',
                color: 'var(--text-primary)',
                marginBottom: 16,
              }}>{p.title}</h3>

              <p style={{
                fontSize: '0.9rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                marginBottom: 28,
              }}>{p.description}</p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: i === 1 ? 'var(--lime)' : 'var(--text-muted)',
                    border: `1px solid ${i === 1 ? 'rgba(201,243,29,0.25)' : 'rgba(255,255,255,0.08)'}`,
                    padding: '4px 10px',
                    borderRadius: 2,
                  }}>{tag}</span>
                ))}
              </div>

              {/* Link */}
              <a
                href="#pricing"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: i === 1 ? 'var(--lime)' : 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease, gap 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--lime)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = i === 1 ? 'var(--lime)' : 'var(--text-muted)'; }}
              >
                Get Started
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
          <a href="#pricing" className="btn-lime" style={{ textDecoration: 'none', fontSize: '1rem', padding: '16px 48px' }}>
            Register Now
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #programs { padding: 72px 20px !important; }
        }
        @media (max-width: 900px) {
          #programs > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
