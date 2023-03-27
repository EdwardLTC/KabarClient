import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ListArticleResponse } from '@reduxs/types/articleType'
import { RootReducerName } from './type'

const defaultArticleState: ListArticleResponse = {
  data: [],
  error: false,
  responseTimestamp: '',
  statusCode: 0
}
const articleSlice = createSlice({
  name: RootReducerName.articles,
  initialState: defaultArticleState,
  reducers: {
    articleList(state: ListArticleResponse, action: PayloadAction<ListArticleResponse>) {
      state.data = action.payload.data
      state.error = action.payload.error
      state.responseTimestamp = action.payload.responseTimestamp
      state.statusCode = action.payload.statusCode
    },
  },
})

export const { articleList } = articleSlice.actions
export const AricleReducer = articleSlice.reducer
