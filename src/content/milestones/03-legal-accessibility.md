---
title: "Legal and accessibility"
code: "M3"
phase: "Legal and accessibility"
date: 2026-11-03
summary: "What changed since M2, data protection (GDPR), licences and intellectual property, medical device regulation, terms and conditions, and a critical review of our own screens against WCAG 2.2 AA."
pdf: "/milestones/m3-slides.pdf"
---

## Where we are

<div class="ms-timeline">
  <div><span class="when">29 Sep</span><strong>M1</strong><p>Inception: context, problem, goals, five user profiles, MVP and calendar.</p></div>
  <div><span class="when">13 and 20 Oct</span><strong>M2</strong><p>Elaboration: 28 use cases, 38 requirements, plugin-based architecture, mock-ups.</p></div>
  <div class="now"><span class="when">3 Nov</span><strong>M3</strong><p>Legal and accessibility: GDPR, licences and T&amp;C; 73 screens reviewed, 38 problems; frontend built.</p></div>
  <div><span class="when">15–16 Dec</span><strong>MVP</strong><p>Working platform: upload to feedback end to end, two pose estimators + MDL, real MARE Box videos.</p></div>
</div>

## Changes since M2

Since M2 we built the frontend and improved it with the feedback we received. This is the athlete's home page. Instead of a menu full of options, the athlete sees the three things they do most: upload a video, read the coach's feedback and check the next class. Below are this week's exercises and what is left to do.

<figure class="ms-figure ms-shot">
  <a href="/milestones/m3-athlete-home.png" target="_blank" rel="noopener"><img src="/milestones/m3-athlete-home.png" width="1600" height="912" alt="Athlete home page: three large cards for uploading a video, reading feedback and the next class, with this week's exercises below" loading="lazy" /></a>
  <figcaption>Athlete home page. In a few seconds the athlete knows what to do today.</figcaption>
</figure>

## Data protection (GDPR)

<blockquote class="ms-quote">
  <p><strong>Approved.</strong> The UA Data Protection Officer gave a favourable opinion on the IEETA study at MARE Box (opinion 22-2026-EPD, ref. CEIC 6-CEIC-UA/2026-D, 23 October 2026). The impact assessment (DPIA) was done and the residual risk is low.</p>
</blockquote>

We collect training videos, movement metrics and, for physiotherapy, rehabilitation data, which is health data under GDPR art. 9. Everything is backed by a signed consent form. We do not collect date of birth, address, tax number, location or sound.

### Life of a video

<ol class="ms-goals ms-steps">
  <li><h3>Consent</h3><p>Signed before recording, revocable, adults only (18+).</p></li>
  <li><h3>Upload</h3><p>GPS and audio are removed from the file.</p></li>
  <li><h3>Local analysis</h3><p>The worker sees a code, not the name. No cloud, no external LLMs.</p></li>
  <li><h3>Day 30</h3><p>The video is deleted at the latest; keypoints stay.</p></li>
  <li><h3>Erasure</h3><p>When an account is deleted, all its data is gone within one month.</p></li>
</ol>

### Who sees what

<div class="ms-table-wrap">
<table class="ms-sota ms-risks">
  <thead><tr><th>Profile</th><th>Sees</th><th>Does not see</th></tr></thead>
  <tbody>
    <tr><td>Athlete</td><td>Their own data</td><td>Other athletes' data</td></tr>
    <tr><td>Coach (MARE Box)</td><td>Their associated athletes</td><td>Other athletes; rehabilitation data</td></tr>
    <tr><td>Physiotherapist</td><td>Their own patients</td><td>Other professionals' patients</td></tr>
    <tr><td>Researcher</td><td>Pseudonymised pose data</td><td>Names, videos with faces</td></tr>
    <tr><td>Admin</td><td>Members, groups, task status</td><td>Metrics, videos, clinical notes</td></tr>
  </tbody>
</table>
</div>

### What we keep and for how long

Every item has a purpose, a legal basis and a deletion date.

