import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6626c747b625bf088c069afe.mockapi.io",
  }),

  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => {
        return '/cars';
      },
      transformResponse: (response) => {
        let params = new URLSearchParams(document.location.search);
        const page = Number(params.get("page") || 1);
        const limit = Number(params.get("limit") || 10);

        const filters = {};
        for (const [key, value] of params.entries()) {
          if (key !== 'page' && key !== 'limit') {
            filters[key] = value;
          }
        }

        const filteredResults = response.filter(car => {
          return Object.entries(filters).every(([key, value]) => {
            if (key === "TV" ||
              key === "airConditioner" ||
              key === "bathroom" ||
              key === "kitchen") {
              return car.details[key] === parseInt(value);
            }
            return car[key] === value;
          });
        });

        const totalResults = filteredResults.length;

        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;

        const paginatedResults = filteredResults.slice(startIndex, endIndex);

        return {
          cars: paginatedResults,
          total: totalResults
        };
      }
    }),
    getCarById: builder.query({
      query: (id) => `/cars/${id}`,
    }),
  }),
});

export const {
  useGetCarsQuery,
  useGetCarByIdQuery,
} = carsApi;
