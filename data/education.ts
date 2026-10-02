export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  details?: string;
  year?: string;
}

export interface CertificationItem {
  title: string;
  instructor: string;
  date: string;
  description: string;
  badge?: string;
}

export const educationList: EducationItem[] = [
  {
    degree: "Bachelor of Arts (BA)",
    institution: "Veer Bahadur Singh Purvanchal University, Jaunpur",
    score: "70%",
    details: "Graduated with 70% aggregate marks"
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Board of High School and Intermediate Education",
    score: "65%",
    details: "Class XII Higher Secondary Examination"
  },
  {
    degree: "Secondary School Examination (Class X)",
    institution: "Board of High School and Intermediate Education",
    score: "61%",
    details: "Class X Secondary School Certificate"
  }
];

export const certifications: CertificationItem[] = [
  {
    title: "AI-Powered Sports Analytics Workshop",
    instructor: "Sai Prasad Kagne",
    date: "15 August 2026",
    description: "Specialized workshop covering AI-driven data modeling, automated sports metrics, predictive delivery analytics, and modern sports technology workflows.",
    badge: "Sports AI & Analytics"
  }
];
