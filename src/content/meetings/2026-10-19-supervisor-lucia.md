---
title: "Milestone 2 presentation to the supervisors"
date: 2026-10-19
location: "IETTA"
duration: "1h30"
attendees: ["David Cálix", "António Videira", "Tiago Oliveira", "Diogo Ruivo", "Gabriel Riquito", "António J. R. Neves", "Lúcia Sousa"]
summary: "Presented Milestone 2 to the supervisor, who approved the actors, clarified how group-class videos are captured and stored, and saw Lúcia Sousa's exercise analysis script."
nextMeeting: 2026-10-19
---

The meeting ran from 11:00 to 12:30.

## Milestone 2 presentation

- The supervisor, António J. R. Neves, approved the actors.
- The analysis script is written in Python.
- In UC07, the athlete can either follow exercises recommended by the PT/physiotherapist or choose the exercises they want to do.
- In flowchart 2, a histogram produced by Lúcia should be added to the "Platform processes the video" step.

## Group classes and video capture

- In group classes, the videos from the 4 cameras are sent at the end of the class.
- The 4 cameras are set up to produce 4 videos, which go to a storage.
- It is up to the team whether group classes show results live or only at the end.
- The average video size is about 1 GB.

## Infrastructure

- Everything should run in the cloud, to keep the scenario realistic.
- According to the supervisor, the orchestrator is useful to set the order in which the videos are processed.
- The team raised how hard it would be to set up a local file server.
- It is still to be confirmed whether the team will have access to a VM with enough space.

## Lúcia Sousa's script

### Dataset and annotations

- There is a folder with several videos, all annotated in XML.
- Each annotation has a label that identifies the exercise; from that label the script knows which keypoints to use.
- The script uses a dictionary with each exercise's name and its phases (for example, squats use the hip and knee angles).

### How it works (example: shoulder press)

1. Every frame is analysed to check whether a shoulder press is being done.
2. Phase 1: once the exercise is confirmed, the elbow and shoulder angles are calculated.
3. Phase 2: if the angle has become smaller, a repetition is counted.

Adding more phases makes it possible to support a different exercise.

### Interface and results

- Lúcia showed angle plots for some of the exercises.
- A basic interface, shown at the box, lets the thresholds be edited to fit the person who sent the video.
- Using averages to adjust the thresholds was suggested.
- The output is a CSV with the columns `exercise, n, MAE, MedAE, RMSE, Exact_pct, Within2_pct`.
- Lúcia will share the dataset and other documents with the team.

## Decisions

- Keep the whole solution in the cloud.
- Use the orchestrator to order video processing.
- Add Lúcia's histogram to flowchart 2.

## Next steps

- Add the histogram to flowchart 2.
- Confirm access to a VM with enough storage.
- Assess the effort of a local file server.
- Decide whether group classes show results live or only at the end.

## Next meetings

- Today, 19 October, at 14:00.
- On the 2nd/3rd, at the box.
