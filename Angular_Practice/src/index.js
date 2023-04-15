var usernamme = "Khan";
document.write(usernamme);
var tv = {
    Name: "Samsung",
    Price: 3443,
    Qty: 23,
    Cities: ["Hyd", "Jagdalpur"],
    Rating: { Rate: 4.5, Count: 23 },
    Total: function () {
        return this.Price * this.Qty;
    },
    Print: function () {
        document.write("".concat(this.Name, " \n ").concat(this.Price, " \n ").concat(this.Qty, " \n ").concat(this.Cities, " \n ").concat(this.Rating, " \n").concat(this.Rating.Rate, " \n").concat(this.Rating.Count, " \n").concat(this.Total()));
    }
};
tv.Print();
