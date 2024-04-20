export interface TransactionDto {
    tid:      number;
    buyer_id: number;
    datetime: Date;
    status:   string;
    total:    number;
    Items:    Item[];
}

export interface Item {
    tpid:     number;
    product:  Product;
    quantity: number;
    subtotal: number;
}

export interface Product {
    pid:         number;
    name:        string;
    description: string;
    image_url:   string;
    price:       number;
    stock:       number;
}
