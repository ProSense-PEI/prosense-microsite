---
title: "Inception"
code: "M1"
phase: "Inception"
date: 2026-09-29
summary: "The problem, the idea behind ProSense, who it is for, what the MVP covers, how it compares with existing tools, and the first architecture."
pdf: "/milestones/m1-slides.pdf"
slides: "https://www.canva.com/design/DAHWk5mXZcM/1j7wuKXQxi1bQ2Zzb6Agtg/view?embed"
---

## Context

Functional training already produces plenty of information, but it lives in three separate places that do not talk to each other.

<div class="ms-worlds">
  <div><strong>Training video</strong><span>The movement itself, recorded on a phone.</span></div>
  <div><strong>Metrics</strong><span>Repetitions, cadence, range of motion.</span></div>
  <div><strong>Gym management</strong><span>Athletes, sessions, results.</span></div>
</div>

Today coaches judge execution, progress and fatigue mostly by eye, and athletes who train alone have no objective feedback at all.

## Vision

<blockquote class="ms-quote">
  <p><strong>ProSense</strong> is an open, modular platform that turns functional training videos into movement metrics, for coaches, athletes, physiotherapists and researchers.</p>
  <ul class="ms-tags"><li>Swappable pose algorithms</li><li>Exercises defined by the coach (MDL)</li></ul>
</blockquote>

## The algorithm

<figure class="ms-figure">
  <img src="/milestones/m1-squat.jpg" width="927" height="503" alt="Three frames of a squat with the detected skeleton and joint angles drawn over the athlete" loading="lazy" />
  <figcaption>Pose estimation and joint angles across the phases of a squat.</figcaption>
</figure>

<div class="ms-split">
  <div>
    <h3>What it is</h3>
    <p>Pose estimation combined with the <strong>Movement Description Language (MDL)</strong>, developed at IEETA. Every exercise is described as a state machine: the states are the phases of the movement and joint angles trigger the transitions between them.</p>
  </div>
  <div>
    <h3>What it does</h3>
    <p>It finds the body keypoints in each frame, measures joint angles, works out which phase of the movement the athlete is in and counts repetitions. A new exercise is just a new set of parameters, so no model has to be trained.</p>
  </div>
</div>

<ol class="ms-flow">
  <li>Video</li><li>Body points</li><li>Joint angles</li><li>Movement phases</li><li class="out">Repetitions + metrics</li>
</ol>

## Personas

<div class="ms-personas">
  <div><span class="ms-initial">A</span><h3>Athlete</h3><p>Records and submits videos, follows their metrics and progress over time and receives feedback.</p></div>
  <div><span class="ms-initial">C</span><h3>PT / Coach</h3><p>Creates exercises with the MDL, schedules sessions, reviews videos with the skeleton overlay, compares performances and leaves feedback.</p></div>
  <div><span class="ms-initial">P</span><h3>Physiotherapist</h3><p>Follows recovery through biomechanical metrics and prescribes rehabilitation. For exercises done at home, gets the algorithm's view of how the patient performed them.</p></div>
  <div><span class="ms-initial">Ad</span><h3>Admin</h3><p>Creates and views groups such as gyms and classes, links athletes to coaches and manages users.</p></div>
  <div><span class="ms-initial">R</span><h3>Researcher</h3><p>Uses the platform to refine algorithms, compare pose models on the same videos and explore new uses later on.</p></div>
</div>

## Goals

<ol class="ms-goals">
  <li><h3>Modular platform</h3><p>Pose algorithms and the processing stages are plugins that can be swapped.</p></li>
  <li><h3>Custom exercises</h3><p>Coaches create and tune exercises with the MDL, without training any model.</p></li>
  <li><h3>Metrics and feedback</h3><p>Repetitions, cadence and range of motion, shown next to the video with the skeleton overlay.</p></li>
</ol>

Everything is validated with real data collected at a partner functional training box.

## MVP

<div class="ms-mvp">
  <div>
    <span class="label">In the MVP</span>
    <ul>
      <li>Submit the video of an exercise from the mobile or web app</li>
      <li>Pose estimation + MDL compute repetitions, cadence and range of motion</li>
      <li>Asynchronous processing through the plugin architecture</li>
      <li>Coaches create and configure exercises with the MDL</li>
      <li>Dashboard with the video and skeleton, metrics and history</li>
      <li>Basic management of groups and users</li>
    </ul>
  </div>
  <div class="later">
    <span class="label">Later</span>
    <ul>
      <li>A second pose algorithm (e.g. YOLO-Pose)</li>
      <li>Several people and several cameras at once</li>
      <li>New ideas that come up along the way</li>
    </ul>
  </div>
</div>

<p class="ms-note"><strong>The MVP is meant to move.</strong> This is an exploratory project: along the way we may, for example, use AI to recognise automatically which exercise is being performed. Features may come in and others go out, which is why we start from the essentials and a modular architecture.</p>

## State of the art

We compared ProSense with the tools functional training boxes already use.

