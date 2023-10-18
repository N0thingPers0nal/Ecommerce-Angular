export interface Product {
  // shirts: { id: number; name: string; price: number; photo: string };
  // pants: { id: number; name: string; price: number; photo: string };
  // shoes:{ id: number; name: string; price: number; photo: string };
  id: number;
  image: string;
  title: string;
  price: number;
  count?: number;
  userid?:number
}
