// Content-Vollständigkeits-Check für Field Notes.
// Läuft vor jedem Build (npm run prebuild) und in der CI.
// Bricht den Build ab, wenn ein Artikel das Kern-Set nicht enthält.
//
// Kern-Set (Pflicht):
//   - TL;DR + Reasoning Seed  → bereits durch das Zod-Schema erzwungen
// Optional (nur validiert, wenn vorhanden):
//   - Body-Sektion "## Wesentliche Erkenntnisse" mit ≥ 2 Erkenntnissen (### N — …)
//   - Quellen-Apparat (Fußnoten [^x]: oder sources-Frontmatter)
// Empfohlen (nur Hinweis): Glossar.
//
// Siehe src/content/posts/_template.md und stil-leitfaden.md §6.

import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = fileURLToPath(new URL('../src/content/posts/', import.meta.url));
const files = readdirSync(dir).filter((f) => f.endsWith('.md') && !f.startsWith('_'));

let errors = 0;
let warnings = 0;

for (const file of files) {
  const raw = readFileSync(join(dir, file), 'utf8');
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!fmMatch) {
    console.error(`✖ ${file}: kein Frontmatter gefunden`);
    errors++;
    continue;
  }
  const [, fm, body] = fmMatch;
  if (/^draft:\s*true\b/m.test(fm)) continue;

  const err = (m) => {
    console.error(`✖ ${file}: ${m}`);
    errors++;
  };
  const warn = (m) => {
    console.warn(`⚠ ${file}: ${m}`);
    warnings++;
  };

  // Optional: Wesentliche-Erkenntnisse-Sektion — wenn vorhanden, ≥ 2 Erkenntnisse
  if (/^##\s+Wesentliche Erkenntnisse\s*$/m.test(body)) {
    const count = (body.match(/^###\s+\d+\s*—\s+/gm) || []).length;
    if (count < 2) err(`"Wesentliche Erkenntnisse" braucht ≥ 2 Erkenntnisse (### N — …), gefunden: ${count}`);
  }

  // Pflicht: Quellen-Apparat (Fußnoten bevorzugt, sources-Frontmatter erlaubt)
  const hasFootnotes = /^\[\^[^\]]+\]:/m.test(body);
  const hasSources = /^sources:/m.test(fm);
  if (!hasFootnotes && !hasSources) {
    err('kein Quellen-Apparat — mind. eine Fußnote ([^x]: …) oder sources-Frontmatter (Pflicht)');
  }

  // Empfohlen: Glossar
  if (!/^glossary:/m.test(fm) && !/^##\s+Glossar\s*$/m.test(body)) {
    warn('kein Glossar (empfohlen, wenn Fachbegriffe nicht selbsterklärend sind)');
  }
}

if (errors > 0) {
  console.error(
    `\n${errors} Fehler — Build gestoppt. Jede Field Note muss das Kern-Set enthalten (siehe src/content/posts/_template.md).`,
  );
  process.exit(1);
}
console.log(`✓ Content-Check bestanden (${files.length} Artikel${warnings ? `, ${warnings} Hinweis(e)` : ''}).`);
