import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import {useState} from "react";
// import {useState} from "react";


function addCourse() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div style={{display:"flex", justifyContent: "center", paddingTop: 80}}>
        <Card variant="outlined" style={{width: 400, padding: 20}}>
            <TextField
                onChange={(e) =>{
                    setTitle(e.target.value)
                }}
                fullWidth={true}
                label={"Title"}
                variant={"outlined"}
            />

            <TextField
                onChange={(e) =>{
                    setDescription(e.target.value)
                }}
                fullWidth={true}
                label={"Description"}
                variant={"outlined"}
            />
            <Button
                variant="contained"
                onClick={() => {
                    function callback2(data) {
                        alert("Course Added")
                    }

                    function callback1(res) {
                        res.json().then(callback2)
                    }

                    fetch("http://localhost:3000/admin/courses",{
                        method: "POST",
                        body : JSON.stringify({
                            title: title,
                            description : description,
                            imageLink : "",
                            published : true
                        }),
                        headers: {
                            "content-type": "application/json",
                            "Authorization" : "Bearer " + localStorage.getItem("token")
                        }
                    }).then(callback1)

                }}>
                Add Course</Button>
        </Card>
    </div>
}

export default addCourse;