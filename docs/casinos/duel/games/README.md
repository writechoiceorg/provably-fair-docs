# Adding a New Game Audit

This README explains how to add a complete game audit page (like the Plinko audit) to the system. All content lives in a single `config.json` file — the MDX template is layout-only and never needs to change.

---

## Table of Contents

- [How It Works](#how-it-works)
- [File Structure](#file-structure)
- [Step 1 — Create the folders and files](#step-1--create-the-folders-and-files)
- [Step 2 — Copy the MDX template](#step-2--copy-the-mdx-template)
- [Step 3 — Build the config.json](#step-3--build-the-configjson)
  - [Top-level fields](#top-level-fields)
  - [hero](#hero)
  - [statsBlock](#statsblock)
  - [auditVerdict](#auditverdict)
  - [overview](#overview)
  - [sections](#sections)
    - [Section-level fields](#section-level-fields)
    - [playerBrief](#playerbried)
    - [sectionVerdictTable](#sectionverdittable)
    - [verdict](#verdict)
    - [expandables and subsections](#expandables-and-subsections)
    - [SubSection field reference](#subsection-field-reference)
- [Step 4 — Add diagrams and screenshots](#step-4--add-diagrams-and-screenshots)
- [Step 5 — Register the game in the sidebar](#step-5--register-the-game-in-the-sidebar)
- [Step 6 — Add the game to the dashboard](#step-6--add-the-game-to-the-dashboard)
- [Quick Checklist](#quick-checklist)

---

## How It Works

Every game audit follows the same pattern:

```
docs/casinos/<casino>/games/<game>/
  config.json     ← all content lives here
  overview.mdx    ← layout only, never edit for content changes
```

The MDX file imports `config.json` and passes data to pre-built React components. To update any text, number, code block, table, or diagram reference on the page, you only edit `config.json`.

---

## File Structure

```
docs/casinos/duel/games/
└── plinko/                     ← use this as the reference
    ├── config.json
    └── overview.mdx

static/img/
├── diagrams/
│   └── plinko/                 ← SVG diagrams for the game
│       ├── hmac-pipeline.svg
│       ├── commit-reveal.svg
│       └── ...
└── screenshots/
    └── plinko/                 ← PNG screenshots used in subsections
        └── s6-step1-game.png
```

---

## Step 1 — Create the folders and files

Replace `<game>` with the game slug (e.g. `dice`, `crash`, `blackjack`).

```bash
mkdir -p docs/casinos/duel/games/<game>
touch docs/casinos/duel/games/<game>/config.json
touch docs/casinos/duel/games/<game>/overview.mdx
mkdir -p static/img/diagrams/<game>
mkdir -p static/img/screenshots/<game>
```

---

## Step 2 — Copy the MDX template

The MDX file is identical for every game — only the config import path changes. Copy it from Plinko and update the first import line:

```mdx
import config from './config.json';
```

Everything else in the MDX is driven by `config`. **Do not hardcode content in the MDX.**

---

## Step 3 — Build the config.json

The full config shape is documented below. All fields are required unless marked **optional**.

---

### Top-level fields

```json
{
  "name":   "Plinko",
  "slug":   "plinko",
  "icon":   "plinko",
  "status": "pass"
}
```

| Field    | What it controls |
|----------|-----------------|
| `name`   | Display name shown in the banner and cards |
| `slug`   | URL path segment (`/games/plinko`) |
| `icon`   | Icon key used by `GameIcon` component. Available icons: `dice`, `crash`, `plinko`, `blackjack`, `roulette`, `keno`, `mines`, `beef` |
| `status` | `"pass"` shows a green certified badge everywhere |

---

### hero

Controls the page banner (`CertBannerGames`) at the top of the page.

```json
"hero": {
  "title":      "Plinko — Provably Fair Audit",
  "subtitle":   "Duel.com · Game Audit Report",
  "auditDate":  "Feb 12, 2026",
  "auditId":    "PF-2026-001-PLINKO",
  "certifiedBy": "ProvablyFair.org",
  "badges": [
    "HMAC-SHA256",
    "Commit-Reveal",
    "Deterministic",
    "Open Source"
  ]
}
```

`badges` renders as a row of tags directly below the banner. Add any short label that describes the game's RNG model or audit properties.

---

### statsBlock

Controls the `GameStats` component — the row of headline numbers near the top of the page.

```json
"statsBlock": {
  "stats": [
    { "value": "1,009",   "label": "Live Bets Verified" },
    { "value": "10M",     "label": "Simulated Rounds" },
    { "value": "15",      "label": "Integrity Checks" },
    { "value": "100%",    "label": "Parity Match Rate" }
  ],
  "featured": {
    "value": "CERTIFIED",
    "label": "Audit Status"
  }
}
```

`featured` is the large highlighted stat on the right. Use it for the most important summary number or status.

---

### auditVerdict

Controls the `GameVerdictTable` — the top-level pass/fail verdict table near the top of the page. One row per audit area.

```json
"auditVerdict": [
  { "check": "Overall Status",          "result": "Pass", "reference": "" },
  { "check": "Seed & Determinism",      "result": "Pass", "reference": "Section 1" },
  { "check": "RNG & Entropy",           "result": "Pass", "reference": "Section 2" },
  { "check": "Verifier Parity",         "result": "Pass", "reference": "Section 3" },
  { "check": "RTP & Payout Validation", "result": "Pass", "reference": "Section 4" },
  { "check": "Fairness Integrity",      "result": "Pass", "reference": "Section 5" }
]
```

---

### overview

Controls the game overview block before the audit sections begin.

```json
"overview": {
  "title": "What Is Plinko?",
  "intro": "Plinko is a ball-drop game where a ball travels through a triangular grid...",

  "whatWasAudited": [
    "Seed commitment and reveal lifecycle",
    "HMAC-SHA256 outcome generation per row",
    "Live result vs. independent recomputation",
    "RTP convergence across all risk/row configs",
    "15 fairness integrity checks"
  ],

  "coverageTable": {
    "columns": { "left": "Area", "right": "Description" },
    "rows": [
      ["Seed Lifecycle",    "Commit → play → reveal verified end-to-end"],
      ["RNG Model",         "HMAC-SHA256 per row, standard crypto library"],
      ["Parity Validation", "1,009 live bets independently recomputed"],
      ["RTP Simulation",    "10M rounds, all row/risk combinations"],
      ["Integrity Testing", "15 adversarial checks across 5 categories"]
    ]
  },

  "guarantees": [
    "Casino cannot change outcome after you place a bet",
    "Your client seed directly influences every result",
    "Results are independently reproducible by anyone"
  ],

  "excludes": [
    { "item": "Network-level exploits or wallet vulnerabilities" },
    { "item": "Business solvency or regulatory compliance" }
  ],

  "reproduce": {
    "repoUrl":      "https://github.com/provablyfair/audits",
    "repoLabel":    "View on GitHub",
    "commit":       "fa913ab94883d06950d3c63bbb7007f927648131",
    "verifierUrl":  "https://provablyfair.org/verify/duel/plinko",
    "verifierLabel": "Open Verifier",
    "note":         "All scripts, datasets, and simulation results are pinned to the commit above.",
    "code":         "git clone https://github.com/provablyfair/audits\ncd audits && git checkout fa913ab\nnpm install && npm run verify:plinko"
  },

  "references": [
    { "label": "Duel.com Fairness Page", "href": "https://duel.com/fairness" },
    { "label": "HMAC-SHA256 Spec (RFC 2104)", "href": "https://tools.ietf.org/html/rfc2104" }
  ]
}
```

---

### sections

`sections` is an array of audit section objects. Each section maps to a numbered block on the page (S1, S2, S3...). The standard game audit has **7 sections**:

| Index | Number | Title |
|-------|--------|-------|
| 0     | 1      | Seed, Nonce & Determinism |
| 1     | 2      | RNG & Entropy Model |
| 2     | 3      | Verifier Parity |
| 3     | 4      | RTP & Payout Logic Validation |
| 4     | 5      | Fairness Integrity Testing |
| 5     | 6      | Player Verification Guide |
| 6     | 7      | Reproducibility & Artifacts |

---

#### Section-level fields

Every section shares this base structure:

```json
{
  "number":   "1",
  "id":       "seed-nonce-determinism",
  "title":    "Seed, Nonce & Determinism",
  "subtitle": "How Plinko outcomes are generated and committed",
  "intro":    "Before any bet is placed, the casino commits...",
  "diagram":  "/img/diagrams/plinko/hmac-pipeline.svg",
  "playerBrief":         { ... },
  "sectionVerdictTable": [ ... ],
  "verdict":             { ... },
  "expandables":         [ ... ]
}
```

| Field                 | What it controls |
|-----------------------|-----------------|
| `number`              | Displayed section number (e.g. `"1"`, `"2"`) |
| `id`                  | Anchor ID for in-page navigation |
| `title`               | Section heading text |
| `subtitle`            | Smaller text below the heading |
| `intro`               | Opening paragraph beneath the section header |
| `diagram`             | Path to an SVG in `/static/img/diagrams/` — renders full-width below the intro |
| `playerBrief`         | The highlighted summary card (see below) |
| `sectionVerdictTable` | Pass/fail table at the end of the section (see below) |
| `verdict`             | Green verdict box at the bottom of the section |
| `expandables`         | Collapsible panels containing the detailed subsections |

> **S5 (Fairness Integrity Testing)** has no `diagram` field — omit it entirely for that section.
>
> **S6 (Player Verification Guide)** has additional fields: `walkthroughSteps`, `verifierLinks`, `verdictTitle`, `verdictBody` (instead of a `verdict` object).
>
> **S7 (Reproducibility & Artifacts)** has different fields: `repoTree`, `commandTabs`, `outputArtifacts`, `pinning`, `stepCrossRef`. Copy the S7 structure directly from Plinko's config.

---

#### playerBrief

The highlighted summary card rendered by `PlayerBrief`. Shows what was verified and what it means for players.

```json
"playerBrief": {
  "headline":   "Commit-Reveal Cryptographic Guarantee",
  "statValue":  "152 / 152",
  "statLabel":  "seeds verified",
  "leftTitle":  "What We Verified",
  "rightTitle": "What This Means for You",
  "verified": [
    "Casino commits to server seed before any bet",
    "Players can set or change their client seed",
    "Nonce increments automatically, never reused"
  ],
  "means": [
    "Casino cannot change outcomes after you bet",
    "You contribute your own randomness via client seed",
    "Every bet is unique, even with the same seeds"
  ]
}
```

---

#### sectionVerdictTable

Array of pass/fail rows rendered by `SectionVerdictTable` at the bottom of each section.

```json
"sectionVerdictTable": [
  {
    "check":   "Server seed committed before bet",
    "status":  "Pass",
    "finding": "Casino cannot change randomness after betting"
  },
  {
    "check":   "Client seed influences outcome",
    "status":  "Pass",
    "finding": "Player-controlled entropy confirmed in HMAC input"
  }
]
```

`status` is displayed as a green badge when set to `"Pass"`.

---

#### verdict

The green conclusion box at the bottom of the section, rendered by `VerdictBox`.

```json
"verdict": {
  "title": "Commit-reveal verified",
  "body":  "The audited seed lifecycle matched the expected commit → play → reveal model, with no evidence of post-bet seed substitution in the verified dataset."
}
```

---

#### expandables and subsections

Each section has an `expandables` array. Each expandable is a collapsible panel containing an array of `subsections`.

```json
"expandables": [
  {
    "title": "How It Works — Seed, Nonce & Determinism",
    "count": "3 subsections",
    "subsections": [ ... ]
  },
  {
    "title": "Technical Evidence & Verification",
    "count": "4 subsections",
    "subsections": [ ... ]
  }
]
```

| Field         | What it controls |
|---------------|-----------------|
| `title`       | Label shown on the collapsed panel header |
| `count`       | Secondary text shown next to the title (e.g. `"3 checks"`, `"2 scripts"`) |
| `subsections` | Array of subsection objects (see below) |

---

#### SubSection field reference

Each subsection is rendered by the `SubSection` component. All fields are **optional** except `number` and `title` — include only what you need.

```json
{
  "number":  "1.1",
  "title":   "Server Seed Commitment"
}
```

**Content fields** — rendered in this order:

| Field           | Type             | What it renders |
|-----------------|------------------|-----------------|
| `content`       | `string`         | Main paragraph text (plain text) |
| `preBlock`      | `string`         | Monospace preformatted block above the code card |
| `code`          | `object`         | A syntax-highlighted code card (see below) |
| `extraCodes`    | `array`          | Additional code cards rendered after the first |
| `postCodeBlock` | `string`         | Monospace block rendered after all code cards |
| `extraContent`  | `string` (HTML)  | HTML paragraph rendered after code blocks — use `<strong>`, `<code>`, etc. |
| `diagram`       | `string`         | Path to an SVG — renders as an inline diagram |
| `image`         | `object`         | A screenshot or photo (see below) |
| `bullets`       | `array`          | Simple bullet list of strings |
| `table`         | `object`         | A data table (see below) |
| `tables`        | `array`          | Multiple tables rendered in sequence |
| `tableSmall`    | `boolean`        | Set `true` to use smaller font on the table |
| `compare`       | `object`         | A side-by-side comparison strip |
| `note`          | `object`         | A highlighted note box (see below) |
| `notes`         | `array`          | Multiple note boxes |
| `pins`          | `array`          | A pin grid (used in S7 for hash/commit values) |

---

**`code` object:**

```json
"code": {
  "file":    "tests/verify.ts · Step 1: EC-1",
  "lines":   "Lines 1–28",
  "badge":   "HMAC-SHA256",
  "lang":    "ts",
  "content": "const hmac = crypto.createHmac('sha256', serverSeed);\nhmac.update(`${clientSeed}:${nonce}:${cursor}`);\nconst hash = hmac.digest('hex');"
}
```

**`image` object:**

```json
"image": {
  "src":      "/img/screenshots/plinko/s6-step1-game.png",
  "alt":      "Plinko game — 16 rows, high risk",
  "caption":  "Duel.com Plinko — 16 rows, high risk.",
  "maxWidth": "360px"
}
```

`maxWidth` is optional — omit for full-width display.

**`table` object:**

```json
"table": {
  "columns": ["Parameter", "Value", "Notes"],
  "rows": [
    ["Rows",      "8 / 12 / 16", "Player selectable"],
    ["Risk",      "Low / Med / High", "Affects multiplier spread"],
    ["RTP",       "99%", "Across all configurations"]
  ]
}
```

**`note` object:**

```json
"note": {
  "type":    "ok",
  "content": "<strong>Key finding:</strong> All 1,009 bets reproduced identically."
}
```

`type` options: `"ok"` (green), `"warn"` (orange). `content` can contain HTML.

---

## Step 4 — Add diagrams and screenshots

Diagrams are SVG files saved to `static/img/diagrams/<game>/`. Reference them in config as:

```json
"diagram": "/img/diagrams/dice/hmac-pipeline.svg"
```

Screenshots are PNGs saved to `static/img/screenshots/<game>/`. Reference them in a subsection `image` field:

```json
"image": {
  "src": "/img/screenshots/dice/step1-bet.png"
}
```

The dev server will hot-reload when you add new files to `static/`.

---

## Step 5 — Register the game in the sidebar

Open `sidebars.js` and add the new game under the casino's games category:

```js
{
  type: 'doc',
  id: 'casinos/duel/games/dice/overview',
  label: 'Dice',
},
```

---

## Step 6 — Add the game to the dashboard

Once the game audit is complete, update **two** places in `docs/casinos/duel/config.json`:

**1. `games` array** — used by `GameMatrix` on the Dashboard:

```json
{
  "name":      "Dice",
  "slug":      "dice",
  "icon":      "dice",
  "rngModel":  "HMAC-SHA256",
  "parity":    "6.2K bets",
  "rtp":       "10M sim",
  "integrity": "15 checks",
  "scope":     "400 seed sessions",
  "status":    "pass"
}
```

**2. `executiveSummary.games` array** — used by `GameCards` on the Executive Summary:

```json
{
  "name":     "Dice",
  "slug":     "dice",
  "icon":     "dice",
  "rngModel": "HMAC-SHA256",
  "parity":   "6.2K · 100%",
  "rtp":      "99.9%",
  "sim":      "100M",
  "status":   "verified"
}
```

See the [Dashboard & Executive Summary README](./README-DASHBOARD.md) for full details.

---

## Quick Checklist

Use this before marking a game audit as done.

```
[ ] docs/casinos/duel/games/<game>/config.json created
[ ] docs/casinos/duel/games/<game>/overview.mdx created (copied from Plinko)
[ ] static/img/diagrams/<game>/ — all SVG diagrams added
[ ] static/img/screenshots/<game>/ — all screenshots added (if any)
[ ] hero block filled in (title, subtitle, auditDate, auditId, badges)
[ ] statsBlock filled in
[ ] auditVerdict rows filled in
[ ] overview block filled in (intro, whatWasAudited, coverageTable, guarantees, excludes, reproduce, references)
[ ] All 7 sections present in the sections array
[ ] Each section has: number, title, subtitle, intro, playerBrief, sectionVerdictTable, verdict, expandables
[ ] S1–S4 and S6 each have a diagram path
[ ] sidebars.js updated with new game
[ ] config.json games[] updated (Dashboard)
[ ] config.json executiveSummary.games[] updated (Executive Summary)
[ ] Dev server started and page renders without errors
```