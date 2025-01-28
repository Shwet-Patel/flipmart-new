type item = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating?: {
      rate: number;
      count: number;
    };
    itemQuantity?: number;
  };

  
type cart = {
    id: number;
    userId: number;
    date: Date;
    products: {
      productId: string;
      quantity: number;
  }[];
    total?: number
  };
  