import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import { testimonials } from '../data/content';
import './Testimonials.css';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section testimonials">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">// What people say</p>
          <h2 className="section-title">Testimonials</h2>
        </Reveal>

        <Reveal delay={1} className="testimonial-slider glass">
          <p className="testimonial-quote">&ldquo;{testimonials[index].quote}&rdquo;</p>
          <div className="testimonial-author">
            <span className="testimonial-avatar">{testimonials[index].name.charAt(0)}</span>
            <div>
              <p className="testimonial-name">{testimonials[index].name}</p>
              <p className="testimonial-role">{testimonials[index].role}</p>
            </div>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                className={`testimonial-dot ${i === index ? 'is-active' : ''}`}
                aria-label={`Show testimonial from ${t.name}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
