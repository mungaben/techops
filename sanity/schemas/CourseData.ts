import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'courseData',
  title: 'Course Data',
  type: 'document',
  fields: [
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'coursePrice',
      title: 'Course Price',
      type: 'number',
    }),
    defineField({
      name: 'courseDiscount',
      title: 'Course Discount',
      type: 'number',
    }),
    defineField({
      name: 'courseImage',
      title: 'Course Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'courseVideo',
      title: 'Course Video',
      type: 'url',
    }),
    defineField({
      name: 'courseLevel',
      title: 'Course Level',
      type: 'string',
    }),
    defineField({
      name: 'courseDuration',
      title: 'Course Duration',
      type: 'string',
    }),
    defineField({
      name: 'totalStudents',
      title: 'Total Students',
      type: 'number',
    }),
    defineField({
      name: 'courseLanguage',
      title: 'Course Language',
      type: 'string',
    }),
    defineField({
      name: 'courseAssesments',
      title: 'Course Assessments',
      type: 'number',
    }),
    defineField({
      name: 'courseSkills',
      title: 'Course Skills',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'courseIncludes',
      title: 'Course Includes',
      type: 'array',
      of: [{ type: 'string' }],

    }),
    defineField({
      name: 'courseDescription',
      title: 'Course Description',
      type: 'text',
    }),
    defineField({
      name: 'courseRequirements',
      title: 'Course Requirements',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'courseInstructor',
      title: 'Course Instructor',
      type: 'reference',
      to: [{ type: 'courseInstructor' }],
    }),
    defineField({
      name: 'courseLessons',
      title: 'Course Lessons',
      type: 'reference',
      to: [{ type: 'courseLesson' }],
    }),
    defineField({
      name: 'courseReviews',
      title: 'Course Reviews',
      type: 'reference',
      to: [{ type: 'courseReview' }],
    }),
    defineField({
      name: 'courseComments',
      title: 'Course Comments',
      type: 'reference',
      to: [{ type: 'courseComment' }],
    }),
    // tags
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'courseImage',
    },
  },
});