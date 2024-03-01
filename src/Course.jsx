import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Typography} from "@mui/material";
import {Card} from "@mui/material";

function Course() {
    let { courseId } = useParams();

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        function callback2(data){
            setCourses(data.courses)
        }
        function callback1(res){
            res.json().then(callback2)
        }
        fetch("http://localhost:3000/admin/courses/",{
            method : "GET",
            headers : {
                "Authorization" : "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1)
    }, []);

    let course = null;
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].id == courseId)
            course = courses[i]
    }
    if (!course){
        return <div>
            Loading......
        </div>
    }

    return <div>
        <CourseCard course={course} />
        <UpdateCard />
    </div>
}
function UpdateCard(props) {
    return <Card style={{
        margin : 10,
        width : 300,
        minHeight : 200
    }}>

    </Card>
}

function CourseCard(props) {
    const course = props.course;
    return <Card style={{
        margin : 10,
        width : 300,
        minHeight : 200
    }}>
        <Typography textAlign={"center"} variant={"h6"}>{course.title}</Typography>
        <Typography textAlign={"center"} variant={"subtitle1"}>{course.description}</Typography>
        <img style={{width : 300}} src={course.imageLink}/>
    </Card>
}

export default Course;