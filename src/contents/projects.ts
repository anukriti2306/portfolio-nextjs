import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: 'Full-Stack Personal Finance Dashboard',
    description: 'Engineered a full-stack personal finance dashboard using React, Node.js, and MongoDB with JWT auth, RESTful APIs, and real-time data rendering; deployed via Vercel (frontend) and Render (backend).',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel', 'Render'],
    githubLink: 'https://github.com/anukriti2306/ExpenseTracker',
    demoLink: 'https://expense-tracker-weld-psi-21.vercel.app/',
    image: '/projects/proj1.gif',
  },
  {
    title: 'Human Stress Detection App',
    description: 'Designed a stress prediction system leveraging sleep-based physiological signals, achieving 85.3% accuracy via logistic regression; deployed with a Flask backend and Streamlit interface for real-time, interpretable outputs.',
    technologies: ['Python', 'Streamlit', 'Flask', 'Scikit-learn', 'NumPy', 'Railway'],
    githubLink: 'https://github.com/anukriti2306/biology-stress-detection-app',
    demoLink: 'https://stress-detector-a23.streamlit.app/',
    image: '/projects/proj2.jpg',
  },
  {
    title: 'VentBot SaaS AI',
    description: 'Engineered an agentic AI chatbot therapist with secure JWT auth, persistent chat history, and real-time AI interactions, deployed via Vercel (frontend) and Render (backend).',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel', 'Render', 'Groq SDK'],
    githubLink: 'https://github.com/anukriti2306/ventbot-saas-ai',
    demoLink: 'https://ventbot-saas-ai.vercel.app/',
    image: '/projects/proj3.png',
  }
];
