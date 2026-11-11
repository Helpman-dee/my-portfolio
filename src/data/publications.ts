import { Publication } from '../types';

export const publications: Publication[] = [
  {
    id: "pub-bmc-oral-health-2026",
    title: "Knowledge and attitudes of dental clinic attendees on oral HPV infection in Ibadan, Nigeria",
    authors: [
      "Taoheed O. Mudasiru",
      "Olufunmilayo I. Fawole",
      "Adekunle Daniel",
      "Akinyele O. Adisa",
      "Moses O. Adewumi",
      "Yusuf O. Bello",
      "Deborah O. Oke",
      "Dare Aladeokin",
      "Isaac F. Adewole",
      "Robert Murphy",
      "Lifang Hou",
      "Imran O. Morhason-Bello"
    ],
    myAuthorIndex: 7, // Dare Aladeokin is co-author
    journal: "BMC Oral Health",
    year: 2026,
    doi: "10.1186/s12903-026-08355-x",
    type: "journal",
    status: "Published",
    abstract: "Oral human papillomavirus (HPV) infection represents an escalating epidemiological risk factor for oropharyngeal malignancies globally. This cross-sectional observational study evaluated baseline awareness, comprehensive knowledge levels, and attitudes regarding oral HPV transmission, symptoms, and vaccination among dental clinic attendees in Ibadan, Nigeria. Data gathered through structured clinical interviews demonstrated moderate general awareness but highlighted critical knowledge deficits concerning oncogenic risks and preventative immunization, underscoring the urgent necessity of integrating targeted oral cancer screening and public education into routine dental care frameworks in West Africa.",
    url: "https://doi.org/10.1186/s12903-026-08355-x",
    category: "Oral Oncology & HPV Epidemiology",
    featured: true
  },
  {
    id: "pub-jiaapac-2026",
    title: "Pattern of Oral Sexual Behaviour and Oral Health Among People Living With HIV/AIDS in Ibadan, Nigeria",
    authors: [
      "HPV Consortium Research Group",
      "Dare Aladeokin",
      "Collaborating Investigators"
    ],
    myAuthorIndex: 1,
    journal: "Journal of the International Association of Providers of AIDS Care (JIAPAC)",
    year: 2026,
    doi: "10.1177/23259582261471841",
    type: "journal",
    status: "Published",
    abstract: "Investigating the intersection between oral sexual behaviors, immunocompromised mucosal health, and clinical oral manifestations among people living with HIV/AIDS (PLWHA) receiving antiretroviral therapy in Ibadan, Nigeria. Using robust electronic data capture protocols and multivariate regression analysis, the study characterizes prevalence rates, behavioral risk dynamics, and dental health co-morbidities to formulate evidence-based guidelines for integrated sexual health and dental counseling in comprehensive HIV management clinics.",
    url: "https://doi.org/10.1177/23259582261471841",
    category: "Infectious Disease & Public Health",
    featured: true
  },
  {
    id: "pub-msc-thesis-ongoing",
    title: "Automated Detection of Cervical Lesions in Colposcopy Images Using Deep Learning",
    authors: [
      "Dare Aladeokin",
      "Academic Supervisors (Department of Computer Science & College of Medicine, UI)"
    ],
    myAuthorIndex: 0,
    journal: "MSc Data Science Thesis, University of Ibadan",
    year: 2026,
    type: "ongoing",
    status: "Ongoing Research",
    abstract: "A postgraduate computational research thesis investigating convolutional neural network architectures and vision transformers for automated multi-class grading of cervical lesions from digital colposcopic examinations. The framework evaluates ResNet-50, DenseNet-121, and EfficientNet backbones coupled with Gradient-weighted Class Activation Mapping (Grad-CAM) to generate clinically explainable heatmaps, directly addressing the critical deficit of specialist colposcopists in low- and middle-income countries.",
    category: "Medical AI & Computer Vision",
    featured: true
  },
  {
    id: "pub-orchestration-benchmarking",
    title: "Benchmarking Workflow Orchestration Frameworks for Climate Data Engineering in Nigeria",
    authors: [
      "Dare Aladeokin",
      "Research Collaborators"
    ],
    myAuthorIndex: 0,
    journal: "Research Manuscript in Preparation",
    year: 2026,
    type: "manuscript",
    status: "In Preparation",
    abstract: "An empirical benchmarking study comparing Apache Airflow, Prefect, and Dagster workflow engines for high-throughput meteorological and environmental data engineering across five distinct Nigerian climatic regions. The study measures task scheduling overhead, fault tolerance under simulated network interruptions, DAG dependency resolution efficiency, and memory consumption to offer architectural guidelines for data pipelines deployed in Sub-Saharan Africa.",
    category: "Data Engineering & Systems",
    featured: false
  }
];

