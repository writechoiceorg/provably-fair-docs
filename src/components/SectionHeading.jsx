export default function SectionHeading({ label, title }) {
  return (
    <div className="pf-sh">
      <span className="pf-sh__label">{label}</span>
      <h2 className="pf-sh__title">{title}</h2>
    </div>
  );
}