"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'


const Course = () => {
  
  return (
    <div className=' mt-10 w-full '>
      <Carousel>
        <CarouselContent className='w-full'>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 p-1">
            <div className='bg-red-400 w-full '>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">1</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 p-1">
            <div className='bg-yellow-400 w-full '>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">1</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 p-1">
            <div className='bg-green-400 w-full '>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">1</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>


    </div>
  )
}

export default Course