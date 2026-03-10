import React from "react";

export const auditVerdictItems = [
  { id: "overall", title: "Overall Status", href: "#summary-verdict-section" },
  {
    id: "rtp",
    title: "RTP Verified",
    href: "#section-rtp-payout",
    reference: "Reference: 99.9% +/-0.1% house edge",
  },
  {
    id: "parity",
    title: "Live to Verifier Parity",
    href: "#section-live-verifier-parity",
    reference: "Reference: 100% all test rounds matched",
  },
  {
    id: "commitReveal",
    title: "Commit-Reveal System",
    href: "#section-seed-nonce-determinism",
    reference: "Reference: SHA-256 verified",
  },
  {
    id: "seedHandling",
    title: "Seed Handling",
    href: "#section-seed-nonce-determinism",
    reference: "Reference: Player control verified",
  },
  {
    id: "rng",
    title: "RNG Analysis",
    href: "#section-rng-entropy",
    reference: "Reference: Unbiased via rejection sampling",
  },
  {
    id: "payout",
    title: "Payout Logic",
    href: "#section-rtp-payout",
    reference: "Reference: All payouts verified correct",
  },
  {
    id: "fairness",
    title: "Fairness Guarantees Tested",
    href: "#section-fairness-integrity",
    reference: "Reference: 7 of 7 fairness guarantees verified",
  },
  {
    id: "determinism",
    title: "Determinism",
    href: "#section-seed-nonce-determinism",
    reference: "Reference: Full reproducibility confirmed",
  },
];

export const summaryVerdictItems = [
  { id: "summary-overall", title: "Overall Status", primary: true },
  {
    id: "summary-rtp",
    title: "RTP Verified",
    reference: "Reference: 99.9% theoretical RTP (0.1% house edge)",
  },
  {
    id: "summary-parity",
    title: "Live ↔ Verifier Parity",
    reference: "Reference: 100% (6,200/6,200 live bets matched)",
  },
  {
    id: "summary-exploits",
    title: "Known Exploits Tested",
    reference: (
      <>
        Reference: <a href="#5-fairness-integrity-testing">Section 5</a> (7/7 categories passed)
      </>
    ),
  },
];

