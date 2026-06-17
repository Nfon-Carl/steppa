const steps = [
  {
    number: '01',
    title: 'ASSESS',
    description:
      'We start with a deep-dive intake — your goals, history, schedule, and lifestyle. No cookie-cutter templates. Your program starts with your reality.',
  },
  {
    number: '02',
    title: 'PLAN',
    description:
      'I design a training program and nutrition framework built specifically for your body, goals, and time constraints. Precision from day one.',
  },
  {
    number: '03',
    title: 'EXECUTE',
    description:
      'You train. I coach. Every session tracked, every rep logged. Weekly check-ins keep us aligned and the program evolving as you progress.',
  },
  {
    number: '04',
    title: 'TRANSFORM',
    description:
      'Results compound. Strength increases, body composition shifts, confidence grows. This is where the before-and-after story actually gets written.',
  },
];

export default function Process() {
  return (
    <section id="process" style={{ padding: '120px 24px', background: 'var(--bg-base)', position: 'relative', overflow: 'hidden' }}>
      {/* Large watermark */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--font-bebas)',
        fontSize: 'clamp(8rem, 20vw, 18rem)',
        color: 'rgba(255,255,255,0.015)',
        whiteSpace: 'nowrap',
        letterSpacing: '-0.04em',
        pointerEvents: 'none',
        userSelect: 'none',
        lineHeight: 1,
      }}>PROCESS</div>

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span className="section-number">04 — The Process</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
              color: 'var(--text-primary)',
            }}>
              HOW WE GET
              <br /><span style={{ color: 'var(--lime)' }}>YOU THERE</span>
            </h2>
          </div>
          <p style={{ maxWidth: 360, fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
            Four deliberate steps. No shortcuts, no guesswork. Just a proven
            system that&apos;s produced real results for real people.
          </p>
        </div>

        {/* Steps */}
        <div id="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                padding: '40px 28px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: 52,
                  right: -1,
                  width: 3,
                  height: 2,
                  background: 'var(--lime)',
                  zIndex: 2,
                }} />
              )}

              <div style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: '5rem',
                color: 'rgba(201,243,29,0.06)',
                lineHeight: 1,
                position: 'absolute',
                top: 16,
                right: 16,
                letterSpacing: '-0.04em',
              }}>{step.number}</div>

              {/* Step number badge */}
              <div style={{
                width: 40,
                height: 40,
                background: 'var(--lime)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
                borderRadius: 2,
              }}>
                <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.1rem', color: '#0C0C0C' }}>{step.number}</span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: '1.8rem',
                letterSpacing: '0.06em',
                color: 'var(--text-primary)',
                marginBottom: 16,
              }}>{step.title}</h3>

              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #process { padding: 72px 20px !important; }
          #process > div:last-child > div:first-child { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 900px) {
          #process-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          #process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
