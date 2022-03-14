import http from '../../helpers/http';

export const products = () => {
  return {
    type: 'GET_PRODUCTS',
    payload: http().get('/products?page=1&limit=8')
  };
};

export const getNextProducts = (page) => {
  return {
    type: 'GET_NEXT_PRODUCTS',
    payload: http().get(`/products?page=${page}&limit=8`)
  };
};

export const getProductDetail = (id) => {
  return {
    type: 'GET_PRODUCT_DETAIL',
    payload: http().get(`/products/${id}`)
  };
};
