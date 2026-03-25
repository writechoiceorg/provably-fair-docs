# Dashboard & Executive Summary — Content Guide

Both the **Dashboard** (`dashboard.mdx`) and **Executive Summary** (`exec-summary.mdx`) are driven entirely by a single shared config file:

```
docs/casinos/duel/config.json
```

This README documents every field in that config — what it controls, where it appears, and how to update it.

---

## Table of Contents

- [File Overview](#file-overview)
- [Top-level fields](#top-level-fields)
- [stats](#stats)
- [architecture](#architecture)
- [timeline](#timeline)
- [verdicts](#verdicts)
- [games](#games)
- [transparency](#transparency)
- [executiveSummary.hero](#executivesummaryhero)
- [executiveSummary.sections](#executivesummarysections)
- [executiveSummary.scopeTable](#executivesummaryscopetable)
- [executiveSummary.games](#executivesummarygames)
- [Common Update Recipes](#common-update-recipes)

---

## File Overview

```
docs/casinos/duel/
├── config.json          ← edit this file only
├── dashboard.mdx        ← layout only, do not edit for content
└── exec-summary.mdx     ← layout only, do not edit for content
```

### Which fields appear where

| Config key                        | Dashboard | Executive Summary |
|-----------------------------------|:---------:|:-----------------:|
| `name`, `auditId`, `status`       | ✓ banner  | ✓ banner          |
| `certDate`, `nextReview`          | ✓ banner  | ✓ banner          |
| `intro`                           | ✓         |                   |
| `stats`                           | ✓         | ✓                 |
| `architecture`                    |           | ✓ diagram         |
| `timeline`                        | ✓         |                   |
| `verdicts`                        | ✓         |                   |
| `games`                           | ✓ matrix  |                   |
| `transparency`                    | ✓         |                   |
| `executiveSummary.hero`           |           | ✓                 |
| `executiveSummary.architecture`       |           | ✓                 |
| `executiveSummary.sections`       |           | ✓                 |
| `executiveSummary.liveParityStats`       |           | ✓                 |
| `executiveSummary.scopeTable`     |           | ✓                 |
| `executiveSummary.games`          |           | ✓ cards           |

---

## Top-level fields

These fields feed the certification banner on both pages.

```json
{
  "name":        "Duel.com",
  "domain":      "duel.com",
  "auditId":     "PF-2026-001",
  "certDate":    "Feb 12, 2026",
  "nextReview":  "Feb 2027",
  "status":      "CERTIFIED",
  "certifiedBy": "ProvablyFair.org",
  "intro":       "Independent verification of RNG integrity, live game parity, RTP convergence, and fairness integrity across 8 games."
}
```

| Field         | Where it appears | Notes |
|---------------|-----------------|-------|
| `name`        | Both banners, exec summary title | Casino display name |
| `domain`      | Dashboard banner | Shown as a subtitle tag |
| `auditId`     | Both banners, exec summary eyebrow | Unique audit identifier |
| `certDate`    | Both banners | Format: `"Feb 12, 2026"` |
| `nextReview`  | Both banners | Format: `"Feb 2027"` |
| `status`      | Both banners | `"CERTIFIED"` shows green, other values show neutral |
| `certifiedBy` | Both banners | Auditor name |
| `intro`       | Dashboard only | One-sentence description beneath the banner |

---

## stats

Controls the stats grid on the dashboard and executive summary pages. Appears as four highlighted numbers.

```json
"stats": [
    {
      "label": "Live Bets Verified",
      "value": "30,742"
    },
    {
      "label": "Simulation Rounds",
      "value": "80,000,000+",
       "variant": "green"
    },
    {
      "label": "Integrity Checks",
      "value": "120"
    },
    {
      "label": "Games Validated",
      "value": "8 / 8",
      "variant": "green"
    }
  ]
```

To update, change the string values.


## architecture

Controls the `ArchDiagram` component on the **Executive Summary only**. This renders the two-column flow diagram (Outcome Generation → Independent Validation).

```json
"architecture": {
  "accentColor": "#e8590c",
  "casinoName":  "Duel",
  "rngLabel":    "HMAC-SHA256 / drand",
  "leftSteps": [
    "Seed Inputs",
    "HMAC-SHA256 / drand",
    "Deterministic Outcome",
    "Payout Applied",
    "Live Result Recorded"
  ],
  "rightSections": [
    { "label": "Seed & Determinism Check", "sub": "Section 1" },
    { "label": "RNG & Entropy Validation",  "sub": "Section 2" },
    { "label": "Verifier Parity",           "sub": "Section 3" }
  ]
}
```

| Field           | What it controls |
|-----------------|-----------------|
| `accentColor`   | Color of arrows and right-column borders |
| `casinoName`    | Short name shown in the diagram header |
| `rngLabel`      | Label on the dark RNG step in the left column |
| `leftSteps`     | Ordered list of steps in the casino's outcome generation flow |
| `rightSections` | Rows in the Independent Validation column (label + section reference) |

---

## Live parity stats - Executive Summary

Controls the live parity stats grid on the executive summary page Appears as four highlighted numbers.

```json
"liveParityStats": [
      {
        "value": "30,742",
        "label": "Live Bets Captured"
      },
      {
        "value": "100%",
        "label": "Parity Match Rate",
        "variant": "green"
      },
      {
        "value": "22",
        "label": "Seed Sessions"
      },
      {
        "value": "0",
        "label": "Discrepancies",
        "variant": "green"
      }
    ]
```

## timeline

Controls the `AuditTimeline` component on the **Dashboard**. Shows the audit process as a horizontal timeline.

```json
"timeline": [
  { "title": "Initiated",         "date": "Jan 28" },
  { "title": "Data Capture",      "date": "Feb 4"  },
  { "title": "Parity Testing",    "date": "Feb 6"  },
  { "title": "RTP Simulation",    "date": "Feb 8"  },
  { "title": "Integrity Testing", "date": "Feb 12" },
  { "title": "Certification",     "date": "Feb 12" }
]
```

Add, remove, or reorder entries as needed. `title` is the step name, `date` is displayed below the dot.

---

## verdicts

Controls the `VerdictTable` component on the **Dashboard**. Shows the five audit control areas with pass/fail status and supporting evidence.

```json
"verdicts": [
  {
    "number":   "01",
    "area":     "Determinism",
    "status":   "pass",
    "evidence": "HMAC-SHA256 with rejection sampling. Nonce starts at 0, increments by 1, never reused. Player controls client seed. 100% deterministic."
  },
  {
    "number":   "02",
    "area":     "RNG Integrity",
    "status":   "pass",
    "evidence": "No external entropy sources. Chi-squared uniformity: p = 0.472 across 980K simulated rounds."
  }
]
```

| Field      | What it controls |
|------------|-----------------|
| `number`   | Row number displayed in the first column (`"01"`, `"02"`...) |
| `area`     | Control area name |
| `status`   | `"pass"` renders a green badge. Any other value renders as neutral |
| `evidence` | Supporting text shown in the Evidence column |

> **Note:** The first verdict has `"status": "fail"` in the current config — this appears to be a data entry error. Check before publishing.

---

## games

Controls the `GameMatrix` on the **Dashboard**. Each entry is one row in the game validation matrix table.

```json
"games": [
  {
    "name":      "Plinko",
    "slug":      "plinko",
    "icon":      "plinko",
    "rngModel":  "HMAC-SHA256",
    "parity":    "1,009 bets",
    "rtp":       "10M sim",
    "integrity": "15 checks",
    "scope":     "400 seed sessions",
    "status":    "pass"
  }
]
```

| Field       | What it controls |
|-------------|-----------------|
| `name`      | Game display name in the table |
| `slug`      | Used to build the link to the game audit page |
| `icon`      | Icon key (same icons available as in game configs) |
| `rngModel`  | RNG method shown in the table |
| `parity`    | Live bets verified |
| `rtp`       | Simulation rounds |
| `integrity` | Number of integrity checks run |
| `scope`     | Seed sessions or other scope note |
| `status`    | `"pass"` renders a green row indicator |

**To add a new game:** append a new object to this array. The game will automatically appear in the Dashboard matrix.

**To mark a game as pending:** set `"status": "pending"` — it renders with a neutral indicator.

---

## transparency

Controls the `TransparencySection` component on the **Dashboard**. Shows the open-source links and commit reference.

```json
"transparency": {
  "auditRepoUrl":      "https://github.com/provablyfair/audits",
  "datasetUrl":        "https://github.com/provablyfair/audits/datasets",
  "verifierUrl":       "https://provablyfair.org/verify/duel",
  "commitHash":        "fa913ab94883d06950d3c63bbb7007f927648131",
  "frameworkVersion":  "ProvablyFair v1.0"
}
```

| Field              | What it controls |
|--------------------|-----------------|
| `auditRepoUrl`     | Link to the full audit repository |
| `datasetUrl`       | Direct link to the datasets folder |
| `verifierUrl`      | Link to the independent verifier tool |
| `commitHash`       | Git commit shown as the reproducibility pin |
| `frameworkVersion` | Audit framework version label |

---

## executiveSummary.hero

Controls the title, lead paragraph, and body text at the top of the **Executive Summary** page — everything above the first section heading.

```json
"executiveSummary": {
  "hero": {
    "title": "Executive Summary",
    "lead":  "This audit evaluated Duel.com's provably fair architecture across eight core games...",
    "beforeDiagram": [
      "Validation was conducted across five domains..."
    ],
    "afterDiagram": [
      "Live production bets were captured and recomputed using disclosed inputs...",
      "Across all reviewed games, outcomes were found to be cryptographically reproducible...",
      "All datasets, tooling, scripts, simulations, and verification logic..."
    ],
    "muted": "Certification reflects the integrity of the audited implementation as deployed during the review period."
  }
}
```

| Field           | What it renders |
|-----------------|-----------------|
| `title`         | `<h1>` heading at the top of the page |
| `lead`          | Large lead paragraph (`.pf-page-lead`) |
| `beforeDiagram` | Array of paragraphs rendered **above** the architecture diagram |
| `afterDiagram`  | Array of paragraphs rendered **below** the diagram |
| `muted`         | Small italic text at the end of the intro block |

`beforeDiagram` and `afterDiagram` are arrays — add more strings to add more paragraphs.

---

## executiveSummary.sections

Controls the body sections of the **Executive Summary** that use `AuditSummaryBlock`. Each object in this array becomes one section block rendered after the section heading.

```json
"executiveSummary": {
  "sections": [
    {
      "id":        "entropy-architecture",
      "label":     "Randomness",
      "title":     "Entropy Architecture",
      "intro":     "Duel uses HMAC-SHA256 as its deterministic RNG across seed-based games...",
      "checklist": [
        "The server seed is combined with drand beacon output",
        "The drand round number is publicly verifiable",
        "Beacon output cannot be influenced retroactively"
      ],
      "body":  "This architecture ensures outcome entropy is deterministic...",
      "muted": "Optional fine-print text."
    }
  ]
}
```

| Field       | What it renders | Required |
|-------------|-----------------|----------|
| `id`        | Anchor ID matching the TOC entry | Yes |
| `label`     | Small uppercase badge before the section title | Yes |
| `title`     | Section heading | Yes |
| `intro`     | Paragraph before the checklist | No |
| `checklist` | Bulleted list | No |
| `body`      | Paragraph after the checklist | No |
| `muted`     | Small italic text at the end | No |

**Sections are rendered in array order.** The first item in the array (`index 0`) is the Entropy Architecture section. The Entropy section has a special note box hardcoded in the MDX below it — if you rename or remove this section, update the MDX accordingly.

**To add a new section:**
1. Append a new object to the `sections` array.
2. Add a corresponding entry to the `toc` export in `exec-summary.mdx`:
   ```js
   { value: 'Your Section Title', id: 'your-section-id', level: 2 }
   ```
3. Add a `<SectionHeading>` call in the MDX if it needs a custom position.

**To edit an existing section's text:** update the `intro`, `checklist`, `body`, or `muted` fields. No MDX changes needed.

---

## executiveSummary.scopeTable

Controls the `ScopeCertificationTable` on the **Executive Summary** — the two-column table showing what is and isn't covered by the certification.

```json
"executiveSummary": {
  "scopeTable": {
    "coveredTitle":    "Covered",
    "notCoveredTitle": "Not Covered",
    "covered": [
      "Provably fair RNG logic",
      "Deterministic reproducibility",
      "RTP mathematical correctness",
      "Fairness integrity within tested scope"
    ],
    "notCovered": [
      "Business solvency",
      "Regulatory licensing",
      "Custody governance",
      "Infrastructure vulnerabilities"
    ],
    "note": "Certification assumes secure server seed storage..."
  }
}
```

| Field              | What it renders |
|--------------------|-----------------|
| `coveredTitle`     | Left column heading |
| `notCoveredTitle`  | Right column heading |
| `covered`          | Array of strings — left column bullet points |
| `notCovered`       | Array of strings — right column bullet points |
| `note`             | Warning note text below the table |

---

## executiveSummary.games

Controls the `GameCards` component on the **Executive Summary** — the grid of per-game summary cards at the bottom of the page.

```json
"executiveSummary": {
  "games": [
    {
      "name":     "Plinko",
      "slug":     "plinko",
      "icon":     "plinko",
      "rngModel": "HMAC-SHA256",
      "parity":   "1,009 · 100%",
      "rtp":      "99.9%",
      "sim":      "10M",
      "status":   "verified"
    }
  ]
}
```

| Field      | What it controls |
|------------|-----------------|
| `name`     | Game display name on the card |
| `slug`     | Used to build the link to the game audit page |
| `icon`     | Game icon |
| `rngModel` | RNG method shown on the card |
| `parity`   | Parity stat (format: `"1,009 · 100%"`) |
| `rtp`      | RTP stat (optional — omit for games without a calculated RTP) |
| `sim`      | Simulation rounds |
| `status`   | `"verified"` renders a green ✓ Verified badge |

> **Note:** `executiveSummary.games` and the top-level `games` are separate arrays. The top-level `games` feeds the Dashboard matrix; `executiveSummary.games` feeds the Executive Summary cards. Keep them in sync when adding a new game.

---

## Common Update Recipes

### Update the audit ID and dates after a new audit

```json
{
  "auditId":    "PF-2026-003",
  "certDate":   "Jun 1, 2026",
  "nextReview": "Jun 2027"
}
```

### Update headline stats

```json
"stats": {
  "liveBetsVerified": "45,000",
  "simulationRounds": "100,000,000+",
  "integrityChecks":  "135",
  "gamesValidated":   "10 / 10"
}
```

### Add a new game to the dashboard and exec summary

**1. Add to `games[]` (Dashboard matrix):**
```json
{
  "name": "Baccarat", "slug": "baccarat", "icon": "dice",
  "rngModel": "HMAC-SHA256", "parity": "500 bets", "rtp": "5M sim",
  "integrity": "15 checks", "scope": "100 seed sessions", "status": "pass"
}
```

**2. Add to `executiveSummary.games[]` (Exec Summary cards):**
```json
{
  "name": "Baccarat", "slug": "baccarat", "icon": "dice",
  "rngModel": "HMAC-SHA256", "parity": "500 · 100%", "sim": "5M", "status": "verified"
}
```

**3. Update headline stats** to reflect the new total.

### Change a verdict finding on the Dashboard

Find the matching item in `verdicts[]` by `area` and update the `evidence` string:

```json
{
  "number":   "03",
  "area":     "Live ↔ Verifier Parity",
  "status":   "pass",
  "evidence": "45,000 real bets verified. 100% match rate across 14 seed sessions."
}
```

### Add a paragraph to the exec summary intro

Append to `executiveSummary.hero.afterDiagram`:

```json
"afterDiagram": [
  "Live production bets were captured...",
  "Across all reviewed games...",
  "All datasets...",
  "Your new paragraph goes here."
]
```

### Add a new section to the exec summary body

1. Append to `executiveSummary.sections[]`:
```json
{
  "id":        "new-section-id",
  "label":     "Label",
  "title":     "New Section Title",
  "intro":     "Opening paragraph...",
  "checklist": ["Point one", "Point two"],
  "body":      "Closing paragraph..."
}
```

2. Add to the `toc` export at the top of `exec-summary.mdx`:
```js
{ value: 'New Section Title', id: 'new-section-id', level: 2 },
```

The section will automatically render in position — no other MDX changes needed.

### Update the GitHub commit hash after a new audit run

```json
"transparency": {
  "commitHash": "your-new-40-character-commit-hash-here"
}
```

### Change the architecture diagram labels

```json
"architecture": {
  "leftSteps": [
    "Seed Inputs",
    "HMAC-SHA256",
    "Deterministic Outcome",
    "Payout Applied",
    "Live Result Recorded"
  ],
  "rightSections": [
    { "label": "Seed & Determinism Check", "sub": "Section 1" },
    { "label": "RNG & Entropy Validation",  "sub": "Section 2" },
    { "label": "Verifier Parity",           "sub": "Section 3" },
    { "label": "RTP Validation",            "sub": "Section 4" }
  ]
}
```

Add or remove items from either array — the diagram renders however many steps you provide.