import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Typography} from "@mui/material";
import {Card} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import courses from "./Courses.jsx";
import {atom, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";

function Course() {
    let { courseId } = useParams();

    const setCourses = useSetRecoilState(coursesState)

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

    return <div style={{display : "flex", justifyContent: "center"}}>
        <CourseCard courseId = {courseId} />
        <UpdateCard courseId = {courseId} />
    </div>
}
function UpdateCard(props) {
    console.log("hi! there from update card")
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const course = props.course;
    const [courses, setCourses] = useRecoilState(coursesState);

    console.log("UpdateCard rendered")
    return <div style={{display: "flex", justifyContent: "center", paddingTop: 80}}>
        <Card variant="outlined" style={{width: 400, padding: 20}}>
            <Typography textAlign={"center"}>Update course details</Typography>
            <TextField
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
                fullWidth={true}
                label={"Title"}
                variant={"outlined"}
            />

            <TextField
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
                fullWidth={true}
                label={"Description"}
                variant={"outlined"}
            />
            <TextField
                onChange={(e) => {
                    setImage(e.target.value)
                }}
                fullWidth={true}
                label={"Image link"}
                variant={"outlined"}
            />
            <Button
                variant="contained"
                onClick={() => {
                    function callback2(data) {
                        // alert("Course Updated")
                        let updatedCourses = [];
                        for (let i = 0; i < courses.length; i++) {
                            if (courses[i].id == props.courseId) {
                                updatedCourses.push({
                                    id: props.courseId,
                                    title: title,
                                    description: description,
                                    imageLink: image
                                })
                            }else {
                                updatedCourses.push(courses[i]);
                            }
                        }
                        setCourses(updatedCourses);
                    }


                    function callback1(res) {
                        res.json().then(callback2)
                    }

                    fetch("http://localhost:3000/admin/courses/" + props.courseId, {
                        method: "PUT",
                        body: JSON.stringify({
                            title: title,
                            description: description,
                            imageLink: image,
                            published: true
                        }),
                        headers: {
                            "content-type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("token")
                        }
                    }).then(callback1)

                }}>
                Update Course</Button>
        </Card>
    </div>
}

function CourseCard(props) {
    const courses = useRecoilValue(coursesState)
    let course = null;
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].id == props.courseId){
            course = courses[i]
        }
    }
    console.log("course card rendered")

    if (!course){
        return "loading....."
    }
    return <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,

    }}>
        <Typography textAlign={"center"} variant={"h6"}>{course.title}</Typography>
        <Typography textAlign={"center"} variant={"subtitle1"}>{course.description}</Typography>
        <img style={{width: 300}} src={course.imageLink}/>
    </Card>
}

const coursesState = atom({
    key : 'coursesState',
    default : ''
});

export default Course;