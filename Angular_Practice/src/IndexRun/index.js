"use strict";
exports.__esModule = true;
var Product = {
    Name: "Murtaza",
    Price: 34345,
    Qty: 23,
    Cities: ["Hyd", "jdp"],
    Rating: { Rate: 4.5, Count: 34 },
    Total: function () {
        return this.Price * this.Qty;
    },
    Print: function () {
        document.write("".concat(this.Name, " \n ").concat(this.Price, " \n ").concat(this.Qty, " \n ").concat(this.Cities, " \n ").concat(this.Rating, " \n").concat(this.Rating.Rate, " \n").concat(this.Rating.Count, " \n").concat(this.Total()));
    }
};
Product.Print();
