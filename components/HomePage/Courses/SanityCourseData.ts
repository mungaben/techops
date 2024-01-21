

export const Coursedata =async () => {
    const data=await fetch('api/CourseData')
    console.log(data);
    
}