class Product {
  #price;
  #name;
  #description;

  constructor(builder) {
    // validations before object creation
    console.log("Calling Product constructor");
    if(builder.name == "iphone 17 pro max"){
        this.name = builder.name
    }
    else{
        return {}
    }
    this.name = builder.name;
    if (builder.price > 0) this.price = builder.price;
    this.description = builder.description;
    this.users = builder.users

  }

  displayProduct() {
    console.log(
      "Product displayed",
      this.#name,
      this.#price,
      this.#description
    );
  }

  static get Builder() {
    class Builder {
      constructor() {
        this.name = ""; // default values
        this.price = 0;
        this.description = "";
        this.users = "";


      }

      setName(incomingName) {
        this.name = incomingName;
        return this;
      }

      setPrice(incomingPrice) {
        this.price = incomingPrice;
        return this;
      }

      setDescription(incomingDescription) {
        this.description = incomingDescription;
        return this;
      }
      setUsers(incomingusers){
        this.users = incomingusers;
        return this

      }

      build() {
        return new Product(this);
      }
    }

    return new Builder();
  }
}

/**
 * Product.Builder() calls the Builder getter
 */
const p = Product.Builder.setName("iphone 17 pro max")
  .setPrice(1)
  .setDescription("expensive as hell")
  .setUsers("not for everyone")
  .build();
console.log(p);



