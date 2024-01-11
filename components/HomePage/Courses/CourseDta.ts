

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

export const coursesData: CoursesData = [
    {
        id: 1,
        title: 'Introduction to Quantitative Methods',
        description: 'This course is designed to introduce students to the basic concepts and logic of statistical reasoning and give the students introductory-level practical ability to choose, generate, and properly interpret appropriate descriptive and inferential methods.',
        coursePrice: 19,
        courseDiscount: 10,
        courseImage: '/assets/images/courses/course1.jpg',
        courseVideo: 'https://www.youtube.com/watch?v=9j-_dOze4IM',
        courseLevel: 'Beginner',
        courseDuration: '2h 30m',
        totalStudents: 32,
        courseLanguage: 'English',
        courseAssesments: 4.5,
        courseSkills: ['Data Analysis', 'Statistics', 'Quantitative Methods'],
        courseIncludes: ['2.5 hours on-demand video', '1 downloadable resource', 'Full lifetime access', 'Access on mobile and TV'],
        courseDescription: 'This course is designed to introduce students to the basic concepts and logic of statistical reasoning and give the students introductory-level practical ability to choose, generate, and properly interpret appropriate descriptive and inferential methods.',
        courseRequirements: ['Basic knowledge of algebra', 'Basic knowledge of statistics'],
        courseInstructor: {
            id: 1,
            name: 'Jenny Wilson',
            title: 'Professor',
            image: '/assets/images/instructors/instructor1.jpg',
            email: 'mungaben21@gmail.com',
            phone: '+1 212-946-2700',
            website: 'www.example.com',
            socials: {
                facebook: 'https://www.facebook.com/',
                twitter: 'https://twitter.com/',
                linkedin: 'https://www.linkedin.com/',
                dribbble: 'https://dribbble.com/',
            },
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        courseLessons: [
            {
                id: 1,
                title: 'Introduction to Quantitative Methods',
                duration: '15:35',
                video: 'https://www.youtube.com/watch?v=9j-_dOze4IM',
                locked: false,
            },
            {
                id: 2,
                title: 'Data Analysis Fundamentals',
                duration: '15:35',
                video: 'https://www.youtube.com/watch?v=9j-_dOze4IM',
                locked: false,
            },
            {
                id: 3,
                title: 'Data Analysis Techniques',
                duration: '15:35',
                video: 'https://www.youtube.com/watch?v=9j-_dOze4IM',
                locked: true,
            },
            {
                id: 4,
                title: 'Data Analysis for Business and Economics',
                duration: '15:35',
                video: 'https://www.youtube.com/watch?v=9j-_dOze4IM',
                locked: true,
            },
            {
                id: 5,
                title: 'Data Analysis for Social Science',
                duration: '15:35',
                video: 'https://www.youtube.com/watch?v=9j-_dOze4IM',
                locked: true,
            },
        ],

        courseReviews: [
            {
                id: 1,
                name: 'John Doe',
                title: 'Great course',
                image: '/assets/images/user/user1.jpg',
                rating: 4,
                date: '3 days ago',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                id: 2,
                name: 'Jassica William',
                title: 'Easy to follow',
                image: '/assets/images/user/user2.jpg',
                rating: 4,
                date: '4 days ago',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                id: 3,
                name: 'Ricky Martin',
                title: 'Good Content',
                image: '/assets/images/user/user3.jpg',
                rating: 4,
                date: '5 days ago',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
        ],
    
        courseComments: [
            {
                id: 1,
                name: 'John Doe',
                title: 'Great course',
                image: '/assets/images/user/user1.jpg',
                date: '3 days ago',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                replies: [
                    {
                        id: 1,
                        name: 'Jassica William',
                        title: 'Easy to follow',
                        image: '/assets/images/user/user2.jpg',
                        date: '4 days ago',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    },
                ],
            },
            {
                id: 2,
                name: 'Ricky Martin',
                title: 'Good Content',
                image: '/assets/images/user/user3.jpg',
                date: '5 days ago',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                replies: [
                    {
                        id: 1,
                        name: 'John Doe',
                        title: 'Great course',
                        image: '/assets/images/user/user1.jpg',
                        date: '3 days ago',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    },
                ],
            },
        ],
    }
];





