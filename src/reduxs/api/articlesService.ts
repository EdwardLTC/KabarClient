import { articleList } from '@reduxs/reducers'
import {
  Article,
  ArticleState,
  ListArticleResponse,
  PostArticleRequest,
} from '@reduxs/types/articleType'
import { apiService } from './apiService'
import { EndPoint } from './endPoint'
import { transformUrl } from '@utils/helper'

export const articlesService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query<ArticleState, void>({
      query: () => EndPoint.article,
      transformResponse: (response: ListArticleResponse) => {
        return {
          ...response,
          data: response.data.map((article: Article) => ({
            ...article,
            image: transformUrl(article.image),
          })),
        }
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(articleList(data))
        } catch (error) {}
      },
    }),

    getArticleDetail: builder.query<Article, string>({
      query: (id) => EndPoint.article + id,
      transformResponse: (response: ListArticleResponse) => {
        const data = response.data[0]
        return data
        return {
          ...data,
          image: transformUrl(response.data[0].image),
        }
      },
    }),

    postArticle: builder.mutation<any, PostArticleRequest>({
      query: (article) => {
        return {
          url: EndPoint.article,
          method: 'POST',
          body: article,
        }
      },
      transformResponse: (response: any) => {
        return response.data
      },
    }),
  }),
})

export const {
  useLazyGetArticlesQuery,
  useLazyGetArticleDetailQuery,
  usePostArticleMutation,
} = articlesService
