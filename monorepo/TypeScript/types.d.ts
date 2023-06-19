// If we had all the possible skill names we could use the syntax below;
type skill = "React" | "HTML" | "JS" | "TypeScript";


declare enum Domain {
    Web = "Web",
    Connect = "Connect",
    Backend = "Backend",
}

interface Intern {
    name: string;
    age: number;
    skills: string[];
    // skills: skill[];
}

interface Junior {
    name: string;
    age: number;
    skills: string[];
    // skills: skill[];
    date_of_promotion: Date;
    domain: Domain;
}

export default interface Company {
    interns: Intern[];
    juniors: Junior[];
    country: string;
}