<div class="ms-table-wrap">
<table class="ms-sota ms-risks">
  <thead><tr><th>Data</th><th>Purpose</th><th>Legal basis</th><th>Kept until</th></tr></thead>
  <tbody>
    <tr><td>Identification</td><td>Name, signature; age, sex, experience</td><td>Consent · art. 6(1)(a)</td><td>Name kept until 31 Oct 2027</td></tr>
    <tr><td>Training video</td><td>Pose extraction and review by the coach</td><td>Consent · art. 6(1)(a)</td><td>30 days at most</td></tr>
    <tr><td>Keypoints and metrics</td><td>Results, progress, open pose dataset</td><td>Consent · art. 6(1)(a)</td><td>Deleted 31 Oct 2029</td></tr>
    <tr><td>Rehabilitation data <span class="ms-effort high">Health · art. 9</span></td><td>Follow-up by the physiotherapist</td><td>Explicit consent · art. 9(2)(a, h)</td><td>During follow-up (open)</td></tr>
    <tr><td>Code ↔ name key</td><td>Kept apart, researcher-only access</td><td>Pseudonymisation · art. 89</td><td>Destroyed 31 Oct 2027</td></tr>
    <tr><td>Technical logs</td><td>Security and audit</td><td>Legitimate interest · art. 6(1)(f)</td><td>90 days</td></tr>
  </tbody>
</table>
</div>

<div class="ms-split">
  <div>
    <h3>Security</h3>
    <ul>
      <li>TLS on every connection, encryption at rest, 2FA.</li>
      <li>Access by role and by verified association, checked in the API.</li>
      <li>Database, queue and storage have no exposed ports; videos are served through temporary links.</li>
      <li>Incidents go to the DPO, who notifies the CNPD within 72 h.</li>
    </ul>
  </div>
  <div>
    <h3>Scope and open points</h3>
    <ul>
      <li>Everything runs through MARE Box (written authorisation, December 2025).</li>
      <li>Consent becomes granular: analysis, sharing with professionals, rehabilitation and research (optional).</li>
      <li>Open: the role of the independent physiotherapists, and the security of the IEETA VM.</li>
    </ul>
  </div>
</div>

<p class="ms-source">The full analysis is in the <a href="#documentation">Documentation</a> tab. Academic analysis by Group 1; not legal advice.</p>

## Licensing and intellectual property

All 15 components were checked. Almost all use permissive licences that allow commercial use.

<div class="ms-table-wrap">
<table class="ms-sota ms-risks">
  <thead><tr><th>Licence</th><th>Components</th><th>Conflict</th></tr></thead>
  <tbody>
    <tr><td>Apache 2.0</td><td>Spring Boot · SeaweedFS · OpenCV · MediaPipe · RTMPose · Docker</td><td><span class="ms-effort low">None</span></td></tr>
    <tr><td>MIT</td><td>React · React Native · Vite</td><td><span class="ms-effort low">None</span></td></tr>
    <tr><td>BSD / PostgreSQL</td><td>Nginx (BSD-2) · Pika (BSD-3) · PostgreSQL</td><td><span class="ms-effort low">None</span></td></tr>
    <tr><td>MPL 2.0</td><td>RabbitMQ</td><td><span class="ms-effort low">None</span></td></tr>
    <tr><td>AGPL-3.0</td><td>YOLO (Ultralytics)</td><td><span class="ms-effort medium">Resolved</span></td></tr>
    <tr><td>All rights reserved</td><td>MDL (Lúcia Sousa, IEETA)</td><td><span class="ms-effort high">Pending IEETA</span></td></tr>
  </tbody>
</table>
</div>

<div class="ms-split">
  <div>
    <h3>The only conflict: YOLO</h3>
    <p>AGPL-3.0 applies whenever others use the software over a network, even for free. The ProSense source code will be public under AGPL-3.0, so YOLO can be used in the platform.</p>
  </div>
  <div>
    <h3>Ownership</h3>
    <p>ProSense is owned by the University of Aveiro (IEETA) and will not be commercialised. MARE Box is a partner and uses it free of charge. The MDL has no licence yet, so all rights stay reserved until IEETA decides.</p>
  </div>
</div>

## Medical devices and regulation

<blockquote class="ms-quote">
  <p>ProSense <strong>supports trainers and physiotherapists</strong>. It does not diagnose, treat or prescribe: the professional always decides.</p>
</blockquote>

<div class="ms-personas">
  <div><span class="ms-initial">T</span><h3>Training</h3><p>Counting reps, cadence and range of motion is fitness monitoring, so for coaches and athletes ProSense is <strong>not a medical device</strong>.</p></div>
  <div><span class="ms-initial">R</span><h3>Rehabilitation · borderline</h3><p>Monitoring an injury is a medical purpose under the MDR (Reg. 2017/745). Prescriptions and alert thresholds are set by the physiotherapist; ProSense only records and shows them, with low-confidence warnings and no diagnostic claims. It is a research prototype, not on the market: a commercial release would need an MDR assessment.</p></div>
  <div><span class="ms-initial">O</span><h3>Other regulation</h3><p>GDPR: favourable UA DPO opinion. AI Act (Reg. 2024/1689): not high-risk, since fitness is not in Annex III. Law 39/2012 on gyms regulates professionals, not software: the trainer prescribes.</p></div>
