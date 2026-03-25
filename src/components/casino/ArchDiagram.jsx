import React from 'react';

/**
 * ArchDiagram — config-driven provably fair architecture diagram.
 *
 * Reads from casino config.architecture:
 *   accentColor    string   — arrow + badge color (default #e8590c)
 *   casinoName     string   — left column header label
 *   rngLabel       string   — dark RNG box label (monospace)
 *   leftSteps      string[] — ordered steps in the left (casino) column
 *                             the last item is always the "capture" source
 *   rightSections  Array<{ label, sub }> — validation steps on the right
 *
 * Fixed (same for every casino):
 *   - "CAPTURED BY PF.ORG" badge
 *   - Dashed connector: last left step → first right step
 *   - "Certified" green block at bottom
 *   - Left arrow color (always neutral grey)
 */
export default function ArchDiagram({ config }) {
  const arch = config.architecture || {};

  const accent       = arch.accentColor  || '#e8590c';
  const casinoName   = arch.casinoName   || config.name   || 'CASINO';
  const rngLabel     = arch.rngLabel     || 'HMAC-SHA256';
  const leftSteps    = arch.leftSteps    || [
    'Seed Inputs',
    'HMAC-SHA256 / drand',
    'Deterministic Outcome',
    'Payout Applied',
    'Live Result Recorded',
  ];
  const rightSections = arch.rightSections || [
    { label: 'Seed & Determinism Check', sub: 'Section 1' },
    { label: 'RNG & Entropy Validation',  sub: 'Section 2' },
    { label: 'Verifier Parity',           sub: 'Section 3' },
  ];

  // ── Layout constants ──────────────────────────────────────────────
  const W = 720;
  const HEADER_Y = 30;       // top of column panels
  const HEADER_TEXT_Y = 56;  // column title baseline
  const FIRST_BOX_Y = 76;    // first box top
  const BOX_H = 44;
  const BOX_GAP = 70;        // vertical distance from box top to next box top
  const BOX_W = 220;

  // Left column
  const LX = 30;             // panel left edge
  const LCX = 175;           // centre x
  const LBX = 65;            // box left edge

  // Right column
  const RX = 400;
  const RCX = 545;
  const RBX = 435;

  // RNG box is always index 1 in leftSteps (dark bg)
  const RNG_IDX = 1;

  // How many left boxes (we know count now)
  const leftCount  = leftSteps.length;
  const rightCount = rightSections.length;

  // Compute Y positions for left boxes
  const leftBoxY = (i) => FIRST_BOX_Y + i * BOX_GAP;
  // Compute Y positions for right boxes
  const rightBoxY = (i) => FIRST_BOX_Y + i * BOX_GAP;

  // Panel heights — need to fit all boxes + split row + certified + bottom margin
  const leftPanelH  = FIRST_BOX_Y - HEADER_Y + leftCount  * BOX_GAP + 10;
  const rightPanelH = FIRST_BOX_Y - HEADER_Y + (rightCount + 2) * BOX_GAP + 80; // +2 for split row gap, +80 for certified

  const panelH = Math.max(leftPanelH, rightPanelH);

  // SVG total height
  const SVG_H = HEADER_Y + panelH + 40; // 40 for footer text

  // ── Right side: split RTP + Integrity row, then Certified ─────────
  // rightSections render at indices 1..rightCount, so split row must be at rightCount+1
  const splitRowY   = rightBoxY(rightCount + 1);   // Y for the two small boxes
  const mergeLineY  = splitRowY + BOX_H + 14;      // merge connector Y
  const certifiedY  = splitRowY + BOX_H + 26;      // Certified box Y

  // ── Dashed connector: last left box → first right box ────────────
  // Source: right-centre of last left box
  const connSrcX = LBX + BOX_W;
  const connSrcY = leftBoxY(leftCount - 1) + BOX_H / 2;
  // Target: left-centre of first right box (top of right panel)
  const connTgtX = RBX;
  const connTgtY = FIRST_BOX_Y + BOX_H / 2;

  // Bezier path
  const dashPath = `M ${connSrcX} ${connSrcY} C ${connSrcX + 65} ${connSrcY}, ${connTgtX - 65} ${connTgtY}, ${connTgtX} ${connTgtY}`;

  // Arrow polygon (pointing left-to-right at target)
  const arrowTip = `${connTgtX - 3},${connTgtY - 5} ${connTgtX + 5},${connTgtY} ${connTgtX - 3},${connTgtY + 5}`;

  // ── Badge sits midway between columns, near the top ───────────────
  const badgeX     = LX + 290 + 5;   // just right of left panel
  const badgeY     = FIRST_BOX_Y + 20;
  const badgeW     = 130;
  const badgeCX    = badgeX + badgeW / 2;

  // ── Helpers ───────────────────────────────────────────────────────
  const arrowGreyId   = 'arch-ag';
  const arrowAccentId = 'arch-aa';
  const filterId      = 'arch-sh';

  const BoxShadow = () => null; // filter applied via filter attr

  function LeftBox({ i, label, dark }) {
    const y = leftBoxY(i);
    if (dark) {
      return (
        <g filter={`url(#${filterId})`}>
          <rect x={LBX} y={y} width={BOX_W} height={BOX_H} rx="8" fill="#0e0e14"/>
          <text x={LCX} y={y + 27} textAnchor="middle"
            fontFamily="JetBrains Mono, monospace" fontSize="12" fontWeight="600"
            fill="rgba(255,255,255,0.85)">{label}</text>
        </g>
      );
    }
    return (
      <g filter={`url(#${filterId})`}>
        <rect x={LBX} y={y} width={BOX_W} height={BOX_H} rx="8" fill="#fff" stroke="#e5e5ea" strokeWidth="1"/>
        <text x={LCX} y={y + 27} textAnchor="middle"
          fontFamily="DM Sans, sans-serif" fontSize="12.5" fontWeight="600"
          fill="#2a2a2e">{label}</text>
      </g>
    );
  }

  function RightBox({ i, label, sub }) {
    const y = rightBoxY(i);
    return (
      <g filter={`url(#${filterId})`}>
        <rect x={RBX} y={y} width={BOX_W} height={BOX_H} rx="8" fill="#fff" stroke="#f5d4b3" strokeWidth="1"/>
        <text x={RCX} y={y + 19} textAnchor="middle"
          fontFamily="DM Sans, sans-serif" fontSize="11.5" fontWeight="600" fill="#2a2a2e">{label}</text>
        <text x={RCX} y={y + 35} textAnchor="middle"
          fontFamily="DM Sans, sans-serif" fontSize="9.5" fill="#aaa">{sub}</text>
      </g>
    );
  }

  return (
    <div className="pf-arch-wrap">
      <svg viewBox={`0 0 ${W} ${SVG_H}`} xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}>
        <defs>
          <filter id={filterId} x="-4%" y="-4%" width="108%" height="116%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000" floodOpacity="0.06"/>
          </filter>
          <marker id={arrowGreyId} viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#e5e5ea"/>
          </marker>
          <marker id={arrowAccentId} viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={accent}/>
          </marker>
        </defs>

        {/* Background */}
        <rect width={W} height={SVG_H} fill="#f6f7f9"/>

        {/* ── LEFT PANEL ── */}
        <g filter={`url(#${filterId})`}>
          <rect x={LX} y={HEADER_Y} width="290" height={panelH} rx="10" fill="#fff" stroke="#e5e5ea" strokeWidth="1"/>
        </g>
        <text x={LCX} y={HEADER_TEXT_Y} textAnchor="middle"
          fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="700"
          fill="#aaa" letterSpacing="0.08em">
          OUTCOME GENERATION — {casinoName.toUpperCase()}
        </text>

        {/* Left boxes + connectors */}
        {leftSteps.map((label, i) => (
          <g key={i}>
            <LeftBox i={i} label={label} dark={i === RNG_IDX} />
            {i < leftSteps.length - 1 && (
              <line
                x1={LCX} y1={leftBoxY(i) + BOX_H}
                x2={LCX} y2={leftBoxY(i + 1)}
                stroke="#e5e5ea" strokeWidth="1.5"
                markerEnd={`url(#${arrowGreyId})`}
              />
            )}
          </g>
        ))}

        {/* ── RIGHT PANEL ── */}
        <g filter={`url(#${filterId})`}>
          <rect x={RX} y={HEADER_Y} width="290" height={panelH} rx="10" fill="#fffbf5" stroke="#f5d4b3" strokeWidth="1"/>
        </g>
        <text x={RCX} y={HEADER_TEXT_Y} textAnchor="middle"
          fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="700"
          fill={accent} letterSpacing="0.08em">
          INDEPENDENT VALIDATION — PF.ORG
        </text>

        {/* First right box: Live Bets Captured */}
        <g filter={`url(#${filterId})`}>
          <rect x={RBX} y={FIRST_BOX_Y} width={BOX_W} height={BOX_H} rx="8" fill="#fff" stroke="#f5d4b3" strokeWidth="1"/>
          <text x={RCX} y={FIRST_BOX_Y + 27} textAnchor="middle"
            fontFamily="DM Sans, sans-serif" fontSize="12.5" fontWeight="600" fill="#2a2a2e">
            Live Bets Captured
          </text>
        </g>

        {/* Right sections */}
        {rightSections.map((s, i) => (
          <g key={i}>
            <line
              x1={RCX} y1={rightBoxY(i) + BOX_H}
              x2={RCX} y2={rightBoxY(i + 1)}
              stroke={accent} strokeWidth="1.5" opacity="0.5"
              markerEnd={`url(#${arrowAccentId})`}
            />
            <RightBox i={i + 1} label={s.label} sub={s.sub} />
          </g>
        ))}

        {/* ── SPLIT ROW: RTP + Integrity ── */}
        {(() => {
          const rtpX    = RBX;
          const rtpW    = 106;
          const intX    = RBX + 114;
          const intW    = 106;
          const rtpCX   = rtpX + rtpW / 2;
          const intCX   = intX + intW / 2;
          const sY      = splitRowY;

          return (
            <>
              {/* connector from last section down to split row */}
              <line x1={RCX} y1={rightBoxY(rightCount) + BOX_H}
                x2={RCX} y2={sY}
                stroke={accent} strokeWidth="1.5" opacity="0.5"
                markerEnd={`url(#${arrowAccentId})`}
              />

              {/* RTP box */}
              <g filter={`url(#${filterId})`}>
                <rect x={rtpX} y={sY} width={rtpW} height={BOX_H} rx="8" fill="#fff" stroke="#f5d4b3" strokeWidth="1"/>
                <text x={rtpCX} y={sY + 19} textAnchor="middle"
                  fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="600" fill="#2a2a2e">RTP</text>
                <text x={rtpCX} y={sY + 35} textAnchor="middle"
                  fontFamily="DM Sans, sans-serif" fontSize="9.5" fill="#aaa">Section 4</text>
              </g>

              {/* Integrity box */}
              <g filter={`url(#${filterId})`}>
                <rect x={intX} y={sY} width={intW} height={BOX_H} rx="8" fill="#fff" stroke="#f5d4b3" strokeWidth="1"/>
                <text x={intCX} y={sY + 19} textAnchor="middle"
                  fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="600" fill="#2a2a2e">Integrity</text>
                <text x={intCX} y={sY + 35} textAnchor="middle"
                  fontFamily="DM Sans, sans-serif" fontSize="9.5" fill="#aaa">Section 5</text>
              </g>

              {/* Merge lines → Certified */}
              <line x1={rtpCX} y1={sY + BOX_H} x2={rtpCX} y2={mergeLineY} stroke={accent} strokeWidth="1.5" opacity="0.4"/>
              <line x1={intCX} y1={sY + BOX_H} x2={intCX} y2={mergeLineY} stroke={accent} strokeWidth="1.5" opacity="0.4"/>
              <line x1={rtpCX} y1={mergeLineY}  x2={intCX} y2={mergeLineY} stroke={accent} strokeWidth="1.5" opacity="0.4"/>
              <line x1={RCX}   y1={mergeLineY}  x2={RCX}   y2={certifiedY}
                stroke={accent} strokeWidth="1.5" opacity="0.5"
                markerEnd={`url(#${arrowAccentId})`}
              />

              {/* Certified box — driven by config.status */}
              {(() => {
                const statusMap = {
                  CERTIFIED: { fill: '#f0fdf4', stroke: '#bbf7d0', circle: '#16a34a', text: '#16a34a', label: 'Certified' },
                  PENDING:   { fill: '#fefce8', stroke: '#fde68a', circle: '#ca8a04', text: '#ca8a04', label: 'Pending'   },
                  FLAGGED:   { fill: '#fef2f2', stroke: '#fecaca', circle: '#dc2626', text: '#dc2626', label: 'Flagged'   },
                };
                const s = statusMap[config.status] || statusMap.CERTIFIED;
                const cx = RBX + 75;
                const cy = certifiedY + 18;

                // Icon differs per status
                const Icon = () => {
                  if ((config.status || 'CERTIFIED') === 'CERTIFIED') {
                    // Checkmark
                    return <polyline
                      points={`${cx - 5},${cy} ${cx - 1},${cy + 4} ${cx + 6},${cy - 4}`}
                      fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>;
                  }
                  if (config.status === 'PENDING') {
                    // Clock: circle + hands
                    return <>
                      <circle cx={cx} cy={cy} r="5.5" fill="none" stroke="#fff" strokeWidth="1.5"/>
                      <line x1={cx} y1={cy} x2={cx} y2={cy - 3.5} stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1={cx} y1={cy} x2={cx + 2.5} y2={cy + 2} stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                    </>;
                  }
                  if (config.status === 'FLAGGED') {
                    // X mark
                    return <>
                      <line x1={cx - 4} y1={cy - 4} x2={cx + 4} y2={cy + 4} stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                      <line x1={cx + 4} y1={cy - 4} x2={cx - 4} y2={cy + 4} stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    </>;
                  }
                  return null;
                };

                return (
                  <g filter={`url(#${filterId})`}>
                    <rect x={RBX} y={certifiedY} width={BOX_W} height="36" rx="8"
                      fill={s.fill} stroke={s.stroke} strokeWidth="1.5"/>
                    <circle cx={cx} cy={cy} r="10" fill={s.circle}/>
                    <Icon />
                    <text x={RBX + 91} y={certifiedY + 23}
                      fontFamily="Plus Jakarta Sans, sans-serif" fontSize="13" fontWeight="800" fill={s.text}>
                      {s.label}
                    </text>
                  </g>
                );
              })()}
            </>
          );
        })()}

        {/* ── CAPTURE BADGE ── */}
        <g filter={`url(#${filterId})`}>
          <rect x={badgeX} y={badgeY} width={badgeW} height="24" rx="12" fill={accent}/>
          <text x={badgeCX} y={badgeY + 16} textAnchor="middle"
            fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8.5" fontWeight="700"
            fill="#fff" letterSpacing="0.06em">CAPTURED BY PF.ORG</text>
        </g>

        {/* ── DASHED CONNECTOR ── */}
        <path d={dashPath} fill="none" stroke={accent} strokeWidth="1.8"
          strokeDasharray="6,4" opacity="0.6"/>
        <polygon points={arrowTip} fill={accent} opacity="0.6"/>

        {/* ── FOOTER TEXT ── */}
        <text x={W / 2} y={SVG_H - 8} textAnchor="middle"
          fontFamily="DM Sans, sans-serif" fontSize="10" fill="#aaa">
          All layers independently validated: structure before statistics, integrity before certification.
        </text>
      </svg>
    </div>
  );
}
