import { Buyer } from './buyer';
import { InvoiceItem } from "./invoiceItem";

export class Invoice {
    id: Number;
    kupacId: Number;
    guid: String;
    datumIzdavanja: Date;
    datumSlanja?: Date;
    brojRacuna: Number;
    komentarNarudzbe: String;
    pracenjePosiljke?: String;
    kupac: Buyer;
    izbrisano: Boolean;
    stavke: Array<InvoiceItem>;
}