const course = {
    courseName: "Js by hitesh",
    price: "2999",
    courseInstructor: "hitesh sir"
}

// to print 

console.log(course.courseInstructor);

// destructing 

const {courseInstructor} = course; 
console.log(courseInstructor);


// or 
 const {courseInstructor : Instructor} = course;
 console.log(Instructor);