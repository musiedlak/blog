# blog.janmusiedlak.de

Field Notes von Jan Musiedlak. Astro, gehostet auf GitHub Pages.

## Neuen Beitrag schreiben

Eine Markdown-Datei in `src/content/posts/` ablegen, z. B. `2026-07-titel.md`:

```markdown
---
title: "Titel des Beitrags"
subtitle: "Optionaler Untertitel."
date: 2026-07-15
description: "Ein Satz für Vorschau und Suchmaschinen."
draft: false
---

Fließtext in Markdown. Überschriften mit `## …`.
```

- Der Dateiname (ohne `.md`) wird die URL: `/posts/2026-07-titel/`.
- `draft: true` blendet den Beitrag aus der Übersicht aus.
- Push auf `main` → die GitHub Action baut und veröffentlicht automatisch.

## Lokal entwickeln

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # Produktions-Build nach dist/
npm run preview  # Build lokal ansehen
```

## Hosting

- GitHub Pages, Quelle: **GitHub Actions** (Repo → Settings → Pages → Source: GitHub Actions).
- Custom Domain `blog.janmusiedlak.de` über `public/CNAME` plus DNS-Eintrag beim Registrar.
