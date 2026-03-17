import React from 'react';

export default function TransparencySection({ transparency }) {
  return (
    <div>
      <div className="dashboardTransparencyGrid">
        <div className="dashboardTransparencyCard">
          <h3>Public Transparency</h3>
          <p className="dashboardTransparencySubtitle">Open &amp; Reproducible Audit</p>
          <p>This audit is fully reproducible and open source. All datasets, simulations, and verification logic used in this report are publicly available.</p>
          <div className="dashboardTransparencyActions">
            <a className="dashboardTransparencyButton dashboardTransparencyButtonPrimary" href={transparency.auditRepoUrl}>
              🔗 Reproduce This Audit
            </a>
            <a className="dashboardTransparencyButton dashboardTransparencyButtonGhost" href={transparency.auditRepoUrl}>
              🔗 ProvablyFair Audit Repository
            </a>
            <a className="dashboardTransparencyButton dashboardTransparencyButtonGhost" href={transparency.datasetUrl}>
              🔗 Dataset &amp; Simulation Logs
            </a>
          </div>
        </div>

        <div className="dashboardTransparencyCard">
          <h3>Player Verification</h3>
          <p className="dashboardTransparencySubtitle">Verify Any Bet Yourself</p>
          <p>Every game result can be independently recomputed using publicly disclosed inputs.</p>
          <div className="dashboardTransparencyActions">
            <a className="dashboardTransparencyButton dashboardTransparencyButtonPrimary" href={transparency.verifierUrl}>
              🔗 ProvablyFair Public Verifier
            </a>
          </div>
          <p className="dashboardTransparencyUrl">{transparency.verifierUrl}</p>
        </div>
      </div>

      <div className="auditPinningGrid">
        <div className="auditPinningCard">
          <div className="auditPinningLabel">Audit Commit</div>
          <div className="auditPinningValue">{transparency.commitHash}</div>
        </div>
        <div className="auditPinningCard">
          <div className="auditPinningLabel">Framework Version</div>
          <div className="auditPinningValue">{transparency.frameworkVersion}</div>
        </div>
      </div>
    </div>
  );
}
