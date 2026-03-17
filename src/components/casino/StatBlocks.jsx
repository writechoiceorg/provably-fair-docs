import React from 'react';

export default function StatBlocks({ stats }) {
  return (
    <div className="pf-stat-block-group">
      <div className="pf-stat-block pf-stat-block--default">
        <div className="pf-stat-block__value">{stats.liveBetsVerified}</div>
        <div className="pf-stat-block__label">Live Bets Verified</div>
      </div>
      <div className="pf-stat-block pf-stat-block--default">
        <div className="pf-stat-block__value">{stats.simulationRounds}</div>
        <div className="pf-stat-block__label">Simulation Rounds</div>
      </div>
      <div className="pf-stat-block pf-stat-block--accent">
        <div className="pf-stat-block__value pf-stat-block__value--accent">{stats.integrityChecks}</div>
        <div className="pf-stat-block__label">Game Integrity Checks</div>
      </div>
      <div className="pf-stat-block pf-stat-block--green">
        <div className="pf-stat-block__value pf-stat-block__value--green">{stats.gamesValidated}</div>
        <div className="pf-stat-block__label">Games Fully Validated</div>
      </div>
    </div>
  );
}