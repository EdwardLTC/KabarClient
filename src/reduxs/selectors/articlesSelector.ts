import { RootReducerName } from '@reduxs/reducers/type'
import { ArticleState } from '@reduxs/types/articleType'

export const getArticles = (state: {
  root: { [RootReducerName.articles]: ArticleState }
}) => state.root.articles
