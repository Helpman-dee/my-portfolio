import { Education } from '../types';

export const educationList: Education[] = [
  {
    id: "edu-msc-data-science",
    degree: "Master of Science (MSc)",
    field: "Data Science",
    institution: "University of Ibadan",
    location: "Ibadan, Oyo State, Nigeria",
    period: "2025/2026 academic session",
    status: "In Progress",
    thesisOrFocus: "Automated Detection of Cervical Lesions in Colposcopy Images Using Deep Learning (Computer Vision & Explainable AI).",
    relevantCoursework: [
      "Advanced Machine Learning & Deep Learning",
      "Medical Image Processing & Computer Vision",
      "Statistical Computing & Inference",
      "Big Data Systems & Cloud Architectures",
      "Research Methodology & Scientific Writing"
    ],
    highlights: [
      "Focusing on assistive clinical diagnostics for resource-constrained oncology screening.",
      "Interdisciplinary collaboration between the Department of Computer Science and College of Medicine.",
      "Targeted positioning for international doctoral programs, global health fellowships, and research grants."
    ],
    verified: true
  },
  {
    id: "edu-bsc-computer-science",
    degree: "Bachelor of Science (BSc)",
    field: "Computer Science",
    institution: "University of Ibadan",
    location: "Ibadan, Oyo State, Nigeria",
    period: "Graduated",
    status: "Completed",
    thesisOrFocus: "Computational systems, database management systems, and software engineering methodologies.",
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Database Design & Relational SQL Systems",
      "Operating Systems & Computer Networks",
      "Software Engineering & Systems Analysis",
      "Numerical Analysis & Linear Algebra"
    ],
    highlights: [
      "Strong foundational grounding in theoretical computing and applied systems engineering.",
      "Active participant in technical student associations and peer academic mentorship."
    ],
    verified: true
  }
];

