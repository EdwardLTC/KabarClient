import { RootState } from '@hooks/useRedux'
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  retry,
} from '@reduxjs/toolkit/query/react'
import {
  hideLoading,
  removeAuthInfo,
  showAlert,
  showLoading,
} from '@reduxs/reducers'
import { Mutex } from 'async-mutex'
import Config from 'react-native-config'

const END_POINT_REFRESH_TOKEN = '/refresh'

// create a new mutex
const mutex = new Mutex()

const handleError = (
  responseError: {
    error: FetchBaseQueryError
    data?: undefined
    meta?: FetchBaseQueryMeta | undefined
  },
  api: BaseQueryApi,
) => {
  console.log('responseError', responseError)
  api.dispatch(
    showAlert({
      id: 'handleErrorDefault_alert',
      title: `OOP ${responseError?.error.status}`,
      message: 'Lỗi hệ thống vui lòng quay lại sau.',
      okText: 'Đóng',
      options: { cancelable: true },
    }),
  )
}

const baseQuery = retry(
  fetchBaseQuery({
    baseUrl: Config.BASE_URL,
    credentials: 'include',
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = (getState() as RootState).root.auth.token
      if (token && endpoint !== END_POINT_REFRESH_TOKEN) {
        headers.set('authorization', `Bearer ${token}`)
        // other header....
      }
      return headers
    },
  }),
  {
    // default retry 3 times
    maxRetries: 3,
  },
)

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  api.dispatch(showLoading())

  // wait until the mutex is available without locking it
  await mutex.waitForUnlock()

  let result = await baseQuery(args, api, extraOptions)

  if (!result.error) {
    api.dispatch(hideLoading())
    return result
  }

  if (result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        // send refresh token to get new access token
        const refreshResult = await baseQuery(
          END_POINT_REFRESH_TOKEN,
          api,
          extraOptions,
        )
        if (refreshResult.data) {
          // store the new token
          //const user = api.getState().root.auth.user;
          // api.dispatch(setCredentials({ ...refreshResult.data, user }));

          // retry the initial query
          result = await baseQuery(args, api, extraOptions)
        } else {
          // api.dispatch(removeAuthInfo())
        }
      } finally {
        // release must be called once the mutex should be released again.
        release()
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  } else {
    handleError(result, api)
  }

  api.dispatch(hideLoading())

  // custom response data ex: result.data
  return result
}

export const apiService = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
})

// demo: https://github.dev/gitdagray/redux_jwt_auth/tree/main/src
// demo: https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#axios-basequery
