import React from 'react';
import type { NavLink, Experience, Publication, Research, Project, SkillCategory, Certificate } from './types';
import { Github, Linkedin, Mail, FileText, BrainCircuit, Dna, Code, Phone } from 'lucide-react';


// ------------------ 🔗 NAVIGATION ------------------
export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Publications', href: '#publications' },
  { name: 'Research', href: '#research' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];


// ------------------ 🎓 EDUCATION ------------------
export const EDUCATION_INFO = [
  {
    degree: "M.Sc. in Computer Science & Telecommunication Engineering",
    university: "Noakhali Science and Technology University (NSTU)",
    location: "Noakhali, Bangladesh",
    duration: "Aug 2021 – May 2023",
    cgpa: "CGPA: 3.62/4.00",
    thesis: "MedicineNet: A Custom CNN-Based Approach for Recognizing Medicine Names in Handwritten Prescriptions"
  },
  {
    degree: "B.Sc. in Computer Science & Telecommunication Engineering",
    university: "Noakhali Science and Technology University (NSTU)",
    location: "Noakhali, Bangladesh",
    duration: "Jan 2018 – Jan 2021",
    cgpa: "CGPA: 3.29/4.00",
    thesis: "Detection of Autism Spectrum Disorder Based on Optimal Feature Selection Using Machine Learning"
  }
];


// ------------------ 🧠 RESEARCH INTERESTS ------------------
export const RESEARCH_INTERESTS: { name: string; icon: JSX.Element }[] = [
  { name: "Natural Language Processing (Low-Resource Languages)", icon: <Code className="w-8 h-8 text-accent" /> },
  { name: "Large Language Models (LLMs)", icon: <BrainCircuit className="w-8 h-8 text-accent" /> },
  { name: "Transformer Architectures & Attention Mechanisms", icon: <BrainCircuit className="w-8 h-8 text-accent" /> },
  { name: "Retrieval-Augmented Generation (RAG)", icon: <Code className="w-8 h-8 text-accent" /> },
  { name: "AI in Healthcare & Medical Text/Image Understanding", icon: <Dna className="w-8 h-8 text-accent" /> },
  { name: "AI-Driven Code Generation & Cross-Lingual Problem Solving", icon: <Code className="w-8 h-8 text-accent" /> }
];


// ------------------ 💼 EXPERIENCES ------------------
export const EXPERIENCES: Experience[] = [
  {
    date: 'Oct 2023 – Present',
    title: 'AI Engineer',
    company: 'Tappware Solution Limited',
    location: 'Dhaka, Bangladesh',
    description: [
      'Conducted R&D in AI, NLP, and Generative LLMs for real-world Bengali and English applications.',
      'Designed and deployed LLM-powered apps such as AI Summarizer, Invoice Info Extractor, Resume Analyzer, and YouTube Video Summarizer.',
      'Integrated and fine-tuned models like Mistral, T5, and Whisper for summarization, Q&A, and speech-to-text tasks.',
      'Developed APIs and NLP pipelines for text classification, OCR, and document parsing.',
      'Collaborated cross-functionally to align AI research outcomes with business goals.',
    ],
  },
  {
    date: 'Oct 2022 – Jan 2023',
    title: 'Machine Learning Engineer (Intern)',
    company: 'Tappware Solution Limited',
    location: 'Dhaka, Bangladesh',
    description: [
      'Implemented Elasticsearch-based ranking and indexing for large-scale data retrieval.',
      'Contributed to NLP projects including Bengali text extraction automation.',
      'Supported deployment and optimization of ML models under Linux environments.',
    ],
  },
  {
    date: '2022 – Present',
    title: 'Independent Researcher (AI & NLP)',
    company: 'Self-Driven Research',
    location: 'Bangladesh',
    description: [
      'Built a Transformer-based Bengali–English translation model from scratch.',
      'Fine-tuned Mistral, DeepSeek, and LLaMA models for Bengali multi-label text classification.',
      'Developed a multilingual RAG system using FAISS and MiniLM embeddings for cross-lingual QA.',
      'Created Lekhoni, a handwritten Bengali dataset platform for OCR and handwriting recognition.',
      'Published Directory Visualizer, a PyPI CLI tool for visualizing large directory trees.',
    ],
  },
];


