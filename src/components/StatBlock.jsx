export default function StatBlock({ value, label, variant = 'default' }) {
  return (
    <div className={`pf-stat-block pf-stat-block--${variant}`}>
      <div className={`pf-stat-block__value pf-stat-block__value--${variant}`}>
        {value}
      </div>
      <div className="pf-stat-block__label">{label}</div>
    </div>
  );
}