</div>

## Terms and conditions

Five key points that protect the software's creators.

<ol class="ms-goals ms-steps">
  <li><h3>Terms of use</h3><p>For MARE Box members aged 18+. Accounts are personal. Only record people who signed the consent form.</p></li>
  <li><h3>Limitation of liability</h3><p>Metrics are automatic estimates, not medical advice. Exercise is done at the user's own risk.</p></li>
  <li><h3>Intellectual property</h3><p>The software belongs to the University of Aveiro (IEETA). Users keep the rights to their videos, which are deleted within 30 days.</p></li>
  <li><h3>Jurisdiction</h3><p>Portuguese law (GDPR, Law 58/2019). Requests go to the responsible researcher and the UA DPO; complaints to the CNPD.</p></li>
  <li><h3>Changes to terms</h3><p>Users are notified in advance. Continued use means acceptance.</p></li>
</ol>

<p class="ms-source">Refunds do not apply: ProSense is free and there are no payments.</p>

## Accessibility: approach

A critical analysis of our own screens against WCAG 2.2 level AA, before testing with users.

<div class="ms-nfr">
  <div><span class="label">Screens analysed</span><strong>73</strong><p>Login, athlete, coach, physiotherapist, researcher and admin.</p></div>
  <div><span class="label">User profiles</span><strong>6</strong><p>Blind, low vision, colour blindness, motor, cognitive, deaf.</p></div>
  <div><span class="label">WCAG 2.2</span><strong>Level AA</strong><p>The international criteria for web and mobile.</p></div>
</div>

### How we tested

<ul class="ms-tags ms-stack">
  <li>1 · Screen reader (NVDA)</li><li>2 · Keyboard only</li><li>3 · Zoom at 200%</li><li>4 · Contrast and colour blindness</li><li>Lighthouse reports</li>
</ul>

<p class="ms-source">Decree-Law 83/2018 and the European Accessibility Act are a reference, not an obligation.</p>

## Accessibility: what we found

<div class="ms-fr">
  <div class="ms-stat">
    <strong>38</strong>
    <span>problems found</span>
    <ul class="ms-moscow"><li><b>4</b> High</li><li><b>20</b> Medium</li><li><b>14</b> Low</li></ul>
    <p>A problem can affect more than one profile. Deafness does not apply: the product has no audio.</p>
  </div>
  <ul class="ms-fr-list">
    <li><b>25</b><span><strong>Blind users</strong>Screen reader announcements, labels, keyboard</span></li>
    <li><b>11</b><span><strong>Low vision</strong>Zoom, reflow and contrast</span></li>
    <li><b>10</b><span><strong>Motor limitations</strong>Keyboard access and target size</span></li>
    <li><b>6</b><span><strong>Colour blindness</strong>Information shown by colour alone</span></li>
    <li><b>6</b><span><strong>Cognitive limitations</strong>Errors, repeated actions, clarity</span></li>
  </ul>
</div>

## The five most serious problems

