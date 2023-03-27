import { createSlice } from '@reduxjs/toolkit'
import { RootReducerName } from './type'
import { LoadingType } from '@reduxs/types'

const defaultAuthState: LoadingType = {
  enableLoading: false,
}

const loadingSlice = createSlice({
  name: RootReducerName.loading,
  initialState: defaultAuthState,
  reducers: {
    showLoading(state: LoadingType) {
      state.enableLoading = true
    },
    hideLoading(state: LoadingType) {
      state.enableLoading = false
    },
  },
})

export const { hideLoading, showLoading } = loadingSlice.actions
export const LoadingReducer = loadingSlice.reducer
