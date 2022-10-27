export class productModel {
    id = null ;
    title = '';
    image = '';
    description = '';
    details = '';
    price = 0;
    stock = 0;
    quantity_Sold = 0;
    discount = 0;
    favorite = false

    constructor(id ,title, image , description, details , price , stock , quantity_Sold , discount , favorite){
        this.id = id;
        this.title = title;
        this.image = image;
        this.description = description;
        this.details = details;
        this.price = price;
        this.stock = stock;
        this.quantity_Sold = quantity_Sold;
        this.discount = discount;
        this.favorite = favorite;
    }

}