// ------------------ 📄 PUBLICATIONS ------------------
export const PUBLICATIONS: Publication[] = [
  {
    title: 'Prompt-Based Fine-Tuning of Bangla Language Models for Sequence Classification',
    venue: 'Springer LNCS, 2025',
    description: 'Introduced Instruction and Label Information Prompting to boost Bengali sequence classification accuracy by 2–4% using only 20% of training data.',
    doi: 'https://doi.org/10.1007/978-981-96-2721-9_27',
    imageUrl: '/images/prompt_llm.png',
  },
  {
    title: 'Detection of Autism Spectrum Disorder Based on Optimal Feature Selection Using Machine Learning',
    venue: 'Under Review, Journal',
    description: 'Achieved high accuracy for early ASD detection using optimal feature selection techniques and multiple classifier comparisons.',
    imageUrl: '/images/ASD.png',
  },
  {
    title: 'MedicineNet: A Custom CNN-Based Approach for Recognizing Medicine Names in Handwritten Prescriptions',
    venue: 'Under Review, Journal',
    description: 'Proposed a CNN achieving 91.03% accuracy for handwritten prescription recognition to reduce medicine-related errors.',
    imageUrl: '/images/prescription.png',
  }
];

// ------------------ 📄 ONGOING RESEARCH ------------------
export const ONGOING_RESEARCH: Research[] = [
  {
    title: 'Exploring Embedding Approaches for Text Classification across Traditional Machine Learning, Deep Learning, and Transformer Models',
    description: 'Investigating the effectiveness of various embedding techniques to improve text classification performance using traditional machine learning models, deep learning approaches, and transformer-based architectures.',
    tags: ['Text Classification', 'Embedding Techniques', 'Traditional ML', 'Deep Learning', 'Transformers'],
    status: 'Drafting',  // New field for status
  },
  {
    title: 'Benchmarking Multilingual Prompting for Code Evaluation across Multiple Programming Languages',
    description: 'Developing a benchmark framework to evaluate the performance of multilingual prompting techniques in code generation and comprehension tasks across different programming languages.',
    tags: ['Code Evaluation', 'Multilingual', 'Prompting', 'Programming Languages', 'Benchmarking'],
    status: 'In Progress',  // New field for status
  },
  {
    title: 'Deep Learning-Based Handwritten Medicine Name Recognition for Improved Prescription Accuracy',
    description: 'Designing a deep learning system to recognize medicine names in handwritten prescriptions, aiming to reduce medication errors and improve prescription accuracy.',
    tags: ['Handwriting Recognition', 'Medicine Name Recognition', 'Deep Learning', 'Prescription Accuracy'],
    status: 'Completed',  // New field for status
  }
];

