'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'How does online coaching work?',
    a: 'After your intake consultation, I build your custom program and nutrition plan. You get access to a training app where your program lives. We do weekly check-ins via video or message, and I adjust the program as you progress. You can message me anytime via WhatsApp.',
  },
  {
    q: 'Do I need gym access to work with you?',
    a: 'Not necessarily. I can program for home workouts with minimal equipment, full gym access, or anything in between. We discuss your setup during the intake and design your program accordingly.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Most clients notice meaningful changes in energy, strength, and body composition within 4-6 weeks. Visible transformation results typically show at 8-12 weeks. Results depend on consistency, sleep, and how closely you follow the nutrition guidance.',
  },
  {
    q: 'Can I do online coaching if I travel frequently?',
    a: 'Absolutely. That\'s one of the biggest advantages of online coaching. I\'ll adapt your program for hotel gyms, no gym, or wherever you are. The program adjusts to your reality — not the other way around.',
  },
  {
    q: 'What makes your coaching different from an app or generic plan?',
    a: 'Everything is built specifically for you. Not an algorithm — me. I know your history, your schedule, your weak points, and your goals. When something isn\'t working, I change it. No app does that.',
  },
  {
    q: 'How do I get started?',
    a: 'Pick a plan above, click "Start [Plan]" and send me a message. We\'ll schedule a free 20-minute discovery call to make sure we\'re the right fit. If we are, I\'ll send your intake form and we start building your program within 48 hours.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: '120px 24px', background: 'var(--bg-base)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <span className="section-number">08 — FAQ</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
          }}>
            GOT QUESTIONS?
            <br /><span style={{ color: 'var(--lime)' }}>WE HAVE ANSWERS.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  background: isOpen ? 'var(--bg-surface)' : 'var(--bg-surface)',
                  border: isOpen ? '1px solid rgba(201,243,29,0.2)' : '1px solid var(--border)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '24px 28px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 16,
                    textAlign: 'left',
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: isOpen ? 'var(--text-primary)' : 'var(--text-primary)',
                    lineHeight: 1.4,
                  }}>{item.q}</span>
                  <div style={{
                    width: 28,
                    height: 28,
                    borderRadius: 2,
                    background: isOpen ? 'var(--lime)' : 'var(--bg-elevated)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background 0.2s ease, transform 0.3s ease',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 2v8M2 6h8" stroke={isOpen ? '#0C0C0C' : '#6B6B6B'} strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </button>

                <div style={{
                  maxHeight: isOpen ? '600px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                  <p style={{
                    padding: '0 28px 24px',
                    fontSize: '0.9rem',
                    lineHeight: 1.75,
                    color: 'var(--text-muted)',
                    margin: 0,
                  }}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #faq { padding: 72px 20px !important; }
          #faq button { padding: 20px 20px !important; }
          #faq p { padding: 0 20px 20px !important; }
        }
      `}</style>
    </section>
  );
}
