const testimonials = [
  {
    name: 'James O.',
    role: 'Online Coaching Client',
    text: 'Steppa doesn\'t just write a program and disappear. The accountability is next level — check-ins, adjustments, constant feedback. It\'s the real deal.',
    rating: 5,
  },
  {
    name: 'Sarah B.',
    role: '1-on-1 Training Client',
    text: 'I\'d tried 3 other trainers before Steppa. None of them came close to the results I\'ve had here. The structure, the knowledge, the motivation — it\'s all there.',
    rating: 5,
  },
  {
    name: 'Kwame D.',
    role: 'Group Sessions Client',
    text: 'The group sessions are intense in the best way. You feed off each other\'s energy and Steppa keeps the bar high every single session.',
    rating: 5,
  },
  {
    name: 'Priya N.',
    role: 'Online Coaching Client',
    text: 'Lost 16kg and kept it off. The nutrition guidance was the missing piece I\'d been struggling with for years. Steppa figured it out in week two.',
    rating: 5,
  },
  {
    name: 'Tomás E.',
    role: '1-on-1 Training Client',
    text: 'My squat went from 80kg to 155kg in 6 months. The programming is smart — progressive, varied, and it actually fits around my life.',
    rating: 5,
  },
  {
    name: 'Fatima A.',
    role: 'Online Coaching Client',
    text: 'As a busy mum of three, I was sceptical I could commit. Steppa made the program fit my schedule, not the other way around. Completely changed my life.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: '120px 24px', background: 'var(--bg-base)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <span className="section-number">06 — Testimonials</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
          }}>
            WHAT CLIENTS
            <br /><span style={{ color: 'var(--lime)' }}>ARE SAYING</span>
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="card-hover"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                animationDelay: `${i * 0.08}s`,
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: 3 }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="var(--lime)">
                    <path d="M7 1l1.545 3.09L12 4.635l-2.5 2.44.59 3.425L7 8.885l-3.09 1.615L4.5 7.075 2 4.635l3.455-.545L7 1z"/>
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p style={{
                fontSize: '0.9rem',
                lineHeight: 1.75,
                color: 'var(--text-muted)',
                flex: 1,
              }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'var(--bg-elevated)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-bebas)',
                  fontSize: '1rem',
                  color: 'var(--lime)',
                }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          section > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
