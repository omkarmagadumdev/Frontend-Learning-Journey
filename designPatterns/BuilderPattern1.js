class product{
    constructor(builder){
        if(builder.name != "iphone"){
            return {}
        }
        else{
            this.name = builder.name
        }
        // this.name = builder.name;
        if (builder.price > 0 && typeof (builder.price) === "number") {
            this.price = builder.price;
        } else {
            return {};
        }
        this.category = builder.category;
        this.rating = builder.rating;
        this.description = builder.description;

    }

    get price() {
        return this.price;
    }
    set price(p) {
        if (p > 0) {
            this.price = p;
        } else {
            console.log("Invalid price");
        }
    }
}

let p = new product({
    name: "iphone",
    price: 1000,
    category: "Electronics",
    description: "Apple Iphone",
    rating: 4.5
})

console.log(p);

console.log(product.price())

