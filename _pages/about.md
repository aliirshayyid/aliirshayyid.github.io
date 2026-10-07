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

I have **16 peer-reviewed publications** (6 journal articles, 9 conference papers, and 1 book chapter), including papers in *IEEE Transactions on Transportation Electrification* and *IEEE Transactions on Industrial Informatics* — see my [Google Scholar](https://scholar.google.com/citations?user=al4hC8AAAAAJ) profile. I also served as Team Lead of Oakland University's Intelligent Ground Vehicle Competition (IGVC) team, which placed **3rd in the Self-Drive category in 2025 and 2026**.

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

### Selected Journal Articles

<div class='paper-box no-image'><div class='paper-box-text' markdown="1">

<span class="venue-badge">IEEE T-TE 2026</span>

[Real-time Balancing Control of Reconfigurable Battery Packs using Reinforcement Learning](https://ieeexplore.ieee.org/abstract/document/11475906)

**Ali Irshayyid**, Wanqun Yang, and Jun Chen

*IEEE Transactions on Transportation Electrification*, vol. 12, no. 4, pp. 7013–7024, Aug. 2026

- Trained an RL balancing controller in a fast surrogate environment of a reconfigurable battery pack (98.68% accurate at 0.012% of high-fidelity simulation time). In high-fidelity simulation it reduced SOC imbalance by 74.6% versus rule-based control and 49.7% versus greedy control.
</div>
</div>

<div class='paper-box no-image'><div class='paper-box-text' markdown="1">

<span class="venue-badge">IEEE TII 2026</span>

[Surrogate Model for Reconfigurable Battery Packs using Graph Neural Networks](https://ieeexplore.ieee.org/abstract/document/11480681)

**Ali Irshayyid** and Jun Chen

*IEEE Transactions on Industrial Informatics*, vol. 22, no. 7, pp. 6325–6336, Jul. 2026

- A graph-attention surrogate built in PyTorch Geometric that runs battery-pack simulations 1,629× faster than a physics simulator, with under 2% temperature error for packs of up to 100 cells.
</div>
</div>

<div class='paper-box no-image'><div class='paper-box-text' markdown="1">

<span class="venue-badge">GEIT 2024</span>

[A Review on Reinforcement Learning-based Highway Autonomous Vehicle Control](https://doi.org/10.1016/j.geits.2024.100156)

**Ali Irshayyid**, Jun Chen, and Guojiang Xiong

*Green Energy and Intelligent Transportation*, vol. 3, no. 4, Art. 100156, Aug. 2024

- Reviews deep reinforcement learning for highway lane changing, ramp merging, and platoon coordination, comparing problem formulations, training methods, simulation setups, and evaluation metrics.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Sensors 2023</div><img src='images/pub_platoon.png' alt="Main-lane and merging-lane vehicles in a cooperative platoon merging scenario" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Comparative Study of Cooperative Platoon Merging Control Based on Reinforcement Learning](https://www.mdpi.com/1424-8220/23/2/990)

**Ali Irshayyid** and Jun Chen

*Sensors*, vol. 23, no. 2, Art. 990, Jan. 2023

- Trained a Maskable PPO policy for cooperative platoon merging that cut energy use by 76.7% and average jerk by 50% compared with early-merging baselines.
</div>
</div>

### Manuscripts Under Review

- [4] Keer Chen, **Ali Irshayyid**, Zhaodong Zhou, and Jun Chen, "From Scale to Real: Evaluating the Transferability of Vision-Based Distance Estimation in Autonomous Vehicles," *IEEE Transactions on Intelligent Vehicles*, submitted Sept. 2026.
- [3] **Ali Irshayyid**, Feng Lin, Chong Li, and Jun Chen, "Privacy-Preserving Prompted Policy Search for Robotic Control," *IEEE Robotics and Automation Letters*, submitted Aug. 2026. [[arXiv]](https://arxiv.org/abs/2609.30554)
- [2] **Ali Irshayyid** and Jun Chen, "State-of-Health Estimation for Lithium-Ion Batteries based on Partial Discharge Curves: A Fourier Neural Operator Approach Using dQ/dV Imputation," *IEEE Transactions on Sustainable Energy*, submitted Aug. 2026.
- [1] **Ali Irshayyid**, Jun Chen, Wen-Chiao Lin, Huirong Fu, and Chong Li, "Highway Merging Control Using Multi-Agent Reinforcement Learning," *IEEE Transactions on Industrial Informatics*, revision submitted Jul. 2026.

### Journal Articles

- [6] **Ali Irshayyid**, Wanqun Yang, and Jun Chen, "Real-time Balancing Control of Reconfigurable Battery Packs using Reinforcement Learning," *IEEE Transactions on Transportation Electrification*, vol. 12, no. 4, pp. 7013–7024, Aug. 2026. [[Paper]](https://ieeexplore.ieee.org/abstract/document/11475906)
- [5] **Ali Irshayyid** and Jun Chen, "Surrogate Model for Reconfigurable Battery Packs using Graph Neural Networks," *IEEE Transactions on Industrial Informatics*, vol. 22, no. 7, pp. 6325–6336, Jul. 2026. [[Paper]](https://ieeexplore.ieee.org/abstract/document/11480681)
- [4] Hussein Alawsi, Zhaodong Zhou, **Ali Irshayyid**, and Jun Chen, "Automated Parking Systems Using Reinforcement Learning Assisted Model Predictive Control," *IET Cyber-Systems and Robotics*, vol. 8, no. 1, pp. 1–17, May 2026. [[Paper]](https://ietresearch.onlinelibrary.wiley.com/doi/full/10.1049/csy2.70052)
- [3] Owais Ogdeh, Luke Nuculaj, **Ali Irshayyid**, Zhaodong Zhou, and Jun Chen, "Cell State-of-Charge Estimation with Limited Voltage Sensor Measurements," *Applied Sciences*, vol. 15, no. 18, Art. 10127, Sep. 2025. [[Paper]](https://www.mdpi.com/2076-3417/15/18/10127)
- [2] **Ali Irshayyid**, Jun Chen, and Guojiang Xiong, "A Review on Reinforcement Learning-based Highway Autonomous Vehicle Control," *Green Energy and Intelligent Transportation*, vol. 3, no. 4, Art. 100156, Aug. 2024. [[Paper]](https://doi.org/10.1016/j.geits.2024.100156)
- [1] **Ali Irshayyid** and Jun Chen, "Comparative Study of Cooperative Platoon Merging Control Based on Reinforcement Learning," *Sensors*, vol. 23, no. 2, Art. 990, pp. 1–23, Jan. 2023. [[Paper]](https://www.mdpi.com/1424-8220/23/2/990)

### Book Chapter

- [1] **Ali Irshayyid** and Jun Chen, "Highway Platoon Merging Control using RL: A Review," in *Control, Learning, and Optimization with Applications in Connected and Autonomous Vehicles*, W. Gao, Z.-P. Jiang, and A. A. Malikopoulos, Eds. The Institution of Engineering and Technology, Jun. 2026. ISBN: 978-1837241606.

### Conference Papers

- [9] **Ali Irshayyid**, Milan Kadari, Anij Angdembe, Rutchanon Hatasen, Linda Zhu, Jun Chen, and Mihai Burzo, "Multimodal Vehicle and Tire-Embedded Sensing for Real-Time Road Surface Monitoring Using Machine Learning," *ASME International Mechanical Engineering Congress & Exposition (IMECE)*, Vancouver, BC, Canada, Nov. 8–12, 2026. **(Accepted)**
- [8] Wanqun Yang, **Ali Irshayyid**, Chen Wang, and Jun Chen, "Zero-shot LLM Reasoning for Real-Time Cell-Level Thermal Control of EV Batteries in Cold Climates," *Modeling, Estimation and Control Conference (MECC)*, Phoenix, AZ, USA, Oct. 25–28, 2026. **(Accepted)**
- [7] **Ali Irshayyid** and Jun Chen, "Battery State-of-Health Estimation based on Partial Discharge Curves," *IEEE Conference on Control Technology and Applications (CCTA)*, Vancouver, BC, Canada, Aug. 12–16, 2026. **(Accepted)**
- [6] **Ali Irshayyid**, Wanqun Yang, Tingjun Lei, and Jun Chen, "Reinforcement Learning-Based Real-Time Balancing of Reconfigurable Battery Packs," *IEEE Transportation Electrification Conference & Expo (ITEC)*, Novi, MI, USA, Jun. 10–12, 2026.
- [5] Briana Popa, **Ali Irshayyid**, and Jun Chen, "Lane Feature-Based Localization via ICP Map Alignment," *North American International Conference on Industrial Engineering and Operations Management*, Milwaukee, WI, USA, Jun. 9–11, 2026.
- [4] Yunge Li, Zhaodong Zhou, Shaibal Saha, **Ali Irshayyid**, Keer Chen, Lanyu Xu, and Jun Chen, "LightAD: A Lightweight Vision-Based Autonomous Driving System," *IEEE International Conference on Mobility: Operations, Services, and Technologies (MOST)*, Detroit, MI, USA, May 4–6, 2026.
- [3] Hussein Alawsi, Zhaodong Zhou, **Ali Irshayyid**, and Jun Chen, "RL-assisted Model Predictive Control for Automated Parking Systems," *IEEE International Conference on Unmanned Systems*, Changzhou, China, Sep. 18–19, 2025.
- [2] **Ali Irshayyid** and Jun Chen, "GNN-Based Surrogate Model for Reconfigurable Battery Packs," *IEEE Conference on Control Technology and Applications (CCTA)*, San Diego, CA, USA, Aug. 25–27, 2025. [[Paper]](https://doi.org/10.1109/CCTA53793.2025.11151387)
- [1] **Ali Irshayyid** and Jun Chen, "Highway Merging Control Using Multi-Agent Reinforcement Learning," *3rd International Conference on Computing and Machine Intelligence (ICMI)*, 2023.

### Dissertation

- **Ali Irshayyid**, "Highway Merging Control Using Multi-Agent Reinforcement Learning: Exploring Centralized and Decentralized Schemes," Ph.D. dissertation, Department of Electrical and Computer Engineering, Oakland University, MI, USA, Dec. 2024. [[ProQuest]](https://www.proquest.com/docview/3160656855)

### Conference Presentations

- [4] Yujie Mao, **Ali Irshayyid**, Hsiang-Hua Melanie Chang, and Yu Liu, "Designing and Validating an Automated Tone Feedback System for CSL Learners," *2026 CLTA Annual Conference*, University of Rhode Island, Kingston, RI, May 1–3, 2026. Conference presentation.
- [3] Yujie Mao and **Ali Irshayyid**, "An Invention Technology Teaching for Chinese Tone Teaching," *2025 ACTFL Annual Convention & World Languages Expo*, New Orleans, LA, Nov. 21–23, 2025. Poster presentation.
- [2] **Ali Irshayyid** and Jun Chen, "GNN-Based Surrogate Model for Reconfigurable Battery Packs," *American Control Conference (ACC)*, Denver, CO, USA, Jul. 8–10, 2025. (Poster)
- [1] **Ali Irshayyid** and Jun Chen, "Comparative Study of Cooperative Platoon Merging Control Based on Reinforcement Learning," *American Control Conference (ACC)*, San Diego, CA, USA, May 31–Jun. 2, 2023. (Poster)

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
