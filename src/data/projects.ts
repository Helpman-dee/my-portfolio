import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "ai-cervical-lesion-detection",
    title: "Automated Detection of Cervical Lesions in Colposcopy Images Using Deep Learning",
    subtitle: "MSc Postgraduate Research in Medical Computer Vision & Explainable AI",
    category: "AI & Healthcare",
    featured: true,
    shortDescription: "An MSc Data Science research initiative investigating state-of-the-art deep convolutional networks and vision architectures for automated cervical lesion screening from digital colposcopy photographs.",
    fullDescription: "Cervical cancer remains one of the leading causes of cancer-related mortality among women in Sub-Saharan Africa, yet high-resolution digital colposcopy screening is severely limited by a shortage of trained colposcopists. This MSc research project investigates deep learning architectures (including ResNet-50, DenseNet-121, and EfficientNet backbones) to classify cervical lesions into high-grade squamous intraepithelial lesions (HSIL) and low-grade or normal tissue.\n\nTo ensure clinical trust and scientific reproducibility, the pipeline integrates Gradient-weighted Class Activation Mapping (Grad-CAM), generating visual saliency heatmaps that highlight anatomical regions contributing to model inference. This project adheres to rigorous evaluation metrics (Sensitivity, Specificity, AUROC, F1-score) tailored for resource-constrained clinical settings.",
    myContribution: [
      "Engineered data preprocessing, augmentation pipelines, and artifact removal (speculum reflections, glare, and blur correction).",
      "Benchmarked ResNet-50, DenseNet-121, and EfficientNet architectures under transfer learning and cross-validation regimes.",
      "Integrated Grad-CAM visualization modules to enable clinical interpretability of predicted lesion boundaries.",
      "Conducted extensive ablation studies on class imbalance handling using focal loss and weighted cross-entropy."
    ],
    technologies: [
      "Python",
      "PyTorch",
      "Computer Vision",
      "ResNet50",
      "DenseNet121",
      "EfficientNet",
      "Grad-CAM",
      "Torchvision",
      "OpenCV"
    ],
    highlights: [
      "Medical Image Analysis",
      "Explainable AI (XAI) via Saliency Maps",
      "Rigorous Cross-Validation Protocols",
      "Resource-Constrained Healthcare Applicability"
    ],
    academicRelevance: "Serves as primary Master's thesis dissertation topic in Data Science at the University of Ibadan.",
    clinicalRelevance: "Aims to provide assistive triage in community screening centers where expert pathologists and colposcopists are unavailable."
  },
  {
    id: "clinical-research-data-management-redcap",
    title: "Clinical Research Data Management & REDCap Administration",
    subtitle: "Enterprise Electronic Data Capture & Longitudinal Cohort Quality Assurance",
    category: "Clinical Data Management",
    featured: true,
    shortDescription: "Practical enterprise experience architecting and managing clinical research databases, electronic data capture instruments, validation checks, and data quality audits for multidisciplinary health research.",
    fullDescription: "High-impact clinical trials and epidemiological studies depend strictly on impeccable data integrity and regulatory compliance. In my work with research consortiums, I manage end-to-end clinical research data workflows using REDCap (Research Electronic Data Capture).\n\nKey responsibilities include configuring complex longitudinal data instruments, defining role-based access permissions, implementing automated branching logic to prevent user entry error, scheduling automated data exports, and generating weekly discrepancy reports. This infrastructure guarantees audit readiness and compliance with Good Clinical Practice (GCP) principles.",
    myContribution: [
      "Designed and deployed modular REDCap electronic data collection instruments with branching logic and real-time range validations.",
      "Implemented programmatic data quality checks, discrepancy logs, and missing-data resolution workflows.",
      "Automated recurrent database backups, audit trail reviews, and compliance checks according to study Standard Operating Procedures.",
      "Trained clinical research coordinators, field enumerators, and nurses on mobile and web-based data entry."
    ],
    technologies: [
      "REDCap",
      "Data Quality Assurance",
      "Data Validation",
      "EDC Architecture",
      "Excel (VBA / Advanced)",
      "Audit Trail Auditing"
    ],
    highlights: [
      "GCP-Compliant Data Workflows",
      "Longitudinal Cohort Data Tracking",
      "Multi-Site Study Integration",
      "Zero-Data-Loss Protocol Execution"
    ],
    academicRelevance: "Underpins published epidemiological findings in peer-reviewed journals such as BMC Oral Health and JIAAPAC.",
    clinicalRelevance: "Ensures that clinical trial and observational cohort datasets reflect 100% verified participant histories."
  },
  {
    id: "hpv-prevention-digital-health",
    title: "HPV-Associated Cancer Prevention & Community Health Initiatives",
    subtitle: "Multidisciplinary Public Health Programs (SHINI, EpOOCH, PAVE & Mobile Clinic)",
    category: "Clinical Data Management",
    featured: true,
    shortDescription: "Data analytics and clinical research support across multidisciplinary public health programmes including SHINI, EpOOCH, PAVE Risk Communication Study, and the Mobile Truck Clinic screening outreach.",
    fullDescription: "Contributing to multidisciplinary initiatives tackling human papillomavirus (HPV) infection dynamics and cervical cancer control across diverse Nigerian populations. My involvement spans data operations for key research and clinical arms:\n\n• SHINI Study: Coordinating data intake and participant tracking for HPV prevention and screening.\n• EpOOCH Initiative: Supporting epidemiological investigations into HPV-associated oral and oropharyngeal manifestations.\n• PAVE Risk Communication Study: Managing survey metrics and feedback data assessing community awareness and health communication impact.\n• Mobile Truck Clinic Programme: Providing agile on-site data capture and real-time census management during community outreach screenings in underserved settlements.",
    myContribution: [
      "Built resilient offline and online mobile data collection forms for community health field teams in remote outreach settings.",
      "Reconciled field screening logs against laboratory diagnostic records (HPV DNA testing, cytopathology results).",
      "Analyzed community uptake metrics, sociodemographic predictors, and screening attrition rates.",
      "Safeguarded participant confidentiality and protected health information (PHI) across all digital repositories."
    ],
    technologies: [
      "REDCap Mobile",
      "Field Data Engineering",
      "Public Health Surveillance",
      "Epidemiological Analytics",
      "Python",
      "Secure Data Transfers"
    ],
    highlights: [
      "SHINI & EpOOCH Research Cohorts",
      "PAVE Risk Communication Engagement",
      "Mobile Truck Clinic Community Outreach",
      "Cross-Disciplinary Medical Collaboration"
    ],
    clinicalRelevance: "Directly bridges community-level screening in vulnerable populations with centralized academic laboratory diagnostics."
  },
  {
    id: "research-data-analytics-reporting",
    title: "Research Data Analytics & Interactive Intelligence Reporting",
    subtitle: "Exploratory Statistical Modeling, Visual Dashboards & Evidence Generation",
    category: "Analytics & BI",
    featured: true,
    shortDescription: "End-to-end data processing, exploratory statistical analysis, visual dashboard development, and automated reporting pipelines to support evidence-based research decision-making.",
    fullDescription: "Transforming complex, messy observational health datasets into clean, actionable insights for clinical researchers and principal investigators. Leveraging Python (pandas, numpy, scipy, seaborn), SQL, and Power BI, this project encompasses data normalization, multivariable regression modeling, survival analysis support, and interactive visual reporting.\n\nThe workflows replace tedious manual spreadsheet tabulation with reproducible scripted pipelines, drastically reducing reporting turnaround times from weeks to minutes while eliminating calculation errors.",
    myContribution: [
      "Engineered automated data cleaning scripts in Python to standardize heterogeneous survey and laboratory data formats.",
      "Designed interactive Power BI and matplotlib dashboards monitoring study enrollment pace, participant demographics, and laboratory turnaround times.",
      "Performed hypothesis testing, chi-square tests of association, and logistic regression modeling for academic manuscripts.",
      "Created reproducible R/Python reporting templates adhering to STROBE guidelines for epidemiological reporting."
    ],
    technologies: [
      "Python",
      "Pandas",
      "SQL",
      "Power BI",
      "Statsmodels",
      "Seaborn",
      "Excel",
      "Data Normalization"
    ],
    highlights: [
      "Reproducible Analytic Pipelines",
      "Clinical Trial Enrollment Dashboards",
      "Multivariate Statistical Modeling",
      "Automated Executive Reporting"
    ]
  },
  {
    id: "climate-data-orchestration-benchmarking",
    title: "Benchmarking Workflow Orchestration Frameworks for Climate Data Engineering",
    subtitle: "Comparative Research across Apache Airflow, Prefect, and Dagster in Nigerian Locations",
    category: "Data Engineering",
    featured: true,
    shortDescription: "A comprehensive data engineering research manuscript benchmarking Apache Airflow, Prefect, and Dagster performance across five distinct Nigerian climatic and meteorological monitoring zones.",
    fullDescription: "Data engineering pipelines for climate and spatial analytics require robust fault tolerance, scheduling accuracy, and minimal compute overhead, especially in developing countries where network latency and electrical reliability vary widely.\n\nThis research project empirically benchmarks three premier open-source workflow orchestration engines—Apache Airflow, Prefect, and Dagster—across simulated and empirical climate data extraction, transformation, and loading (ETL) workflows for five Nigerian geographic regions (Ibadan, Lagos, Kano, Port Harcourt, and Abuja). Performance was evaluated on task execution latency, memory footprint, DAG failure recovery, and developer ergonomics.",
    myContribution: [
      "Designed standardized, parameterized ETL pipeline workflows for temperature, precipitation, and relative humidity datasets.",
      "Instrumented resource tracking metrics (CPU utilization, RAM spikes, recovery time after network dropouts).",
      "Evaluated developer experience, modular testing capability, and maintenance overhead for each orchestrator.",
      "Authored the comparative research manuscript synthesizing findings and providing architectural recommendations for African data initiatives."
    ],
    technologies: [
      "Python",
      "Apache Airflow",
      "Prefect",
      "Dagster",
      "Data Engineering",
      "Docker",
      "Pandas",
      "ETL Benchmarking"
    ],
    highlights: [
      "Rigorous Multi-Framework Benchmarking",
      "Geographic & Spatial Data Pipeline Design",
      "Fault Tolerance & Network Resilience Testing",
      "Data Infrastructure Optimization"
    ],
    academicRelevance: "Written and structured as a scholarly research manuscript evaluating computational infrastructure."
  },
  {
    id: "it-infrastructure-systems-administration",
    title: "Enterprise IT Systems Administration & Healthcare Infrastructure Support",
    subtitle: "Reliable Network Engineering, Endpoint Security & High-Availability Operations",
    category: "IT Systems",
    featured: false,
    shortDescription: "Experience administering organisational technology infrastructure, hardware diagnostics, network routing, server maintenance, and endpoint security for mission-critical operations.",
    fullDescription: "Behind every modern clinical and academic data initiative lies a robust, secure, and highly available information technology backbone. This project encompasses years of practical IT administration experience spanning hardware troubleshooting, network topology design, enterprise firewall configuration, remote access management, and automated disaster recovery regimens.\n\nEnsuring uninterrupted connectivity and airtight data protection standards allowed research teams to conduct electronic data capture and high-throughput analytics without operational downtime.",
    myContribution: [
      "Configured and maintained local network subnets, Wi-Fi access points, and structured cabling for research offices.",
      "Deployed automated daily incremental and weekly off-site encrypted backup routines.",
      "Provided prompt technical diagnosis and resolution for computer hardware, peripheral failures, and operating system faults.",
      "Established IT security policies including multi-factor authentication, endpoint antivirus definitions, and data handling protocols."
    ],
    technologies: [
      "Systems Administration",
      "Network Infrastructure",
      "Data Security",
      "Disaster Recovery",
      "Hardware Diagnostics",
      "Technical Documentation"
    ],
    highlights: [
      "High Uptime Operations",
      "Disaster Recovery & Encrypted Backups",
      "Proactive Endpoint Maintenance",
      "Enterprise Tech Support"
    ]
  }
];

