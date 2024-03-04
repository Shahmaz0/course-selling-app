import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import {useState} from "react";
import axios from "axios";
// import {useState} from "react";


function addCourse() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);

    return <div style={{display:"flex", justifyContent: "center", paddingTop: 80}}>
        <Card variant="outlined" style={{width: 400, padding: 20}}>
            <TextField
                style={{marginBottom: 10}}
                onChange={(e) =>{
                    setTitle(e.target.value)
                }}
                fullWidth={true}
                label={"Title"}
                variant={"outlined"}
            />

            <TextField
                style={{marginBottom: 10}}
                onChange={(e) =>{
                    setDescription(e.target.value)
                }}
                fullWidth={true}
                label={"Description"}
                variant={"outlined"}
            />
            <TextField
                style={{marginBottom: 10}}
                onChange={(e) =>{
                    setImage(e.target.value)
                }}
                fullWidth={true}
                label={"Image link"}
                variant={"outlined"}
            />
            <TextField
                style={{marginBottom: 10}}
                onChange={(e) =>{
                    setPrice(e.target.value)
                }}
                fullWidth={true}
                label={"Course price"}
                variant={"outlined"}
            />
            <Button
                variant="contained"
                onClick={async () => {

                    await axios.post("http://localhost:3000/admin/courses", {
                        title: title,
                        description: description,
                        imageLink: image,
                        published: true,
                        price
                    },{
                        headers: {
                            "content-type": "application/json",
                            "Authorization" : "Bearer " + localStorage.getItem("token")
                        }
                    });
                    alert("Course Added")
                }}>
                Add Course</Button>
        </Card>
    </div>
}

export default addCourse;