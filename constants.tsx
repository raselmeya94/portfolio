import React from 'react';
import type { NavLink, Experience, Publication, Project, SkillCategory, Certificate } from './types';
import { Github, Linkedin, Mail, FileText, BrainCircuit, Dna, Code, Phone } from 'lucide-react';


// ------------------ 🔗 NAVIGATION ------------------
export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Publications', href: '#publications' },
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
    title: 'Data Scientist',
    company: 'Tappware Solution Limited',
    location: 'Dhaka, Bangladesh',
    description: [
      'Leading R&D in AI, NLP, and Generative LLMs for real-world Bengali and English applications.',
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


// // ------------------ 🧪 PROJECTS ------------------
// export const PROJECTS: Project[] = [
//   {
//     date: '2024–2025',
//     title: 'Multi-Task LLM-Based Web Platform',
//     description: 'Streamlit-based platform offering summarization, Q&A, document conversion, and content generation using LLMs.',
//     githubUrl: 'https://github.com/raselmeya94',
//     tags: ['LLM', 'Python', 'Streamlit', 'GenAI']
//   },
//   {
//     date: '2024',
//     title: 'Multilingual Retrieval-Augmented Generation (RAG) System',
//     description: 'Developed a multilingual RAG system supporting Bengali and English using FAISS vector search and MiniLM embeddings.',
//     githubUrl: 'https://github.com/raselmeya94',
//     tags: ['RAG', 'LLM', 'FAISS', 'MiniLM']
//   },
//   {
//     date: '2023',
//     title: 'Lekhoni: Bengali Handwriting Dataset Platform',
//     description: 'Built a data collection and visualization platform for Bengali handwriting recognition and OCR research.',
//     githubUrl: 'https://github.com/raselmeya94',
//     tags: ['OCR', 'Dataset', 'Bengali']
//   },
//   {
//     date: '2023',
//     title: 'Directory Visualizer (PyPI Package)',
//     description: 'Published a CLI tool that generates visual directory trees for large software projects in Markdown or Mermaid.',
//     githubUrl: 'https://pypi.org/project/directory-visualizer/',
//     tags: ['Python', 'CLI', 'Open Source']
//   },
//   {
//     date: '2024',
//     title: 'Bengali Spell Checker',
//     description: 'Developed a real-time spelling correction system for the Bengali language using NLP techniques.',
//     githubUrl: 'https://github.com/raselmeya94',
//     tags: ['NLP', 'Python', 'Bengali']
//   }
// ];
// ------------------ 🧪 PROJECTS ------------------
export const PROJECTS: Project[] = [
  {
    date: '2025',
    title: 'Multi-Task LLM-Based Web Application',
    description: 'Built a unified platform for email generation, text and audio summarization, document conversion, question answering, and article/blog writing.',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['LLM', 'Python', 'Streamlit', 'GenAI']
  },
  {
    date: '2025',
    title: 'LLM Web Application for Document Question Answering',
    description: 'Designed an application that answers questions based on document content, utilizing Large Language Models (LLMs).',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['LLM', 'Python', 'QA']
  },
  {
    date: '2025',
    title: 'Certificate Classification and Info Extractor',
    description: 'Built a web and Android app for real-time image-to-information extraction using machine learning. Developed APIs with Django to classify and extract key information from various certificates (TIN, VAT, Trade License, Incorporated, etc.).',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['ML', 'Python', 'Django', 'OCR']
  },
  {
    date: '2025',
    title: 'Resume Pre-Screening Tools',
    description: 'AI-powered resume pre-screening tool to streamline recruitment. Features: Bulk Resume Upload, Candidate Analysis, Automated Pre-Selection, Pre-Screening Notifications.',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['AI', 'Python', 'HRTech']
  },
  {
    date: '2024',
    title: 'Multilingual Retrieval-Augmented Generation (RAG) System',
    description: 'Developed a multilingual RAG system supporting Bengali and English using FAISS vector search and MiniLM embeddings.',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['RAG', 'LLM', 'FAISS', 'MiniLM']
  },
  {
    date: '2024',
    title: 'Bengali Spell Checker',
    description: 'Developed a Bengali spelling checker system that provides real-time spelling corrections to enhance text accuracy.',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['NLP', 'Python', 'Bengali']
  },
  {
    date: '2023',
    title: 'GitWithQA – AI-Powered GitHub Q&A Platform',
    description: 'Transforms any GitHub repo into an intelligent Q&A interface using LLM-based code understanding. Enables interactive chat to explore code, functions, and file responsibilities without setup.',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['LLM', 'Python', 'GitHub', 'RAG']
  },
  {
    date: '2023',
    title: 'Lekhoni | লেখনি - Handwritten Bangla Dataset Platform',
    description: 'Community-driven platform to collect handwritten Bangla character data. Features drawing canvas, label selection, real-time stats, secure backend. Supports Bangla OCR, handwriting recognition, and AI research.',
    githubUrl: 'https://github.com/raselmeya94',
    tags: ['OCR', 'Dataset', 'Bengali', 'AI']
  },
  {
    date: '2023',
    title: 'Directory Visualizer | PyPI Package',
    description: 'CLI tool to visualize directory structures as Markdown or Mermaid diagrams.',
    githubUrl: 'https://pypi.org/project/directory-visualizer/',
    tags: ['Python', 'CLI', 'Open Source']
  },
  {
    date: '2023',
    title: 'Huggingface Model and Dataset',
    description: 'Fine-tuned Mistral and DeepSeek for Bengali multi-label text classification. Developed and published a Bengali multi-label text dataset for open research.',
    githubUrl: 'https://huggingface.co/raselmeya2194',
    tags: ['NLP', 'Bengali', 'Dataset', 'Deep Learning']
  },
  {
    date: '2023',
    title: 'Kaggle Projects (Notebook Expert)',
    description: 'Worked on various ML projects including COVID-19 data analysis, heart failure prediction, Autism Spectrum Disorder detection, breast cancer prediction, mango leaf disease detection, resume categorization, spam classification, Bengali handwritten digit classification, and Bengali multi-label text classification.',
    githubUrl: 'https://www.kaggle.com/raselmeya',
    tags: ['ML', 'Python', 'Data Science', 'Kaggle']
  }
];



// ------------------ 🧰 SKILLS ------------------
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: <Code /> },
      { name: 'JavaScript', icon: <Code /> },
      { name: 'C++', icon: <Code /> },
      { name: 'SQL', icon: <Code /> },
      { name: 'R (Basic)', icon: <Code /> },
    ]
  },
  {
    title: 'ML/DL Frameworks',
    skills: [
      { name: 'PyTorch', icon: <BrainCircuit /> },
      { name: 'TensorFlow', icon: <BrainCircuit /> },
      { name: 'Keras', icon: <BrainCircuit /> },
      { name: 'scikit-learn', icon: <BrainCircuit /> },
      { name: 'Hugging Face', icon: <BrainCircuit /> },
    ]
  },
  {
    title: 'Data Science & Visualization',
    skills: [
      { name: 'Pandas', icon: <Code /> },
      { name: 'NumPy', icon: <Code /> },
      { name: 'OpenCV', icon: <Code /> },
      { name: 'Matplotlib', icon: <Code /> },
      { name: 'Seaborn', icon: <Code /> },
    ]
  },
  {
    title: 'Frameworks & Tools',
    skills: [
      { name: 'Django', icon: <Code /> },
      { name: 'FastAPI', icon: <Code /> },
      { name: 'Streamlit', icon: <Code /> },
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
    url: '/resume/rasel_meya_resume.pdf',
    icon: <FileText className="w-6 h-6" />,
  }
];