// ------------------ 🧪 PROJECTS ------------------
export const PROJECTS: Project[] = [
  // ---------- Personal Projects ----------
  {
    date: 'Oct–Nov 2025',
    title: 'DIALOGUE2SOAP: Medical SOAP Notes Generator',
    description: 'Fine-tuned microsoft/Phi-3-mini-4k-instruct to automatically generate structured SOAP notes from doctor-patient dialogues — applying LLM domain adaptation and instruction tuning to automate clinical documentation.',
    githubUrl: 'https://github.com/raselmeya94',
    secondaryUrl: { label: 'Hugging Face', url: 'https://huggingface.co/raselmeya2194/med_dialogue2soap' },
    tags: ['LLM Fine-tuning', 'Phi-3', 'Healthcare NLP', 'Prompt Engineering'],
    imageUrl: '/images/projects/dialogue2soap.png',
    category: 'Personal',
    featured: true,
  },
  {
    date: 'Jul–Aug 2025',
    title: 'Multilingual RAG System – Bengali + English',
    description: 'Production-ready Retrieval-Augmented Generation pipeline supporting Bengali and English queries with FAISS + MiniLM embeddings. Processed Bengali PDFs via Mistral OCR with custom preprocessing for noise, ligature errors, and mixed-language content.',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['RAG', 'FAISS', 'MiniLM', 'Bengali NLP', 'OCR'],
    imageUrl: '/images/projects/multilingual-rag.png',
    category: 'Personal',
    featured: true,
  },
  {
    date: 'May 2025',
    title: 'GitWithQA – AI-Powered GitHub Q&A Platform',
    description: 'Transforms any GitHub repository into an interactive Q&A interface for code understanding — repository parsing, embedding generation, and a contextual retrieval pipeline let developers explore functions, files, and logic conversationally.',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['LLM', 'RAG', 'GitHub', 'Code Understanding'],
    imageUrl: '/images/projects/gitwithqa.png',
    category: 'Personal',
  },
  {
    date: '2025',
    title: 'Multi-Task LLM-Based Web Application',
    description: 'Unified LLM-powered Streamlit platform covering email generation, text and audio summarization, document conversion, Q&A, and article writing in a single multi-task interface.',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['LLM', 'Streamlit', 'GenAI', 'Python'],
    imageUrl: '/images/projects/multitask-llm-app.png',
    category: 'Personal',
  },
  {
    date: '2023',
    title: 'Lekhoni | লেখনি – Handwritten Bangla Dataset Platform',
    description: 'Community-driven platform for collecting handwritten Bangla characters for OCR and AI research — drawing canvas with label selection, real-time stats, and a secure backend powering a scalable dataset pipeline.',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['OCR', 'Dataset', 'Bengali NLP', 'Full-stack'],
    imageUrl: '/images/projects/lekhoni.png',
    category: 'Personal',
  },
  {
    date: '2023',
    title: 'Resume Categorization – NLP & ML',
    description: 'Automated resume classification system: trained and evaluated Random Forest, SVM, ANN, and LSTM classifiers, with scripts to parse PDFs and categorize resumes efficiently.',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['NLP', 'Random Forest', 'SVM', 'LSTM'],
    imageUrl: '/images/projects/resume-categorization.png',
    category: 'Personal',
  },
  {
    date: '2022–2023',
    title: 'Kaggle Machine Learning Projects',
    description: 'Notebook Expert — diverse ML projects spanning healthcare, NLP, and computer vision: COVID-19 analysis, heart failure & breast cancer prediction, ASD detection, mango leaf disease detection, spam classification, and Bengali handwritten digit / multi-label text classification.',
    githubUrl: 'https://www.kaggle.com/raselmeya',
    tags: ['ML', 'Kaggle', 'Healthcare', 'Computer Vision'],
    imageUrl: '/images/projects/kaggle-projects.png',
    category: 'Personal',
  },

  // ---------- Company Projects ----------
  {
    date: 'Ongoing',
    title: 'Production AI / NLP Systems',
    description: 'Backend AI & NLP systems shipped to production: AI Summarizer, Invoice Information Extractor, Nothi Application Generator, Certificate Classifier, Content Generator, YouTube/Zoom Summarizers, Resume Analyzer, Bokhshi OCR, Biennial Transparency Report Analyzer, Voucher Digitizer, Speech-to-Text, and a Security Surveillance System — all built as scalable, production-ready APIs.',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['Production ML', 'APIs', 'OCR', 'Speech-to-Text'],
    imageUrl: '/images/projects/production-ai-systems.png',
    category: 'Company',
    featured: true,
  },
  {
    date: 'Dec 2024',
    title: 'AI Resume Prescreening Automation (n8n)',
    description: 'n8n-driven resume screening system: automated ingestion, PDF text extraction, and LLM-based job-role matching with a dynamic FitScore for candidate ranking — results synced to Google Sheets with automated HR/applicant email notifications.',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['n8n', 'LLM', 'Workflow Automation', 'HRTech'],
    imageUrl: '/images/projects/resume-prescreening-n8n.png',
    category: 'Company',
  },
  {
    date: 'Jan 2025',
    title: 'Invoice Processing Automation Agent (n8n)',
    description: 'Automated invoice retrieval from Google Drive with prompt-engineered LLM field extraction (vendor, amount, date, tax), validated and stored in Google Sheets, plus real-time WhatsApp notifications for the finance team.',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['n8n', 'LLM', 'WhatsApp API', 'Finance Automation'],
    imageUrl: '/images/projects/invoice-processing-n8n.png',
    category: 'Company',
  },
  {
    date: '2025',
    title: 'Appointment Booking Automation Agent (n8n)',
    description: 'End-to-end appointment booking workflow with LLM-assisted scheduling logic, conversational booking flow, calendar integration, and automated confirmation notifications.',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['n8n', 'LLM', 'Calendar Integration'],
    imageUrl: '/images/projects/appointment-booking-n8n.png',
    category: 'Company',
  },
  {
    date: '2025',
    title: 'Certification Information Extraction Agent (n8n)',
    description: 'Automated extraction of key fields from TIN, VAT, Trade License, Incorporation, and other certificates by combining OCR with LLM-based parsing inside an n8n workflow.',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['n8n', 'OCR', 'LLM Parsing'],
    imageUrl: '/images/projects/certificate-extraction-n8n.png',
    category: 'Company',
  },
  {
    date: '2025',
    title: 'Certificate Classification & Info Extraction System',
    description: 'Web and Android app for real-time image-to-information extraction — Django APIs classify certificate types and extract key fields, with mobile support for real-time image upload.',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['Django', 'ML', 'OCR', 'Android'],
    imageUrl: '/images/projects/certificate-classification.png',
    category: 'Company',
  },
  {
    date: 'Article',
    title: 'X-Road Data Exchange Layer Solution',
    description: 'Enhanced secure data exchange in public-sector systems — implemented API gateway best practices and interoperability patterns for e-government infrastructure.',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['API Gateway', 'e-Governance', 'Interoperability'],
    imageUrl: '/images/projects/xroad.png',
    category: 'Company',
  },

  // ---------- Open Source / PyPI & Hugging Face ----------
  {
    date: '2025',
    title: 'Bangla Synonyms (PyPI)',
    description: 'Bangla NLP package for programmatic synonym lookup — offline datasets plus live web scraping, with source metadata and CLI support.',
    githubUrl: 'https://github.com/raselmeya94',
    secondaryUrl: { label: 'PyPI', url: 'https://pypi.org/' },
    tags: ['Python', 'PyPI', 'Bengali NLP', 'CLI'],
    imageUrl: '/images/projects/bangla-synonyms.png',
    category: 'Open Source',
  },
  {
    date: '2024',
    title: 'pandas2toon (PyPI)',
    description: 'Bidirectional converter between pandas DataFrames and the TOON format, supporting nested structures, customizable formatting, and flexible I/O.',
    githubUrl: 'https://github.com/raselmeya94/pandas2toon',
    secondaryUrl: { label: 'PyPI', url: 'https://pypi.org/project/pandas2toon/' },
    tags: ['Python', 'PyPI', 'Data Serialization'],
    imageUrl: '/images/projects/pandas2toon.png',
    category: 'Open Source',
  },
  {
    date: '2023',
    title: 'Directory Visualizer (PyPI)',
    description: 'CLI utility that generates Markdown trees and Mermaid diagrams of project directory structures, with configurable traversal depth for documenting large codebases.',
    githubUrl: 'https://github.com/raselmeya94',
    secondaryUrl: { label: 'PyPI', url: 'https://pypi.org/project/directory-visualizer/' },
    tags: ['Python', 'CLI', 'Mermaid', 'Open Source'],
    imageUrl: '/images/projects/directory-visualizer.png',
    category: 'Open Source',
  },
  {
    date: '2023–2025',
    title: 'Hugging Face Models & Datasets',
    description: 'Fine-tuned Mistral and DeepSeek models for Bengali multi-label text classification, and published a Bengali multi-label text dataset openly for the NLP research community.',
    githubUrl: 'https://github.com/raselmeya94',
    secondaryUrl: { label: 'Hugging Face', url: 'https://huggingface.co/raselmeya2194' },
    tags: ['Hugging Face', 'Bengali NLP', 'Dataset', 'Mistral'],
    imageUrl: '/images/projects/huggingface-contrib.png',
    category: 'Open Source',
  },
];

