import { RootReducerName } from '@reduxs/reducers/type'
import { AuthState } from '@reduxs/types'

export const getToken = (state: {
  root: { [RootReducerName.auth]: AuthState }
}) => state.root.auth.token

export const getUserInfo = (state: {
  root: { [RootReducerName.auth]: AuthState }
}) => state.root.auth.user

export const getStatusLogin = (state: {
  root: { [RootReducerName.auth]: AuthState }
}) => state.root.auth.enableLogin
