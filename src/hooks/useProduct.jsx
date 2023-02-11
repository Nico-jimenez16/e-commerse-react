import { useState, useEffect } from 'react';
import { getProductPorId } from '../services/data.js';

// ! HOOKS EN CONSTRUCCION - FALTAN ALGUNAS COSITAS EN EL BACKEND 

export const useProduct = (id) => {
  const [product, setProduct] = useState({});
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await getProductPorId(id)
        setProduct(data);
      } catch (err) {
        console.error(err)
      } finally {
        setStatus(true);
      }
    };

    fetchProduct();
  }, [id]);

  return { status, product };
};