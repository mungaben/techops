import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'courseLesson',
  title: 'Course Lesson',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'url',
    }),
    defineField({
      name: 'locked',
      title: 'Locked',
      type: 'boolean',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});