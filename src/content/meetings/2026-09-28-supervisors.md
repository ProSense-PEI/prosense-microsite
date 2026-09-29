---
title: "Meeting with supervisors"
date: 2026-09-28
location: "IEETA"
duration: "1h00"
attendees: ["David Cálix", "António Videira", "Tiago Oliveira", "Diogo Ruivo", "Gabriel Riquito", "António J. R. Neves", "Lúcia Sousa", "Daniel Canedo"]
summary: "Reviewed progress with the supervisors, discussed personas, clients and group classes, and agreed on a generic, plugin-based architecture with a single-camera setup."
---

## Progress so far

The team presented to the supervisors what has been developed so far, followed by a discussion of the project as a whole. Daniel Canedo joined online.

The supervisors stressed that the project belongs to the team, so we have some freedom in how we shape it.

## Topics discussed

- **Group classes:** to research and implement. The state of the art should include an analysis of group classes. Diogo Ruivo suggested live monitoring of participants during group classes.
- **Personas:** new personas discussed, namely the physiotherapist and the researcher. The researcher is a separate persona with its own needs.
- **Use cases:** home physiotherapy was raised as a possible scenario.
- **Clients:** who the platform is for (clinics, gyms, …).
- **Plugin architecture:** the platform must be able to change over time. Algorithms may be swapped or added and new features may appear, so the architecture has to absorb that change without being rewritten.
- **Researchers:** it should be easy for researchers to change parts of the system, such as algorithms and settings, on their own.
- **Feedback from professionals:** requirements may still change after talking to professionals in the field.
- **Camera setups:** a single-camera setup is to be added. It works in a completely different way from the multi-camera setup, so it has to be treated as a separate case.
- **Sensors:** heart-rate sensors and Bluetooth connectivity.
- **Interfaces:** two interfaces, one for group sessions and one for individual sessions.
- **Presentation:** feedback from the supervisors on the first presentation.

## Decisions

- Add a single-camera setup to the architecture, separate from the multi-camera setup.
- Base the architecture on plugins, so that algorithms and features can be changed or added later.
- Make the architecture more generic: drop specific names such as Polar, MediaPipe and YOLO, and describe the building blocks instead — pose estimators, cameras and sensors.
- Add an analysis of group classes to the state of the art.

## Next steps

- Research group classes and live monitoring for the state of the art.
- Update the architecture with the plugin approach and the single-camera setup.
- Add the researcher and physiotherapist personas, including the home-physiotherapy scenario.
