import { userRegisterRequest } from '@reduxs/types/userType'
import { apiService } from './apiService'
import { EndPoint } from './endPoint'

export const userService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<any, userRegisterRequest>({
      query: (user) => ({
        url: EndPoint.register,
        method: 'POST',
        body: user,
      }),
      transformResponse: (response: any) => response.data,
    }),
  }),
})

export const { useRegisterMutation } = userService
