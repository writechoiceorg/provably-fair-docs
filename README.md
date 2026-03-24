# How to Update Audit Reports Using config.json

This guide explains how every piece of content on the audit page is controlled through a single file: `config.json`. You never need to touch the page template or any React components. Everything — text, tables, numbers, links, code blocks — is driven by this one file.

## Where the file lives

```
docs/casinos/duel/games/plinko/config.json
```

When you add a new casino or game, you create a new folder with its own `config.json`. The structure stays the same — only the data changes.

## The big picture

The config file is organized into these top-level sections:

```
config.json
├── name, slug, icon, status       → basic game identity
├── hero                           → the top banner
├── statsBlock                     → the 4 stats + featured block
├── auditVerdict                   → the main results table
├── overview                       → intro, checklist, references
└── sections (array of 7)         → S1 through S7
```

Everything you see on the page maps directly to one of these.

## Part 1 — The Top Banner (hero)

```json
"hero": {
  "title": "Duel: Plinko Audit",
  "subtitle": "Provably Fair Verification Report",
  "auditDate": "March 2026",
  "auditId": "PF-2026-002",
  "certifiedBy": "ProvablyFair.org",
  "badges": [
    { "label": "Certified", "variant": "green" },
    { "label": "Plinko", "variant": "orange" },
    { "label": "Last Updated: March 2026", "variant": "neutral" }
  ]
}
```

**To update:** Change the text values directly. For badges, `variant` controls the color — valid options are `green`, `orange`, and `neutral`.

## Part 2 — The Stats Block

```json
"statsBlock": {
  "stats": [
    { "value": "7,600", "label": "Live Bets Verified" },
    { "value": "100%", "label": "Parity Rate", "variant": "green" },
    { "value": "27M", "label": "Simulated Rounds" },
    { "value": "99.9%", "label": "Theoretical RTP", "variant": "accent" }
  ],
  "featured": {
    "value": "15 / 20",
    "label": "Tests Passed",
    "filled": 15,
    "total": 20
  }
}
```

**To update:** Change the `value` and `label` strings. The `featured` block also drives the dot progress bar — update `filled` and `total` to match the numbers in `value`.

## Part 3 — The Audit Verdict Table

This is the main results table near the top of the page.

```json
"auditVerdict": [
  {
    "check": "Overall Status",
    "result": "Pass",
    "reference": ""
  },
  {
    "check": "RTP Verified",
    "result": "Pass",
    "reference": "99.9% theoretical | 99.890% simulated (27M)"
  }
]
```

**To update:** Each object is one row. `result` should be `"Pass"`, `"Fail"`, or `"Flag"` — this controls the color of the status pill. Leave `reference` empty if there's nothing to add.


## Part 4 — The Overview Section

```json
"overview": {
  "title": "Plinko Audit Overview",
  "intro": "This audit independently validates...",
  "whatWasAudited": [
    "The RNG algorithm is deterministic and independently verifiable",
    "Server seeds are cryptographically committed before play"
  ],
  "guarantees": [
    "Outcomes are deterministic and reproducible from the recorded inputs"
  ],
  "excludes": [
    "Infrastructure or server security",
    "Wallet, payments, or custody systems"
  ]
}
```

`whatWasAudited`, `guarantees`, and `excludes` are all simple lists. Add or remove items by adding or removing lines from the array.

### The Reproduce Block

```json
"reproduce": {
  "repoUrl": "https://github.com/ProvablyFair-org/duel-audit",
  "repoLabel": "github.com/ProvablyFair-org/duel-audit",
  "commit": "[TBD]",
  "verifierUrl": "https://duel.com/plinko",
  "verifierLabel": "duel.com/plinko",
  "note": {
    "variant": "ok",
    "strong": "All code, datasets, and simulation scripts are publicly accessible.",
    "body": "Anyone can independently verify every finding in this audit."
  },
  "commands": {
    "label": "reproduce-audit.sh",
    "language": "sh",
    "lines": [
      "git clone https://github.com/ProvablyFair-org/duel-audit.git",
      "cd duel-audit",
      "npm install"
    ]
  }
}
```

Update `repoUrl`, `commit`, and `verifierUrl` when a new audit is published. The `commands.lines` array is each line of the shell script shown on the page.

---

## Part 5 — The 7 Audit Sections (S1–S7)

This is the main body of the report. All sections live in the `sections` array. Section 1 is `sections[0]`, Section 2 is `sections[1]`, and so on.

Every section (S1–S5) follows the same structure:

```json
{
  "number": 1,
  "title": "Seed, Nonce & Determinism",
  "subtitle": "Can the casino change your outcome after you bet?",
  "intro": "Every Plinko drop on Duel is generated from three inputs...",
  "playerBrief": { ... },
  "diagram": "/img/diagrams/plinko/hmac-pipeline.svg",
  "sectionVerdictTable": [ ... ],
  "verdict": { ... },
  "expandables": [ ... ]
}
```

Here is what each field does:

