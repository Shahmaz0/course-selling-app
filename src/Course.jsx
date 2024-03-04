import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Grid, Typography} from "@mui/material";
import {Card} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

function Course() {
    let { courseId } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {

        axios.get("http://localhost:3000/admin/course/" + courseId,{
            method : "GET",
            headers : {
                "Authorization" : "Bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            setCourse(res.data.course);
        })
    }, []);

    if (!course){
        return <div style={{height: "100vh", justifyContent: "center", flexDirection: "column"}}>
            Loading.....
        </div>
    }

    return <div>
        <GrayTopper title = {course.title} />
        <Grid container>
            <Grid item lg={8} md={12} sm={12}>
                <UpdateCard course={course} setCourse={setCourse} />
            </Grid>
            <Grid item lg={4} md={12} sm={12}>
                <CourseCard course={course} />
            </Grid>
        </Grid>
    </div>
}
function GrayTopper({title}){
    return <div style={{height: 250, background: "#212121", top: 0, width: "100vw", zIndex: 0, marginBottom: 250}}>
        <div style={{height: 250, display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <div>
                <Typography variant={"h3"} textAlign={"center"} style={{color: "white", fontWeight: 600}}>
                    {title}
                </Typography>
            </div>
        </div>

    </div>
}
function UpdateCard({course, setCourse}) {
    console.log("hi! there from update card")
    const [title, setTitle] = useState(course.title);
    const [description, setDescription] = useState(course.description);
    const [image, setImage] = useState(course.imageLink);
    const [price, setPrice] = useState(course.price);
    console.log("UpdateCard rendered")
    return <div style={{display: "flex", justifyContent: "center"}}>
        <Card variant="outlined" style={{width: 600, marginTop: 200}}>
            <Typography style={{marginBottom: 10}}>Update course details</Typography>
            <TextField
                value={title}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
                fullWidth={true}
                label={"Title"}
                variant={"outlined"}
            />

            <TextField
                value={description}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
                fullWidth={true}
                label={"Description"}
                variant={"outlined"}
            />
            <TextField
                value={image}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setImage(e.target.value)
                }}
                fullWidth={true}
                label={"Image link"}
                variant={"outlined"}
            />
            <TextField
                value={price}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setPrice(e.target.value)
                }}
                fullWidth={true}
                label={"Price"}
                variant={"outlined"}
            />
            <Button
                variant="contained"
                onClick={ async () => {

                    await axios.put("http://localhost:3000/admin/courses/" + course._Id, {
                        title: title,
                        description: description,
                        imageLink: image,
                        price
                    }, {
                        headers : {
                            "content-type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("token")
                        }
                    });
                    let updatedCourse = {
                        _id: course._Id,
                        title: title,
                        description: description,
                        imageLink: image,
                        price
                    };
                    setCourse(updatedCourse);
                }}>
                Update Course</Button>
        </Card>
    </div>
}

function CourseCard({course}) {
    // const course = props.course;
    return <div style={{display: "flex", marginTop: 50, justifyContent: "center",}}>
        <Card style={{
            margin: 10,
            width: 350,
            minHeight: 200,
            borderRadius: 20,
            marginRight: 50,
            paddingBottom: 15,
            zIndex: 2
        }}>
            <img src={course.imageLink} style={{width: 350}}/>
            <div style={{marginLeft: 10}}>
                <Typography variant={"h5"}>{course.title}</Typography>
                <Typography variant={"subtitle2"} style={{color: "gray"}}>Price</Typography>
                <Typography variant={"subtitle1"}>
                    <b>
                        Rs {course.price}
                    </b>
                </Typography>
            </div>
        </Card>
    </div>
}

export default Course;