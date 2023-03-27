import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleState } from '@reduxs/types/articleType'
import { RootReducerName } from './type'

const defaultArticleState: ArticleState = {
  data: [],
}
const articleSlice = createSlice({
  name: RootReducerName.articles,
  initialState: defaultArticleState,
  reducers: {
    articleList(state: ArticleState, action: PayloadAction<ArticleState>) {
      state.data = action.payload.data
    },
  },
})

export const { articleList } = articleSlice.actions
export const AricleReducer = articleSlice.reducer
