export interface ListArticleResponse {
  error: boolean
  responseTimestamp: string
  statusCode: number
  data: Article[]
}

export interface Article {
  _id: string
  title: string
  content: string
  image: string
  createdAt: string
  createdBy: CreatedBy
}

export interface CreatedBy {
  _id: string
  name: string
  avatar: string
}
