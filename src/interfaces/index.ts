export interface OrderProduct {
  product_id: string;
  name: string;
  price: number;
  quantity: number;
  note: string;
}

export interface Order {
  customer_id: string;
  order_products: OrderProduct[];
}