<div class="ms-problems">
  <div class="ms-problem">
    <a href="/milestones/m3-p1-zoom200.png" target="_blank" rel="noopener"><img src="/milestones/m3-p1-zoom200.png" width="1280" height="800" alt="Coach home page at 200% zoom: the page stays 1100 px wide, so part of it is cut off" loading="lazy" /></a>
    <div>
      <span class="ms-effort high">High severity</span>
      <h3>1 · Content cut off at 200% zoom</h3>
      <p>Every screen keeps a fixed 1100 px width, so content is cut off and needs horizontal scrolling.</p>
      <dl><dt>Affects</dt><dd>Low vision</dd><dt>WCAG</dt><dd>1.4.10 Reflow</dd><dt>Fix</dt><dd>Remove the fixed min-width and make the layout responsive: collapsing sidebar, stacked cards and tables.</dd></dl>
    </div>
  </div>
  <div class="ms-problem">
    <a href="/milestones/m3-p2-notifications.png" target="_blank" rel="noopener"><img src="/milestones/m3-p2-notifications.png" width="1440" height="900" alt="Notifications page: Tab skips over the notification items, which are clickable divs" loading="lazy" /></a>
    <div>
      <span class="ms-effort high">High severity</span>
      <h3>2 · Notifications need a mouse</h3>
      <p>Notifications and schedule cards are clickable <code>&lt;div&gt;</code>s that cannot be reached or opened with the keyboard.</p>
      <dl><dt>Affects</dt><dd>Keyboard-only and blind users</dd><dt>WCAG</dt><dd>2.1.1 Keyboard</dd><dt>Fix</dt><dd>Make each item a real link or button with a visible focus style.</dd></dl>
    </div>
  </div>
  <div class="ms-problem">
    <a href="/milestones/m3-p3-login-error.png" target="_blank" rel="noopener"><img src="/milestones/m3-p3-login-error.png" width="1100" height="680" alt="Sign-in page after a failed attempt: the error message is shown but not announced by the screen reader" loading="lazy" /></a>
    <div>
      <span class="ms-effort high">High severity</span>
      <h3>3 · Login error not announced</h3>
      <p>A failed sign-in shows an error that screen readers never announce, and focus stays in the password field.</p>
      <dl><dt>Affects</dt><dd>Blind users, cognitive limitations</dd><dt>WCAG</dt><dd>3.3.1 Error Identification, 4.1.3 Status Messages</dd><dt>Fix</dt><dd><code>role="alert"</code> on the message; <code>aria-invalid</code> and <code>aria-describedby</code> on both fields.</dd></dl>
    </div>
  </div>
  <div class="ms-problem">
    <a href="/milestones/m3-p4-admin-users.png" target="_blank" rel="noopener"><img src="/milestones/m3-p4-admin-users.png" width="1440" height="900" alt="Admin user list: table rows only react to a mouse click, so Tab skips over them" loading="lazy" /></a>
    <div>
      <span class="ms-effort high">High severity</span>
      <h3>4 · Admin user list is mouse-only</h3>
      <p>Table rows only react to a mouse click, so a keyboard user cannot pick a user to edit, change their role or deactivate the account.</p>
      <dl><dt>Affects</dt><dd>Keyboard-only and blind users</dd><dt>WCAG</dt><dd>2.1.1 Keyboard</dd><dt>Fix</dt><dd>A button or link with the user's name in the first cell of each row, opening the Edit user panel.</dd></dl>
    </div>
  </div>
  <div class="ms-problem">
    <a href="/milestones/m3-p5-contrast.png" target="_blank" rel="noopener"><img src="/milestones/m3-p5-contrast.png" width="1192" height="560" alt="Feedback page with small orange text whose contrast is below the WCAG minimum" loading="lazy" /></a>
    <div>
      <span class="ms-effort medium">Medium severity</span>
      <h3>5 · Low contrast on orange text</h3>
      <p>Small orange text (eyebrows, status pills) has 4.0 to 4.3:1 contrast and the 403/404 codes 2.85:1, below the 4.5:1 and 3:1 minimums.</p>
      <dl><dt>Affects</dt><dd>Low vision</dd><dt>WCAG</dt><dd>1.4.3 Contrast (Minimum)</dd><dt>Fix</dt><dd>Use the darker orange <code>#B9330F</code> for text (5.0:1 or more) and <code>#0058DB</code> for links.</dd></dl>
    </div>
  </div>
</div>

<p class="ms-source">Click a screenshot to open it full size. The fixes are planned for the web phase, before the freeze on 9 December.</p>

## Next: towards the MVP

<div class="ms-table-wrap">
<table class="ms-sota ms-risks">
  <thead><tr><th>Area</th><th>3 Nov</th><th>10 Nov</th><th>17 Nov</th><th>24 Nov</th><th>1 Dec</th><th>8 Dec</th><th>15 Dec</th></tr></thead>
  <tbody>
    <tr><td>Infrastructure</td><td>Repo, CI, Docker</td><td></td><td></td><td></td><td>Deploy on VM</td><td>Docs, bug fixes</td><td></td></tr>
    <tr><td>Backend</td><td>Auth and API</td><td>Users, upload</td><td>Sessions, consent</td><td>Results, feedback</td><td>Deletion after 30 days</td><td></td><td></td></tr>
    <tr><td>Plugins</td><td>Worker contract</td><td>MediaPipe</td><td colspan="2">YOLO and MDL</td><td>Real videos</td><td></td><td></td></tr>
    <tr><td>Web</td><td>Connect to API</td><td colspan="2">Upload and coach screens</td><td>Dashboard</td><td>Accessibility fixes</td><td></td><td></td></tr>
    <tr><td>Delivery</td><td></td><td></td><td>Meeting 16/11</td><td>Checkpoint 24/11</td><td></td><td>Freeze 9/12, rehearsal</td><td><strong>MVP 15–16/12</strong></td></tr>
  </tbody>
</table>
</div>

<p class="ms-source">Holidays on 1 and 8 December. MVP scope: web app, with mobile as responsive web; single user.</p>