### `title` and `subtitle`
The section heading and the smaller question shown below it. Change the text directly.


### `intro`
The paragraph of text that appears right after the section heading. Plain text, no formatting.

### `diagram`
The path to the SVG image file. The image must exist in `static/img/diagrams/plinko/`. To use a different diagram, put the SVG file in that folder and update the path here.

> Note: S5 and S7 have no diagram — those sections simply don't have a `diagram` field.



### `playerBrief`
The two-column summary box near the top of each section. For S1–S5 it looks like this:

```json
"playerBrief": {
  "headline": "Commit-Reveal Cryptographic Guarantee",
  "statValue": "152 / 152",
  "statLabel": "seeds verified",
  "leftTitle": "What We Verified",
  "rightTitle": "What This Means for You",
  "verified": [
    "Casino commits to server seed before any bet",
    "Players can set or change their client seed"
  ],
  "means": [
    "Casino cannot change outcomes after you bet",
    "You contribute your own randomness via client seed"
  ]
}
```

- `statValue` and `statLabel` are the large number shown in the top-right of the box
- `verified` is the left column list
- `means` is the right column list

S6 uses a slightly different structure with `columns` instead of `verified`/`means` — see the S6 section below.


### `sectionVerdictTable`
The table of checks and results for this section.

```json
"sectionVerdictTable": [
  {
    "check": "Server seed committed before bet",
    "status": "Pass",
    "finding": "Casino cannot change randomness after betting"
  }
]
```

Each object is one row. `status` controls the pill color — use `"Pass"`, `"Fail"`, or `"Flag"`.


### `verdict`
The green box at the bottom of the section summary.

```json
"verdict": {
  "title": "Commit-reveal verified",
  "body": "The audited seed lifecycle matched the expected model..."
}
```

Change both the `title` and `body` text.

> Note: S6 uses `verdictTitle` and `verdictBody` as flat fields instead of a nested object — this is a known inconsistency that will be unified in a future update.


### `expandables`
The collapsible panels that contain all the detailed technical evidence. Each section has one or more expandable panels, and each panel contains subsections.

```json
"expandables": [
  {
    "title": "How It Works — Seed, Nonce & Determinism",
    "count": "7 sections",
    "subsections": [ ... ]
  },
  {
    "title": "Technical Evidence & Verification",
    "count": "6 sections",
    "subsections": [ ... ]
  }
]
```

`title` is what appears on the clickable panel header. `count` is the small label next to it (e.g. "7 sections"). To add a new panel, add a new object to this array.


## Part 6 — Subsections (inside expandables)

Each subsection is one block of content inside a panel. The `number` and `title` appear as a header. The remaining fields control what is displayed below.

```json
{
  "number": "1.1",
  "title": "Server Seed Commitment",
  "content": "Before any bet is placed...",
  "diagram": "/img/diagrams/plinko/commit-reveal.svg",
  "code": { ... },
  "note": { ... }
}
```

Only include the fields you need. If a field is absent, that element simply won't appear.

### Available fields

**`content`** — a paragraph of text.

**`preBlock`** — a plain preformatted text block (like terminal output). Use `\n` for line breaks.

**`diagram`** — path to an SVG file, same format as the section-level diagram.

**`image`** — a screenshot or photo with a caption:
```json
"image": {
  "src": "/img/screenshots/plinko/s6-step1-game.png",
  "alt": "Plinko game screenshot",
  "caption": "Duel.com Plinko — 16 rows, high risk."
}
```

**`bullets`** — a simple list of items:
```json
"bullets": [
  "First point",
  "Second point",
  "Third point"
]
```

**`table`** — a table with column headers and rows:
```json
"table": {
  "columns": ["Category", "What It Protects"],
  "rows": [
    ["Nonce Integrity", "Each bet is unique and non-replayable"],
    ["Seed Commitment", "Commit-reveal protocol cannot be bypassed"]
  ]
}
```
Add `"tableSmall": true` to the subsection (not inside the table object) if you want smaller text.

**`pins`** — a key-value grid, used for evidence summaries:
```json
"pins": [
  { "key": "Server seed commit & reveal", "value": "152 seed entries — Pass" },
  { "key": "Nonce incrementation", "value": "7,600 transitions — Pass" }
]
```

**`code`** — a collapsible code block:
```json
"code": {
  "label": "tests/verify.ts · Step 1",
  "language": "ts",
  "badge": "Verified",
  "lines": [
    "const revealed = revealedSeeds(seeds);",
    "for (const s of revealed) {",
    "  verifyHash(s.seed.serverSeed, s.seed.serverSeedHashed);",
    "}"
  ]
}
```
`badge` is optional. `language` controls syntax highlighting — use `ts`, `js`, `sh`, `json`, `python`, or `text`.

For standalone scripts (like in S6), use `body` instead of `lines`:
```json
"code": {
  "file": "verify-plinko.js",
  "lines": "standalone",
  "badge": "Verified",
  "lang": "js",
  "body": "const crypto = require('crypto');\n\nfunction verify..."
}
```

