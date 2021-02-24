import { useEffect, useState } from 'react';
import { useRecord } from '../../hooks/record';
import api from '../../services/api';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface ReturnValue {
  products: Product[];
}

function useProductList(): ReturnValue {
  const [products, setProducts] = useState<Product[]>([]);
  const { retrieveOrder } = useRecord();

  useEffect(() => {
    retrieveOrder();
    api.get('/products').then(productList => {
      setProducts([...productList.data.products]);
    });
  }, [retrieveOrder]);

  return { products };
}

export default useProductList;
