import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography";


function Signin() {

    return <div>
        <center>
            <div style={{
                paddingTop : "150px",
                marginBottom : "10px"}}>
                <Typography variant='h6'>
                Welcome back. Sign in below.
                </Typography>
            </div>
        </center>
        <center>
            <Card variant="outlined" style={{width: 400, padding: 20}}>
                <TextField 
                    fullWidth = {true}
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined"
                />
                <br /><br />
                <TextField 
                    fullWidth = {true}
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined"
                    type="password" 
                />  
                <br /><br />
                <Button size='large' variant="contained">Sign in</Button>           
            </Card>
        </center>
    </div>
}   

export default Signin;