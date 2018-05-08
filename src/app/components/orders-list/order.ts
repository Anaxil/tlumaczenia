export interface Order {
    id: number;
    customer: Object;
    status: number;
    startDate: Date;
    endDate: Date;
    interpreterPrice: number;
    customerPrice: number;
    characters: number;
    certified: number;
    comments: string;
    sourceLang: string;
    destLang: string;
}