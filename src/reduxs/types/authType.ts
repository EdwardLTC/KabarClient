export interface ResponseLogin {
  accessToken: string
}

export interface UserInfo {
  _id: string
  name: string
  address: string
  phone: string
  avatar: string
  dob: string
  email: string
  createdAt: string
  updatedAt: string
}

export interface AuthState {
  token: string
  user: UserInfo
  enableLogin: boolean
}
