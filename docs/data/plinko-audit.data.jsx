import React from "react";

export const auditVerdictItems = [
  { id: "overall", title: "Overall Status", href: "#summary-verdict-section" },
  {
    id: "rtp",
    title: "RTP Verified",
    href: "#section-rtp-payout",
    reference: "Reference: 99.9% theoretical, 0.1% house edge (bracket 0)",
  },
  {
    id: "parity",
    title: "Live to Verifier Parity",
    href: "#section-live-verifier-parity",
    reference: "Reference: 100% (7,600/7,600 live bets matched)",
  },
  {
    id: "commitReveal",
    title: "Commit-Reveal System",
    href: "#section-seed-nonce-determinism",
    reference: "Reference: SHA-256 verified, 152/152 seeds",
  },
  {
    id: "seedHandling",
    title: "Seed Handling",
    href: "#section-seed-nonce-determinism",
    reference: "Reference: Player control verified, client seed changes 84.3% of outcomes",
  },
  {
    id: "rng",
    title: "RNG Analysis",
    href: "#section-rng-entropy",
    reference: "Reference: HMAC-SHA256, unbiased (2³² mod 2 = 0), serial independence confirmed",
  },
  {
    id: "payout",
    title: "Payout Logic",
    href: "#section-rtp-payout",
    reference: "Reference: All 7,600 payouts verified within 1e-8 tolerance",
  },
  {
    id: "fairness",
    title: "Fairness Guarantees Tested",
    href: "#section-fairness-integrity",
    reference: "Reference: 20/20 verification steps passed",
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
    reference: "Reference: 99.9% theoretical, 99.890% simulated (27M rounds)",
  },
  {
    id: "summary-parity",
    title: "Live ↔ Verifier Parity",
    reference: "Reference: 100% (7,600/7,600 live bets matched)",
  },
  {
    id: "summary-exploits",
    title: "Known Exploits Tested",
    reference: (
      <>
        Reference: <a href="#section-fairness-integrity">Section 5</a> (20/20 verification steps passed)
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
      meaning: "Nonce increments from 0 and is not reused within a seed pair.",
    },
    {
      id: "s1-hash-consistency",
      test: "Hash consistency within epoch",
      meaning: "The committed server-seed hash remains constant within each seed pair.",
    },
    {
      id: "s1-determinism",
      test: "Deterministic output",
      meaning: "Any result can be independently verified and reproduced.",
    },
    {
      id: "s1-client-seed-influence",
      test: "Client seed influence",
      meaning: "Wrong client seed changes 6,409/7,600 slots (84.3%), confirming active RNG participation.",
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
      meaning: "No timestamps, external APIs, or server-side mutable state are used.",
    },
    {
      id: "s2-modulo-bias",
      test: "Modulo bias",
      meaning: "2³² mod 2 = 0, giving exact 50/50 per row with no rejection sampling.",
    },
    {
      id: "s2-drand",
      test: "drand absent from Plinko RNG",
      meaning: "7,600/7,600 bets recompute correctly without drand input.",
    },
    {
      id: "s2-serial",
      test: "Serial independence",
      meaning: "Lag-1 autocorrelation and runs test both pass.",
    },
    {
      id: "s2-live-chi",
      test: "Chi-squared (live bets, 27 configs)",
      meaning: "27/27 configurations pass at α=0.01.",
    },
    {
      id: "s2-sim-chi",
      test: "Chi-squared (simulation, 27 configs)",
      meaning: "27/27 configurations pass at Bonferroni-corrected α/27 ≈ 0.00037.",
    },
    {
      id: "s2-anti-circularity",
      test: "Anti-circularity (Step 20)",
      meaning: "Independent binomial probabilities match config for all 27 configurations.",
    },
  ],
  section3: [
    {
      id: "s3-recompute",
      test: "Slot recomputation",
      meaning: "Independent HMAC-SHA256 rebuild matches every live slot.",
    },
    {
      id: "s3-payout",
      test: "Payout math",
      meaning: "win_amount = amount × multiplier for all 7,600 bets.",
    },
    {
      id: "s3-provenance",
      test: "Multiplier table provenance",
      meaning: "All bets match scaling_edge[0].multipliers reference table.",
    },
    {
      id: "s3-symmetry",
      test: "Multiplier symmetry",
      meaning: "table[k] == table[rows − k] verified for all 27 configs.",
    },
    {
      id: "s3-phasec",
      test: "Phase C code-path equivalence",
      meaning: "200/200 $10 bets recomputed correctly, same table as $0.01.",
    },
    {
      id: "s3-structure",
      test: "Edge slot and center floor",
      meaning: "Slot 0 = slot N for all configs; 16r/high center ≥ 0.2×.",
    },
  ],
  section4: [
    {
      id: "s4-payout-formula",
      test: "Payout formula",
      meaning: "win_amount = amount × multiplier for all 7,600 bets.",
    },
    {
      id: "s4-table-integrity",
      test: "Multiplier table integrity",
      meaning: "All live payouts match scaling_edge[0].multipliers.",
    },
    {
      id: "s4-theoretical",
      test: "Theoretical RTP",
      meaning: "99.900% across all 27 configs, proven analytically.",
    },
    {
      id: "s4-anticircular",
      test: "Anti-circularity",
      meaning: "Independent binomial probabilities match config exactly.",
    },
    {
      id: "s4-sim-convergence",
      test: "Simulated RTP convergence",
      meaning: "27M rounds, average 99.890%, within expected variance.",
    },
    {
      id: "s4-scaling-edge",
      test: "Scaling edge structure",
      meaning: "Bracket 0 house_edge = 0.001; both test amounts within bracket.",
    },
    {
      id: "s4-zero-edge",
      test: "Zero edge audit",
      meaning: "All effective_edge groups use the same multiplier table.",
    },
    {
      id: "s4-bet-size",
      test: "No payout distortion by bet size",
      meaning: "$10 bets use same table as $0.01 bets.",
    },
  ],
  section5: [
    {
      id: "s5-prediction",
      test: "Outcome prediction",
      status: "PASS",
      meaning: "Outcomes cannot be predicted before betting.",
    },
    {
      id: "s5-tamper",
      test: "Post-bet tamper resistance",
      status: "PASS",
      meaning: "Results cannot be altered after a bet is placed.",
    },
    {
      id: "s5-commit",
      test: "Seed commitment integrity",
      status: "PASS",
      meaning: "Commit-reveal protocol verified across 152 seed pairs.",
    },
    {
      id: "s5-nonce",
      test: "Nonce uniqueness and sequencing",
      status: "PASS",
      meaning: "Each bet uses unique, sequential input.",
    },
    {
      id: "s5-entropy",
      test: "Entropy isolation",
      status: "PASS",
      meaning: "No hidden, mixed, or predictable entropy sources are used.",
    },
    {
      id: "s5-round-isolation",
      test: "Round isolation",
      status: "PASS",
      meaning: "No serial correlation in outcomes.",
    },
    {
      id: "s5-player-isolation",
      test: "Player isolation",
      status: "TBD",
      meaning: "Requires concurrent multi-account seed rotation test.",
    },
    {
      id: "s5-payout",
      test: "Payout integrity",
      status: "PASS",
      meaning: "All payouts match formula and published table.",
    },
    {
      id: "s5-api-enforcement",
      test: "API parameter enforcement",
      status: "TBD",
      meaning: "Requires active API probing.",
    },
  ],
  section6: [
    {
      id: "s6-replay",
      test: "Independent replay of Plinko result",
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
      meaning: "You can run full and Plinko-specific tests and compare expected outputs.",
    },
    {
      id: "s7-report",
      test: "Report artifact generation",
      meaning: "Audit report can be regenerated from source using documented commands.",
    },
    {
      id: "s7-pinning",
      test: "Reproducibility metadata (partial)",
      meaning: "Dataset hash is source-backed; audited commit pin: TBD.",
    },
  ],
};

