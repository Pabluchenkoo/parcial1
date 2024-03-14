import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ImageDisplay from "./imageDisplay";
import {useEffect, useState} from "react";



const defaultTheme = createTheme();

export default function Home() {

    const [user, setUser] = useState([]);


    useEffect(() => {

        fetch('https://raw.githubusercontent.com/Pabluchenkoo/parcial1/main/src/user2.json')
            .then(response => {
                console.log(user)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setUser(data))
            .catch(error => console.error('There has been a problem with your fetch operation:', error));
    }, []);





    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xl">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Grid container spacing={7} >

                        <Grid item xs={12} sm={6}>
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <ImageDisplay/>
                            </Avatar>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography component="h2" variant="p">
                                {user[0].username}
                            </Typography>
                            <Typography component="h4" variant="p">
                                {user[0].fistName} {user[0].lastName}
                            </Typography>
                            <Typography component="p" variant="p">
                                website
                            </Typography>

                        </Grid>
                        <Grid container spacing={1} sm={ {textAlign:'right'}}>
                            <Grid item xs={12} sm={2}>
                                <Typography component="h2" variant="p">
                                    {user[0].posts}  Posts
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <Typography component="h2" variant="p">
                                    {user[0].followers}  Followers
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <Typography component="h2" variant="p">
                                    {user[0].following}  Following
                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                    <br/>
                </Box>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <ImageDisplay />
                    </Grid>
                    <Grid item xs={4}>
                        <ImageDisplay />
                    </Grid>
                    <Grid item xs={4}>
                        <ImageDisplay />
                    </Grid>
                    <Grid item xs={4}>
                        <ImageDisplay />
                    </Grid>
                    <Grid item xs={4}>
                        <ImageDisplay />
                    </Grid>
                    <Grid item xs={4}>
                        <ImageDisplay />
                    </Grid>
                    <Grid item xs={4}>
                        <ImageDisplay />
                    </Grid>
                    <Grid item xs={4}>
                        <ImageDisplay />
                    </Grid>
                    <Grid item xs={4}>
                        <ImageDisplay />
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}