





// make a  next router 
// make a sanity request to get courseData
// response with image, course data , slugs and explanantion

import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";


export async function GET(res: NextResponse, req: NextResponse) {

    const courseData = await client.fetch(`*[_type == "courseData"]{
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
            name,
            slug,
            image,
            description,
            title,
            reviewSlug,
            reviewCreatedAt,
            reviewUpdatedAt,
            reviewPublishedAt,
        },
        courseComments[]->{
            name,
            slug,
            image,
            description,
            title,
            commentSlug,
            commentCreatedAt,
            commentUpdatedAt,
            commentPublishedAt,
        },
    }`);
    console.log(courseData);
    
    return NextResponse.json({
        courseData: courseData
    })
}
