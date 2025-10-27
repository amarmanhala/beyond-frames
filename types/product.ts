export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: string; // or number if storing as cents
  size: {
    [key: string]: string;
  };
  discount: string;
  imageURL: string;
  videoURL: string;
  createdAt: string; // Consider using Date type
}
