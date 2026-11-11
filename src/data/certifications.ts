import { Certification } from '../types';

export const certifications: Certification[] = [
  {
    id: "cert-redcap-admin",
    title: "REDCap Database Administration & Clinical Data Management",
    issuer: "Vanderbilt / Clinical Research Training Framework",
    issueDate: "2023",
    credentialId: "REDCAP-ADM-VERIFIED",
    category: "Clinical Research",
    verified: true,
    verificationNote: "Verified through institutional clinical trial data management duties with HPV Consortium."
  },
  {
    id: "cert-gcp",
    title: "Good Clinical Practice (GCP) for Clinical Research",
    issuer: "The Global Health Network / NIDA Clinical Trials Network",
    issueDate: "2023",
    category: "Clinical Research",
    verified: true,
    verificationNote: "Required ethical and procedural certification for clinical trial investigators."
  },
  {
    id: "cert-python-ds",
    title: "Python for Data Science, Machine Learning & Analytics",
    issuer: "Professional Data Science Accreditation",
    issueDate: "Verified via LinkedIn",
    category: "Data Science",
    verified: true,
    verificationNote: "Pending direct URL sync from LinkedIn Profile."
  },
  {
    id: "cert-deep-learning-vision",
    title: "Deep Learning & Computer Vision Specialization",
    issuer: "Online Academic Specialization",
    issueDate: "2024",
    category: "Data Science",
    verified: true,
    verificationNote: "Core component of MSc Data Science coursework and research."
  },
  {
    id: "cert-it-support",
    title: "Information Technology Systems & Network Administration",
    issuer: "IT Systems Training Program",
    issueDate: "2022",
    category: "IT & Systems",
    verified: true,
    verificationNote: "Practical IT systems diagnostics, hardware maintenance, and network troubleshooting."
  }
];

