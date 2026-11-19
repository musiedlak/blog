---
title: "Mein Co-Moderator ist eine KI"
subtitle: "Claude Code als Protokollant im Remote Workshop. Ein Erfahrungsbericht."
date: 2026-11-19
description: "Claude lief bei einem Remote-Workshop nebenher als Nachschlagehilfe und wurde dann zum Protokollanten. Was das gebracht hat, was dabei schiefging und welche vier Regeln ich daraus mitnehme."
kind: Erfahrungsbericht
cover: ./mein-co-moderator-ist-eine-ki.jpg
coverAlt: "Eine Wand mit bunten Haftnotizen und handschriftlichen Skizzen, im Vordergrund unscharf."
tldr:
  - "Claude war bei einem Remote-Workshop nur als Nachschlagehilfe nebenher geöffnet. Nach dem ersten Block habe ich ihm das Transkript gegeben, und ab da hat er in jeder Pause meine Notizen auf dem Board mit dem Gesprochenen abgeglichen und Lücken ergänzt. In der Mittagspause hat er Karten übertragen und vorsortiert, was sonst die ganze Pause gekostet hätte."
  - "Möglich war das, weil Board, Wissen und Unterlagen offene Dateien sind, die Claude lesen und schreiben kann: Excalidraw als reines JSON, dazu Markdown, Obsidian und Git."
  - "Zwei Dinge sind schiefgegangen: Ein Skript hat meine Handänderungen im Board überschrieben, und Claude hat Karten ungefragt in das geteilte Board geschrieben, ohne dass mein Mandant wusste, dass er live mitarbeitet. Daraus ziehe ich vier Regeln: ankündigen, Schreibrechte festlegen, Quelle und Arbeitskopie trennen, Stand sichern."
reasoningSeed:
  these: "Eine KI im Workshop nimmt viel Protokollarbeit ab, solange vorher geklärt ist, wer im gemeinsamen Board schreiben darf. Ohne diese Klärung wird aus Entlastung Verwirrung."
  frage: "Wenn eine KI in dem Board mitschreibt, an dem Menschen gerade arbeiten: Habe ich vorher geregelt, was sie dort schreiben darf, und wissen die Beteiligten davon?"
---

