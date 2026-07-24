import { useState } from 'react';
import Reveal from './Reveal';
import MagneticButton from './MagneticButton';
import { profile } from '../data/content';
import './Contact.css';
import resume from "../data/resume.pdf";


const INITIAL = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // NOTE: Wire this up to EmailJS (or any form backend) with your own
    // service ID / template ID / public key. Example:
    //
    // emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
    //   .then(() => setStatus('sent'))
    //   .catch(() => setStatus('error'));
    //
    // Simulated here so the UI is fully functional out of the box.
    setTimeout(() => {
      setStatus('sent');
      setForm(INITIAL);
    }, 1100);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">// 07 Contact</p>
          <h2 className="section-title">Let&apos;s Build Something Great</h2>
          <p className="section-subtitle">
            Open to internships and collaborations — I usually reply within a day.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal delay={1} className="contact-info">
            <a className="contact-info-row glass" href={`mailto:${profile.email}`}>
              <span className="contact-icon">✉️</span>
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">{profile.email}</p>
              </div>
            </a>
            <a className="contact-info-row glass" href={`tel:${profile.phone.replace(/\s|-/g, '')}`}>
              <span className="contact-icon">📞</span>
              <div>
                <p className="contact-label">Phone</p>
                <p className="contact-value">{profile.phone}</p>
              </div>
            </a>
            <div className="contact-info-row glass">
              <span className="contact-icon">📍</span>
              <div>
                <p className="contact-label">Location</p>
                <p className="contact-value">{profile.location}</p>
              </div>
            </div>

            <div className="contact-socials">
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon glass">in</a>
              <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon glass">gh</a>
              <a href={profile.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon glass">ig</a>
            </div>

            <MagneticButton as="a" href={resume} download="Resume.pdf" className="btn btn-outline contact-resume">
              Download Resume
            </MagneticButton>

            <div className="contact-map glass">
              <iframe
                title="Kurukshetra, Haryana location map"
                src="https://www.google.com/maps?q=Kurukshetra,Haryana&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={2} as="form" className="contact-form glass" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" />
            </div>
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} placeholder="Tell me about the opportunity..." />
            </div>

            <button type="submit" className="btn btn-primary contact-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Send Message'}
            </button>

            {status === 'sent' && <p className="form-status form-status-ok">Thanks — I&apos;ll get back to you soon!</p>}
            {status === 'error' && <p className="form-status form-status-error">Something went wrong. Please email me directly.</p>}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
