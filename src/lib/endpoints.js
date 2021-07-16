export const endpoints = {
  //get
  getUser: '/api/users/', //'/api/users/:id'
  getSearchShop: '/shops/search',
  getHighRatingShops: '/shops/search',
  getRecentShops: '/recentShops',
  getShopsFilter: '/shops/filter',
  getAllShops: '/shops',
  getShop: '/api/shops/',  //'api/shops/:id'
  getShopReviews: (id) => (`/api/shops/${id}/reviews`),
  getReview: '/api/reviews/',  //'/reviews/:review_id'
  getUserReviews: '/api/reviews/users/',  //'/reviews/users/:id'

  //put
  updateHelpfulness: '/reviews/:review_id',

  //post
  postRegister: '/api/auth/register',
  postLogin: '/api/auth/login',
  postReview: '/api/reviews/', //'/api/reviews/:shopId'
  postShop: '/api/shops'
  // getShopReviews: (id) => (`/api/shops/${id}/reviews`)
};
