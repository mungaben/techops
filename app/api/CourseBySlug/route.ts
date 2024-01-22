


// get the slug from the request

import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

// get the course data from sanity

export async function GET(req: NextRequest, res: NextResponse) {
    const slug = req.nextUrl.searchParams.get('query') as string;
    console.log(slug);
    
    
    const courseData = await client.fetch(`*[_type == "courseData" && slug.current == $slug]{
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
    }[]`, { slug });
    

    return NextResponse.json({
        courseData: courseData
    })



    
}