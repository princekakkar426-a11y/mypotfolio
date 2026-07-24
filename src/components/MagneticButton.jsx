import { useRef } from 'react';

/**
 * Wraps a button/link so it "sticks" to the cursor slightly while
 * hovered, snapping back on mouse leave. Skips itself on touch devices.
 */
export default function MagneticButton({ as: Tag = 'button', className = '', children, strength = 22, ...rest }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    if (window.matchMedia('(hover: none)').matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0, 0)';
  };

  return (
    <Tag
      ref={ref}
      className={`magnetic-btn ${className}`.trim()}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: 'transform 0.25s var(--ease-out)' }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
