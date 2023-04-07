import { MediaResponse } from '@reduxs/types/mediaType'
import { apiService } from './apiService'
import { EndPoint } from './endPoint'

export const mediaService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    postMedia: builder.mutation<string, FormData>({
      query: (formData) => {
        return {
          url: EndPoint.postMedia,
          method: 'POST',
          body: formData,
        }
      },
      transformResponse: (response: MediaResponse) => {
        const data = response.data
        return data.path.replace('http://localhost', 'http://172.25.128.1')
      },
    }),
  }),
})

export const { usePostMediaMutation } = mediaService
