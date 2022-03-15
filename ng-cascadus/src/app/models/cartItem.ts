export class CartItem {
    id: Number;
    naziv: String;
    kolicina: Number;
    cijena: Number;
    constructor(Id: Number, Naziv: String, Kolicina: Number, Cijena: Number) {
        this.id = Id;
        this.naziv = Naziv;
        this.kolicina = Kolicina;
        this.cijena = Cijena;
    }
}