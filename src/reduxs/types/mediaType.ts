export interface MediaResponse {
  data: ImageResponse
  error: boolean
  responseTimestamp: Date
  statusCode: number
}

export interface ImageResponse {
  _id: string
  createdAt: Date
  encoding: string
  filename: string
  mimetype: string
  originalname: string
  path: string
  size: number
  updatedAt: Date
}
