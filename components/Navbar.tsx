'use client';
import { useState, useEffect } from 'react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Programs', href: '#programs' },
  { label: 'About', href: '#about' },
  { label: 'Results', href: '/results' },
  { label: 'Register', href: '#pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.3s ease, border-color 0.3s ease',
        background: scrolled ? 'rgba(12,12,12,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: '1.6rem',
            letterSpacing: '0.08em',
            color: 'var(--text-primary)',
            lineHeight: 1,
          }}>
            GET FIT <span style={{ color: 'var(--lime)' }}>STEPPA</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="hidden-mobile">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-muted)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden-mobile">
          <a href="#pricing" className="btn-lime" style={{ fontSize: '0.875rem', padding: '10px 24px' }}>
            Register Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            color: 'var(--text-primary)',
            display: 'none',
          }}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            ) : (
              <>
                <line x1="2" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="2" y1="11" x2="20" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="2" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--bg-surface)',
          borderTop: '1px solid var(--border)',
          padding: '16px 24px 24px',
        }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontFamily: 'var(--font-outfit)',
                fontSize: '1rem',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {l.label}
            </a>
          ))}
          <a href="#pricing" className="btn-lime" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>
            Register Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
