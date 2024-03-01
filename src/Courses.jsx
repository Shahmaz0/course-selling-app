import {useEffect, useState} from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function Courses(){
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/admin/courses/" , {
            method : "GET",
            headers : {
                "Authorization" : "Bearer " + localStorage.getItem("token")
            }
        }).then((res) =>{
            res.json().then((data) => {
                setCourses(data.courses)
            })
        })
    }, []);
    return <div style={{display : "flex", flexWrap : "wrap", justifyContent : "center"}}>
        {courses.map(course => {
            return <Course course = {course} />
        })}
    </div>
}

export function Course(props){
    return <Card style={{
        margin : 10,
        width : 300,
        minHeight : 200
    }}>
        <Typography textAlign={"center"} variant={"h6"}>{props.course.title}</Typography>
        <Typography textAlign={"center"} variant={"subtitle1"}>{props.course.description}</Typography>
        <img style={{width : 300}} src={props.course.imageLink}/>
    </Card>
}

export default Courses;