export const PROJECT_CATEGORIES = ['All', 'Personal', 'Company', 'Open Source'] as const;



// ------------------ 🧰 SKILLS ------------------
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: <Code /> },
      { name: 'JavaScript', icon: <Code /> },
      { name: 'C++', icon: <Code /> },
      { name: 'C', icon: <Code /> },
      { name: 'SQL', icon: <Code /> },
      { name: 'HTML', icon: <Code /> },
      { name: 'CSS', icon: <Code /> },
      { name: 'R (Basic)', icon: <Code /> },
    ]
  },
  {
    title: 'Generative AI & NLP',
    skills: [
      { name: 'LLMs', icon: <BrainCircuit /> },
      { name: 'Agentic AI', icon: <BrainCircuit /> },
      { name: 'RAG', icon: <BrainCircuit /> },
      { name: 'Transformers', icon: <BrainCircuit /> },
      { name: 'NLP', icon: <BrainCircuit /> },
      { name: 'Prompt Engineering', icon: <BrainCircuit /> },
      { name: 'Feature Engineering', icon: <BrainCircuit /> },
    ]
  },
  {
    title: 'LLM Application Frameworks',
    skills: [
      { name: 'LangChain', icon: <BrainCircuit /> },
      { name: 'LangGraph', icon: <BrainCircuit /> },
      { name: 'Hugging Face Transformers', icon: <BrainCircuit /> },
      { name: 'sentence-transformers', icon: <BrainCircuit /> },
    ]
  },
  {
    title: 'ML & Deep Learning',
    skills: [
      { name: 'PyTorch', icon: <BrainCircuit /> },
      { name: 'TensorFlow', icon: <BrainCircuit /> },
      { name: 'Keras', icon: <BrainCircuit /> },
      { name: 'scikit-learn', icon: <BrainCircuit /> },
      { name: 'OpenCV', icon: <BrainCircuit /> },
    ]
  },
  {
    title: 'Vector Databases',
    skills: [
      { name: 'FAISS', icon: <Code /> },
      { name: 'ChromaDB', icon: <Code /> },
    ]
  },
  {
    title: 'Databases & Search',
    skills: [
      { name: 'PostgreSQL', icon: <Code /> },
      { name: 'MongoDB', icon: <Code /> },
      { name: 'Microsoft SQL Server', icon: <Code /> },
      { name: 'Elasticsearch', icon: <Code /> },
    ]
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Django', icon: <Code /> },
      { name: 'FastAPI', icon: <Code /> },
      { name: 'REST APIs', icon: <Code /> },
      { name: 'Streamlit', icon: <Code /> },
      { name: 'Gradio', icon: <Code /> },
    ]
  },
  {
    title: 'Workflow Automation',
    skills: [
      { name: 'N8N', icon: <Code /> },
      { name: 'API Integrations', icon: <Code /> },
      { name: 'AI Workflow Automation', icon: <Code /> },
    ]
  },
  {
    title: 'Data Science & Visualization',
    skills: [
      { name: 'Pandas', icon: <Code /> },
      { name: 'NumPy', icon: <Code /> },
      { name: 'Matplotlib', icon: <Code /> },
      { name: 'Seaborn', icon: <Code /> },
      { name: 'Plotly', icon: <Code /> },
    ]
  },
  {
    title: 'Tools & Version Control',
    skills: [
      { name: 'Docker', icon: <Code /> },
      { name: 'Linux', icon: <Code /> },
      { name: 'LaTeX', icon: <Code /> },
      { name: 'Git & GitHub', icon: <Github /> },
      { name: 'GitLab', icon: <Github /> },
    ]
  }
];