export const sectionVerdictRows = {
  section1: [
    {
      id: "s1-server-seed",
      test: "Server seed committed before bet",
      meaning: "The casino cannot change outcomes after you bet.",
    },
    {
      id: "s1-client-seed",
      test: "Player client seed control",
      meaning: "You contribute your own randomness to outcomes.",
    },
    {
      id: "s1-nonce",
      test: "Nonce sequencing",
      meaning: "Every bet stays unique, even when seeds are unchanged.",
    },
    {
      id: "s1-determinism",
      test: "Deterministic output",
      meaning: "Any result can be independently verified and reproduced.",
    },
  ],
  section2: [
    {
      id: "s2-inputs",
      test: "RNG derived only from disclosed inputs",
      meaning: "No hidden randomness affects your outcomes.",
    },
    {
      id: "s2-entropy",
      test: "Entropy purity",
      meaning: "No timestamps, server state, or external inputs are used.",
    },
    {
      id: "s2-uniformity",
      test: "Output uniformity",
      meaning: "Every number between 0.00 and 100.00 has an equal chance.",
    },
    {
      id: "s2-leakage",
      test: "No state leakage",
      meaning: "Previous bets do not influence future results.",
    },
  ],
  section3: [
    {
      id: "s3-recompute",
      test: "Live result recomputation",
      meaning: "The verifier recalculates your exact outcomes.",
    },
    {
      id: "s3-alignment",
      test: "RNG logic alignment",
      meaning: "The same RNG logic runs in the live game and verifier.",
    },
    {
      id: "s3-deterministic",
      test: "Deterministic parity",
      meaning: "No divergence between systems.",
    },
    {
      id: "s3-production",
      test: "Production data tested",
      meaning: "Real bets from live gameplay, not simulated data.",
    },
  ],
  section4: [
    {
      id: "s4-winloss",
      test: "Win/loss mapping by rules",
      meaning: "Wins and losses are calculated exactly as documented game rules define.",
    },
    {
      id: "s4-payout",
      test: "Payout formula correctness",
      meaning: "Payouts cannot be altered after roll generation.",
    },
    {
      id: "s4-rtp",
      test: "Advertised RTP alignment",
      meaning: "House edge remains consistent and transparent across bets.",
    },
    {
      id: "s4-target-consistency",
      test: "Cross-target consistency",
      meaning: "Results remain stable across bet directions and target choices.",
    },
    {
      id: "s4-convergence",
      test: "Observed RTP convergence",
      meaning: "Over time, returns converge toward advertised RTP as expected for fair Dice.",
    },
  ],
  section5: [
    {
      id: "s5-prediction",
      test: "Outcome prediction",
      meaning: "Outcomes cannot be predicted before betting.",
    },
    {
      id: "s5-tamper",
      test: "Post-bet tamper resistance",
      meaning: "Results cannot be altered after a bet is placed.",
    },
    {
      id: "s5-commit",
      test: "Seed commitment integrity",
      meaning: "Commit-reveal protocol cannot be bypassed.",
    },
    {
      id: "s5-nonce",
      test: "Nonce uniqueness and sequencing",
      meaning: "Each bet uses unique, sequential input.",
    },
    {
      id: "s5-entropy",
      test: "Entropy isolation",
      meaning: "No hidden, mixed, or predictable entropy sources are used.",
    },
    {
      id: "s5-isolation",
      test: "Round and user isolation",
      meaning: "Outcomes are isolated across rounds and users.",
    },
    {
      id: "s5-payout",
      test: "Payout integrity",
      meaning: "Game parameters and payouts cannot be manipulated client-side.",
    },
  ],
  section6: [
    {
      id: "s6-replay",
      test: "Independent replay of Dice result",
      meaning: "Any player can reproduce outcomes using disclosed seeds and nonce.",
    },
    {
      id: "s6-inputs",
      test: "Disclosed-input verification only",
      meaning: "No hidden backend data is required to verify outcomes.",
    },
    {
      id: "s6-determinism",
      test: "Deterministic recomputation",
      meaning: "Identical inputs always produce identical output.",
    },
    {
      id: "s6-ui",
      test: "In-product verification availability",
      meaning: "Most players can verify directly from Duel UI verify flow.",
    },
    {
      id: "s6-advanced",
      test: "Advanced verification path",
      meaning: "Developers can run independent scripts and cross-check outputs locally.",
    },
  ],
  section7: [
    {
      id: "s7-public",
      test: "Public repository access",
      meaning: "Audit codebase is publicly available for independent inspection.",
    },
    {
      id: "s7-setup",
      test: "Reproducible environment setup",
      meaning: "Required tooling and install steps are explicitly documented.",
    },
    {
      id: "s7-tests",
      test: "Verifiable test execution",
      meaning: "You can run full and Dice-specific tests and compare expected outputs.",
    },
    {
      id: "s7-report",
      test: "Report artifact generation",
      meaning: "Audit report can be regenerated from source using documented commands.",
    },
    {
      id: "s7-pinning",
      test: "Pinned reproducibility metadata",
      meaning: "Commit and dataset hash pinning support consistent reruns.",
    },
  ],
};

export const publicLinks = [
  { id: "repo", label: "GitHub Repository", href: "https://github.com/ProvablyFair-org/duel-audit", icon: "github" },
  {
    id: "commit",
    label: "Commit Audited: fa913ab",
    href: "https://github.com/ProvablyFair-org/duel-audit/commit/fa913ab94883d06950d3c63bbb7007f927648131",
    icon: "commit",
  },
  { id: "verifier", label: "Public Verifier", href: "https://duel.com/dice", icon: "verifier" },
  { id: "player-guide", label: "Player Verification Guide", href: "#6-player-verification-guide", icon: "guide" },
];

export const pinningItems = [
  { id: "commit", label: "Git commit", value: "fa913ab94883d06950d3c63bbb7007f927648131", code: true },
  {
    id: "dataset",
    label: "Dataset hash (SHA-256)",
    value: "ba3ae70517c7f77e07eaced46900a5f94ebc02bf11c41502fac894f142efb799",
    code: true,
  },
  { id: "npm", label: "Node package manager version", value: "11.3.0 (minimum 8.x)" },
  { id: "node", label: "Node version", value: "v22.11.0 (minimum v16.x)" },
];

export const highLevelFlowSteps = [
  { id: "flow-1", title: "Player bets", description: "Player submits a Dice bet request." },
  { id: "flow-2", title: "Seeds combined", description: "System combines server seed, client seed, and nonce." },
  {
    id: "flow-3",
    title: "RNG output generated",
    description: "HMAC-SHA256 with rejection sampling generates the random output.",
  },
  { id: "flow-4", title: "Game logic evaluated", description: "Game logic compares output to the selected target." },
  { id: "flow-5", title: "Payout resolved", description: "Payout resolves as win or loss with multiplier application." },
];

