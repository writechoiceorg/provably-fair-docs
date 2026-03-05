import PassPill from './PassPill';

export default function VerdictTable({ auditVerdict = [] }) {
  return (
    <div className="pf-vt">

      {/* Header */}
      <div className="pf-vt__header">
        <div className="pf-vt__th">#</div>
        <div className="pf-vt__th">Control Area</div>
        <div className="pf-vt__th">Status</div>
        <div className="pf-vt__th">Evidence Summary</div>
      </div>

      {/* Rows */}
      {auditVerdict.map((control, index) => (
        <div
          key={control.id}
          className={`pf-vt__row ${index === auditVerdict.length - 1 ? 'pf-vt__row--last' : ''}`}
        >
          <div className="pf-vt__td">
            <span className="pf-vt__num">{control.id}</span>
          </div>
          <div className="pf-vt__td">
            <span className="pf-vt__name">{control.name}</span>
          </div>
          <div className="pf-vt__td">
            <PassPill />
          </div>
          <div className="pf-vt__td">
            <span className="pf-vt__evidence">{control.evidence}</span>
          </div>
        </div>
      ))}

    </div>
  );
}