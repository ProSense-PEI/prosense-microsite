---
title: "Meeting with supervisors"
date: 2026-09-28
location: "IEETA"
duration: "1h00"
attendees: ["David Cálix", "António Videira", "Tiago Oliveira", "Diogo Ruivo", "Gabriel Riquito", "António J. R. Neves", "Lúcia Sousa", "Daniel Canedo"]
summary: "Reviewed progress with the supervisors, discussed personas, clients and group classes, and agreed to make the architecture more generic."
---

## Progress so far

The team presented to the supervisors what has been developed so far, followed by a discussion of the project as a whole. Daniel Canedo joined online.

## Topics discussed

- **Group classes:** to research and implement.
- **Personas:** new personas discussed, namely the physiotherapist and the researcher.
- **Clients:** who the platform is for (clinics, gyms, …).
- **Plugin architecture.**
- **Sensors:** heart-rate sensors and Bluetooth connectivity.
- **Interfaces:** two interfaces, one for group sessions and one for individual sessions.
- **Presentation:** feedback from the supervisors on the first presentation.

## Decisions

- Add a single-camera setup to the architecture.
- Make the architecture more generic: drop specific names such as Polar, MediaPipe and YOLO, and describe the building blocks instead — pose estimators, cameras and sensors.
