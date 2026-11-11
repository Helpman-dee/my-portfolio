import { Service } from '../types';

export const services: Service[] = [
  {
    id: "service-clinical-data-management",
    title: "Clinical Research Data Management",
    tagline: "Regulatory-grade protocols, EDC architectures, and study data pipelines.",
    description: "End-to-end design and supervision of clinical research data operations. From protocol review and Case Report Form (CRF) design to data dictionary specification, multi-site harmonization, and audit trail verification.",
    deliverables: [
      "Custom Case Report Form (eCRF) design",
      "Standard Operating Procedures (SOPs) for data collection",
      "GCP-compliant audit logs and regulatory documentation",
      "Multi-center cohort data synchronization"
    ],
    tools: ["REDCap", "EDC Platforms", "Excel", "Data Security Frameworks"],
    icon: "file-spreadsheet"
  },
  {
    id: "service-redcap-administration",
    title: "REDCap Database Setup & Administration",
    tagline: "Custom electronic data capture tailored for trials, registries, and surveys.",
    description: "Expert REDCap project configuration including branching logic, calculated fields, longitudinal event matrices, automated survey invitations, user rights access control, and mobile offline synchronization.",
    deliverables: [
      "Turnkey REDCap project creation and testing",
      "Complex branching logic and calculated scoring algorithms",
      "Role-based permission schemas (Data Access Groups)",
      "Automated survey distribution schedules"
    ],
    tools: ["REDCap", "REDCap Mobile App", "API Webhooks"],
    icon: "database"
  },
  {
    id: "service-data-cleaning-qa",
    title: "Data Cleaning & Quality Assurance",
    tagline: "Eliminate errors, discrepancies, and missingness with programmatic audits.",
    description: "Systematic data cleaning pipelines that identify outliers, duplicate records, structural inconsistencies, and missing values. Deliver clean, normalized datasets ready for statistical modeling and regulatory submission.",
    deliverables: [
      "Automated anomaly and outlier detection scripts",
      "Discrepancy resolution query logs",
      "Missing data imputation and documentation",
      "Fully documented data transformation dictionaries"
    ],
    tools: ["Python", "Pandas", "OpenRefine", "Excel Power Query"],
    icon: "shield-check"
  },
  {
    id: "service-data-analytics-bi",
    title: "Data Analysis & Visualisation",
    tagline: "Transform raw observational data into publication-ready figures and dashboards.",
    description: "Exploratory and inferential statistical analysis, hypothesis testing, bivariate/multivariate modeling, and interactive dashboards that translate complex trends into clear visual narratives.",
    deliverables: [
      "Descriptive and inferential statistical reports",
      "High-resolution publication figures (300+ DPI)",
      "Interactive Power BI or web dashboards",
      "Executive summary decks for non-technical stakeholders"
    ],
    tools: ["Python (Seaborn/Matplotlib)", "Power BI", "SQL", "Excel"],
    icon: "bar-chart-2"
  },
  {
    id: "service-research-reporting",
    title: "Research Data Management & Reporting",
    tagline: "Comprehensive data management plans (DMP) and grant compliance.",
    description: "Assisting academic teams, PhD candidates, and research consortiums with data management plans (DMPs), reproducible analytic pipelines, interim progress reports, and journal submission data packages.",
    deliverables: [
      "Data Management Plans for grant proposals (NIH, EU, Wellcome)",
      "STROBE / CONSORT-compliant data summary tables",
      "Anonymized public data repository curation (Dryad, Zenodo)",
      "Weekly participant accrual and attrition tracking"
    ],
    tools: ["Reproducible Notebooks", "Git", "LaTeX", "Excel"],
    icon: "clipboard-list"
  },
  {
    id: "service-python-processing",
    title: "Python-Based Data Processing & ETL",
    tagline: "Fast, resilient automated pipelines for large-scale and spatial datasets.",
    description: "Custom Python scripting for batch file parsing, web scraping, API extraction, data reshaping, and automated recurring report generation that eliminates hundreds of manual work hours.",
    deliverables: [
      "Custom Python ETL scripts and scheduled cron routines",
      "Batch data normalization and validation scripts",
      "API data extraction and consolidation",
      "Modular, well-commented codebases with unit tests"
    ],
    tools: ["Python 3", "Pandas", "Requests", "Prefect / Airflow"],
    icon: "cpu"
  },
  {
    id: "service-ai-ml-support",
    title: "AI & Machine Learning Research Support",
    tagline: "Translating cutting-edge computer vision and predictive models to healthcare.",
    description: "Collaborative research and development in machine learning, medical image analysis, model benchmarking, and explainable AI (Grad-CAM). Ideal for health-tech startups and research groups seeking technical co-investigators.",
    deliverables: [
      "Exploratory model benchmarking and baseline comparisons",
      "Computer vision feature extraction and classification pipelines",
      "Explainability reports with saliency map visualizations",
      "Comprehensive research methodology write-ups"
    ],
    tools: ["PyTorch", "OpenCV", "Scikit-Learn", "Grad-CAM"],
    icon: "sparkles"
  },
  {
    id: "service-it-consulting",
    title: "IT Support & Technology Consulting",
    tagline: "Robust infrastructure, secure networking, and dependable digital operations.",
    description: "Diagnostic, maintenance, and strategic technology consulting for healthcare practices, academic labs, and growing organizations seeking resilient IT foundations, reliable backups, and secure systems.",
    deliverables: [
      "IT infrastructure audit and vulnerability assessment",
      "Automated backup and disaster recovery setup",
      "Network troubleshooting and optimization",
      "Hardware and software upgrade recommendations"
    ],
    tools: ["LAN/WLAN Networking", "Endpoint Security", "Backup Systems", "Hardware Diagnostic Tools"],
    icon: "wrench"
  }
];

export const servicesStatement = "Whether you are a researcher looking to improve your data management workflow, an organisation seeking analytical support, or a business exploring technology-driven solutions, I am open to discussing how we can work together.";

