'use client';
import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'James O.',
    role: 'Online Coaching Client',
    text: "Steppa doesn't just write a program and disappear. The accountability is next level — check-ins, adjustments, constant feedback. It's the real deal.",
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=560&q=80',
  },
  {
    name: 'Sarah B.',
    role: '1-on-1 Training Client',
    text: "I'd tried 3 other trainers before Steppa. None of them came close to the results I've had here. The structure, the knowledge, the motivation — it's all there.",
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=560&q=80',
  },
  {
    name: 'Kwame D.',
    role: 'Group Sessions Client',
    text: "The group sessions are intense in the best way. You feed off each other's energy and Steppa keeps the bar high every single session.",
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=560&q=80',
  },
  {
    name: 'Priya N.',
    role: 'Online Coaching Client',
    text: "Lost 16kg and kept it off. The nutrition guidance was the missing piece I'd been struggling with for years. Steppa figured it out in week two.",
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=560&q=80',
  },
  {
    name: 'Tomás E.',
    role: '1-on-1 Training Client',
    text: "My squat went from 80kg to 155kg in 6 months. The programming is smart — progressive, varied, and it actually fits around my life.",
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=560&q=80',
  },
  {
    name: 'Fatima A.',
    role: 'Online Coaching Client',
    text: "As a busy mum of three, I was sceptical I could commit. Steppa made the program fit my schedule, not the other way around. Completely changed my life.",
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=560&q=80',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const navigate = (next: number) => {
    setFading(true);
    setTimeout(() => {
      setIndex((next + testimonials.length) % testimonials.length);
      setFading(false);
    }, 180);
  };

  const t = testimonials[index];

  return (
    <section id="testimonials" style={{ padding: '120px 24px', background: 'var(--bg-surface)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 72 }}>
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

        {/* Slider */}
        <div id="testimonials-slider" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}>

          {/* Left — stacked photo cards */}
          <div style={{ position: 'relative', height: 420, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Back card — lime accent */}
            <div style={{
              position: 'absolute',
              width: 300,
              height: 385,
              background: 'rgba(201,243,29,0.12)',
              border: '1px solid rgba(201,243,29,0.35)',
              borderRadius: 24,
              transform: 'rotate(-9deg) translate(-18px, 12px)',
              boxShadow: '0 0 40px rgba(201,243,29,0.06)',
            }} />
            {/* Mid card — elevated surface */}
            <div style={{
              position: 'absolute',
              width: 292,
              height: 372,
              background: '#2a2a2a',
              borderRadius: 20,
              transform: 'rotate(4deg) translate(12px, -6px)',
              boxShadow: '0 24px 48px rgba(0,0,0,0.6)',
            }} />
            {/* Photo */}
            <div style={{
              position: 'relative',
              width: 280,
              height: 356,
              borderRadius: 16,
              overflow: 'hidden',
              zIndex: 2,
              boxShadow: '0 32px 64px rgba(0,0,0,0.5)',
              opacity: fading ? 0 : 1,
              transform: fading ? 'scale(0.97)' : 'scale(1)',
              transition: 'opacity 0.18s ease, transform 0.18s ease',
            }}>
              <Image
                src={t.photo}
                alt={t.name}
                fill
                sizes="280px"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
              {/* Subtle lime color wash */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(201,243,29,0.04)',
                mixBlendMode: 'color',
              }} />
            </div>

            {/* Index dots */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 6,
            }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => navigate(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  style={{
                    width: i === index ? 20 : 6,
                    height: 6,
                    borderRadius: 3,
                    background: i === index ? 'var(--lime)' : 'rgba(255,255,255,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'width 0.3s ease, background 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right — text content */}
          <div style={{
            opacity: fading ? 0 : 1,
            transform: fading ? 'translateY(10px)' : 'translateY(0)',
            transition: 'opacity 0.18s ease, transform 0.18s ease',
          }}>
            {/* Name */}
            <h3 style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: '2.4rem',
              letterSpacing: '0.04em',
              color: 'var(--text-primary)',
              lineHeight: 1,
              marginBottom: 8,
            }}>{t.name}</h3>

            {/* Role */}
            <p style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--lime)',
              marginBottom: 32,
            }}>{t.role}</p>

            {/* Quote */}
            <blockquote style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'var(--text-primary)',
              fontStyle: 'italic',
              margin: 0,
              marginBottom: 48,
              borderLeft: '2px solid var(--lime)',
              paddingLeft: 20,
            }}>
              &ldquo;{t.text}&rdquo;
            </blockquote>

            {/* Navigation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button
                onClick={() => navigate(index - 1)}
                aria-label="Previous"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'border-color 0.2s ease, transform 0.15s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,243,29,0.4)'; e.currentTarget.style.transform = 'translateX(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button
                onClick={() => navigate(index + 1)}
                aria-label="Next"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'var(--lime)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0C0C0C',
                  transition: 'background 0.2s ease, transform 0.15s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--lime-dark)'; e.currentTarget.style.transform = 'translateX(2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--lime)'; e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <span style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                marginLeft: 8,
              }}>
                {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
