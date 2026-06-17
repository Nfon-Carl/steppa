import Image from 'next/image';

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 24px', background: 'var(--bg-surface)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

        {/* Image side */}
        <div style={{ position: 'relative' }}>
          {/* Lime border accent */}
          <div style={{
            position: 'absolute',
            top: -16,
            left: -16,
            right: 16,
            bottom: 16,
            border: '1px solid rgba(201,243,29,0.2)',
            zIndex: 0,
          }} />

          {/* Image container — explicit height so next/image fill works */}
          <div style={{ position: 'relative', zIndex: 1, overflow: 'hidden', height: 600 }}>
            <Image
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=560&q=80"
              alt="Steppa — Personal Trainer"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
            {/* Dark gradient overlay at bottom */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '50%',
              background: 'linear-gradient(to top, rgba(12,12,12,0.85), transparent)',
              zIndex: 1,
            }} />
            {/* Lime colour treatment */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(201,243,29,0.04)',
              mixBlendMode: 'color',
              zIndex: 2,
            }} />
          </div>

          {/* Experience badge */}
          <div style={{
            position: 'absolute',
            bottom: -24,
            right: -24,
            background: 'var(--lime)',
            padding: '20px 24px',
            zIndex: 3,
          }}>
            <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '2.5rem', color: '#0C0C0C', lineHeight: 1 }}>5+</div>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(0,0,0,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Years<br/>Training</div>
          </div>
        </div>

        {/* Text side */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <span className="section-number">03 — About Steppa</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2.5rem, 4vw, 4rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
            marginBottom: 32,
          }}>
            COACHING THAT
            <br /><span style={{ color: 'var(--lime)' }}>ACTUALLY WORKS</span>
          </h2>

          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: 20 }}>
            I&apos;m Steppa — a certified personal trainer and strength coach with over 5 years
            of experience turning real goals into real results. I&apos;ve worked with everyone
            from complete beginners to competitive athletes.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: 40 }}>
            My approach is simple: no fads, no fluff. Every program I write is rooted in
            progressive overload, smart nutrition, and the kind of accountability that
            keeps you showing up — even when motivation runs dry.
          </p>

          {/* Credentials */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40 }}>
            {[
              'NASM Certified PT',
              'Precision Nutrition L1',
              'Strength & Conditioning',
              'Online Coaching Expert',
            ].map(c => (
              <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 6, height: 6, background: 'var(--lime)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500 }}>{c}</span>
              </div>
            ))}
          </div>

          {/* Quote */}
          <blockquote style={{ borderLeft: '2px solid var(--lime)', paddingLeft: 20, margin: 0 }}>
            <p style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: '1.3rem',
              letterSpacing: '0.04em',
              color: 'var(--text-primary)',
              lineHeight: 1.4,
            }}>
              &ldquo;Your body is capable of more than you believe. My job is to help you prove that to yourself.&rdquo;
            </p>
            <cite style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'normal', letterSpacing: '0.06em' }}>— STEPPA</cite>
          </blockquote>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  );
}
