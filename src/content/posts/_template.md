---
# Vorlage für eine Field Note. Kopieren, umbenennen (YYYY-MM-titel.md), ausfüllen.
# Dateien mit _-Präfix werden NICHT gebaut. `npm run check` erzwingt das Kern-Set.
title: "Titel der Field Note"
subtitle: "Untertitel: ein Satz, der die Spannung andeutet."
date: 2026-01-01
description: "Meta-Description für SEO/Vorschau, 1–2 Sätze."
kind: Standpunkt # Standpunkt | Einordnung | Erfahrungsbericht
cover: ./titel.jpg
coverAlt: "Beschreibung des Titelbilds"

# ── Kern-Set: PFLICHT (Schema + npm run check erzwingen es) ──
tldr:
  - "Erster Kernpunkt in einem vollständigen Satz."
  - "Zweiter Kernpunkt."
  - "Dritter Kernpunkt."
reasoningSeed:
  these: "Die These des Textes in 1–2 Sätzen."
  frage: "Die zentrale Spannung als Frage formuliert."

# ── Situativ: EMPFOHLEN (nur, wenn Fachbegriffe nicht selbsterklärend sind) ──
glossary:
  - term: "Begriff"
    definition: "Zugängliche Definition in 1–2 Sätzen, kein Fachjargon in der Definition selbst."
---

Einleitung / Aufhänger. Steigt in die Beobachtung ein, nicht in die These.

## Zwischenüberschrift

Argumentationsstrang. Belege im Fließtext als Fußnoten setzen.[^quelle]

## Wesentliche Insights

<!-- PFLICHT: ≥ 2 Insights. Format "### N — Titel", Nummerierung mit Em-Dash (—).
     Die erste Absatz-Zeile jedes Insights landet auch im kopierbaren Reasoning Seed. -->

### 1 — Titel des ersten Insights

Erklärung in 2–4 Sätzen. Kein bloßes Wiederholen des TL;DR, sondern die verdichtete Einsicht.

### 2 — Titel des zweiten Insights

Erklärung in 2–4 Sätzen.

[^quelle]: Autor:in, „Titel“, Publikation/Jahr: kurzer Abstract, was die Quelle aussagt und warum sie hier relevant ist. https://example.com/quelle
