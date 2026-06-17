'use client';

const navLinks = [
  { label: 'Programs', href: '#programs' },
  { label: 'About', href: '#about' },
  { label: 'Results', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}>
      {/* CTA Band */}
      <div style={{
        background: 'var(--lime)',
        padding: '64px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          color: '#0C0C0C',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          marginBottom: 24,
        }}>
          READY TO MAKE THE STEP?
        </h2>
        <p style={{ fontSize: '1rem', color: 'rgba(0,0,0,0.6)', marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
          Book your free 20-minute discovery call and find out what elite coaching looks like for you.
        </p>
        <a
          href="#pricing"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: '#0C0C0C',
            color: 'var(--lime)',
            fontFamily: 'var(--font-bebas)',
            fontSize: '1rem',
            letterSpacing: '0.1em',
            padding: '14px 36px',
            borderRadius: 2,
            textDecoration: 'none',
            transition: 'opacity 0.2s ease, transform 0.15s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Start Coaching
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: '1.8rem',
              letterSpacing: '0.06em',
              color: 'var(--text-primary)',
              marginBottom: 16,
            }}>
              GET FIT <span style={{ color: 'var(--lime)' }}>STEPPA</span>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--text-muted)', maxWidth: 300, marginBottom: 24 }}>
              Elite personal training and coaching that delivers real, lasting results.
              Based everywhere — coaching worldwide.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { label: 'Instagram', d: 'M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zM8 10a2 2 0 110-4 2 2 0 010 4zm3.5-6a.5.5 0 110 1 .5.5 0 010-1z' },
                { label: 'TikTok', d: 'M9 2v8.268A3 3 0 105.732 13M9 2h3a4 4 0 004 4v3a7 7 0 01-3-.668' },
                { label: 'YouTube', d: 'M2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm6.5-1L7 8l1.5 3 3-4H8.5z' },
              ].map(s => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 2,
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease, border-color 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--lime)'; e.currentTarget.style.borderColor = 'rgba(201,243,29,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d={s.d} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {navLinks.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'steppa@getfit.com', href: 'mailto:steppa@getfit.com' },
                { label: '@getfitwithsteppa', href: '#' },
                { label: 'Book a Call', href: '#pricing' },
              ].map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--lime)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: 24,
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            © 2026 Get Fit with Steppa. All rights reserved.
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Privacy Policy · Terms of Service
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div:last-child > div:first-child { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </footer>
  );
}
