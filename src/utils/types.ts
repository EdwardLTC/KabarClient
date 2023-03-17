export type ArticleCreateedBy = {
  _id: string
  name: string
  avatar: string
}

export type Article = {
  _id: string
  title: string
  content: string
  image: string
  createdAt: string
  createdBy: ArticleCreateedBy
}
