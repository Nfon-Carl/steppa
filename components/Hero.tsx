import Image from 'next/image';

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 72,
      }}
    >
      {/* Full-bleed background photo — priority loads above the fold */}
      <Image
        src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1920&q=80"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center 30%', zIndex: 0 }}
      />

      {/* Dark + lime gradient overlay on top of photo */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: `
          linear-gradient(105deg, rgba(12,12,12,0.97) 0%, rgba(12,12,12,0.88) 45%, rgba(12,12,12,0.45) 75%, rgba(12,12,12,0.3) 100%),
          radial-gradient(ellipse 50% 60% at 70% 40%, rgba(201,243,29,0.07) 0%, transparent 60%)
        `,
      }} />

      {/* Diagonal slash — image peek-through on the right */}
      <div
        className="hero-diagonal"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '42%',
          height: '100%',
          zIndex: 2,
          overflow: 'hidden',
          clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=75"
          alt=""
          fill
          priority
          sizes="42vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center 30%',
            filter: 'brightness(0.55) saturate(0.8)',
          }}
        />
        {/* Lime colour-tint */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(201,243,29,0.06)', mixBlendMode: 'color' }} />
        {/* Left fade */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(12,12,12,0.9) 0%, transparent 35%)' }} />
      </div>

      {/* Lime vertical accent line */}
      <div style={{
        position: 'absolute',
        left: 24,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 2,
        height: 120,
        background: 'var(--lime)',
        opacity: 0.5,
        zIndex: 3,
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', position: 'relative', zIndex: 4, width: '100%' }}>
        <div style={{ maxWidth: 680 }}>
          {/* Tag line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
            <span style={{ width: 32, height: 2, background: 'var(--lime)', display: 'inline-block' }} />
            <span className="section-number" style={{ fontSize: '0.7rem' }}>Personal Training & Coaching</span>
          </div>

          {/* Main headline */}
          <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(4rem, 10vw, 9rem)', lineHeight: 0.9, letterSpacing: '-0.02em', color: 'var(--text-primary)', marginBottom: 8 }}>
            STEP INTO
          </h1>
          <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(4rem, 10vw, 9rem)', lineHeight: 0.9, letterSpacing: '-0.02em', color: 'var(--lime)', marginBottom: 8 }}>
            YOUR BEST
          </h1>
          <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(4rem, 10vw, 9rem)', lineHeight: 0.9, letterSpacing: '-0.02em', color: 'var(--text-primary)', marginBottom: 40 }}>
            SHAPE.
          </h1>

          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-muted)', maxWidth: 460, marginBottom: 48 }}>
            Elite personal training built around you. Real programming, real accountability,
            and real results — whether you&apos;re starting out or breaking plateaus.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#pricing" className="btn-lime">
              Start Coaching
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#programs" className="btn-ghost">View Programs</a>
          </div>
        </div>

        {/* Floating stats — hidden on mobile */}
        <div style={{ position: 'absolute', right: 24, bottom: 60, display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-end', zIndex: 5 }} className="hero-stats">
          {[
            { value: '200+', label: 'Clients Transformed' },
            { value: '5 Yrs', label: 'Elite Experience' },
            { value: '98%', label: 'Success Rate' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '2rem', color: 'var(--lime)', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(245,243,238,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 4, opacity: 0.4 }}>
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: 'var(--text-muted)' }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-stats { display: none !important; }
          .hero-diagonal { display: none !important; }
        }
      `}</style>
    </section>
  );
}
