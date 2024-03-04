import {useEffect, useState} from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";

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

export function Course({course}){
    const navigate = useNavigate();

    return <Card style={{
        margin : 10,
        width : 300,
        minHeight : 200,
        padding: 20
    }}>
        <Typography textAlign={"center"} variant={"h6"}>{course.title}</Typography>
        <Typography textAlign={"center"} variant={"subtitle1"}>{course.description}</Typography>
        <img style={{width : 300}} src={course.imageLink}/>
        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
            <Button variant={"contained"} size={"large"} onClick={() => {
                navigate("/course/" + course._id);
            }}>Edit</Button>
        </div>
    </Card>
}

export default Courses;