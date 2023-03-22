import { AuthState } from '@reduxs/types'
import { apiService } from './apiService'
import { EndPoint } from './endPoint'
import { authInfo } from '@reduxs/reducers'

export const authService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthState, any>({
      query: (user) => {
        return {
          url: EndPoint.login,
          method: 'POST',
          body: user,
        }
      },
      transformResponse: (response: any) => response.data,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(authInfo(data))
        } catch (error) {}
      },
    }),
  }),
})

/* 
* In RTK we have 2 way export function
* Option 1: useLazy${ Name your service function}Query. 
- This way better, because you can call your func in service anytime you want

* Option 2: use${ Name your service function}Query. 
- When you call this func service, it only run first time, component start.
*/

export const { useLoginMutation } = authService
