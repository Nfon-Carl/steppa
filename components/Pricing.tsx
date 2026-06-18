'use client';
import { useState } from 'react';

type FormData = {
  fullName: string;
  email: string;
  whatsapp: string;
  age: string;
  gender: string;
  goal: string;
  level: string;
  experience: string;
  program: string;
  injuries: string;
  notes: string;
};

const initial: FormData = {
  fullName: '', email: '', whatsapp: '', age: '', gender: '',
  goal: '', level: '', experience: '', program: '',
  injuries: '', notes: '',
};

const selectStyle = {
  width: '100%',
  background: 'var(--bg-elevated)',
  border: '1px solid var(--border)',
  borderRadius: 4,
  padding: '13px 16px',
  color: 'var(--text-primary)',
  fontSize: '0.9rem',
  fontFamily: 'var(--font-outfit)',
  outline: 'none',
  appearance: 'none' as const,
  cursor: 'pointer',
};

const inputStyle = {
  width: '100%',
  background: 'var(--bg-elevated)',
  border: '1px solid var(--border)',
  borderRadius: 4,
  padding: '13px 16px',
  color: 'var(--text-primary)',
  fontSize: '0.9rem',
  fontFamily: 'var(--font-outfit)',
  outline: 'none',
};

const labelStyle = {
  display: 'block' as const,
  fontSize: '0.7rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  color: 'var(--text-muted)',
  marginBottom: 8,
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

export default function Register() {
  const [form, setForm] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const focusBorder = (key: string) => ({
    ...inputStyle,
    border: focused === key ? '1px solid rgba(201,243,29,0.5)' : '1px solid var(--border)',
    transition: 'border-color 0.2s ease',
  });

  const focusSelectBorder = (key: string) => ({
    ...selectStyle,
    border: focused === key ? '1px solid rgba(201,243,29,0.5)' : '1px solid var(--border)',
    transition: 'border-color 0.2s ease',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="pricing" style={{ padding: '120px 24px', background: 'var(--bg-surface)' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: 'rgba(201,243,29,0.1)', border: '1px solid rgba(201,243,29,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 32px',
          }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M5 14l6 6 12-12" stroke="#C9F31D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--text-primary)', lineHeight: 0.95, marginBottom: 20 }}>
            YOU&apos;RE <span style={{ color: 'var(--lime)' }}>REGISTERED</span>
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: 12 }}>
            Thanks, <strong style={{ color: 'var(--text-primary)' }}>{form.fullName.split(' ')[0]}</strong>. Your details are in.
            Steppa will review your profile and reach out via WhatsApp or email within <strong style={{ color: 'var(--text-primary)' }}>24–48 hours</strong> with your personalised coaching plan.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Keep an eye on <strong style={{ color: 'var(--lime)' }}>{form.whatsapp || form.email}</strong>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="pricing" style={{ padding: '120px 24px', background: 'var(--bg-surface)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <span className="section-number">07 — Get Started</span>
          <h2 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
            marginTop: 12,
          }}>
            REGISTER FOR
            <br /><span style={{ color: 'var(--lime)' }}>COACHING</span>
          </h2>
          <p style={{ marginTop: 16, fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 520 }}>
            Fill in your details below. Steppa will review everything and send your personalised plan directly to your DM.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* ── Personal Info ─────────────────────────────── */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--lime)', marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
              Personal Information
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="form-grid">
              <Field label="Full Name *">
                <input required value={form.fullName} onChange={set('fullName')}
                  onFocus={() => setFocused('fullName')} onBlur={() => setFocused(null)}
                  placeholder="e.g. Jordan Smith" style={focusBorder('fullName')} />
              </Field>
              <Field label="Email Address *">
                <input required type="email" value={form.email} onChange={set('email')}
                  onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                  placeholder="you@example.com" style={focusBorder('email')} />
              </Field>
              <Field label="WhatsApp / Phone *">
                <input required value={form.whatsapp} onChange={set('whatsapp')}
                  onFocus={() => setFocused('whatsapp')} onBlur={() => setFocused(null)}
                  placeholder="+44 7700 000000" style={focusBorder('whatsapp')} />
              </Field>
              <Field label="Age *">
                <input required type="number" min="13" max="80" value={form.age} onChange={set('age')}
                  onFocus={() => setFocused('age')} onBlur={() => setFocused(null)}
                  placeholder="e.g. 28" style={focusBorder('age')} />
              </Field>
              <Field label="Gender">
                <div style={{ position: 'relative' }}>
                  <select value={form.gender} onChange={set('gender')}
                    onFocus={() => setFocused('gender')} onBlur={() => setFocused(null)}
                    style={focusSelectBorder('gender')}>
                    <option value="">Select…</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Prefer not to say</option>
                  </select>
                  <svg style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </Field>
            </div>
          </div>

          {/* ── Fitness Profile ───────────────────────────── */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--lime)', marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
              Fitness Profile
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="form-grid">
              <Field label="Primary Goal *">
                <div style={{ position: 'relative' }}>
                  <select required value={form.goal} onChange={set('goal')}
                    onFocus={() => setFocused('goal')} onBlur={() => setFocused(null)}
                    style={focusSelectBorder('goal')}>
                    <option value="">Select goal…</option>
                    <option>Lose Weight / Burn Fat</option>
                    <option>Build Muscle / Bulk</option>
                    <option>Increase Strength</option>
                    <option>Improve General Fitness</option>
                    <option>Athletic Performance</option>
                    <option>Competition Prep</option>
                  </select>
                  <svg style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </Field>
              <Field label="Current Fitness Level *">
                <div style={{ position: 'relative' }}>
                  <select required value={form.level} onChange={set('level')}
                    onFocus={() => setFocused('level')} onBlur={() => setFocused(null)}
                    style={focusSelectBorder('level')}>
                    <option value="">Select level…</option>
                    <option>Complete Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                    <option>Athlete / Competitive</option>
                  </select>
                  <svg style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </Field>
              <Field label="Training Experience">
                <div style={{ position: 'relative' }}>
                  <select value={form.experience} onChange={set('experience')}
                    onFocus={() => setFocused('experience')} onBlur={() => setFocused(null)}
                    style={focusSelectBorder('experience')}>
                    <option value="">Select…</option>
                    <option>Never trained before</option>
                    <option>Less than 6 months</option>
                    <option>6–12 months</option>
                    <option>1–3 years</option>
                    <option>3+ years</option>
                  </select>
                  <svg style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </Field>
              <Field label="Preferred Program *">
                <div style={{ position: 'relative' }}>
                  <select required value={form.program} onChange={set('program')}
                    onFocus={() => setFocused('program')} onBlur={() => setFocused(null)}
                    style={focusSelectBorder('program')}>
                    <option value="">Select program…</option>
                    <option>Online Coaching</option>
                    <option>1-on-1 Training</option>
                    <option>Group Sessions</option>
                    <option>Not sure yet</option>
                  </select>
                  <svg style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </Field>
            </div>
          </div>

          {/* ── Health & Notes ────────────────────────────── */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--lime)', marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
              Health & Additional Notes
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="form-grid">
              <Field label="Injuries or Health Conditions">
                <textarea value={form.injuries} onChange={set('injuries')}
                  onFocus={() => setFocused('injuries')} onBlur={() => setFocused(null)}
                  placeholder="List any current injuries, chronic conditions, or physical limitations…"
                  rows={4}
                  style={{
                    ...focusBorder('injuries'),
                    resize: 'vertical',
                    lineHeight: 1.6,
                  }} />
              </Field>
              <Field label="Anything Else You'd Like Steppa to Know">
                <textarea value={form.notes} onChange={set('notes')}
                  onFocus={() => setFocused('notes')} onBlur={() => setFocused(null)}
                  placeholder="Your lifestyle, schedule, motivations, past attempts, or anything else relevant…"
                  rows={4}
                  style={{
                    ...focusBorder('notes'),
                    resize: 'vertical',
                    lineHeight: 1.6,
                  }} />
              </Field>
            </div>
          </div>

          {/* Submit */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', maxWidth: 400 }}>
              By submitting you agree to be contacted by Steppa via email or WhatsApp with your coaching plan. No spam, no contracts.
            </p>
            <button type="submit" className="btn-lime" style={{ fontSize: '1rem', padding: '16px 48px', letterSpacing: '0.08em' }}>
              Submit Registration
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </form>
      </div>

      <style>{`
        input::placeholder, textarea::placeholder { color: var(--text-muted); opacity: 0.6; }
        input, textarea, select { color-scheme: dark; }
        @media (max-width: 768px) {
          #pricing { padding: 72px 20px !important; }
          .form-grid { grid-template-columns: 1fr !important; }
          .form-grid-3 { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .form-grid-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
