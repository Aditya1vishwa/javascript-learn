//destructuring in object

const course = {
    courseName:"javscript",
    price:"999",
    courseInstructor:"rampal"
}

course.courseInstructor

//const {courseInstructor}=course
//we can also give it new name
const {courseInstructor: instructor}=course
console.log(instructor);

//kabhi apna kaam kisi ke sar pe dal dena api kehlata hii

// {
//     name:"aditya",
//     coursename:"js in laptop",
//     price:"free for you"
// }

