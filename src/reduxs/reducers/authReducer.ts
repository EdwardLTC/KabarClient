import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '@reduxs/types'
import { RootReducerName } from './type'

const defaultAuthState: AuthState = {
  enableLogin: true,
  token: '',
  user: {
    _id: '',
    name: '',
    address: '',
    phone: '',
    avatar: '',
    dob: '',
    email: '',
    createdAt: '',
    updatedAt: '',
  },
}

const authSlice = createSlice({
  name: RootReducerName.auth,
  initialState: defaultAuthState,
  reducers: {
    authInfo(state: AuthState, action: PayloadAction<AuthState>) {
      state.token = action.payload.token
      state.user = action.payload.user
      state.enableLogin = false
    },
    removeAuthInfo(state: AuthState) {
      state.token = ''
      state.user = {
        _id: '',
        name: '',
        address: '',
        phone: '',
        avatar: '',
        dob: '',
        email: '',
        createdAt: '',
        updatedAt: '',
      }
      state.enableLogin = true
    },
  },
})

export const { authInfo, removeAuthInfo } = authSlice.actions
export const AuthReducer = authSlice.reducer
