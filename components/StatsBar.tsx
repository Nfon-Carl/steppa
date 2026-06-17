const stats = [
  { value: '200+', label: 'Clients Transformed' },
  { value: '5 Years', label: 'Elite Experience' },
  { value: '98%', label: 'Success Rate' },
  { value: '1,200+', label: 'Workouts Delivered' },
];

export default function StatsBar() {
  return (
    <section style={{ background: 'var(--lime)', padding: '0' }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
      id="statsbar-grid">
        {stats.map((s, i) => (
          <div
            key={s.label}
            style={{
              padding: '28px 24px',
              textAlign: 'center',
              borderRight: i < stats.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
            }}
          >
            <div style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: '2.2rem',
              color: '#0C0C0C',
              lineHeight: 1,
              letterSpacing: '0.02em',
            }}>{s.value}</div>
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'rgba(0,0,0,0.55)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginTop: 4,
            }}>{s.label}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 640px) {
          #statsbar-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #statsbar-grid > div { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.1); }
        }
      `}</style>
    </section>
  );
}
