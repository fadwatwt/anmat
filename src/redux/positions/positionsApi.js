import { apiSlice } from "../api/apiSlice";

export const positionsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPositions: builder.query({
            query: (params) => ({
                url: "api/subscriber/organization/positions",
                method: "GET",
                params,
            }),
            transformResponse: (response) => response.data,
            providesTags: ["Positions"],
        }),
        createPosition: builder.mutation({
            query: (newPosition) => ({
                url: "api/subscriber/organization/positions",
                method: "POST",
                body: newPosition,
            }),
            invalidatesTags: ["Positions"],
        }),
        updatePosition: builder.mutation({
            query: ({ id, ...updatedPosition }) => ({
                url: `api/subscriber/organization/positions/${id}`,
                method: "PATCH",
                body: updatedPosition,
            }),
            invalidatesTags: ["Positions"],
        }),
        deletePosition: builder.mutation({
            query: (id) => ({
                url: `api/subscriber/organization/positions/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Positions"],
        }),
        deleteManyPositions: builder.mutation({
            query: (ids) => ({
                url: "api/subscriber/organization/positions/delete-many",
                method: "POST",
                body: { ids },
            }),
            invalidatesTags: ["Positions", "Departments", "Employees"],
        }),
    }),
});

export const {
    useGetPositionsQuery,
    useCreatePositionMutation,
    useUpdatePositionMutation,
    useDeletePositionMutation,
    useDeleteManyPositionsMutation,
} = positionsApi;
