import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const AuthApi = createApi({
    reducerPath : "AuthApi",
    baseQuery: fetchBaseQuery({
        baseUrl:'https://formspree.io/f'
    }),
    tagTypes:['AuthApi'],
    endpoints:builder => ({
        login:builder.mutation({
            query: (data) => ({
                url : '/mrgvybye',
                method:'POST',
                body:data,
                responseType:"json"
            }),
            invalidatesTags:["AuthApi"]
        }),
    }),
})
export const {useLoginMutation} = AuthApi