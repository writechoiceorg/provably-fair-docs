


import React from 'react';


function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3L4 6V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VerifyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 12L11 14L15 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function LinkIcon() {
  return <span aria-hidden="true">🔗</span>;
}

export default function TransparencySection({ transparency }) {
  return (
    <section className="pfTransparencySection">
      <div className="pfTransparencyGrid">
        <article className="pfTransparencyCard">
          <div className="pfTransparencyCardInner">
            <h3 className="pfTransparencyTitle">Public Transparency</h3>
            <p className="pfTransparencySubtitle">Open &amp; Reproducible Audit</p>
            <p className="pfTransparencyText">
              This audit is fully reproducible and open source. All datasets, simulations,
              and verification logic used in this report are publicly available.
            </p>

            <div className="pfTransparencyActions">
              <a
                className="pfTransparencyButton pfTransparencyButtonPrimary"
                href={transparency.auditRepoUrl}
              >
                <LinkIcon /> <span>Reproduce This Audit</span>
              </a>

              <a
                className="pfTransparencyButton pfTransparencyButtonSecondary"
                href={transparency.auditRepoUrl}
              >
                <LinkIcon /> <span>ProvablyFair Audit Repository</span>
              </a>

              <a
                className="pfTransparencyButton pfTransparencyButtonSecondary"
                href={transparency.datasetUrl}
              >
                <LinkIcon /> <span>Dataset &amp; Simulation Logs</span>
              </a>
            </div>
          </div>
        </article>

        <article className="pfTransparencyCard">
          <div className="pfTransparencyCardInner"><
            h3 className="pfTransparencyTitle">Player Verification</h3>
            <p className="pfTransparencySubtitle">Verify Any Bet Yourself</p>
            <p className="pfTransparencyText">
              Every game result can be independently recomputed using publicly disclosed inputs.
            </p>

            <div className="pfTransparencyActions">
              <a
                className="pfTransparencyButton pfTransparencyButtonPrimary"
                href={transparency.verifierUrl}
              >
                <LinkIcon /> <span>ProvablyFair Public Verifier</span>
              </a>
            </div>

            <p className="pfTransparencyUrl">{transparency.verifierUrl}</p>
          </div>
        </article>
      </div>

      <div className="pfAuditPinningGrid">
        <div className="pfAuditPinningCard">
          <div className="pfAuditPinningLabel">Audit Commit</div>
          <div className="pfAuditPinningValue">{transparency.commitHash}</div>
        </div>

        <div className="pfAuditPinningCard">
          <div className="pfAuditPinningLabel">Framework Version</div>
          <div className="pfAuditPinningValue">{transparency.frameworkVersion}</div>
        </div>
      </div>
    </section>
  );
}