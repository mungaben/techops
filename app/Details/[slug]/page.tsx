import { CourseDatas } from '@/components/HomePage/Courses/CourseDta'
import { Card, CardContent } from '@/components/ui/card'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'

const CourseDetails = async ({ params }: { params: { slug: string } }) => {
  console.log(params.slug)
  const { slug } = params

  const dataAvial = await client.fetch(`*[_type == "courseData" && slug.current == $slug]{
    title,
    description,
    coursePrice,
    courseDiscount,
    "courseImage":courseImage.asset->url,
    courseVideo,
    courseLevel,
    courseDuration,
    totalStudents,
    courseLanguage,
    courseAssesments,
    courseSkills,
    courseIncludes,
    courseDescription,
    courseRequirements,
    courseInstructor->{
        name,
        slug,
        "image":image.asset->url,
        description,
        title,
        email,
        phone,
        address,
        website,
        socialLinks,
        trainerSlug,
        trainerCreatedAt,
        trainerUpdatedAt,
        trainerPublishedAt,
    },
    courseLessons[]->{
        name,
        slug,
        image,
        description,
        title,
        lessonSlug,
        lessonCreatedAt,
        lessonUpdatedAt,
        lessonPublishedAt,
    },
    courseReviews[]->{
        id,
        name,
        title,
        image,
        rating,
        date,
        description,
    },
    courseComments[]->{
        id,
        name,
        title,
        image,
        date,
        description,
        replies[]->{
            id,
            name,
            title,
            image,
            date,
            description,
        }
    },
    "slug":slug.current,
    "id":_id,
}[]`, { slug })
  console.log(await dataAvial);
  const CourseDatasx = await dataAvial
  console.log(CourseDatasx);


  return (
    <div className=' container w-full items-start max-w-6xl flex justify-center  min-h-screen  mt-10' >

      <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid gap-5 '>
        {
          CourseDatasx && CourseDatasx.map((item: CourseDatas, index: any) => (
            <div key={index} className=''>
              <div className=' w-full h-full    border-none '>
                <Card className=' bg-transparent border-none gap-0 m-0 p-0'>
                  <CardContent className="flex aspect-square border-none    w-full h-full items-center justify-center ">
                    <div className='w-full h-full object-fill flex flex-col gap-2 mt-10' >
                      <Image
                        src={item.courseImage}
                        alt={item.title}
                        width={200}
                        height={200}
                        className=' object-contain h-full w-full rounded-md'
                        priority
                      />
                      <div className=' h-full overflow-y-scroll no-scrollbar'>
                        <h3 className=' font-bold'>{item.title}</h3>
                        <h5 className='text-sm'>
                          <span className=' text-[10px]'>
                            {item.courseLessons && item.courseLessons.length > 0 ? item.courseLessons.length : 0} Lessons
                          </span>

                          {
                            item.courseSkills && item.courseSkills.length > 0 ? item.courseSkills.map((skills: any, index: any) => (
                              <div key={index} className=''>
                                <h5 className='text-xs'>{skills}</h5>
                              </div>
                            )) : null
                          }

                        </h5>
                      </div>



                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))

        }

      </div>


    </div>
  )
}

export default CourseDetails