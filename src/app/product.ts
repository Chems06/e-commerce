export interface Product {
  name: string;
  preview: string;
  description: string;
  price: number;
  discount: {
    onOff: boolean;
    percent: number;
  };
}
