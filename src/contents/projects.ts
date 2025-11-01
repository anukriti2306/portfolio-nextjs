import { Project } from "@/types"; // Assuming you have a type definition in @/types

export const projects: Project[] = [
  {
    title: 'VentBot: Agentic AI Therapist',
    description: 'Re-engineered an agentic AI chatbot with a Node.js/JWT backend and a React/TS frontend with Groq for high-speed, real-time AI interactions.',
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Groq SDK', 'Material UI', 'JWT'],
    githubLink: 'https://github.com/anukriti2306/ventbot-saas-ai',
    demoLink: 'https://ventbot-saas-ai.vercel.app/',
    image: '/projects/ventbot.png', // Updated placeholder path
  },
  {
    title: 'Full-Stack Personal Finance Dashboard',
    description: 'Engineered a full-stack dashboard from scratch with JWT authentication and RESTful APIs to handle secure user data and real-time data rendering.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel', 'Render', 'JWT'],
    githubLink: 'https://github.com/anukriti2306/ExpenseTracker',
    demoLink: 'https://expense-tracker-weld-psi-21.vercel.app/login',
    image: '/projects/finance-dashboard.gif', // Updated placeholder path
  },
  {
    title: 'Chat2Geo: AI Geospatial Platform',
    description: 'Designing an agentic AI system (inspired by an ISRO hackathon) to automate geospatial analysis from natural language prompts using a Chain-of-Thought LLM.',
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'PostGIS', 'LangChain.js', 'Mapbox GL', 'Supabase'],
    githubLink: 'https://github.com/aishu18-github/GeoScientist',
    demoLink: null, // No live demo
    image: '/projects/chat2geo.png', // Updated placeholder path
  },
  {
    title: 'Human Stress Detection App',
    description: 'Developed a classical logistic regression ML pipeline (85.3% accuracy) with a Flask backend and Streamlit UI to predict stress from physiological signals.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'Streamlit', 'Railway'],
    githubLink: 'https://github.com/anukriti2306/biology-stress-detection-app',
    demoLink: 'https://stress-detector-a23.streamlit.app/',
    image: '/projects/stress-detection.jpg', // Updated placeholder path
  },
  {
    title: 'CSE Department Student Portal',
    description: 'Developing the React frontend and contributing to the Node.js backend for a departmental Role-Based Access Control (RBAC) portal for 200+ students.',
    technologies: ['React', 'Node.js', 'Firebase', 'SendGrid'],
    githubLink: 'https://github.com/kilqwe/student-portal',
    demoLink: null, // No live demo
    image: '/projects/cse-portal.png', // Updated placeholder path
  },
];
