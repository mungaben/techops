"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React, { use, useEffect, useState } from 'react'
import { CourseDatas } from './CourseDta'
import Image from 'next/image'
import { Button } from '@/components/ui/button'


const Course = () => {

  // http://localhost:3000/api/CourseData
  const [CourseData, setCourseData] = useState<CourseDatas[]>()

  const data = async () => {
    const res = await fetch('api/CourseData',{cache:'no-cache'})
    const data = await res.json()
    console.log("coursedata",data.courseData)
    setCourseData(data.courseData)
   

  }

  useEffect(() => {
    data()
  }, [])



  return (
    <div className=' mt-10 w-full '>

      <Carousel >
        <CarouselContent className='w-full'>{
          CourseData && CourseData?.map((item:CourseDatas, index:any) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-[40%] border-none bg-transparent  ">
              <div className=' w-full h-full   border-none '>
                <Card className=' bg-transparent border-none'>
                  <CardContent className="flex aspect-square border-none    w-full h-full items-center justify-center ">
                    <div className='w-full h-full object-fill flex flex-col gap-2 mt-10' >
                      <Image
                      src={item.courseImage}
                      alt={item.title}
                      width={400}
                      height={400}
                      className='object-fill h-full w-full rounded-md'
                      priority
                      />
                       <div className=' h-full overflow-y-scroll no-scrollbar'>
                          <h3 className=' font-bold'>{item.title}</h3>
                          <h5 className='text-sm'>
                            <span className=' text-[10px]'>
                            {item.courseLessons && item.courseLessons.length > 0 ? item.courseLessons.length : 0} Lessons
                            </span>
                            
                            {
                              item.courseSkills && item.courseSkills.length > 0 ? item.courseSkills.map((skills:any, index:any) => (
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
            </CarouselItem>
          ))
        }

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>





    </div>
  )
}

export default Course