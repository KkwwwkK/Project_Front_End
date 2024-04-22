import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import {ChangeEvent, FormEvent, useContext, useEffect, useState} from "react";

import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.tsx";
import {useNavigate} from "react-router-dom";
import {UserData} from "../../../data/user/UserData.tsx";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import {GoogleLoginButton} from "react-social-login-buttons";
import {Divider} from "@mui/material";

export default function LoginForm() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigate = useNavigate();

    const loginUser = useContext<UserData | null | undefined>(LoginUserContext);

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
        setPassword(event.target.value)
    }

    // funtion for loginFail


    const handleLogin = async (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
       const loginResult = await FirebaseAuthService.handleSignInWithEmailAndPassword(email, password);
       if(loginResult){
           navigate(-1);
       } else {
           // set isLoginFail(true);
           alert("login failed");
       }
    }

    const handleGoogleSignIn = async ()=>{
        if(await FirebaseAuthService.handleSignInWithGoogle()){
            navigate(-1);
        }
    }

    useEffect(() => {
        if(loginUser){
            navigate("/");
        }
    }, [loginUser]);

    return (
        <Container component="form"
                   onSubmit = {handleLogin}
                   maxWidth="xs" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh'
        }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Avatar sx={{ m: 2, bgcolor: 'black' }}>
                    <FaceOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="div" sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        // autoComplete="email"
                        autoFocus
                        onChange={handleEmailChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        // autoComplete="current-password"
                        onChange={handlePasswordChange}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2,
                            backgroundColor: '#212121', // Background color
                            color: '#fff', // Font color
                            '&:hover': {
                            backgroundColor: '#333', // Hover background color (optional)
                        },
                        }}
                    >
                        Sign In
                    </Button>
                    <Divider sx={{my: 1}}/>
                    <GoogleLoginButton
                        style={{width: '100%', margin: "0"}}
                        onClick={handleGoogleSignIn}
                    />
                </Box>
            </Box>
        </Container>
    );
}