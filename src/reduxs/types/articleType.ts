export interface ListArticleResponse {
  error: boolean
  responseTimestamp: string
  statusCode: number
  data: Article[]
}

export interface ArticleState {
  data: Article[]
}
export interface Article {
  _id: string
  title: string
  content: string
  image: string
  createdAt: Date
  createdBy: ArticleCreateedBy
}

export interface ArticleCreateedBy {
  _id: string
  name: string
  avatar: string
}

export interface PostArticleRequest {
  title: string
  content: string
  image: string
}
