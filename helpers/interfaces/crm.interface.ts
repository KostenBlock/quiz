
export interface ImageI {
    imageKey: string;
    format: string;
}

interface AnswerI {
    text: string;
    type: string;
}

interface QuestionI {
    head: string;
    type: string;
    answers: AnswerI[];
}

export interface CrmI {
    imageKey: string;
    format: string;
    displayPhone: string;
    phone: string;
    button: string;
    questions: QuestionI[];
    lead: string;
    logo: string;
    text: string[];
    bonus: string[];
    title: string;
    description: string;
    header: string;
}