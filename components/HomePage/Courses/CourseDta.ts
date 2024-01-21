

export type Users={
    id: number;
    name: string;
    title: string;
    image: string;
    email: string;
    phone: string;
    website: string;
    socials: {
        facebook: string;
        twitter: string;
        linkedin: string;
        dribbble: string;
    };
    bio: string;
}[];






// instructor data
export type courseInstructor ={
    id: number;
    name: string;
    title: string;
    image?: string;
    email: string;
    phone: string;
    website: string;
    socials: {
        facebook: string;
        twitter: string;
        linkedin: string;
        dribbble: string;
    };
    bio: string;
};

export type courseLessons= {
    id: number;
    title: string;
    duration: string;
    video: string;
    locked: boolean;
}[];

export type  courseReviews={
    id: number;
    name: string;
    title: string;
    image: string;
    rating: number;
    date: string;
    description: string;
}[];

export type  courseComments = {
    id: number;
    name: string;
    title: string;
    image?: string;
    date: string;
    description: string;
    replies: {
        id: number;
        name: string;
        title: string;
        image: string;
        date: string;
        description: string;
    }[];
}[];

// course data
export type CourseData  ={
    id: number;
    title: string;
    description: string;
    coursePrice?: number;
    courseDiscount?: number;
    courseImage?: string;
    courseVideo?: string;
    courseLevel: string;
    courseDuration: string;
    totalStudents?: number;
    courseLanguage: string;
    courseAssesments: number;
    courseSkills: string[];
    courseIncludes: string[];
    courseDescription: string;
    courseRequirements: string[];
    courseInstructor: courseInstructor;
    courseLessons: courseLessons;
    courseReviews: courseReviews;
    courseComments: courseComments;
}



// 10 coursesdata

export type CoursesData = CourseData[];

type CourseInstructor = {
    name: string;
    slug: string;
    image: string; // Assuming this is an image URL
    description: string;
    title: string;
    email: string;
    phone: string;
    address: string;
    website: string;
    socialLinks: string[];
    trainerSlug: string;
    trainerCreatedAt: string;
    trainerUpdatedAt: string;
    trainerPublishedAt: string;
  };
  
  type CourseLesson = {
    name: string;
    slug: string;
    image: string; // Assuming this is an image URL
    description: string;
    title: string;
    lessonSlug: string;
    lessonCreatedAt: string;
    lessonUpdatedAt: string;
    lessonPublishedAt: string;
  };
  
  type CourseReview = {
    name: string;
    slug: string;
    image: string; // Assuming this is an image URL
    description: string;
    title: string;
    reviewSlug: string;
    reviewCreatedAt: string;
    reviewUpdatedAt: string;
    reviewPublishedAt: string;
  };
  
  type CourseComment = {
    name: string;
    slug: string;
    image: string; // Assuming this is an image URL
    description: string;
    title: string;
    commentSlug: string;
    commentCreatedAt: string;
    commentUpdatedAt: string;
    commentPublishedAt: string;
  };
  
  export type CourseDatas = {
    title: string;
    description?: string;
    coursePrice?: number;
    courseDiscount?: number;
    courseImage: string; // Assuming this is an image URL
    courseVideo?: string;
    courseLevel?: string;
    courseDuration?: string;
    totalStudents?: number;
    courseLanguage?: string;
    courseAssesments?: number;
    courseSkills?: string[];
    courseIncludes?: string[];
    courseDescription?: string;
    courseRequirements?: string[];
    courseInstructor?: CourseInstructor;
    courseLessons?: CourseLesson[];
    courseReviews?: CourseReview[];
    courseComments?: CourseComment[];
  };