Bei einem Remote-Workshop mit einem Mandanten habe ich Claude zufällig zum Protokollanten gemacht. Ursprünglich hatte ich [Claude Code](https://claude.com/product/claude-code) als Backup geplant, falls es eine Beobachtung zu notieren gäbe oder ich etwas aus der bisherigen Dokumentation nachschlagen wollte, das ich nicht im Kopf hatte. Das Fenster war also permanent geöffnet. Am Ende habe ich Claude für den Workshop deutlich weitreichender genutzt, auch wenn dabei nicht alles glatt gelaufen ist.

Vermutlich hätte ich das für mich einfach als Learning verbucht und nicht weiter darüber nachgedacht. Als ich jedoch einer ehemaligen Kollegin, die als Coach tätig ist, zufällig davon erzählte, unterbrach sie mich mit: „Moment, lass mich dein Setup mal aufschreiben!“

Hiermit nehme ich ihr das ab und teile einen kleinen Erfahrungsbericht mit der Entstehung, den Fallstricken und Regeln, die ich für mich daraus abgeleitet habe.

## Claude als Board-Bauer

In den letzten Jahren war ich überzeugter [Miro](https://miro.com)-Fanboy. Daran hätte vermutlich auch die [Übernahme durch Bending Spoons](https://thenextweb.com/news/bending-spoons-completes-miro-deal) wenig geändert. In den letzten Monaten habe ich mir jedoch, angeregt durch die Ausführungen von Teresa Torres bei [Product Talk](https://www.producttalk.org/),[^torres] eine Arbeitsumgebung für Claude Code aufgebaut, die auf Markdown-Files basiert und [Obsidian](https://obsidian.md) als Viewer nutzt. Diese Arbeitsumgebung verwalte ich in [Git](https://git-scm.com)-Repos.

Viele der Inhalte meiner Arbeitsumgebung entstehen in Zusammenarbeit mit Claude Code. Da ich in den vergangenen Jahren oft viel Zeit auf den Bau eines Boards verwendet habe, das meine individuellen Formate didaktisch gut unterstützt, wollte ich testen, ob ich diesen Teil der aufwändigen Fleißarbeit im Sparring an Claude abgeben kann. [Excalidraw](https://excalidraw.com) erfreut sich in meiner Filterblase steigender Beliebtheit und bot sich für meine Zwecke an, weil es auf [reines JSON](https://docs.excalidraw.com/docs/codebase/json-schema) setzt. Das Format ist quelloffen, lässt sich mit Claude ideal verarbeiten und eignet sich auch sehr gut für die Verwaltung mit Git. Als Sahnehäubchen gibt es ein [Plugin für Obsidian](https://github.com/zsviczian/obsidian-excalidraw-plugin), sodass ich direkt einen lokalen Viewer und Editor an der Stelle nutzen kann, wo ich auch meine Markdowns lese und bearbeite.

In der Vorbereitung war das Setup extrem hilfreich und zeitsparend. Ich konnte mich voll auf Ziel, Ablauf und Struktur des Workshops konzentrieren, während Claude mir im Sparring das Board in wenigen Minuten erstellt und angepasst hat.

Einziger überflüssiger Schritt war ein Python-Skript, das Claude gebaut hat, um das Board zu generieren. Eine direkte Editierung des Boards durch Claude wäre nicht nur effizienter gewesen, sondern hätte mir auch zwei Fälle gespart, in denen durch das Skript meine Änderungen überschrieben wurden. Git sei dank kein großes Problem.

## Claude als Protokollant

Im Workshop hatte ich Claude Code im entsprechenden Workspace von Beginn an parallel geöffnet. Das ist bei mir in vielen Remote-Terminen zur Gewohnheit geworden, weil ich so einen Gedanken schnell festhalten und direkt an die richtige Stelle ablegen lassen oder eine spezifische Rückfrage stellen kann, bei der Claude auf mein gesamtes dokumentiertes Wissen zugreifen kann. Außerdem nehme ich Termine gerne mit [MacWhisper](https://www.macwhisper.com) (Einverständnis vorausgesetzt) auf, um sie später zu transkribieren und wichtige Details nachzuziehen, die mir vielleicht entgangen wären oder die ich einfach nicht notiert habe.

Wer häufiger Workshops macht, kennt die Herausforderung oder die unangenehme Pause, die entsteht, wenn man beim Moderieren gleichzeitig die Dokumentation übernimmt. Nach dem ersten Block des Workshops kam mir spontan die Idee, Claude das Transkript direkt zu geben, um die Fragen und Antworten dieses Blocks zu erfassen und etwaige Lücken im Board zu ergänzen – mit Erfolg.

Ab diesem Zeitpunkt wiederholte ich das Prinzip in jeder Pause: Meine Notizen auf dem Board mit dem Transkript abgleichen und bei Bedarf ergänzen lassen. So kamen Karten dazu, die auf dem Board noch fehlten, und knappe Stichpunkt-Karten wurden ausführlicher. Zwischendurch hat Claude auch Themen verschoben und zusammengefasst. So hatte ich beim Moderieren einen Protokollanten an meiner Seite, der mir einen Teil des Mitschreibens abgenommen und erheblich stärkeren Fokus auf den Workshop selbst ermöglicht hat.

Am meisten geholfen hat es mir in einer längeren Mittagspause. Ich musste Gedanken für den Nachmittag zusammenfassen und Karten aus einem Bereich des Boards in einen anderen übertragen, damit sie dort klassifiziert werden konnten. Beides zusammen hätte mich üblicherweise die gesamte Pause gekostet. Claude hat die Karten übertragen, vorsortiert und Vorschläge für die Inhalte am Nachmittag gemacht, und ich hatte noch Zeit für ein Bütterken (wie man bei uns im Pott sagt).

## Was noch nicht glatt lief

Das Skript war nicht meine Idee, Claude hat es ohne Rückfrage gebaut. Es erzeugte das Board bei jedem Lauf komplett neu. Damit gab es zwei Quellen für denselben Stand, das Skript und meine Änderungen von Hand im Board, und beim nächsten Lauf gewann immer das Skript. Läufe des Skripts haben Anpassungen überschrieben, die ich von Hand im Board gemacht hatte. Am Morgen des Workshops habe ich das Arbeitsboard vom Skript getrennt, damit das nicht noch einmal passiert.

Ein weiterer Lapsus passierte im Workshop. Mein Mandant wusste vorab, dass Claude Dinge für mich verarbeitet, aber nicht, dass er live im Board mitarbeitet. Die Idee, ihn aufs Board loszulassen, kam mir schließlich auch erst im Workshop und ursprünglich sollte das vorwiegend lesend statt schreibend passieren.

Im Eifer des Workshops gab ich Claude einen solchen Lese-Auftrag, um mir ein paar Vorschläge für Ergänzungen und Anpassungen zu machen. Durch die geteilte Aufmerksamkeit vergaß ich, ihm ausdrücklich zu sagen, dass er die Vorschläge nur im Chat zeigen soll. So schrieb Claude die Änderungen direkt ins geteilte Board, wo sie für meinen Mandanten wie von Magie auftauchten. Ich konnte es überspielen, verwirrend war es trotzdem.

## Was ich daraus für mich ableite

Grundsätzlich: Remote-Workshops gibt es für mich nur noch in diesem Setup. Boardstruktur und Dokumentation werden damit zur Nebensache und meine volle Aufmerksamkeit ist auf Ziel, Durchführung und Diskussion gerichtet.

Folgende vier Regeln nehme ich mir dafür aber mit.

**Ankündigen.** Ich sage den Teilnehmenden vorab, dass Claude im Workshop selbst mitarbeitet und was er dabei tut. Das erspart überraschende Momente, in denen plötzlich von Zauberhand ein Haufen neuer Karten auf dem Board auftaucht.

**Schreibrechte.** Claude zeigt mir Vorschläge im Chat und schreibt nur auf meine ausdrückliche Bitte ins Board. Im Workshop habe ich keine Zeit, Karten zu prüfen oder wieder zu entfernen, die ich nicht selbst angelegt habe.

**Quelle und Arbeitskopie trennen.** Statt eines Skriptes lasse ich Claude eine Vorlage als Quelle und ein Arbeitsboard als Kopie davon erstellen. Das ermöglicht ebenfalls Struktur und Inhalt zu trennen und ggf. getrennt anzupassen. So kann ich schon Inhalte sammeln, während ich Claude parallel noch Änderungen an der Struktur durchführen lasse, die mir dabei auffallen. Beides wird direkt geschrieben und zwischendurch werden Änderungen übertragen.

**Vorrang und Stand sichern.** Claude geht jedes Mal vom aktuellen Stand der Datei aus und lässt die Finger davon, wenn sie geändert wurde und die letzte Änderung nicht von ihm stammt. Außerdem ist eine saubere Änderungshistorie die beste Versicherung, entweder mit abgelegten Kopien oder per Git-Commit. So kann man jederzeit einen Schritt zurück, falls etwas schiefgeht.

## Weitere Ideen

Erprobt habe ich die Zusammenarbeit mit Claude bisher nur remote. Auf dem Widescreen oder Zweitbildschirm lässt sich das gut parallel gestalten, ohne ständig den Workshop zu unterbrechen. Für Workshops in Präsenz würde ich auch gerne testen, wenn mir ein geeignetes Setting einfällt.

Für das Remote-Setup wäre ein Protokollant ideal, der auf eine laufende Transkription zugreift und von sich aus meldet, was noch nicht dokumentiert ist. Das erspart die nötigen Pausen für Transkription und Übertragung auf das Board. Dafür bräuchte es nicht nur einen Live-Mitschnitt, sondern für Claude auch die Möglichkeit, diesen als Stream zu konsumieren bzw. darauf zuzugreifen. Das steht definitiv auf meiner „Zu testen“-Liste.

Anthropic hat inzwischen eigene [Whiteboards](https://claude.com/resources/articles/sheets-whiteboards-data) vorgestellt. Ich habe sie nicht ausprobiert und kann sie deshalb noch nicht bewerten. Das Setup mit Excalidraw und JSON-Dateien hat jedoch in jedem Fall den gleichen Vorteil wie Markdown und Obsidian: Ich bleibe bezogen auf den LLM-Vendor unabhängig.

Falls jemand dazu Gedanken oder Erfahrungen teilen kann, freue ich mich über einen Austausch.

[^torres]: Teresa Torres, „Stop Repeating Yourself: Give Claude Code a Memory“, Product Talk. https://www.producttalk.org/give-claude-code-a-memory/
