'use client';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 60,
    yearlyPrice: 48,
    description: 'Perfect for those just beginning their fitness journey.',
    features: [
      'Custom 4-week training program',
      'Basic nutrition guidelines',
      'Access to exercise library',
      'Email support',
      'Monthly check-in call',
    ],
    notIncluded: ['Weekly video calls', 'Daily message support', 'Competition prep'],
    popular: false,
    cta: 'Start Starter',
  },
  {
    name: 'Pro',
    monthlyPrice: 100,
    yearlyPrice: 80,
    description: 'The most popular choice for serious transformations.',
    features: [
      'Custom 12-week training program',
      'Full nutrition & macro plan',
      'Weekly program adjustments',
      'Weekly check-in call (30 min)',
      'WhatsApp message support',
      'Progress photo analysis',
    ],
    notIncluded: ['Competition prep'],
    popular: true,
    cta: 'Start Pro',
  },
  {
    name: 'Elite',
    monthlyPrice: 170,
    yearlyPrice: 136,
    description: 'Full-service coaching for those who want the absolute best.',
    features: [
      'Custom ongoing training program',
      'Advanced nutrition & periodization',
      'Daily program adjustments',
      'Unlimited video calls',
      '24/7 WhatsApp support',
      'Progress photo analysis',
      'Competition prep available',
    ],
    notIncluded: [],
    popular: false,
    cta: 'Start Elite',
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" style={{ padding: '120px 24px', background: 'var(--bg-surface)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 32 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span className="section-number">07 — Pricing</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
              color: 'var(--text-primary)',
            }}>
              INVEST IN
              <br /><span style={{ color: 'var(--lime)' }}>YOUR BEST SELF</span>
            </h2>
          </div>

          {/* Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: '0.875rem', color: yearly ? 'var(--text-muted)' : 'var(--text-primary)', fontWeight: 500 }}>Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              style={{
                width: 48,
                height: 26,
                borderRadius: 13,
                background: yearly ? 'var(--lime)' : 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                cursor: 'pointer',
                position: 'relative',
                transition: 'background 0.2s ease',
                padding: 0,
              }}
              aria-label="Toggle yearly billing"
            >
              <div style={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: yearly ? '#0C0C0C' : 'var(--text-muted)',
                position: 'absolute',
                top: 3,
                left: yearly ? 27 : 3,
                transition: 'left 0.2s ease, background 0.2s ease',
              }} />
            </button>
            <span style={{ fontSize: '0.875rem', color: yearly ? 'var(--text-primary)' : 'var(--text-muted)', fontWeight: 500 }}>
              Yearly
              <span style={{
                marginLeft: 8,
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--lime)',
                background: 'rgba(201,243,29,0.1)',
                border: '1px solid rgba(201,243,29,0.2)',
                padding: '2px 8px',
                borderRadius: 2,
              }}>Save 20%</span>
            </span>
          </div>
        </div>

        {/* Plans */}
        <div id="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.popular ? 'var(--bg-elevated)' : 'var(--bg-base)',
                border: plan.popular ? '1px solid rgba(201,243,29,0.25)' : '1px solid var(--border)',
                padding: '40px 32px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: -1,
                  left: -1,
                  right: -1,
                  height: 2,
                  background: 'var(--lime)',
                }} />
              )}

              {plan.popular && (
                <div style={{
                  display: 'inline-flex',
                  alignSelf: 'flex-start',
                  background: 'var(--lime)',
                  color: '#0C0C0C',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  marginBottom: 20,
                  borderRadius: 2,
                }}>Most Popular</div>
              )}

              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.5rem', letterSpacing: '0.06em', color: 'var(--text-primary)', marginBottom: 8 }}>{plan.name}</div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 28 }}>{plan.description}</p>

              {/* Price */}
              <div style={{ marginBottom: 32 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '3.5rem', color: 'var(--text-primary)', lineHeight: 1 }}>
                    ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>/month</span>
                </div>
                {yearly && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--lime)', marginTop: 4 }}>
                    Billed annually — saves ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/yr
                  </div>
                )}
              </div>

              {/* Features */}
              <div style={{ flex: 1, marginBottom: 32 }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'rgba(201,243,29,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 4l2 2 4-4" stroke="#C9F31D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>{f}</span>
                  </div>
                ))}
                {plan.notIncluded.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12, opacity: 0.35 }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M2 2l4 4M6 2L2 6" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="mailto:steppa@getfitwithsteppa.com"
                className={plan.popular ? 'btn-lime' : 'btn-ghost'}
                style={{ justifyContent: 'center', textDecoration: 'none' }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Money-back note */}
        <p style={{ textAlign: 'center', marginTop: 24, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          All plans include a <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>7-day free consultation</span>. No contracts, cancel anytime.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #pricing { padding: 72px 20px !important; }
          #pricing > div > div:first-child { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
        }
        @media (max-width: 900px) {
          #pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
