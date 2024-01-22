import { Card, CardContent } from '@/components/ui/card'
import { client } from '@/sanity/lib/client'
import React from 'react'
import Image from 'next/image'
import { CourseDatas } from '@/components/HomePage/Courses/CourseDta'
import { Button } from '@/components/ui/button'
import { User, Users } from 'lucide-react'

const SingleDetails = async ({ params }: { params: { id: string } }) => {

    console.log(params.id)
    const { id } = params


    // get cotent by id
    const dataAvial = await client.fetch(`*[_type == "courseData" && _id ==$id]{
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
        rating,
        date,
        description,
    },
    courseCreatedAt,
    courseUpdatedAt,
    coursePublishedAt,  
    slug,
    _id,
    _createdAt,
    _updatedAt,
    _rev,
    _type,
    _key,
    _weak,
}[]`, { id })

    const CourseDatasx = dataAvial

    return (
        <div className=' container  w-full  max-w-6xl flex   min-h-screen  mt-10' >

            <div className=' flex  '>
                {
                    CourseDatasx && CourseDatasx.map((item: CourseDatas, index: any) => (
                        <div key={index} className=''>
                            <div className=' w-full h-full    border-none '>
                                <div className=' bg-transparent border-none gap-0 m-0 p-0'>
                                    <div className="  grid md:grid-cols-2  gap-4  ">
                                        <div className='   flex flex-col gap-2  ' >
                                            <div className=' flex '>
                                                <Image
                                                    src={item.courseImage}
                                                    alt={item.title}
                                                    width={500}
                                                    height={500}
                                                    className=' object-contain w-full   rounded-md'
                                                    priority
                                                />



                                            </div>

                                            <div className=' h-full overflow-y-scroll no-scrollbar'>

                                                <div className='text-sm'>
                                                    <span className=' text-[10px]'>
                                                        {item.courseLessons && item.courseLessons.length > 0 ? item.courseLessons.length : 0} Lessons
                                                    </span>
                                                    <div className=' grid  content-stretch gap-2' >
                                                        {
                                                            item.courseSkills && item.courseSkills.length > 0 ? item.courseSkills.map((skills: any, index: any) => (
                                                                <div key={index} className=' '>
                                                                    <button className='text-[7px] content-stretch px-1 py-0 rounded-xl text-nowrap bg-card-foreground/50  dark:bg-muted/60'  >{skills}</button>
                                                                </div>
                                                            )) : null
                                                        }
                                                    </div>



                                                </div>
                                            </div>



                                        </div>
                                        <div className=' min-h-full  content-stretch    flex  flex-col'>
                                            <div className=' h-1/2 flex flex-col justify-start mt-2 items-start mb-10 text-2xl gap-2'>
                                                <h2 className=' font-extrabold hover:underline-offset-4 hover:underline decoration-clone '>{item.title}</h2>
                                                <div className=' flex justify-start flex-row gap-5 items-start ' >
                                                    {
                                                        item.courseIncludes && item.courseIncludes.length > 0 ? item.courseIncludes.map((skills: any, index: any) => (
                                                            <div key={index} className=' '>
                                                                <button className='text-[7px] content-stretch px-1 py-0 rounded-xl text-nowrap bg-card-foreground/50  dark:bg-muted/60'  >{skills}</button>
                                                            </div>
                                                        )) : null
                                                    }

                                                </div>
                                                <div className=' flex flex-row gap-4 text-center mt-3 '>
                                                    <Users size={30} className=' text-center items-center justify-center flex' /> <span className='  text-muted-foreground'>{item.totalStudents}+ </span>
                                                </div>
                                                <div className=' flex justify-center gap-4'>
                                                    <User size={30} /><span className=' text-muted-foreground'>
                                                        {item.courseInstructor && item.courseInstructor.name}
                                                    </span>
                                                </div>



                                            </div>
                                            <div className=' h-1/2 mt-5'>
                                                <h1 className=' text-pretty text-xl line-height-3 py-2 font-bold'>
                                                    About this course
                                                </h1>
                                                <p className=' max-w-md'>
                                                    {item.courseDescription}
                                                </p>
                                            <Button className=' mt-3'>
                                                Enroll Now
                                            </Button>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))

                }

            </div>


        </div>
    )
}

export default SingleDetails