export const commitRevealSteps = [
  { id: "commit-1", title: "Commit", description: "Casino publishes only the SHA-256 hash of the server seed." },
  { id: "commit-2", title: "Bet", description: "Your client seed contributes independent entropy." },
  { id: "commit-3", title: "Reveal", description: "Casino reveals server seed after resolution." },
  { id: "commit-4", title: "Verify", description: "Hashing revealed seed must match committed hash." },
];

export const parityTestMethodSteps = [
  {
    id: "parity-1",
    title: "Extract inputs",
    description: (
      <>
        Extract <code>(serverSeed, clientSeed, nonce)</code> from live bet data.
      </>
    ),
  },
  {
    id: "parity-2",
    title: "Recompute outcomes",
    description: (
      <>
        Recompute outcomes with independent verifier logic: <code>generator.generateDiceResult()</code>.
      </>
    ),
  },
  {
    id: "parity-3",
    title: "Compare values",
    description: (
      <>
        Compare verifier output against <code>drawnNumber</code> from the live game.
      </>
    ),
  },
  {
    id: "parity-4",
    title: "Assert parity",
    description: (
      <>
        Assert exact match (<code>100%</code> parity required).
      </>
    ),
  },
];

export const verifyBetSteps = [
  {
    id: "verify-1",
    title: "Open bet details",
    bullets: [
      "After any bet, click the bet result to open the details modal.",
      "You can review bet ID, result, multiplier, and target.",
      "(Add 2 screenshots: bet details modal with result fields.)",
    ],
  },
  {
    id: "verify-2",
    title: "Click Verify tab",
    bullets: [
      <>
        In the details modal, switch from <code>Results</code> to <code>Verify</code>.
      </>,
      "This opens the verification interface linked to the provably fair verification model.",
      "(Add screenshot: verify tab and verify interface.)",
    ],
  },
  {
    id: "verify-3",
    title: "Review your seeds",
    bullets: [
      <>
        <strong>Client seed:</strong> player-controlled seed (example: <code>G3blCQBWQdVfM8sx</code>).
      </>,
      <><strong>Server seed:</strong> revealed server seed (64 hex characters).</>,
      <><strong>Server seed hash:</strong> pre-committed hash shown before the bet.</>,
      <>
        <strong>Nonce:</strong> bet number in sequence (starts at <code>0</code>).
      </>,
    ],
    note: (
      <>
        After selecting <code>Rotate Seed</code>, the interface opens a popup with verification results and sample code
        for independent validation.
      </>
    ),
  },
  {
    id: "verify-4",
    title: "Verify the result",
    bullets: [
      "Verifier displays calculated result based on your seeds.",
      "Compare verifier output with game result. Values must match exactly.",
      <>
        Use <code>Copy code</code> to export the JavaScript verification script.
      </>,
      "(Add screenshot: verify tab and copy-code action.)",
    ],
  },
];

export const reproducibilityCommandSteps = [
  {
    id: "repro-1",
    title: "Clone repository",
    codeBlocks: [
      {
        language: "bash",
        code: `git clone https://github.com/ProvablyFair-org/duel-audit\ncd duel-audit`,
      },
    ],
  },
  {
    id: "repro-2",
    title: "Install dependencies",
    codeBlocks: [{ language: "bash", code: "npm install" }],
    note: "This installs required packages, including testing frameworks (Mocha/Chai) and cryptographic libraries.",
  },
  {
    id: "repro-3",
    title: "Run tests",
    codeBlocks: [
      { label: "Run all tests:", language: "bash", code: "npm test" },
      { label: "Run Dice-specific tests:", language: "bash", code: 'npm test -- --grep "Dice"' },
      {
        label: "Expected output:",
        language: "text",
        code: `Dice Audit Execution Checklist
  ✓ Server seed reveal matches commit
  ✓ Client seed can be manually changed by the user
  ✓ Nonce starts correctly, increments by 1 and is never reused
  ✓ Game results producing algorithm is fully deterministic
  ✓ No mixed entropy sources
  ...

15 passing (2.4s)`,
      },
    ],
  },
  {
    id: "repro-4",
    title: "Generate audit report",
    codeBlocks: [{ language: "bash", code: "npm run audit:report" }],
    note: (
      <>
        This generates a Dice audit report at <code>outputs/audit-results/audit-results.json</code>.
      </>
    ),
  },
];
