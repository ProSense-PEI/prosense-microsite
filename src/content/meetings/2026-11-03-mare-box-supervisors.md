---
title: "Visit to MARE Box and GDPR decisions"
date: 2026-11-03
location: "MARE Box"
duration: "1h45"
attendees: ["David Cálix", "António Videira", "Tiago Oliveira", "Diogo Ruivo", "Gabriel Riquito", "António J. R. Neves", "Lúcia Sousa"]
summary: "Visited MARE Box with the supervisors, confirmed the existing favourable ethics and data protection opinion, and settled the GDPR decisions for Milestone 3."
---

The meeting ran from 10:15 to 12:00. It started with a guided tour of MARE Box by Pedro Santos.

## Answers from the supervisors

- **IEETA videos (Lúcia Sousa's folder):** the participants gave consent.
- **MARE Box:** every participant signs a consent form.
- **Research:** researchers receive only the keypoints. Videos are deleted within 30 days at most.
- **Data controller:** the University of Aveiro, through IEETA. Lúcia Sousa is the principal investigator.
- **Opinion:** one already exists. It is opinion 22-2026-EPD, ref. CEIC 6-CEIC-UA/2026-D, dated 23/10/2026. It is favourable and the DPIA gives a low residual risk. We can and should cite it in the presentation.
- **IEETA VM security (encryption, backups):** too early to define.
- **Scope:** everything is in, physiotherapy included. The owner of MARE Box agreed, since physiotherapists work at the box.
- **Framework:** everything goes through MARE Box, because that is what protects the project. The physiotherapists are self-employed, which will be dealt with later.
- **Ownership:** the project belongs to the University of Aveiro and will not be sold. MARE Box is a partner that uses it without paying.
- **Minors:** out of scope for now.

## Licences

- MDL has no licence defined, so the most restrictive one applies by default.
- YOLO can be used, since the project is open access.
- The supervisor wants us to try all the pose estimators.

## GDPR decisions

### Data collected

- Identification
- Profile (height and weight, both optional)
- Video (no sound, no GPS)
- Keypoints and metrics
- Rehabilitation (health data, GDPR art. 9)
- Feedback
- Technical logs

### Consent

Consent is signed, granular and revocable. It has four parts: analysis, sharing with professionals, rehabilitation and research (optional). Only adults take part.

### Retention

| Data | Kept until |
| --- | --- |
| Video | 30 days at most |
| Code ↔ name key | Destroyed on 31/10/2027 |
| Data | Deleted on 31/10/2029 |
| Technical logs | 90 days |

### Pseudonymisation

Each participant has a code. The worker and the plugins never see the name, and results are only published in aggregate.

### Right to erasure

Requests are handled in under a month. Deletion cascades through SeaweedFS and PostgreSQL, and a deletion record is sent to the Data Protection Officer.

### Access

| Role | Can see |
| --- | --- |
| Athlete | Only their own data |
| Coach | Only their associated athletes |
| Physiotherapist | Only their own patients |
| Admin | No access to metrics or videos |
| Research | Only pseudonymised data |

### Security

TLS, encryption at rest, 2FA, and authorisation by role and by verified association, checked in the API. Incidents go to the Data Protection Officer, who notifies the CNPD within 72 hours.

### Local processing

No cloud, no external LLMs and no transfers outside the EU.

## Deliverables

- Exploration PDF (5 pages).
- 2 slides (main and backup) with a 1-minute script.
