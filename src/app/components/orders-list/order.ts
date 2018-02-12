export interface Order {
    id: number,
    customerName: string,
    status: number,
    startDate: Date,
    endDate: Date,
    interpreterPrice: number,
    customerPrice: number,
    characters: number
}