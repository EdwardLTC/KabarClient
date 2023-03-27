import { RootReducerName } from '@reduxs/reducers/type'
import { ArticleState } from '@reduxs/types/articleType'

export const ListArticles = (state: {
  root: { [RootReducerName.articles]: ArticleState }
}) => state.root[RootReducerName.articles].data
