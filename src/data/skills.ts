import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: "Data Science & Analytics",
    description: "Deriving actionable insights, statistical inference, and automated data pipelines from clinical and environmental datasets.",
    icon: "bar-chart-3",
    skills: [
      { name: "Python", highlight: true },
      { name: "SQL", highlight: true },
      { name: "Data Cleaning & Preprocessing", highlight: true },
      { name: "Statistical Hypothesis Testing", highlight: true },
      { name: "Data Visualisation (Seaborn/Matplotlib)", highlight: false },
      { name: "Advanced Microsoft Excel (Formulas, Pivot, VBA)", highlight: true },
      { name: "Power BI & Interactive Dashboards", highlight: false },
      { name: "Pandas & NumPy", highlight: true },
      { name: "Exploratory Data Analysis (EDA)", highlight: false }
    ]
  },
  {
    title: "Clinical Research Data Management",
    description: "Designing compliant electronic data capture, rigorous quality validation, and longitudinal cohort tracking systems.",
    icon: "database",
    skills: [
      { name: "REDCap Database Administration", highlight: true },
      { name: "Electronic Data Capture (EDC) Systems", highlight: true },
      { name: "Clinical Research Databases", highlight: true },
      { name: "Data Quality Assurance (QA/QC)", highlight: true },
      { name: "Automated Data Validation & Branching Logic", highlight: true },
      { name: "Research Data Management & SOPs", highlight: false },
      { name: "Research Reporting & Discrepancy Audits", highlight: true },
      { name: "Good Clinical Practice (GCP) Principles", highlight: false }
    ]
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description: "Engineering computer vision models, convolutional architectures, and explainable AI for clinical triage.",
    icon: "brain-circuit",
    skills: [
      { name: "Deep Learning Architectures", highlight: true },
      { name: "Computer Vision & Medical Image Analysis", highlight: true },
      { name: "PyTorch & Torchvision", highlight: true },
      { name: "Convolutional Neural Networks (ResNet, DenseNet)", highlight: true },
      { name: "Explainable AI (Grad-CAM Saliency Maps)", highlight: true },
      { name: "Supervised & Unsupervised Machine Learning", highlight: false },
      { name: "Model Evaluation & Cross-Validation", highlight: true },
      { name: "Transfer Learning & Fine-Tuning", highlight: false }
    ]
  },
  {
    title: "Programming & Data Engineering",
    description: "Developing robust data pipelines, orchestration scripts, reproducible research workflows, and modern web interfaces.",
    icon: "code",
    skills: [
      { name: "Python 3.x", highlight: true },
      { name: "SQL & Relational Schema Design", highlight: true },
      { name: "Workflow Orchestration (Airflow, Prefect, Dagster)", highlight: true },
      { name: "Git & GitHub Version Control", highlight: true },
      { name: "Web Technologies (HTML5, CSS3, JavaScript, React)", highlight: false },
      { name: "RESTful APIs & Data Integration", highlight: false },
      { name: "Linux / Bash Scripting", highlight: false }
    ]
  },
  {
    title: "Information Technology & Systems Administration",
    description: "Ensuring high-availability computing infrastructure, network security, endpoint diagnostics, and technical operations.",
    icon: "server",
    skills: [
      { name: "Systems Administration (Windows & Linux)", highlight: true },
      { name: "Network Configuration & Troubleshooting (LAN/WLAN)", highlight: true },
      { name: "Hardware & Peripheral Diagnostics", highlight: true },
      { name: "Endpoint Security & Antivirus Administration", highlight: false },
      { name: "Automated Data Backup & Recovery Drills", highlight: true },
      { name: "Technical IT Support & User Training", highlight: false },
      { name: "Technical Documentation & User Manuals", highlight: true }
    ]
  }
];

