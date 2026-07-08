# blog.janmusiedlak.de

Field Notes von Jan Musiedlak. Astro, gehostet auf GitHub Pages.

## Neuen Beitrag schreiben

**`src/content/posts/_template.md` kopieren** und umbenennen (`2026-07-titel.md`). Die Vorlage enthält das komplette **Kern-Set**; `npm run check` (läuft automatisch vor jedem Build und in der CI) **bricht den Build ab**, wenn ein Pflicht-Element fehlt.

Kern-Set jeder Field Note:

| Element | Pflicht | Form |
|---|---|---|
| `title`, `date` | ✅ | Frontmatter |
| `tldr` (≥1) | ✅ | Frontmatter — „Kurz gefasst"-Box |
| `reasoningSeed` (`these` + `frage`) | ✅ | Frontmatter — speist die Reasoning-Seed-Box |
| `## Wesentliche Insights` (≥2 `### N — Titel`) | ✅ | Body-Sektion; erste Absatz-Zeile jedes Insights landet im kopierbaren Seed |
| Quellen | ✅ | **Fußnoten im Body** (`[^kürzel]` + `[^kürzel]: Zitat → Abstract → URL`) |
| `glossary` | empfohlen | Frontmatter — nur wenn Fachbegriffe nicht selbsterklärend |
| `subtitle`, `description`, `cover`, `coverAlt`, `kind` | optional | Frontmatter (`kind`: `Standpunkt | Einordnung | Erfahrungsbericht`) |

- Der Dateiname (ohne `.md`) wird die URL: `/posts/2026-07-titel/`. `_`-Dateien werden nicht gebaut.
- `draft: true` blendet den Beitrag aus der Übersicht aus (und aus dem Content-Check).
- Die Autoren-Bio mit Foto steht fest im Layout (`src/pages/posts/[...slug].astro`) und erscheint automatisch — nicht pro Artikel pflegen.
- Push auf `main` → CI prüft Content (`npm run check`), baut und veröffentlicht automatisch.
- Format-Standard und Begründung: `stil-leitfaden.md §6` im Track-Repo `tracks/selbständigkeit/`.

## Lokal entwickeln

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # Content-Vollständigkeit prüfen (Kern-Set)
npm run build    # prüft (prebuild) + Produktions-Build nach dist/
npm run preview  # Build lokal ansehen
```

## Hosting

- GitHub Pages, Quelle: **GitHub Actions** (Repo → Settings → Pages → Source: GitHub Actions).
- Custom Domain `blog.janmusiedlak.de` über `public/CNAME` plus DNS-Eintrag beim Registrar.