// ------------------ 🏆 CERTIFICATES ------------------
export const CERTIFICATES: Certificate[] = [
  { title: 'Neural Networks and Deep Learning', issuer: 'iNeuron.ai', url: '#' },
  { title: 'Intermediate Machine Learning', issuer: 'Kaggle', url: 'https://www.kaggle.com/learn/certification/raselmeya/intermediate-machine-learning' },
  { title: 'Problem Solving (Intermediate)', issuer: 'HackerRank', url: 'https://www.hackerrank.com/certificates/dc96eb295dca' },
  { title: 'Python (Basic)', issuer: 'HackerRank', url: 'https://www.hackerrank.com/certificates/916b2218d31c' },
  { title: 'Deep Learning Specialization', issuer: 'Coursera', url: '#' },
  { title: 'Natural Language Processing Specialization', issuer: 'Coursera', url: '#' }
];


// ------------------ 🌐 CONTACT ------------------
export const CONTACT_LINKS = [
  {
    name: 'Email',
    url: 'mailto:raselmeya2194@gmail.com',
    icon: <Mail className="w-6 h-6" />,
  },
  {
    name: 'Phone',
    url: 'tel:+8801623362194',
    icon: <Phone className="w-6 h-6" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/raselmeya',
    icon: <Linkedin className="w-6 h-6" />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/raselmeya94',
    icon: <Github className="w-6 h-6" />,
  },
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=-C_0gRUAAAAJ',
    icon: <BrainCircuit className="w-6 h-6" />,
  },
  {
    name: 'CV',
    url: '/portfolio/resume/rasel_meya_resume.pdf',
    icon: <FileText className="w-6 h-6" />,
  }

];
