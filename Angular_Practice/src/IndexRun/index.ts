import { IProduct } from "../Contract/contract";




let Product: IProduct = {
    Name: "Murtaza",
    Price: 34345,
    Qty: 23,
    Cities: ["Hyd", "jdp"],
    Rating: { Rate: 4.5, Count: 34 },
    Total() {
        return this.Price * this.Qty;
    },
    Print: function () {
        document.write(`${this.Name} \n ${this.Price} \n ${this.Qty} \n ${this.Cities} \n ${this.Rating} \n${this.Rating.Rate} \n${this.Rating.Count} \n${this.Total()}`)
    }
}
Product.Print();