export const publicLinks = [
  {
    id: "repo",
    label: "GitHub Repository",
    href: "https://github.com/ProvablyFair-org/duel-audit",
    icon: "github",
  },
  {
    id: "commit",
    label: "Commit Audited: TBD",
    href: "https://github.com/ProvablyFair-org/duel-audit",
    icon: "commit",
  },
  {
    id: "verifier",
    label: "Public Verifier",
    href: "https://duel.com/plinko",
    icon: "verifier",
  },
  {
    id: "player-guide",
    label: "Player Verification Guide",
    href: "#section-player-verification",
    icon: "guide",
  },
];

export const pinningItems = [
  { id: "commit", label: "Git commit", value: "TBD", code: false },
  {
    id: "dataset",
    label: "Dataset hash (SHA-256)",
    value: "8382e45f8cdf4d439a8866669d15e6f4be543f4b926fb64c67e09d9da7d6b2db",
    code: true,
  },
  { id: "npm", label: "Node package manager version", value: "TBD" },
  { id: "node", label: "Node version", value: "TBD" },
];

export const highLevelFlowSteps = [
  { id: "flow-1", title: "Player bets", description: "Player submits a Plinko bet request with risk level and rows." },
  { id: "flow-2", title: "Seeds combined", description: "System combines server seed, client seed, and nonce." },
  {
    id: "flow-3",
    title: "RNG output generated",
    description: "HMAC-SHA256 produces one bit per row (left or right); final slot = sum of right-turns.",
  },
  { id: "flow-4", title: "Game logic evaluated", description: "Game logic determines path/slot and applies multiplier." },
  { id: "flow-5", title: "Payout resolved", description: "Payout resolves based on landing slot and multiplier table." },
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
        Recompute outcomes with independent verifier logic: <code>computeSlot</code> (HMAC-SHA256 per row).
      </>
    ),
  },
  {
    id: "parity-3",
    title: "Compare values",
    description: (
      <>
        Compare verifier output against <code>final_slot</code> from the live game.
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
      "You can review bet ID, result, path/slot, and multiplier.",
      "(Add screenshots: bet details modal with result fields.)",
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
        <strong>Client seed:</strong> player-controlled seed (example: <code>kJbhRHVAg4lh_OY7</code>).
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
        code: `git clone https://github.com/ProvablyFair-org/duel-audit.git
cd duel-audit`,
      },
    ],
  },
  {
    id: "repro-2",
    title: "Install dependencies",
    codeBlocks: [{ language: "bash", code: "npm install" }],
    note: "This installs required packages, including testing frameworks and cryptographic libraries.",
  },
  {
    id: "repro-3",
    title: "Run verification and simulation",
    codeBlocks: [
      {
        label: "Run verification suite (20 steps):",
        language: "bash",
        code: "npx ts-node tests/verify.ts",
      },
      {
        label: "Run 27M-round simulation:",
        language: "bash",
        code: "npx ts-node src/simulate.ts",
      },
      {
        label: "Expected output:",
        language: "text",
        code: `[PASS] Step 1: Seed Hash Integrity
[PASS] Step 2: Commitment Linkage
... (20 steps, 0 hard fails)
27 configs, chi-squared pass, avg RTP ≈ 99.890%`,
      },
    ],
  },
  {
    id: "repro-4",
    title: "View generated outputs",
    codeBlocks: [
      {
        label: "Verification and simulation results:",
        language: "bash",
        code: `cat outputs/verification-results.json
cat outputs/simulation-results.json
cat outputs/determinism-log.json`,
      },
    ],
    note: (
      <>
        Outputs are written to <code>outputs/</code> (verification-results.json, simulation-results.json, determinism-log.json).
      </>
    ),
  },
];