**`extraCodes`** — additional code blocks after the first one. Same structure as `code`, but it's an array so you can have multiple.

**`postCodeBlock`** — plain preformatted text that appears immediately after the code block. Useful for showing expected terminal output.

**`extraContent`** — a second paragraph of text that appears after the code blocks.

**`compare`** — the left/middle/right comparison strip:
```json
"compare": {
  "leftLabel": "Live Game",
  "leftValue": "final_slot = 12",
  "middle": "=",
  "rightLabel": "Verifier",
  "rightValue": "computed_slot = 12"
}
```

**`note`** — a highlighted note box:
```json
"note": {
  "variant": "ok",
  "strong": "Result:",
  "body": "All 152 revealed seeds passed verification."
}
```
`variant` options: `"ok"` (green), `"default"` (gray), `"warn"` (amber).

**`notes`** — same as `note` but an array, for when you need multiple note boxes in one subsection.


## Part 7 — S6 (Player Verification Guide) specific fields

S6 has three extra fields that don't appear in other sections.

### `walkthroughSteps`
The numbered steps list with the "Verification Walkthrough" heading.

```json
"walkthroughSteps": [
  { "num": 1, "title": "Play a Plinko Bet", "body": "Choose your rows, risk level..." },
  { "num": 2, "title": "Open the Verify Tab", "body": "Click on the bet result..." }
]
```

### `verifierLinks`
The two "Open →" buttons linking to verification tools.

```json
"verifierLinks": [
  {
    "href": "https://duel.com/fairness/verify",
    "label": "Duel.com Verifier",
    "sublabel": "Casino's built-in verification tool",
    "color": "#0ea5e9",
    "icon": "shield"
  },
  {
    "href": "https://www.provablyfair.org/audit/duel",
    "label": "ProvablyFair.org Verifier",
    "sublabel": "Independent third-party verification",
    "color": "#e8590c",
    "icon": "search"
  }
]
```

`icon` accepts `"shield"` or `"search"`. `color` is any hex color and controls both the icon background and the border.


## Part 8 — S7 (Reproducibility & Artifacts) specific fields

S7 has its own unique layout with five special fields.

### `repoTree`
The folder structure display.
```json
"repoTree": {
  "title": "Repository Structure",
  "lines": [
    "duel-plinko-main-2/",
    "├── src/",
    "│   ├── rng.ts    → computeSlot",
    "└── tsconfig.json"
  ]
}
```
Each line in `lines` is one line of the tree. Use plain text — spaces and `├──` characters are preserved exactly.

### `commandTabs`
The tabbed code block with setup commands.
```json
"commandTabs": [
  {
    "label": "1. Clone & Install",
    "code": "git clone https://github.com/...\nnpm install",
    "note": "Installs TypeScript and dependencies."
  },
  {
    "label": "2. Verify (20 steps)",
    "code": "npx ts-node tests/verify.ts",
    "output": "  [PASS] Step 1 — Seed Hash Integrity\n  [PASS] Step 2 — Commitment Linkage"
  }
]
```
Use `\n` to separate lines within `code` and `output`. Use `note` for a plain text explanation, or `output` to show expected terminal output below the code.

### `outputArtifacts`
The collapsible table listing generated files.
```json
"outputArtifacts": {
  "title": "Output Artifacts",
  "badge": "4 files generated",
  "iconColor": "#16a34a",
  "columns": ["File", "Contents", "Size"],
  "rows": [
    ["verification-results.json", "Steps 1-20 results", "~150KB"]
  ]
}
```

### `pinning`
The reproducibility pinning grid.
```json
"pinning": [
  { "key": "Git Commit", "value": "[TBD — will be pinned at publication]" },
  { "key": "Dataset Hash (SHA-256)", "value": "8382e45f..." }
]
```

### `stepCrossRef`
The collapsible step-to-section mapping table. Same structure as `outputArtifacts`.


## How to add a new casino or game

1. Copy the folder `docs/casinos/duel/games/plinko/` to a new path, e.g. `docs/casinos/stake/games/dice/`
2. Replace the `config.json` with the new game's data — every field, every section
3. Put the SVG diagrams in `static/img/diagrams/dice/` and update the `diagram` paths in config
4. The `overview.mdx` template file stays identical — it reads everything from `config.json`


## Rules to follow when editing

- **Always use double quotes** for strings in JSON. Single quotes will break the file.
- **Never leave a trailing comma** after the last item in an array or object. This will break the file.
- **Test after every edit** by running `npm run start` and checking the browser. The page will show an error if the JSON is invalid.
- **Use a JSON validator** if you're unsure — paste your config into [jsonlint.com](https://jsonlint.com) to check for errors before saving.
- **Don't delete required fields.** If a section expects a `verdict` object and you remove it, the page will crash. If you want to leave something blank, keep the field with an empty string: `"body": ""`.
- **Diagram files must exist.** If you set `"diagram": "/img/diagrams/plinko/my-diagram.svg"` but the file isn't in the `static/` folder, a broken image will appear.