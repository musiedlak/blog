# blog.janmusiedlak.de — Session-Einstieg

Field Notes von Jan Musiedlak. Astro-Site, gehostet auf GitHub Pages unter der Custom Domain `blog.janmusiedlak.de`. Repo: `git@github.com:musiedlak/blog.git`.

## Wo ein Post abgelegt wird

Jeder Beitrag ist eine einzelne Markdown-Datei in `src/content/posts/`, Dateiname `YYYY-MM-titel-in-kebab-case.md` (Datum = Monat der Veröffentlichung, nicht taggenau). Der Dateiname ohne `.md` wird 1:1 zur URL: `/posts/2026-06-wann-hoeren-wir-auf/`.

Gehört ein Titelbild dazu, liegt es als Datei direkt daneben im selben Ordner (`src/content/posts/wann-hoeren-wir-auf.jpg`) und wird per Frontmatter-Feld `cover` relativ referenziert.

## Frontmatter-Schema

Quelle der Wahrheit: `src/content.config.ts`. Aktuell gültige Felder:

```yaml
---
title: "Titel des Beitrags"
subtitle: "Optionaler Untertitel."               # optional
date: 2026-06-30
description: "Ein Satz für Vorschau/Meta/SEO."   # optional
draft: false                                      # optional, default false — blendet aus der Übersicht aus
kind: Standpunkt                                  # optional: Standpunkt | Einordnung | Hands On
cover: ./dateiname.jpg                            # optional, relativer Pfad neben der .md-Datei
coverAlt: "Alt-Text fürs Titelbild"                # optional
tldr:                                              # optional — "Kurz gefasst"-Box oben im Artikel
  - "Erster Kernpunkt."
  - "Zweiter Kernpunkt."
sources:                                           # optional — Quellen-Sektion am Ende
  - label: "Beschreibung der Quelle"
    url: "https://…"
glossary:                                          # optional — Glossar-Sektion am Ende
  - term: "Fachbegriff"
    definition: "Kurze Erklärung."
reasoningSeed:                                     # optional — "Weiterdenken"-Box mit Copy-Button
  these: "Zentrale These des Artikels in einem Satz."
  frage: "Die Spannung/Frage, die zum Weiterdenken anregt."
---
```

Nach dem Frontmatter folgt der Fließtext in Markdown, Zwischenüberschriften mit `## `.

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
