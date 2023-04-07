export enum EndPoint {
  // auth
  login = 'auth/login',
  logout = 'auth/logout',

  // user
  register = 'users/register',
  changePassword = 'users/change-password',
  updateProfile = 'users/update-profile',

  //article
  listArticle = 'articles',
  myArticle = 'articles/my-articles',
  searchArticle = 'articles/search?/title=',
  createArticle = 'articles',
  articleDetails = 'articles/',

  //media
  postMedia = 'media/upload',
}
