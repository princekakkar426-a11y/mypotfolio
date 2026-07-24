import useCountUp from '../hooks/useCountUp';

export default function StatCounter({ value, suffix = '', label }) {
  const [ref, count] = useCountUp(value);
  return (
    <div ref={ref} className="stat-card glass">
      <p className="stat-number">
        {count}
        <span className="stat-suffix">{suffix}</span>
      </p>
      <p className="stat-label">{label}</p>
    </div>
  );
}
