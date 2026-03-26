const translations = {
  en: {
    // Nav
    navAbout: "About",
    navEducation: "Education",
    navExperience: "Experience",
    navProjects: "Projects",
    navPublications: "Publications",
    navSkills: "Skills",
    navContact: "Contact",

    // Hero
    heroName: "Zhen Wen",
    heroTitle: "Medical Engineering (M.Sc.)",
    heroSubtitle: "Embedded Systems | Medical Robotics | Additive Manufacturing",
    heroCV: "Download CV",

    // About
    aboutText: "I am a medical engineering graduate from the Technical University of Munich with a background in mechatronic engineering and a strong interest in robotics for healthcare. My work has mainly focused on continuum and soft-rigid hybrid robots, where I enjoy combining mechanical design, computational modeling, prototyping, and sensor integration to build systems that are both functional and biologically inspired.",

    // Education
    educationTitle: "Education",
    edu1Label: "Master",
    edu1Degree: "Medical Engineering and Assistance Systems (M.Sc.)",
    edu1School: "Technical University of Munich",
    edu1Date: "Apr 2022 — Oct 2025",
    edu1Focus: "Focus: Embedded Systems, Medical Robotics, Additive Manufacturing (3D Printing)",
    edu1Thesis: "Thesis: A Bio-Inspired Dual-Material Tendon-Driven Continuum Robot with Electromagnetic Navigation for Improved Controllability (Grade: 1.0 / Highest Distinction)",
    edu2Label: "Bachelor",
    edu2Degree: "Mechatronic Engineering (B.Eng.)",
    edu2School: "Harbin Institute of Technology",
    edu2Date: "Sep 2014 — Jul 2018",

    // Experience
    experienceTitle: "Research & Engineering Experience",
    exp1Title: "Research Assistant",
    exp1Company: "Technical University of Munich, Munich",
    exp1Date: "May 2024 — Oct 2025",
    exp1Desc1: "Conducted research and engineering support on robotic system prototyping, sensor integration, and embedded implementation.",
    exp1Desc2: "Designed and manufactured complex robotic joints and housings using SLS (Selective Laser Sintering) and FDM (Fused Deposition Modeling), improving structural strength-to-weight ratio and manufacturability.",
    exp1Desc3: "Integrated electromagnetic sensors into robotic systems with algorithmic fusion to enhance end-effector perception accuracy in unstructured environments.",
    exp1Desc4: "Developed and debugged STM32 microcontroller firmware in C/C++ for real-time sensor data acquisition, filtering, and high-speed communication.",
    exp2Title: "Working Student (Mechanical Testing)",
    exp2Company: "Hillrom, Munich",
    exp2Date: "Jul 2022 — May 2023",
    exp2Desc1: "Participated in mechanical system testing and performance evaluation of medical devices, supporting experimental design, data analysis, and technical documentation.",
    exp2Desc2: "Conducted experimental characterization of a multi-axis surgical light arm, focusing on DoF validation, workspace envelope mapping, pose repeatability, and post-repositioning drift and stability.",
    exp2Desc3: "Analyzed joint backlash error and hysteresis characteristics to evaluate mechanism motion accuracy and long-term stability.",

    // Projects
    projectsTitle: "Projects",
    proj1Title: "High-Durability, High-Payload Soft–Rigid Hybrid Tendon-Driven Continuum Robot",
    proj1Desc: "Proposed a soft–rigid hybrid TDCR using 3D-printed ball-socket skeleton with silicone encapsulation. Built a <b>hierarchical kinetostatic model</b> (fast kinematic mapping + quasi-static model with <b>friction compensation</b>). Developed custom casting tooling to ensure stable <b>tendon routing</b> and center channel integrity. Validated <b>control accuracy</b> against EM-tracked ground truth; comparative experiments confirmed superior payload, hysteresis, and durability.",
    proj1Keywords_1: "Kinetostatic Modeling",
    proj1Keywords_2: "Friction Compensation",
    proj1Keywords_3: "EM Tracking",
    proj1Keywords_4: "Control Validation",

    proj2Title: "Musculoskeletal-Inspired Soft–Rigid Hybrid Continuum Robot with Embodied Safety",
    proj2Desc: "Developed a musculoskeletal-inspired TDCR combining a compliant outer layer with internal rigid supports for <b>embodied safety</b>. The structural design enables <b>safe interaction control</b> through passive compliance rather than active algorithms alone. Systematically evaluated <b>payload capacity</b>, bending repeatability, and <b>contact force safety</b> with integrated sensors. Established a <b>quasi-static model</b> to predict deformation under external loads.",
    proj2Keywords_1: "Safe Interaction",
    proj2Keywords_2: "Sensor Integration",
    proj2Keywords_3: "Quasi-Static Modeling",
    proj2Keywords_4: "Payload Testing",

    proj3Title: "Soft–Rigid Hybrid Structure Design, Modeling, and Experimental Validation for TDCR",
    proj3Subtitle: "Master's Thesis",
    proj3Desc: "Built a full-stack TDCR system from design to testing. Developed a <b>kinematics-to-statics modeling framework</b> validated against experiments. Implemented <b>embedded control</b> (STM32/Arduino) for real-time actuation and data acquisition. Integrated <b>EM tracking sensors</b> for 6-DOF pose measurement and <b>sensor fusion</b>. Constructed a modular experimental platform covering actuation, sensing, and load testing.",
    proj3Keywords_1: "Modeling Framework",
    proj3Keywords_2: "Embedded Control",
    proj3Keywords_3: "Sensor Fusion",
    proj3Keywords_4: "Experimental Platform",

    proj4Title: "Three-Finger Soft Gripper with Independent Actuation and Axial Reinforcement",
    proj4Desc: "Designed a three-finger soft gripper with <b>independent tendon actuation</b> (two tendons per finger for open/close). Each finger uses a dedicated servo with <b>tendon routing algorithm</b> for coordinated control. Nitinol reinforcement between anchor and base suppresses axial compression, improving <b>force control</b> precision. Silicone casting with friction-reduction treatment enables reliable <b>motion control</b> and grasping.",
    proj4Keywords_1: "Independent Actuation",
    proj4Keywords_2: "Tendon Routing",
    proj4Keywords_3: "Force Control",
    proj4Keywords_4: "Nitinol Reinforcement",

    proj5Title: "Workspace Reconfiguration of TDCR via Concentric Rod Mechanism",
    proj5Desc: "Proposed a concentric rod mechanism for <b>workspace planning</b> and reconfiguration of TDCRs. By adjusting rod insertion depth, the bending stiffness distribution is actively regulated, enabling controllable <b>workspace expansion/contraction</b>. Built a <b>kinetostatic model</b> to predict reconfigured workspace boundaries. Validated <b>motion control</b> accuracy and demonstrated a pick-and-place task in confined-entry scenarios.",
    proj5Keywords_1: "Workspace Planning",
    proj5Keywords_2: "Kinetostatic Modeling",
    proj5Keywords_3: "Motion Control",
    proj5Keywords_4: "Pick-and-Place",

    // Publications
    publicationsTitle: "Publications",
    pubFirstAuthor: "First-Author Publications",
    pubCoAuthor: "Co-Authored Publications",
    pub1:
      '"Enhancing Durability and Payload Capacity of Tendon-Driven Continuum Robots Using a Multimaterial Soft–Rigid Hybrid Structure,"',
    pub1Journal: "IEEE/ASME Transactions on Mechatronics",
    pub1Status: "under review (3rd round)",
    pub2:
      '"A Musculoskeletal-Inspired Soft–Rigid Hybrid Tendon-Driven Continuum Robot with Integrated Friction-Aware Modeling and Experimental Validation,"',
    pub2Journal: "Mechatronics (Elsevier)",
    pub2Status: "under review. Preprint: ",
    pub3:
      '"Design of a 3D-Printed Continuum Robot with Convergent Compliant Joints for Balanced Stress Distribution,"',
    pub3Journal: "Mechatronics",
    pub4:
      '"Workspace Reconfiguration in Tendon-Driven Continuum Robots via a Concentric Rod Mechanism,"',
    pub4Journal: "IEEE/ASME Transactions on Mechatronics",
    pub4Status: "under review (1st round)",

    // Skills
    skillsTitle: "Skills",
    skillProgramming: "Programming",
    skillPython: "Python (Advanced) — Automation scripts and machine learning models",
    skillMatlab: "MATLAB/Simulink (Advanced) — Control system simulations and data visualization",
    skillCpp: "C++ (Intermediate) — Embedded systems programming and numerical algorithms",
    skillSoftware: "Software & Tools",
    skillSoftwareList: "SolidWorks, AutoCAD, MS Office, Altium",
    skillLanguages: "Languages",
    skillLangEn: "English",
    skillLangDe: "German",
    skillLangZh: "Chinese",
    skillLangKo: "Korean",

    // Contact
    contactTitle: "Contact",
    contactLocation: "Munich, Germany",
    contactEmail: "wenyoung0801@gmail.com",
    contactPhone: "+49 15206331457",

    // Footer
    footer: "© 2026 Zhen Wen. All rights reserved.",
    visitorTotal: "Total visitors",
    visitorPageview: "Total pageviews"
  },

  zh: {
    // Nav
    navAbout: "关于我",
    navEducation: "教育背景",
    navExperience: "工作经历",
    navProjects: "项目经历",
    navPublications: "学术发表",
    navSkills: "技能",
    navContact: "联系方式",

    // Hero
    heroName: "问桢",
    heroTitle: "医学工程硕士 (M.Sc.)",
    heroSubtitle: "嵌入式系统 | 医疗机器人 | 增材制造",
    heroCV: "下载简历",

    // About
    about1: "哈尔滨工业大学机电工程学士，慕尼黑工业大学医疗工程硕士，专注连续体机器人与医疗机器人系统开发",
    about2: "具备从 CAD 设计、3D 打印、硅胶成型、传感集成到控制验证的完整项目经验",
    about3: "熟悉 MATLAB / Python / C++，可完成建模仿真、实验数据处理与自动化测试",
    about4: "具备项目推进与科研论文写作经验，参与多项机器人相关研究工作",
    about5: "可胜任机器人研发、机械设计、机电系统集成、算法验证等岗位",

    // Education
    educationTitle: "教育背景",
    edu1Label: "硕士",
    edu1Degree: "医学工程与辅助系统（M.Sc.）",
    edu1School: "慕尼黑工业大学（Technical University of Munich）",
    edu1Date: "2022年4月 – 2025年10月",
    edu1Focus: "研究方向：嵌入式系统、医疗机器人、增材制造（3D打印）",
    edu1Thesis: "毕业论文：一种具有电磁导航功能、旨在提升可操控性的仿生双材料腱驱动连续体机器人（成绩：1.0 / 最高荣誉）",
    edu2Label: "学士",
    edu2Degree: "机械电子工程（B.Eng.）",
    edu2School: "哈尔滨工业大学",
    edu2Date: "2014年9月 – 2018年7月",

    // Experience
    experienceTitle: "科研与工程经历",
    exp1Title: "科研助理",
    exp1Company: "慕尼黑工业大学｜慕尼黑",
    exp1Date: "2024年5月 – 2025年10月",
    exp1Desc1: "围绕机器人系统原型开发、传感集成与嵌入式实现开展科研与工程支持工作。",
    exp1Desc2: "利用 SLS（选择性激光烧结）与 FDM（熔融沉积建模）技术，完成复杂机器人关节及外壳的快速原型设计与制造，提升结构件的强度/重量比与可制造性。",
    exp1Desc3: "实现电磁传感器与机器人系统的硬件集成，并结合算法融合提升末端执行器在非结构化环境中的感知精度。",
    exp1Desc4: "负责 STM32 微控制器固件编写与调试，基于 C/C++ 实现传感器数据的实时采集、滤波与高速通信。",
    exp2Title: "工作学生（机械测试）",
    exp2Company: "Hillrom｜慕尼黑",
    exp2Date: "2022年7月 – 2023年5月",
    exp2Desc1: "参与医疗设备机械系统测试与性能评估，支持实验设计、数据分析与技术文档输出。",
    exp2Desc2: "对多轴手术灯臂开展实验表征，重点验证运动自由度、工作空间包络、位姿重复性及重新定位后的漂移与稳定性。",
    exp2Desc3: "分析关节回程误差与滞后特性，评估机构运动精度与长期稳定性。",

    // Projects
    projectsTitle: "项目经历",
    proj1Title: "基于多材料软-刚混合结构的高耐久、高承载腱驱动连续体机器人",
    proj1Desc: "提出软-刚混合TDCR，采用3D打印球窝骨架与硅胶包覆。建立<b>分层运动-静力学模型</b>（快速运动学映射 + 含<b>摩擦补偿</b>的准静态模型）。开发专用浇注工装以保证稳定<b>腱路径规划</b>与中心通道完整性。基于<b>电磁追踪</b>真值验证<b>控制精度</b>；对比实验证实了该结构在承载、滞后与耐久性方面的综合优势。",
    proj1Keywords_1: "运动-静力学建模",
    proj1Keywords_2: "摩擦补偿",
    proj1Keywords_3: "电磁追踪",
    proj1Keywords_4: "控制验证",

    proj2Title: "具备具身安全特性的仿肌骨软-刚混合连续体机器人",
    proj2Desc: "开发仿肌骨TDCR，将柔顺外层与内部刚性支撑相结合以实现<b>具身安全</b>。通过结构设计实现<b>安全交互控制</b>，而非仅依赖主动控制算法。系统评估了<b>承载能力</b>、弯曲重复性与<b>接触力安全性</b>，集成传感器进行量化测试。建立<b>准静态模型</b>预测外载下的变形行为。",
    proj2Keywords_1: "安全交互",
    proj2Keywords_2: "传感集成",
    proj2Keywords_3: "准静态建模",
    proj2Keywords_4: "负载测试",

    proj3Title: "面向腱驱动连续体机器人的软-刚混合结构设计、建模与实验验证",
    proj3Subtitle: "硕士毕业论文",
    proj3Desc: "搭建从设计到测试的全栈TDCR系统。建立<b>运动学-静力学建模框架</b>并通过实验验证。实现基于STM32/Arduino的<b>嵌入式控制</b>，完成实时驱动与数据采集。集成<b>电磁追踪传感器</b>进行6-DOF位姿测量与<b>传感融合</b>。构建涵盖驱动、传感与载荷测试的模块化实验平台。",
    proj3Keywords_1: "建模框架",
    proj3Keywords_2: "嵌入式控制",
    proj3Keywords_3: "传感融合",
    proj3Keywords_4: "实验平台",

    proj4Title: "具有独立开合驱动与轴向增强结构的三指软体夹爪",
    proj4Desc: "设计三指软体夹爪，实现<b>独立腱驱动</b>（每指双腱控制开合）。每指配备独立舵机，通过<b>腱路径规划算法</b>实现协调控制。镍钛合金增强结构抑制轴向压缩，提升<b>力控制</b>精度。硅胶浇注结合减摩处理，保证可靠的<b>运动控制</b>与抓取性能。",
    proj4Keywords_1: "独立驱动",
    proj4Keywords_2: "腱路径规划",
    proj4Keywords_3: "力控制",
    proj4Keywords_4: "镍钛合金增强",

    proj5Title: "基于同心杆机制的腱驱动连续体机器人工作空间重构",
    proj5Desc: "提出同心杆机制实现TDCR的<b>工作空间规划</b>与重构。通过调节杆插入深度主动调控弯曲刚度分布，实现可控的<b>工作空间扩展/收缩</b>。建立<b>运动-静力学模型</b>预测重构后的工作空间边界。验证<b>运动控制</b>精度，并完成狭窄入口场景下的取放演示任务。",
    proj5Keywords_1: "工作空间规划",
    proj5Keywords_2: "运动-静力学建模",
    proj5Keywords_3: "运动控制",
    proj5Keywords_4: "取放演示",

    // Publications
    publicationsTitle: "学术发表",
    pubFirstAuthor: "第一作者论文",
    pubCoAuthor: "合作论文",
    pub1:
      '"Enhancing Durability and Payload Capacity of Tendon-Driven Continuum Robots Using a Multimaterial Soft–Rigid Hybrid Structure,"',
    pub1Journal: "IEEE/ASME Transactions on Mechatronics",
    pub1Status: "审稿中（第三轮）",
    pub2:
      '"A Musculoskeletal-Inspired Soft–Rigid Hybrid Tendon-Driven Continuum Robot with Integrated Friction-Aware Modeling and Experimental Validation,"',
    pub2Journal: "Mechatronics (Elsevier)",
    pub2Status: "审稿中。预印本：",
    pub3:
      '"Design of a 3D-Printed Continuum Robot with Convergent Compliant Joints for Balanced Stress Distribution,"',
    pub3Journal: "Mechatronics",
    pub4:
      '"Workspace Reconfiguration in Tendon-Driven Continuum Robots via a Concentric Rod Mechanism,"',
    pub4Journal: "IEEE/ASME Transactions on Mechatronics",
    pub4Status: "审稿中（第一轮）",

    // Skills
    skillsTitle: "技能",
    skillProgramming: "编程语言",
    skillPython: "Python（高级）— 自动化脚本与机器学习模型",
    skillMatlab: "MATLAB/Simulink（高级）— 控制系统仿真与数据可视化",
    skillCpp: "C++（中级）— 嵌入式系统编程与数值算法",
    skillSoftware: "软件与工具",
    skillSoftwareList: "SolidWorks, AutoCAD, MS Office, Altium",
    skillLanguages: "语言能力",
    skillLangEn: "英语",
    skillLangDe: "德语",
    skillLangZh: "中文",
    skillLangKo: "韩语",

    // Contact
    contactTitle: "联系方式",
    contactLocation: "德国慕尼黑",
    contactEmail: "wenyoung0801@gmail.com",
    contactPhone: "+49 15206331457",

    // Footer
    footer: "© 2026 问桢 版权所有",
    visitorTotal: "总访客数",
    visitorPageview: "总浏览量"
  }
};