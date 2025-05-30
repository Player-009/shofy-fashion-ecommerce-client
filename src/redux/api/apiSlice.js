import Cookies from "js-cookie";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const NEXT_PUBLIC_API_BASE_URL = 'https://shofy-fashion-ecommerce-backend-71ihc7b0l-nika0000s-projects.vercel.app';

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: async (headers, { getState, endpoint }) => {
      try {
        const userInfo = Cookies.get('userInfo');
        if (userInfo) {
          const user = JSON.parse(userInfo);
          if (user?.accessToken) {
            headers.set("Authorization", `Bearer ${user.accessToken}`);
          }
        }
      } catch (error) {
        console.error('Error parsing user info:', error);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
  tagTypes: ["Products","Coupon","Product","RelatedProducts","UserOrder","UserOrders","ProductType","OfferProducts","PopularProducts","TopRatedProducts"]
});
