import { RootReducerName } from '@reduxs/reducers/type'
import { ListArticleResponse } from '@reduxs/types/articleType'

export const ListArticles = (state: {
  root: { [RootReducerName.articles]: ListArticleResponse }
}) => state.root[RootReducerName.articles].data
