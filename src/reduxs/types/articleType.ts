export interface ResponseGetArticles {
  
}

export type Article = {
  _id: string
  title: string
  content: string
  image: string
}

export type ArticleState = {
  statusCode: number
  articles: Article[]
}
