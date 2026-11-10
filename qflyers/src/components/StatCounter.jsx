import useCountUp from '../hooks/useCountUp';

/**
 * Animated stat counter.
 * Props:
 *   target   – final numeric value (e.g. 40)
 *   suffix   – string appended after the number (e.g. 'M' or 'B')
 *   label    – caption beneath
 *   decimals – decimal places (default 0)
 *   duration – animation ms (default 2000)
 */
export default function StatCounter({ target, suffix, label, decimals = 0, duration = 2000 }) {
  const [value, ref] = useCountUp(target, duration, decimals);

  return (
    <div className="stats__item" ref={ref}>
      <span className="stats__plus">+</span>
      <dt>
        {decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}{' '}
        <span className="stats__suffix">{suffix}</span>
      </dt>
      <dd>{label}</dd>
    </div>
  );
}
