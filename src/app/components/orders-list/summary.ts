export interface Summary {
    id: number,
    customerName: string,
    status: number,
    type: string,
    startDate: Date,
    endDate: Date,
    sourceLang: string,
    destLang: string,
    comments: string,
    customerPrice: number,
    characters: number
}