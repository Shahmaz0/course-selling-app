//Using Axios And async await


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import {useState} from "react";
import axios from "axios";



function Signup() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return <div>
        <center>
            <div style={{
                paddingTop : "151px",
                marginBottom : "10px"}}>
                <Typography variant='h6'>
                    Welcome to Coursera. Sign up below.
                </Typography>
            </div>
        </center>
        <center>
            <Card variant="outlined" style={{width: 400, padding: 20}}>
                <TextField
                    onChange={(e) =>{
                        setEmail(e.target.value)
                    }}
                    id = "username"
                    fullWidth = {true}
                    label="Email"
                    variant="outlined"
                />
                <br /><br />
                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    id = "password"
                    fullWidth = {true}
                    label="Password"
                    variant="outlined"
                    type="password"
                />
                <br /><br />
                <Button
                    size='large'
                    variant="contained"
                    onClick = {async () => {

                        const response = await axios.post("http://localhost:3000/admin/signup", {
                            username: email,
                            password: password
                        })
                        let data = response.data;
                        localStorage.setItem("token", data.token)
                        window.location = "/"

                    }}>
                    Sign up
                </Button>



            </Card>
        </center>
    </div>
}

export default Signup;




// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Card from '@mui/material/Card';
// import { Typography } from '@mui/material';
// import {useState} from "react";
//
//
//
// function Signup() {
//     const [email, setEmail] = useState()
//     const [password, setPassword] = useState()
//
//     return <div>
//         <center>
//             <div style={{
//                 paddingTop : "151px",
//                 marginBottom : "10px"}}>
//                 <Typography variant='h6'>
//                 Welcome to Coursera. Sign up below.
//                 </Typography>
//             </div>
//         </center>
//         <center>
//             <Card variant="outlined" style={{width: 400, padding: 20}}>
//                 <TextField
//                     onChange={(e) =>{
//                         setEmail(e.target.value)
//                     }}
//                     id = "username"
//                     fullWidth = {true}
//                     label="Email"
//                     variant="outlined"
//                 />
//                 <br /><br />
//                 <TextField
//                     onChange={(e) => {
//                         setPassword(e.target.value);
//                     }}
//                     id = "password"
//                     fullWidth = {true}
//                     label="Password"
//                     variant="outlined"
//                     type="password"
//                 />
//                 <br /><br />
//                 <Button
//                     size='large'
//                     variant="contained"
//                     onClick = {() => {
//                         function callback2(data){
//                             localStorage.setItem("token", data.token)
//                             window.location = "/"
//                         }
//                         function callback1(res){
//                             res.json().then(callback2)
//                         }
//                         const username = document.getElementById("username").value;
//                         const password = document.getElementById("password").value;
//                         fetch("http://localhost:3000/admin/signup" ,{
//                             method : "POST",
//                             body : JSON.stringify({
//                                 username,
//                                 password
//                             }),
//                             headers : {
//                                 "content-type" : "application/json"
//                             }
//
//                         }).then(callback1);
//
//                     }}>
//                     Sign up
//                 </Button>
//
//
//
//             </Card>
//         </center>
//     </div>
// }
//
// export default Signup;