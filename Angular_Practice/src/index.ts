var usernamme: string = "Khan";
document.write(usernamme);

let tv: {
    Name: string, Price: number,
    Qty: number,
    Cities: string[],
    Rating: {
        Rate: number,
        Count: number
    }
    , Total: any, Print?: any
} = {
    Name: "Samsung",
    Price: 3443,
    Qty: 23,
    Cities: ["Hyd", "Jagdalpur"],
    Rating: { Rate: 4.5, Count: 23 },
    Total: function () {
        return this.Price * this.Qty;
    },
    Print: function () {
        document.write(`${this.Name} \n ${this.Price} \n ${this.Qty} \n ${this.Cities} \n ${this.Rating} \n${this.Rating.Rate} \n${this.Rating.Count} \n${this.Total()}`);
    }

}
tv.Print();


