import useReveal from '../hooks/useReveal';

/**
 * Wraps children in a div that fades + slides into view on scroll.
 * Usage: <Reveal delay={2}><Card /></Reveal>
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useReveal();
  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
