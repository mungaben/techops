import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import Users from './schemas/Users'
import courseComments from './schemas/courseComments'
import courseIntructor from './schemas/courseIntructor'
import courseReviews from './schemas/courseReviews'
import CourseData from './schemas/CourseData'
import courseLesson from './schemas/courseLesson'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent,Users,courseComments,courseIntructor,courseReviews,CourseData,courseLesson ],
}
