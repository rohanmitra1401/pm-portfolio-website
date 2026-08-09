export interface Degree {
    /** Qualification and specialization, e.g. "MBA, International Business" */
    qualification: string;
    /** Awarding institution */
    institution: string;
    /** City, country */
    location: string;
}

/** Tools and disciplines shown as pills. */
export const SKILLS: string[] = [
    "SQL",
    "Power BI (Adv)",
    "Behavioral Analytics",
    "Product Strategy",
    "SaaS Ops",
    "Figma",
];

/** Professional certifications. */
export const CERTIFICATIONS: string[] = [
    "PM School Certification",
    "Google Data Analytics",
];

/** Degrees, most advanced first. */
export const EDUCATION: Degree[] = [
    {
        qualification: "MBA",
        institution: "Delhi School of Economics",
        location: "Delhi, India",
    },
    {
        qualification: "B.E., Electronics & Communication",
        institution: "Thapar Institute of Engineering & Technology",
        location: "Punjab, India",
    },
];
