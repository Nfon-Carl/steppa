const transformations = [
  {
    name: 'Marcus T.',
    duration: '12 Weeks',
    program: 'Online Coaching',
    metrics: [
      { label: 'Weight Lost', value: '-14kg' },
      { label: 'Muscle Gained', value: '+6kg' },
      { label: 'Body Fat', value: '-9%' },
    ],
    quote: 'I never thought I could change this much in just 12 weeks. Steppa made it feel achievable every single day.',
  },
  {
    name: 'Jade R.',
    duration: '20 Weeks',
    program: '1-on-1 Training',
    metrics: [
      { label: 'Squat PR', value: '+55kg' },
      { label: 'Deadlift PR', value: '+70kg' },
      { label: 'Body Fat', value: '-7%' },
    ],
    quote: 'My strength went through the roof. The technique work alone was worth every penny.',
  },
  {
    name: 'Devon K.',
    duration: '16 Weeks',
    program: 'Group Sessions',
    metrics: [
      { label: 'Weight Lost', value: '-18kg' },
      { label: 'Waist', value: '-12cm' },
      { label: 'Energy Level', value: '+100%' },
    ],
    quote: 'The group energy is unreal. We push each other and the results speak for themselves.',
  },
  {
    name: 'Aisha M.',
    duration: '24 Weeks',
    program: 'Online Coaching',
    metrics: [
      { label: 'Muscle Gained', value: '+9kg' },
      { label: 'Bench PR', value: '+40kg' },
      { label: 'Body Fat', value: '-5%' },
    ],
    quote: "Best investment I've ever made in myself. Steppa's knowledge is elite level.",
  },
];

export default function Results() {
  return (
    <section id="results" style={{ padding: '120px 24px', background: 'var(--bg-surface)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <span className="section-number">05 — Transformations</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
          }}>
            REAL PEOPLE.
            <br /><span style={{ color: 'var(--lime)' }}>REAL RESULTS.</span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
          {transformations.map((t) => (
            <div
              key={t.name}
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
              }}
            >
              {/* Top row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.4rem', letterSpacing: '0.04em', color: 'var(--text-primary)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 2 }}>{t.program}</div>
                </div>
                <div style={{
                  background: 'rgba(201,243,29,0.08)',
                  border: '1px solid rgba(201,243,29,0.2)',
                  padding: '4px 12px',
                  borderRadius: 2,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--lime)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>{t.duration}</div>
              </div>

              {/* Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
                {t.metrics.map((m) => (
                  <div key={m.label} style={{
                    background: 'var(--bg-card)',
                    padding: '16px 12px',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-bebas)',
                      fontSize: '1.8rem',
                      color: 'var(--lime)',
                      letterSpacing: '0.02em',
                      lineHeight: 1,
                    }}>{m.value}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 6 }}>{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontSize: '0.875rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                borderLeft: '2px solid rgba(201,243,29,0.3)',
                paddingLeft: 16,
                margin: 0,
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #results > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
