export const endpoints = {
  postReview: '/api/reviews/:shopId',
  postShop: '/api/shops',
  getShopReviews: (id) => (`/api/shops/${id}/reviews`);
}


import endpoints from './thisfile'
import { url }
axios.post(url + getShopReviews(shopId))
