import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

function Appbar() {

    const navigate = useNavigate()
    const [userEmail, setUserEmail] = useState(null)
    useEffect(() => {
        fetch("http://localhost:3000/admin/me", {
            method : "GET",
            headers : {
                "Authorization"  : "Bearer " + localStorage.getItem("token")
            }
        }).then((res) => {
            res.json().then((data) => {
                if (data.username){
                    setUserEmail(data.username)
                }
            })
        })
    }, []);

    if (userEmail) {
        return <div style={{
            display: "flex",
            justifyContent: "space-between"
        }}>
            <div>
                <Typography>Coursera</Typography>
            </div>
            <div style={{display: "flex"}}>
                {userEmail}
                <div style={{marginRight: "10px"}}>
                    <Button
                        variant="contained"
                        onClick={() => {
                            localStorage.setItem("token", null)
                            window.location = "/ "
                            // window.location = "/signup"
                        }}>
                        logout</Button>

                </div>
            </div>

        </div>
    }


    return <div style={{
        display: "flex",
        justifyContent: "space-between"
    }}>
        <div>
            <Typography>Coursera</Typography>
        </div>
        <div style={{display: "flex"}}>

            <div style={{marginRight: "10px"}}>
                <Button
                    variant="contained"
                    onClick={() => {
                        navigate("/signup")
                        // window.location = "/signup"
                    }}>
                    Sign up</Button>

            </div>
            <div>
                <Button
                    variant="contained"
                    onClick={() => {
                        navigate("/signin")
                        // window.location = "/signin"
                    }}>
                    Sign in</Button>
            </div>
        </div>

    </div>
}

export default Appbar;