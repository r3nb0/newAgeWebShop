import { Product } from './product';
import { DiscountCode } from './discountCode';
export class InvoiceItem{
    Id: Number;
    RacunId: Number;
    ProizvodId: Number;
    Proizvod: Product;
    Kolicina: Number;
    CijenaPoKomadu: Number;
    UkupnaCijena: Number;
    PopustKodId: Number;
    PopustKod: DiscountCode;
    Izbrisano: Boolean;
}