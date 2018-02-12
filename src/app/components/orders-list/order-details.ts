import { Order } from "./order";

export interface OrderDetails extends Order {
    sourceLang: string,
    destLang: string,
    type: string,
    attachments: string,
    comments: string,
}