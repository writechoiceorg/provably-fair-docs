export default function TagRow({ tags = [] }) {
  return (
    <div className="pf-tag-row">
      {tags.map((tag) => (
        <span key={tag.label} className={`pf-tag pf-tag--${tag.variant}`}>
          {tag.label}
        </span>
      ))}
    </div>
  );
}