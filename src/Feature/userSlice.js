import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const userApi=createApi({
    reducerPath: 'userApi',
    baseQuery:fetchBaseQuery({baseUrl: 'http://localhost:8080/'}),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `getAll/`,
            providesTags: ['User'],
        }),
 
    addUser: builder.mutation({
        query:(payload)=>({
            url:`addUser/`,
            method:'POST',
            body:payload
        }),
        transformResponse: (response, meta, arg) => {
            return response.data
        },
        transformErrorResponse: (response, meta, arg) => {
            return response.status
        },
        invalidatesTags: ['User'],
    })
})
})

export const {useAddUserMutation,useGetUsersQuery} = userApi
