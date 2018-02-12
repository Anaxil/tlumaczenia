import { Customer } from "./customer";

export interface ClientDetails extends Customer {
    address: string;
    postal: string;
    city: string;
    phone: string;
    email: string;
}