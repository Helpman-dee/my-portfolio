import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: "exp-hpv-consortium",
    role: "Clinical Research Data Analyst / Data Manager",
    organization: "HPV Consortium, College of Medicine, University of Ibadan",
    location: "Ibadan, Oyo State, Nigeria",
    period: "2023 - Present",
    current: true,
    type: "Research",
    description: "Leading clinical research data management and analytic workflows across multidisciplinary epidemiological studies, cervical cancer prevention initiatives, and community health cohorts.",
    responsibilities: [
      "Architect and configure Electronic Data Capture (EDC) schemas and longitudinal survey instruments using REDCap.",
      "Implement comprehensive automated data validation, branching logic, and range verification checks to maintain data integrity.",
      "Execute routine data cleaning, discrepancy resolution, missing-data audits, and reconciliation between clinical paper records and digital databases.",
      "Generate automated data export pipelines, cohort tracking matrices, and analytical reports for principal investigators and study coordinators.",
      "Deliver technical documentation for study protocols, Standard Operating Procedures (SOPs), and data management guidelines.",
      "Support multidisciplinary clinical research teams (epidemiologists, clinicians, laboratory scientists) with ad-hoc analytical queries and data exports.",
      "Oversee IT systems administration, endpoint security, backup routines, and technical support for research facility operations."
    ],
    technologies: ["REDCap", "Python", "SQL", "Excel (Advanced)", "Power BI", "Data Validation", "EDC Protocols"],
    verified: true
  },
  {
    id: "exp-it-systems",
    role: "IT Systems & Technical Support Specialist",
    organization: "Information Technology & Healthcare Systems Services",
    location: "Ibadan, Nigeria",
    period: "2021 - 2023",
    current: false,
    type: "Full-time",
    description: "Provided core information technology infrastructure administration, hardware/software diagnostics, network connectivity, and digital systems maintenance.",
    responsibilities: [
      "Administered local area network (LAN) infrastructure, hardware maintenance, software configuration, and endpoint security protocols.",
      "Diagnosed and resolved complex hardware and software issues across desktop workstations, servers, and connected peripherals.",
      "Deployed automated scheduled data backup regimens, data recovery drills, and secure file transfer protocols.",
      "Trained staff members on computer literacy, institutional software tools, cyber hygiene, and data security best practices."
    ],
    technologies: ["Systems Administration", "Network Troubleshooting", "Hardware Diagnostics", "Windows Server", "IT Security"],
    verified: true
  },
  {
    id: "exp-research-assistant",
    role: "Data Science Student",
    organization: "Department of Computer Science, University of Ibadan",
    location: "Ibadan, Nigeria",
    period: "2025 - Present",
    current: true,
    type: "Research",
    description: "Conducting postgraduate research at the intersection of computer vision, deep learning architectures, and healthcare diagnostics under academic supervision.",
    responsibilities: [
      "Curating and preprocessing medical imaging datasets for cervical lesion classification from colposcopy examinations.",
      "Training, fine-tuning, and benchmarking deep convolutional neural networks (ResNet50, DenseNet-121, EfficientNet) and transformer backbones.",
      "Implementing Class Activation Mapping (Grad-CAM) to provide interpretable visual explanations of deep learning feature representations.",
      "Preparing scholarly manuscripts, methodology documentation, and reproducibility protocols for international peer-reviewed journals."
    ],
    technologies: ["PyTorch", "Python", "OpenCV", "Grad-CAM", "SciKit-Learn", "Matplotlib", "LaTeX"],
    verified: true
  }
];

