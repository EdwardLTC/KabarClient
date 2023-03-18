import { Article, Topic } from '@utils/types'

export const ArticleList: Article[] = Array.from({ length: 10 }).map(
  (_, index) =>
    ({
      _id: index.toString(),
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: 'https://picsum.photos/200/300',
      createdAt: new Date(),
      createdBy: {
        _id: index.toString(),
        name: 'John Doe',
        avatar: 'https://picsum.photos/200/300',
      },
    } as unknown as Article),
)

export const TopicList: Topic[] = [
  {
    _id: '1',
    title: 'Health',
    content:
      'Get energizing workout moves, healthy recipes, and advice on losing weight and feeling great from Health.com. Find out how to manage diabetes and depression, prevent heart attacks, and more.',
    image: 'https://picsum.photos/200/300',
  },
  {
    _id: '2',
    title: 'Technology',
    content:
      'the application of scientific knowledge to the practical aims of human life or to the design and construction of machines and structures.',
    image: 'https://picsum.photos/200/300',
  },
  {
    _id: '3',
    title: 'Art',
    content:
      'Art is a diverse range of human activity, and result. In its broadest sense, art is the expression or application of human creative skill and imagination, usually in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power.',
    image: 'https://picsum.photos/200/300',
  },
]
