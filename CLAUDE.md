# blog.janmusiedlak.de — Session-Einstieg

Field Notes von Jan Musiedlak. Astro-Site, gehostet auf GitHub Pages unter der Custom Domain `blog.janmusiedlak.de`. Repo: `git@github.com:musiedlak/blog.git`.

## Wo ein Post abgelegt wird

Jeder Beitrag ist eine einzelne Markdown-Datei in `src/content/posts/`, Dateiname `YYYY-MM-titel-in-kebab-case.md` (Datum = Monat der Veröffentlichung, nicht taggenau). Der Dateiname ohne `.md` wird 1:1 zur URL: `/posts/2026-06-wann-hoeren-wir-auf/`.

Gehört ein Titelbild dazu, liegt es als Datei direkt daneben im selben Ordner (`src/content/posts/wann-hoeren-wir-auf.jpg`) und wird per Frontmatter-Feld `cover` relativ referenziert.

## Kern-Set (Pflicht) — vom Build erzwungen

Jede Field Note folgt dem **Panoptia-Field-Note-Standard** (Format-Referenz: `tracks/panoptia/panoptia-landing-page/src/components/ReasoningSeed.astro` + `content/shares/_template.md`; Begründung: `stil-leitfaden.md §6`). **Vorlage kopieren: `src/content/posts/_template.md`.** `npm run check` (Prebuild + CI, `scripts/check-content.mjs`) **bricht den Build ab**, wenn ein Pflicht-Element fehlt:

- `tldr` (≥1) und `reasoningSeed` (`these` + `frage`) — Pflicht, per Zod-Schema erzwungen.
- Body-Sektion `## Wesentliche Insights` mit **≥2** Insights im Format `### N — Titel` + Absatz. Das Enhancement-Script in `[...slug].astro` nummeriert sie (`.fn-insight-*`); die erste Absatz-Zeile jedes Insights wandert in den kopierbaren Reasoning-Seed-Prompt.
- Quellen als **Fußnoten im Body** (`[^kürzel]` im Text, `[^kürzel]: Zitat → kurzer Abstract → URL` am Ende). GFM rendert sie als „Fußnoten"-Sektion. (Das alte `sources`-Frontmatter ist nur noch Fallback.)

Empfohlen/situativ (§6): `glossary` (Frontmatter, nur wenn Fachbegriffe nicht selbsterklärend), Kritische Einordnung, Diskussionsfragen.

## Frontmatter-Schema

Quelle der Wahrheit: `src/content.config.ts`.

```yaml
---
title: "Titel des Beitrags"                        # Pflicht
date: 2026-06-30                                    # Pflicht
tldr:                                               # Pflicht (≥1) — "Kurz gefasst"-Box
  - "Erster Kernpunkt."
reasoningSeed:                                      # Pflicht — Reasoning-Seed-Box
  these: "Zentrale These in einem Satz."
  frage: "Die Spannung/Frage zum Weiterdenken."
subtitle: "Optionaler Untertitel."                 # optional
description: "Ein Satz für Vorschau/Meta/SEO."      # optional
draft: false                                        # optional — blendet aus Übersicht + Content-Check aus
kind: Standpunkt                                    # optional: Standpunkt | Einordnung | Erfahrungsbericht
cover: ./dateiname.jpg                              # optional, relativer Pfad neben der .md-Datei
coverAlt: "Alt-Text fürs Titelbild"                 # optional
glossary:                                           # empfohlen — Glossar-Sektion am Ende
  - term: "Fachbegriff"
    definition: "Kurze Erklärung."
---
```

Nach dem Frontmatter folgt der Fließtext, Zwischenüberschriften mit `## ` — inkl. der Pflicht-Sektion `## Wesentliche Insights` (siehe oben).

## Autoren-Bio (nicht im Markdown pflegen)

Die Kurzbio mit Foto steht **fest im Layout**, nicht pro Artikel im Markdown-Body — sie erscheint automatisch am Ende jedes Posts. Quelle: `src/pages/posts/[...slug].astro`, Bild aus `src/assets/jan-musiedlak.jpeg`. Wenn sich der Bio-Text ändern soll, dort anpassen, nicht in einer einzelnen Post-Datei.

## Veröffentlichen

- Push auf `main` → GitHub Action (`.github/workflows/deploy.yml`) baut und deployt automatisch auf GitHub Pages.
- Lokale Vorschau: `npm run dev` (Port 4321) — im Track-Kontext auch über den vorbereiteten `.claude/launch.json`-Eintrag `"blog"` startbar.

## Verwandte Quelle im Track-Repo

Die Positionierungslogik und Stilregeln für diese Field Notes leben im Track-Repo `tracks/selbständigkeit/`:
- `stil-leitfaden.md`, `v2-branchenfokus/positionierung.md` — Ton und Zielgruppe
- `content/verweis-asset-spec.md` — Spec für die geplante Panoptia-Profilseite (separates, noch nicht existierendes Vorhaben — nicht mit diesem Blog verwechseln)
- Ghostwriter/Stil-Wächter/Klammer-Wächter-Agents entstehen Drafts vor, bevor sie hier als fertige `.md`-Datei landen
