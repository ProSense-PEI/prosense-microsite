---
title: "Elaboration"
code: "M2"
phase: "Elaboration"
date: 2026-10-13
dateLabel: "13 and 20 October 2026"
summary: "Actors, use cases, functional and non-functional requirements, the architecture and its deployment, the main processing flow, risks, UML and flow diagrams, and the first mock-ups of the platform."
pdf: "/milestones/m2-slides.pdf"
slides: "https://www.canva.com/design/DAHX1ASYGcE/O5-DOUWsQaOdGxIqJAy6rQ/view?embed"
---

## Vision

<blockquote class="ms-quote">
  <p><strong>ProSense</strong> is an open, modular platform that turns functional training videos into movement metrics, for coaches, athletes, physiotherapists and researchers.</p>
  <ul class="ms-tags"><li>Swappable pose algorithms</li><li>Exercises defined by the coach (MDL)</li></ul>
</blockquote>

## State of the art

What sets ProSense apart from the software gyms already use. The full comparison is on the [M1 page](/milestones/01-inception#state-of-the-art).

<div class="ms-table-wrap">
<table class="ms-sota">
  <thead>
    <tr><th>Feature</th><th>Regybox</th><th>SugarWOD</th><th>Wodify</th><th>Beyond the Whiteboard</th><th class="us">ProSense</th></tr>
  </thead>
  <tbody>
    <tr><td>Automatic repetition counting from video</td><td><i class="n">No</i></td><td><i class="n">No</i></td><td><i class="n">No</i></td><td><i class="n">No</i></td><td class="us"><i class="y">Yes</i></td></tr>
    <tr><td>Class results without manual logging</td><td><i class="n">No</i></td><td><i class="n">No</i></td><td><i class="n">No</i></td><td><i class="n">No</i></td><td class="us"><i class="y">Yes</i></td></tr>
    <tr><td>Coach defines the criteria for each exercise</td><td><i class="n">No</i></td><td><i class="n">No</i></td><td><i class="n">No</i></td><td><i class="n">No</i></td><td class="us"><i class="y">Yes</i></td></tr>
    <tr><td>Swappable analysis algorithms</td><td><i class="n">No</i></td><td><i class="n">No</i></td><td><i class="n">No</i></td><td><i class="n">No</i></td><td class="us"><i class="y">Yes</i></td></tr>
    <tr><td>Class booking and payments</td><td><i class="y">Yes</i></td><td><i class="n">No</i></td><td><i class="y">Yes</i></td><td><i class="y">Yes</i></td><td class="us"><i class="n">No</i></td></tr>
  </tbody>
</table>
</div>

<p class="ms-source">Sources: official websites and help centres of each product, September 2026.</p>

## Actors

<div class="ms-personas">
  <div><span class="ms-initial">A</span><h3>Athlete</h3><p>Records and submits videos, checks their metrics and progress over time, and receives feedback.</p></div>
  <div><span class="ms-initial">C</span><h3>PT / Coach</h3><p>Creates exercises with the MDL, schedules sessions, reviews videos with the skeleton overlay, compares performances and leaves feedback.</p></div>
  <div><span class="ms-initial">P</span><h3>Physiotherapist</h3><p>Tracks recovery with biomechanical metrics and defines rehabilitation. For home exercises, gets the algorithm's output on the patient's execution.</p></div>
  <div><span class="ms-initial">Ad</span><h3>Admin</h3><p>Views and creates groups such as gyms and classes, links athletes and coaches, and manages users.</p></div>
  <div><span class="ms-initial">R</span><h3>Researcher</h3><p>Uses the platform to refine algorithms, compare pose models on the same videos and explore new uses in the future.</p></div>
</div>

## Use cases

28 use cases, organised in seven packages. Those marked <em>phase 2</em> are planned after the MVP.

<div class="ms-packages">
  <div><h3>Access and organisation</h3><ul><li><b>UC01</b> Authenticate</li><li><b>UC02</b> Manage own profile</li><li><b>UC03</b> Manage accounts and roles</li><li><b>UC04</b> Manage groups and associations</li></ul></div>
  <div><h3>Training log</h3><ul><li><b>UC05</b> Record and upload video</li><li class="later"><b>UC06</b> Connect heart-rate sensor <em>phase 2</em></li><li><b>UC07</b> Train alone (assigned exercise)</li><li><b>UC08</b> Group class</li></ul></div>
  <div><h3>Exercises and sessions</h3><ul><li><b>UC09</b> Create exercise (MDL)</li><li><b>UC10</b> Assign exercise to athlete</li><li><b>UC11</b> Schedule session or plan</li></ul></div>
  <div><h3>Analysis and results</h3><ul><li><b>UC12</b> View video + metrics</li><li><b>UC13</b> Track progress over time</li><li><b>UC14</b> Compare performance</li><li class="later"><b>UC15</b> Heart rate with metrics <em>phase 2</em></li><li><b>UC16</b> View alerts</li><li><b>UC17</b> Generate report</li></ul></div>
  <div><h3>Follow-up and feedback</h3><ul><li><b>UC18</b> Review home training</li><li><b>UC19</b> Give feedback</li><li><b>UC20</b> Read feedback</li></ul></div>
  <div><h3>Research</h3><ul><li><b>UC21</b> Import datasets</li><li><b>UC22</b> Run pose estimators</li><li><b>UC23</b> Compare estimators</li><li><b>UC24</b> Export raw data</li><li><b>UC25</b> Add and configure plugins</li></ul></div>
  <div><h3>Administration</h3><ul><li><b>UC26</b> Configure plugins and devices</li><li><b>UC27</b> Monitor system status</li><li><b>UC28</b> Configure organisation</li></ul></div>
</div>

## Functional requirements

<div class="ms-fr">
  <div class="ms-stat">
    <strong>38</strong>
    <span>requirements, in 7 packages</span>
    <ul class="ms-moscow"><li><b>19</b> Must</li><li><b>16</b> Should</li><li><b>3</b> Could</li></ul>
    <p>Out of scope in phase 1: bookings and payments, leaderboards and multi-camera.</p>
  </div>
  <ul class="ms-fr-list">
    <li><b>5</b><span><strong>Access and organisation</strong>Accounts, roles and groups</span></li>
    <li><b>6</b><span><strong>Training log</strong>Record, upload, group classes</span></li>
    <li><b>4</b><span><strong>Exercises and sessions</strong>Create with MDL, assign, schedule</span></li>
    <li><b>9</b><span><strong>Analysis and results</strong>Video with skeleton and metrics</span></li>
    <li><b>4</b><span><strong>Follow-up and feedback</strong>Adherence and comments to athletes</span></li>
    <li><b>6</b><span><strong>Research</strong>Datasets, estimators and plugins</span></li>
    <li><b>4</b><span><strong>Administration</strong>Plugins, devices and status</span></li>
  </ul>
</div>

## Non-functional requirements

How the system should behave, with targets that can be checked.

<div class="ms-nfr">
  <div><span class="label">Performance</span><strong>≤ 2 s</strong><p>For 95% of interface and API requests; analysis runs in the background.</p></div>
  <div><span class="label">Availability</span><strong>≥ 95%</strong><p>Per month, excluding planned maintenance; uploads are still accepted if the worker is down.</p></div>
  <div><span class="label">Maintainability</span><strong>Plugins</strong><p>A new estimator without touching the core; validated by integrating two estimators.</p></div>
  <div><span class="label">Security</span><strong>By role</strong><p>Access by profile and by athlete association; GDPR policy to be defined.</p></div>
  <div><span class="label">Data integrity</span><strong>Traceable</strong><p>Every result links to its video, plugin, version and parameters.</p></div>
  <div><span class="label">Usability</span><strong>WCAG AA</strong><p>Web accessibility, reviewed in M3.</p></div>
  <div><span class="label">Interoperability</span><strong>CSV · JSON</strong><p>Open formats to import and export data.</p></div>
  <div><span class="label">Recoverability</span><strong>Retry</strong><p>Failed tasks can be reprocessed by the admin.</p></div>
</div>

## Assumptions and dependencies

<div class="ms-split">
  <div>
    <h3>We assume that…</h3>
    <ul>
      <li>Each athlete has a smartphone and internet access.</li>
      <li>One video, one person, one camera.</li>
      <li>Pose estimators are accurate on smartphone video (to be validated).</li>
      <li>Requirements may change with feedback from professionals.</li>
    </ul>
  </div>
  <div>
    <h3>We need…</h3>
    <ul>
      <li>The MDL developed at IEETA.</li>
      <li>A partner box: real videos and annotations.</li>
      <li>Hardware to process and store video.</li>
      <li>Decisions from the product owners on real time and the heart-rate sensor.</li>
    </ul>
  </div>
</div>

## Architecture

<figure class="ms-figure ms-diagram">
  <a href="/milestones/m2-architecture.png" target="_blank" rel="noopener"><img src="/milestones/m2-architecture.png" width="1800" height="792" alt="Architecture diagram: presentation, business and data layers on the left, and the processing layer with the task queue, worker and isolated plugins on the right" loading="lazy" /></a>
  <figcaption>Dashed: future components. Click the diagram to open it full size.</figcaption>
</figure>

<ol class="ms-arch-layers ms-arch-row">
  <li class="l1"><h3>Presentation</h3><p>Web app for all five profiles; mobile app to capture and upload. Sensors and multi-camera come later.</p></li>
  <li class="l3"><h3>Business</h3><p>A REST API with authentication by role, and the core modules: users and groups, exercises (MDL), sessions, results and feedback, research, and the orchestrator.</p></li>
  <li class="l4"><h3>Data</h3><p>A relational database for users, sessions and results; object storage for videos, keypoints and reports.</p></li>
  <li class="l2"><h3>Processing</h3><p>The orchestrator puts tasks in a queue; a worker picks them up and runs isolated plugins through a common contract.</p></li>
</ol>

## Deployment and technologies

<figure class="ms-figure ms-diagram">
  <a href="/milestones/m2-deployment.png" target="_blank" rel="noopener"><img src="/milestones/m2-deployment.png" width="1800" height="800" alt="Deployment diagram: a Linux VM running Docker containers for the web app, Spring Boot backend, RabbitMQ, the Python worker and plugins, PostgreSQL and SeaweedFS" loading="lazy" /></a>
  <figcaption>Everything runs on a Linux VM. Orange dashed boxes are Docker containers (Docker Compose).</figcaption>
</figure>

<ul class="ms-tags ms-stack">
  <li>React + Vite · Nginx</li><li>React Native</li><li>Spring Boot · REST · JWT</li><li>RabbitMQ</li><li>Python worker (AMQP)</li><li>PostgreSQL</li><li>SeaweedFS (S3 API)</li><li>Docker Compose</li>
</ul>

## Main flow

What happens when an athlete uploads a video, from the request to the saved metrics.

<ol class="ms-goals ms-steps">
  <li><h3>Mobile app and API</h3><p>The athlete uploads the video; the API checks the role. <code>POST /sessions/{id}/video</code></p></li>
  <li><h3>Object storage</h3><p>The video is stored. Status: queued.</p></li>
  <li><h3>Orchestrator + queue</h3><p>The orchestrator creates the task and puts it in the queue.</p></li>
  <li><h3>Worker</h3><p>The worker picks up the task and fetches the video.</p></li>
  <li><h3>Plugins</h3><p>Plugins run in order: pose estimation, then MDL analysis.</p></li>
  <li><h3>Database</h3><p>The result returns to the orchestrator, which saves the metrics. Status: done.</p></li>
</ol>

## Risks

<div class="ms-table-wrap">
<table class="ms-sota ms-risks">
  <thead>
    <tr><th>Risk</th><th>Impact</th><th>Mitigation</th><th>Effort</th></tr>
  </thead>
  <tbody>
    <tr><td>Pose quality in phone videos (poor light, angle, occlusion)</td><td>Less reliable results</td><td>Capture guide in the app; low-confidence warning; compare the two estimators</td><td><span class="ms-effort high">High</span></td></tr>
    <tr><td>Slow analysis (CPU only)</td><td>Poor user experience</td><td>Asynchronous processing; status and notification; scale workers</td><td><span class="ms-effort low">Low</span></td></tr>
    <tr><td>Large videos</td><td>Storage and upload problems</td><td>Direct upload to object storage; size limits; retention policy</td><td><span class="ms-effort medium">Medium</span></td></tr>
    <tr><td>Personal and health data (GDPR)</td><td>Legal risk</td><td>Consent, roles, encryption, retention policy</td><td><span class="ms-effort medium">Medium</span></td></tr>
    <tr><td>Real-time group classes (Should)</td><td>Needs a streaming architecture</td><td>Out of scope for now; decide with the supervisors</td><td><span class="ms-effort high">High</span></td></tr>
  </tbody>
</table>
</div>

<p class="ms-source">Effort is a relative size, not hours.</p>

## Use case diagrams

<div class="ms-diagrams">
  <figure><a href="/milestones/m2-uml-training-log.png" target="_blank" rel="noopener"><img src="/milestones/m2-uml-training-log.png" width="1570" height="945" alt="Use case diagram for the training log package: UC05 to UC08" loading="lazy" /></a><figcaption>1 · Training log</figcaption></figure>
  <figure><a href="/milestones/m2-uml-exercises-sessions.png" target="_blank" rel="noopener"><img src="/milestones/m2-uml-exercises-sessions.png" width="1616" height="945" alt="Use case diagram for the exercises and sessions package: UC09 to UC11" loading="lazy" /></a><figcaption>2 · Exercises and sessions</figcaption></figure>
  <figure><a href="/milestones/m2-uml-analysis-results.png" target="_blank" rel="noopener"><img src="/milestones/m2-uml-analysis-results.png" width="1023" height="946" alt="Use case diagram for the analysis and results package: UC12 to UC17" loading="lazy" /></a><figcaption>3 · Analysis and results</figcaption></figure>
  <figure><a href="/milestones/m2-uml-follow-up.png" target="_blank" rel="noopener"><img src="/milestones/m2-uml-follow-up.png" width="1539" height="945" alt="Use case diagram for the follow-up and feedback package: UC18 to UC20" loading="lazy" /></a><figcaption>4 · Follow-up and feedback</figcaption></figure>
</div>

<p class="ms-source">Click a diagram to open it full size.</p>

## Flowcharts

<figure class="ms-figure ms-diagram">
  <a href="/milestones/m2-flow-home-training.png" target="_blank" rel="noopener"><img src="/milestones/m2-flow-home-training.png" width="1542" height="824" alt="Flowchart of home training: the athlete records and uploads the video, the platform analyses it and the physiotherapist gives feedback" loading="lazy" /></a>
  <figcaption>1 · Home training</figcaption>
</figure>

<figure class="ms-figure ms-diagram">
  <a href="/milestones/m2-flow-create-exercise.png" target="_blank" rel="noopener"><img src="/milestones/m2-flow-create-exercise.png" width="1542" height="669" alt="Flowchart of creating an exercise: the coach defines MDL rules, tests them on a video, adjusts and saves to the catalogue" loading="lazy" /></a>
  <figcaption>2 · Creating an exercise</figcaption>
</figure>

<figure class="ms-figure ms-diagram">
  <a href="/milestones/m2-flow-rehabilitation.png" target="_blank" rel="noopener"><img src="/milestones/m2-flow-rehabilitation.png" width="1533" height="668" alt="Flowchart of rehabilitation: the physiotherapist prescribes a plan, the patient trains and the plan is adjusted from the analysis" loading="lazy" /></a>
  <figcaption>3 · Rehabilitation</figcaption>
</figure>

## Mock-ups

The first screens of the web app, one set per profile. Click a screen to open it full size.

<figure class="ms-figure ms-shot">
  <a href="/milestones/m2-mockups/coach-session.jpg" target="_blank" rel="noopener"><img src="/milestones/m2-mockups/coach-session.jpg" width="1280" height="923" alt="Coach view of a back squat session: video with the skeleton overlay, metrics and timed feedback" loading="lazy" /></a>
  <figcaption>The coach reviewing a session: video with the skeleton, metrics and feedback at a point in the video.</figcaption>
</figure>

<div class="ms-mockups">
  <h3>Athlete</h3>
  <div>
    <a href="/milestones/m2-mockups/login.jpg" target="_blank" rel="noopener"><img src="/milestones/m2-mockups/login.jpg" width="1280" height="923" alt="Sign-in screen" loading="lazy" /><span>Sign in</span></a>
    <a href="/milestones/m2-mockups/athlete-dashboard.jpg" target="_blank" rel="noopener"><img src="/milestones/m2-mockups/athlete-dashboard.jpg" width="1280" height="923" alt="Athlete dashboard" loading="lazy" /><span>Dashboard</span></a>
    <a href="/milestones/m2-mockups/athlete-upload.jpg" target="_blank" rel="noopener"><img src="/milestones/m2-mockups/athlete-upload.jpg" width="1280" height="923" alt="Athlete video upload" loading="lazy" /><span>Upload video</span></a>
    <a href="/milestones/m2-mockups/athlete-feedback.jpg" target="_blank" rel="noopener"><img src="/milestones/m2-mockups/athlete-feedback.jpg" width="1280" height="923" alt="Athlete feedback list" loading="lazy" /><span>Feedback</span></a>
  </div>
  <h3>PT / Coach</h3>
  <div>
    <a href="/milestones/m2-mockups/coach-dashboard.jpg" target="_blank" rel="noopener"><img src="/milestones/m2-mockups/coach-dashboard.jpg" width="1280" height="923" alt="Coach dashboard" loading="lazy" /><span>Dashboard</span></a>
    <a href="/milestones/m2-mockups/coach-exercises.jpg" target="_blank" rel="noopener"><img src="/milestones/m2-mockups/coach-exercises.jpg" width="1280" height="923" alt="Coach exercise catalogue" loading="lazy" /><span>Exercises</span></a>
    <a href="/milestones/m2-mockups/coach-new-exercise.jpg" target="_blank" rel="noopener"><img src="/milestones/m2-mockups/coach-new-exercise.jpg" width="1280" height="923" alt="New exercise editor with movement phases" loading="lazy" /><span>New exercise (MDL)</span></a>
    <a href="/milestones/m2-mockups/coach-athletes.jpg" target="_blank" rel="noopener"><img src="/milestones/m2-mockups/coach-athletes.jpg" width="1280" height="923" alt="Coach list of athletes" loading="lazy" /><span>Athletes</span></a>
  </div>
  <h3>Physiotherapist</h3>
  <div>
    <a href="/milestones/m2-mockups/physio-dashboard.jpg" target="_blank" rel="noopener"><img src="/milestones/m2-mockups/physio-dashboard.jpg" width="1280" height="923" alt="Physiotherapist dashboard" loading="lazy" /><span>Dashboard</span></a>
    <a href="/milestones/m2-mockups/physio-prescribe.jpg" target="_blank" rel="noopener"><img src="/milestones/m2-mockups/physio-prescribe.jpg" width="1280" height="923" alt="Prescribe exercise form" loading="lazy" /><span>Prescribe exercise</span></a>
    <a href="/milestones/m2-mockups/physio-patients.jpg" target="_blank" rel="noopener"><img src="/milestones/m2-mockups/physio-patients.jpg" width="1280" height="923" alt="Physiotherapist list of patients" loading="lazy" /><span>Patients</span></a>
  </div>
  <h3>Researcher</h3>
  <div>
    <a href="/milestones/m2-mockups/researcher-dashboard.jpg" target="_blank" rel="noopener"><img src="/milestones/m2-mockups/researcher-dashboard.jpg" width="1280" height="923" alt="Researcher dashboard" loading="lazy" /><span>Dashboard</span></a>
    <a href="/milestones/m2-mockups/researcher-import.jpg" target="_blank" rel="noopener"><img src="/milestones/m2-mockups/researcher-import.jpg" width="1280" height="923" alt="Import dataset form" loading="lazy" /><span>Import dataset</span></a>
    <a href="/milestones/m2-mockups/researcher-dataset.jpg" target="_blank" rel="noopener"><img src="/milestones/m2-mockups/researcher-dataset.jpg" width="1280" height="923" alt="Imported dataset with its videos" loading="lazy" /><span>Dataset imported</span></a>
  </div>
  <h3>Admin</h3>
  <div>
    <a href="/milestones/m2-mockups/admin-status.jpg" target="_blank" rel="noopener"><img src="/milestones/m2-mockups/admin-status.jpg" width="1280" height="923" alt="System status screen" loading="lazy" /><span>System status</span></a>
    <a href="/milestones/m2-mockups/admin-groups.jpg" target="_blank" rel="noopener"><img src="/milestones/m2-mockups/admin-groups.jpg" width="1280" height="923" alt="Groups and assignments" loading="lazy" /><span>Groups</span></a>
    <a href="/milestones/m2-mockups/admin-new-group.jpg" target="_blank" rel="noopener"><img src="/milestones/m2-mockups/admin-new-group.jpg" width="1280" height="923" alt="Create group form" loading="lazy" /><span>New group</span></a>
    <a href="/milestones/m2-mockups/admin-group-created.jpg" target="_blank" rel="noopener"><img src="/milestones/m2-mockups/admin-group-created.jpg" width="1280" height="923" alt="Group created with its members" loading="lazy" /><span>Group created</span></a>
  </div>
</div>
