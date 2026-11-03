---
title: "Milestone 3 plan and task split"
date: 2026-10-19
location: "DETI 4.2.16"
duration: "0h30"
attendees: ["David Cálix", "António Videira", "Tiago Oliveira", "Diogo Ruivo", "Gabriel Riquito"]
summary: "Narrowed Milestone 3 to its three pillars (legal requirements, technical risks, usability and digital accessibility) and split the work among the team."
---

The meeting ran from 14:00 to 14:30.

## Scope of Milestone 3

The brief defines three pillars:

1. Legal requirements: GDPR, licences, sector regulation and T&C.
2. Technical risks.
3. Usability and digital accessibility.

SWOT/TOWS and PESTEL are not part of Milestone 3, so we dropped them. There is no SUS in this milestone either. The accessibility work is our own critical review of our screens, and the SUS with users comes later.

## Tasks for Milestone 3

| Owner | Task |
| --- | --- |
| David Cálix | GDPR |
| Diogo Ruivo | Licences, medical device regulation and 5 T&C points |
| Gabriel Riquito | Accessibility matrix for the athlete, coach and login screens: screen reader, 200% zoom, touch targets |
| António Videira | Accessibility matrix for the physio, researcher and admin screens: keyboard, contrast, colour blindness, deafness, cognitive limitations |
| Tiago Oliveira | Coordination: merge the matrices, pick the 3 to 5 most serious problems and write the approach (6 profiles, WCAG 2.2 AA) |
| To be confirmed | Pillar 2: external dependencies, technical debt and fragile components |

## Notes

- Touch targets: WCAG criterion 2.5.8 asks for 24×24 px. The 44×44 px size is only a recommendation (AAA).
- Decree-Law 83/2018 and the European Accessibility Act are cited as references, not as obligations.
- The Milestone 1 calendar needs fixing: it scheduled the accessibility review for December.

## Decisions

- Milestone 3 covers only the three pillars from the brief. SWOT/TOWS and PESTEL are out.
- Accessibility is a critical review against WCAG 2.2 AA, with no user testing in this milestone.
