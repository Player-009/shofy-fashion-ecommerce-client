import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  overrideExisting:true,
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (data) => ({
        url: "https://shofy-fashion-ecommerce-backend.vercel.app/api/category/add",
        method: "POST",
        body: data,
      }),
    }),
    getShowCategory: builder.query({
      query: () => `https://shofy-fashion-ecommerce-backend.vercel.app/api/category/show`
    }),
    getProductTypeCategory: builder.query({
      query: (type) => `https://shofy-fashion-ecommerce-backend.vercel.app/api/category/show/${type}`
    }),
  }),
});

export const {
 useAddCategoryMutation,
 useGetProductTypeCategoryQuery,
 useGetShowCategoryQuery,
} = categoryApi;
