import { articleList } from '@reduxs/reducers'
import { ListArticleResponse } from '@reduxs/types/articleType'
import { apiService } from './apiService'
import { EndPoint } from './endPoint'

export const articlesService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query<ListArticleResponse, void>({
      query: () => EndPoint.listArticle,
      transformResponse: (response: ListArticleResponse) => {
        return response
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(articleList(data))
        } catch (error) {}
      },
    }),
  }),
})

export const { useLazyGetArticlesQuery } = articlesService
