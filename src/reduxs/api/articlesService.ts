import { articleList } from '@reduxs/reducers'
import { ArticleState, ListArticleResponse } from '@reduxs/types/articleType'
import { Article } from '@utils/types'
import { apiService } from './apiService'
import { EndPoint } from './endPoint'

export const articlesService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query<ArticleState, void>({
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

    getArticleDetail: builder.query<Article, string>({
      query: (id) => EndPoint.articleDetails + id + '/detail',
      transformResponse: (response: ListArticleResponse) => {
        console.log(response)
        return response.data[0]
      },
    }),
  }),
})

export const { useLazyGetArticlesQuery, useLazyGetArticleDetailQuery} = articlesService
