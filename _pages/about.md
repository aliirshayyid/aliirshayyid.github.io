---
permalink: /
title: "Ali Irshayyid"
excerpt: "Postdoctoral Researcher at Oakland University — reinforcement learning, battery management systems, and autonomous vehicles."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
header:
  og_image: images/profile.jpg
  teaser: images/profile.jpg
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<span class='anchor' id='about-me'></span>

I am a <span class="accent-text">Postdoctoral Researcher</span> in the **Electrified and Intelligent Systems Automation (EISA) Lab** at **Oakland University**, advised by <span class="primary-gradient-text">Prof. Jun Chen</span>. I received my **M.S. and Ph.D. in Electrical and Computer Engineering** from Oakland University in December 2024, and my **B.S. in Electrical Engineering** from Wasit University.

My research spans **battery management systems**, **reinforcement learning**, **graph neural networks**, **model predictive control**, and **autonomous vehicles**. My current work focuses on intelligent battery management for reconfigurable battery packs, including reinforcement learning–based real-time balancing, graph neural network surrogate modeling, battery state-of-health estimation, and cell-level thermal control. During my Ph.D., I developed single- and multi-agent reinforcement learning methods for cooperative highway merging of connected and autonomous vehicles.

Feel free to reach out at **[aliirshayyid@oakland.edu](mailto:aliirshayyid@oakland.edu)** if you'd like to discuss research or potential collaboration!

<span class='anchor' id='-research-interests'></span>

# 🔬 Research Interests

<div class="highlight-blocks">
  <div class="highlight-block floating-card">
    <h3><i class="fas fa-car-battery"></i> Battery Management Systems</h3>
    <ul>
      <li><span class="primary-gradient-text">RL-based real-time balancing</span> of reconfigurable battery packs.</li>
      <li><span class="primary-gradient-text">Graph neural network surrogate models</span>, state-of-health estimation, and cell-level thermal control.</li>
    </ul>
  </div>

  <div class="highlight-block floating-card">
    <h3><i class="fas fa-car-side"></i> Autonomous Vehicles &amp; ITS</h3>
    <ul>
      <li>Single- and <span class="primary-gradient-text">multi-agent reinforcement learning</span> for cooperative highway and platoon merging, validated in SUMO.</li>
      <li>RL-assisted MPC for automated parking, vision-based perception, and road-surface monitoring.</li>
    </ul>
  </div>

  <div class="highlight-block floating-card">
    <h3><i class="fas fa-sliders"></i> Learning-Based Control</h3>
    <ul>
      <li>Deep and multi-agent RL (PPO, MAPPO, DQN) and <span class="primary-gradient-text">model predictive control</span>.</li>
      <li><span class="primary-gradient-text">LLM-guided policy search</span> for reinforcement learning.</li>
    </ul>
  </div>
</div>

<span class='anchor' id='-news'></span>

