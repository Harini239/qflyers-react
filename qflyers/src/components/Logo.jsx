export default function Logo({ light }) {
  return (
    <span className={`logo ${light ? 'logo--light' : ''}`}>
      <img
        src={light ? '/images/logo-light.png' : '/images/logo.png'}
        alt="Q-Flyers"
        className="logo__img"
        height={light ? 36 : 32}
        style={{
          width: 'auto',
          height: light ? '36px' : '32px',
          display: 'block',
          background: 'transparent',
          objectFit: 'contain',
        }}
      />
    </span>
  );
}