<div class="ms-table-wrap">
<table class="ms-sota">
  <thead>
    <tr><th>Feature</th><th>Regybox<small>box management (PT)</small></th><th>SugarWOD<small>workouts and community</small></th><th>Wodify<small>full management</small></th><th>Beyond the Whiteboard<small>logging and analysis</small></th><th class="us">ProSense<small>modular platform</small></th></tr>
  </thead>
  <tbody>
    <tr class="group"><td colspan="6">Box and workout management</td></tr>
    <tr><td>Mobile app for athletes</td><td><i class="y">Yes</i></td><td><i class="y">Yes</i></td><td><i class="y">Yes</i></td><td><i class="y">Yes</i></td><td class="us"><i class="y">Yes</i></td></tr>
    <tr><td>Workout planning (WOD)</td><td><i class="y">Yes</i></td><td><i class="y">Yes</i></td><td><i class="y">Yes</i></td><td><i class="y">Yes</i></td><td class="us"><i class="p">Partial</i></td></tr>
    <tr><td>Results logging and personal records</td><td><i class="y">Yes</i></td><td><i class="y">Yes</i></td><td><i class="y">Yes</i></td><td><i class="y">Yes</i></td><td class="us"><i class="p">Partial</i></td></tr>
    <tr><td>Class booking and payments</td><td><i class="y">Yes</i></td><td><i class="n">No</i></td><td><i class="y">Yes</i></td><td><i class="y">Yes</i></td><td class="us"><i class="n">No</i></td></tr>
    <tr class="group"><td colspan="6">Group classes</td></tr>
    <tr><td>Class leaderboard</td><td><i class="y">Yes</i></td><td><i class="y">Yes</i></td><td><i class="y">Yes</i></td><td><i class="y">Yes</i></td><td class="us"><i class="n">No</i></td></tr>
    <tr><td>Live class tracking during the session</td><td><i class="n">No</i></td><td><i class="n">No</i></td><td><i class="y">Yes</i><sup>1</sup></td><td><i class="p">Partial</i><sup>2</sup></td><td class="us"><i class="p">Partial</i><sup>3</sup></td></tr>
    <tr><td>Class results without manual logging</td><td><i class="n">No</i></td><td><i class="n">No</i></td><td><i class="n">No</i></td><td><i class="n">No</i></td><td class="us"><i class="y">Yes</i></td></tr>
    <tr class="group"><td colspan="6">Movement analysis</td></tr>
    <tr><td>Automatic video analysis (repetitions, cadence, range of motion)</td><td><i class="n">No</i></td><td><i class="n">No</i></td><td><i class="n">No</i></td><td><i class="n">No</i></td><td class="us"><i class="y">Yes</i></td></tr>
    <tr><td>Movement criteria defined by the coach</td><td><i class="n">No</i></td><td><i class="n">No</i></td><td><i class="n">No</i></td><td><i class="n">No</i></td><td class="us"><i class="y">Yes</i></td></tr>
    <tr><td>Swappable analysis algorithms</td><td><i class="n">No</i></td><td><i class="n">No</i></td><td><i class="n">No</i></td><td><i class="n">No</i></td><td class="us"><i class="y">Yes</i></td></tr>
  </tbody>
</table>
</div>

<ul class="ms-legend"><li><i class="y">Yes</i> Yes</li><li><i class="p">Partial</i> Partial</li><li><i class="n">No</i> No, or not stated on the official website</li></ul>

<ol class="ms-footnotes">
  <li>Wodify Pulse add-on (Myzone straps): the Kiosk+ panel shows every athlete in the class live.</li>
  <li>Tempus feature: a live multiplayer mode, but the athlete marks each change of movement by hand.</li>
  <li>In phase 1 each athlete submits their own video and results are aggregated per session; monitoring the whole class at once is planned as an extension.</li>
</ol>

<p class="ms-source">Sources: official websites and help centres of each product, accessed on 28 September 2026.</p>

## Architecture

<div class="ms-arch">
  <a class="ms-arch-img" href="/milestones/m1-architecture.png" target="_blank" rel="noopener"><img src="/milestones/m1-architecture.png" width="716" height="1159" alt="Architecture diagram: data sources, presentation, backend with the plugin architecture, and data layer" loading="lazy" /></a>
  <ol class="ms-arch-layers">
    <li class="l1"><h3>Data sources</h3><p>A camera in the MVP. Multi-camera setups are planned as a future extension.</p></li>
    <li class="l2"><h3>Presentation</h3><p>Mobile app for capture and upload; web app for the dashboard and video upload.</p></li>
    <li class="l3"><h3>Backend and plugins</h3><p>The backend hands work asynchronously to an orchestrator, which calls swappable plugins: the pose estimator and the MDL engine.</p></li>
    <li class="l4"><h3>Data layer</h3><p>A relational database and video storage.</p></li>
  </ol>
</div>

<p class="ms-source">Dashed: future components or swappable plugins. Click the diagram to open it full size.</p>

## Calendar

<div class="ms-timeline">
  <div class="now"><span class="when">29/09/2026</span><strong>M1</strong><p>Lifecycle objectives and project calendar presented.</p></div>
  <div><span class="when">24/11/2026</span><strong>M2</strong><p>Architecture validated: requirements, domain model and mock-ups completed.</p></div>
  <div><span class="when">Dec 2026</span><strong>M3</strong><p>Digital accessibility and usability review of the platform.</p></div>
  <div><span class="when">15–16/12/2026</span><strong>M4</strong><p>MVP presented to the supervisors; peer evaluation.</p></div>
</div>

The modules and tasks between milestones are on the [calendar](/calendar) page.