# 🔥 News
- *2026.11*: &nbsp;📅 Upcoming: our paper on multimodal vehicle and tire-embedded sensing for real-time road-surface monitoring will appear at **ASME IMECE 2026**, Vancouver, BC (Nov. 8–12).
- *2026.10*: &nbsp;📅 Upcoming: *"Zero-shot LLM Reasoning for Real-Time Cell-Level Thermal Control of EV Batteries in Cold Climates"* will appear at **MECC 2026**, Phoenix, AZ (Oct. 25–28).
- *2026.09*: &nbsp;📄 Preprint *"Privacy-Preserving Prompted Policy Search for Robotic Control"* is now on [arXiv](https://arxiv.org/abs/2609.30554).
- *2026.08*: &nbsp;🎉 *"Real-time Balancing Control of Reconfigurable Battery Packs using Reinforcement Learning"* published in **IEEE Transactions on Transportation Electrification**.
- *2026.08*: &nbsp;📄 *"Battery State-of-Health Estimation based on Partial Discharge Curves"* at **IEEE CCTA 2026**, Vancouver, BC.
- *2026.07*: &nbsp;🎉 *"Surrogate Model for Reconfigurable Battery Packs using Graph Neural Networks"* published in **IEEE Transactions on Industrial Informatics**.
- *2026.06*: &nbsp;📘 Book chapter *"Highway Platoon Merging Control using RL: A Review"* published by **IET**.
- *2026.06*: &nbsp;📄 *"Reinforcement Learning-Based Real-Time Balancing of Reconfigurable Battery Packs"* at **IEEE ITEC 2026**, Novi, MI.
- *2026*: &nbsp;🏆 Our IGVC team placed **3rd in the Self-Drive category** for the second year in a row (2025 and 2026).
- *2026.05*: &nbsp;🎉 *"Automated Parking Systems Using Reinforcement Learning Assisted Model Predictive Control"* published in **IET Cyber-Systems and Robotics**.

<span class='anchor' id='-publications'></span>

# 📝 Publications

<div id="publications-wrapper">
<div id="pub-filters" class="pub-filters"></div>
<p id="pub-filter-status" class="pub-filter-status" aria-live="polite"></p>
{%- for pub in site.data.publications %}
<div class="paper-box pub-card{% unless pub.image %} no-image{% endunless %}" data-year="{{ pub.year }}" data-type="{{ pub.type | escape }}" data-topics="{{ pub.topics | join: ', ' | escape }}">
{%- if pub.image %}
<div class="paper-box-image"><div><div class="badge">{{ pub.badge | escape }}</div><img src="{{ pub.image }}" alt="{{ pub.image_alt | escape }}" width="100%"></div></div>
{%- endif %}
<div class="paper-box-text">
{%- unless pub.image %}
<span class="venue-badge">{{ pub.badge | escape }}</span>
{%- endunless %}
<h3 class="pub-title">{% if pub.links %}<a href="{{ pub.links[0].url }}">{{ pub.title | escape }}</a>{% else %}{{ pub.title | escape }}{% endif %}</h3>
<div class="authors">{{ pub.authors | escape | replace: "Ali Irshayyid", "<strong>Ali Irshayyid</strong>" }}</div>
<div class="venue">{% if pub.venue_prefix %}{{ pub.venue_prefix }} {% endif %}<em>{{ pub.venue | escape }}</em>{% if pub.details %}, {{ pub.details | escape }}{% endif %}{% if pub.note %} <strong>({{ pub.note | escape }})</strong>{% endif %}</div>
{%- if pub.description %}
<p class="pub-desc">{{ pub.description | escape }}</p>
{%- endif %}
{%- if pub.links %}
<div class="links">{% for link in pub.links %}<a href="{{ link.url }}" class="btn-accent"><i class="fas fa-file-alt"></i> {{ link.label | escape }}</a>{% endfor %}</div>
{%- endif %}
<div class="badge-container"><span class="inner-tag-badge" data-group="year">{{ pub.year }}</span><span class="inner-tag-badge" data-group="type">{{ pub.type | escape }}</span>{% for topic in pub.topics %}<span class="inner-tag-badge" data-group="topic">{{ topic | escape }}</span>{% endfor %}</div>
</div>
</div>
{%- endfor %}
<p id="pub-empty" class="pub-empty" hidden>No publications match the selected filters.</p>
</div>

<script src="assets/js/pub-filter.js" defer></script>

<span class='anchor' id='-experience'></span>

# 💼 Experience

### Research

- *2025.01 – Present*: &nbsp;**Postdoctoral Researcher**, Electrified and Intelligent Systems Automation Lab, Oakland University. Advisor: Prof. Jun Chen.
  - Intelligent battery management for reconfigurable battery packs: reinforcement learning–based real-time balancing, graph neural network surrogate modeling, battery state-of-health estimation, and cell-level thermal control.
  - **LLM-based policy optimization for RL:** proposed Privacy-Preserving Prompted Policy Search (PP-ProPS), which outperformed PPO and TRPO for autonomous-vehicle highway control and cut prompt size by up to 80.2% and response time by 74.9% compared with state-of-the-art approaches. [[arXiv]](https://arxiv.org/abs/2609.30554)
  - **RL-assisted MPC for AV parking:** developed an RL-guided parameter tuner for real-time constrained nonlinear MPC that optimizes controller cost-function weights for closed-loop parking maneuvers. [[Paper]](https://ietresearch.onlinelibrary.wiley.com/doi/full/10.1049/csy2.70052)
  - **Road-surface classification:** trained a neural network on logged CAN-bus tire temperature, pressure, and speed data to classify four road-surface types in real time on a Lincoln MKZ (accepted at ASME IMECE 2026).
  - **NSF I-Corps ([Regional](https://badges.parchment.com/public/assertions/WqCB3hvWTrufC2oHeV6g4Q) & [National](https://www.credly.com/badges/e529c61b-3d4a-4267-8407-d5f04b6f9436)):** Entrepreneurial Lead for a sensor-lean BMS team; conducted 100 customer-discovery interviews across 69 automotive companies (OEMs, Tier-1s, chip vendors) on commercialization needs and ISO 26262 functional-safety expectations.
- *2022.05 – 2024.12*: &nbsp;**Research Assistant**, Electrified and Intelligent Systems Automation Lab, Oakland University. Advisor: Prof. Jun Chen.
  - **Multi-agent RL for highway merging (Ph.D. dissertation):** formulated lane-reduction merging of connected and autonomous vehicles as a Dec-POMDP and built a CTDE actor-critic framework with masked multi-head attention to handle a large, dynamic number of vehicles. It outperformed MAPPO in final reward (converging in up to ~2× fewer updates) and raised traffic flow by up to 60.14% over a zipper-merge baseline. [[Dissertation]](https://www.proquest.com/docview/3160656855)
  - **RL-based cooperative platoon merging:** trained a Maskable PPO policy (Stable-Baselines3) on an HPC cluster that cut energy use by 76.7% and average jerk by 50% versus early-merging baselines. [[Paper]](https://www.mdpi.com/1424-8220/23/2/990)
  - Validated the proposed control methods in the SUMO transportation simulator.

### Teaching

- *2020.09 – 2024.12*: &nbsp;**Teaching Assistant**, Oakland University.  
  &nbsp;&nbsp;Supported Introduction to Electrical and Computer Engineering (EGR 2400) laboratory instruction and assisted with exam and quiz proctoring.
- *2016.09 – 2018.09*: &nbsp;**Lab Instructor**, Wasit University.  
  &nbsp;&nbsp;Organized and directed laboratories in electronics, microcontrollers, and programming.

<span class='anchor' id='-projects'></span>

# 🚗 Projects

- *2021 – 2026*: &nbsp;**IGVC Autonomous Vehicle**, Smart Vehicle Club, Oakland University — Team Lead 2024–2026; **3rd place, Self-Drive, 2025 & 2026**. [[Paper]](https://ieeexplore.ieee.org/abstract/document/11527461)
  - Built a ROS 2 perception, planning, and control stack on an NVIDIA Jetson AGX Thor, integrating TensorRT UNet lane detection, sensor fusion, and Pure Pursuit lateral tracking.
  - Fine-tuned Qwen3-VL-8B with LoRA on a team-built planning dataset and deployed the AWQ-quantized model with vLLM in Docker.
  - Implemented a microcontroller interface between ROS 2 commands and low-level steering and propulsion control on a ride-on vehicle platform.
  - Created and publicly released a 5-class IGVC object-detection dataset and fine-tuned a YOLOv5 model on it. [[Kaggle dataset]](https://www.kaggle.com/datasets/aliirshayyid/oakland-university-igvc-dataset) [[Test video]](https://www.youtube.com/watch?v=seg8Cj0hydw)
- *2024*: &nbsp;**X-by-Wire System for a Polaris GEM e2**, Oakland University — converted a full-size low-speed electric vehicle with very limited vehicle documentation.
  - Implemented steering control with encoder feedback, reverse-engineered the accelerator and hydraulic-brake interfaces, and developed Arduino outputs for steer-, throttle-, and brake-by-wire operation.
  - Conditioned the factory tachometer signal to estimate speed within 0.32 mph of the dashboard reading, and validated the vehicle end to end with a closed-loop GPS-based trajectory-following test.

<span class='anchor' id='-education'></span>

# 🎓 Education
- *2019.01 – 2024.12*: &nbsp;**M.S. & Ph.D., Electrical and Computer Engineering**, Oakland University, Rochester, MI, USA. &nbsp;*GPA: 3.96/4.00.*  
  &nbsp;&nbsp;Advisor: Prof. Jun Chen. Dissertation: *Highway Merging Control Using Multi-Agent Reinforcement Learning: Exploring Centralized and Decentralized Schemes.*  
  &nbsp;&nbsp;Selected coursework: Automotive Control Systems, Optimal and Predictive Control, Intelligent Control, Adaptive Control Systems.
- *2012.09 – 2016.06*: &nbsp;**B.S., Electrical Engineering**, Wasit University, Iraq. &nbsp;*GPA: 3.33/4.00.*  
  &nbsp;&nbsp;Selected coursework: Physical Electronics, Advanced Computer Programming, Computer Architecture, Control Systems, Numerical Optimization, Electric Power Systems.

<span class='anchor' id='-honors-and-awards'></span>

# 🏆 Honors and Awards
- *2025, 2026*: &nbsp;**3rd Place, Self-Drive category**, Intelligent Ground Vehicle Competition (IGVC) — Oakland University team.
- *2018*: &nbsp;**"100 Iraqi Scholars" Program** recipient — awarded a full scholarship to pursue doctoral studies.

<span class='anchor' id='-leadership-and-service'></span>

# 🤝 Leadership and Service
- *2021 – 2026*: &nbsp;**Officer, Smart Vehicle Club**, Oakland University (IGVC Team Lead 2024–2026).
- *2023.03 – 2024.09*: &nbsp;**Chair, IEEE Student Branch**, Oakland University.
