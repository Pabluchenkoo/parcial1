# Parcial 1

Juan Pablo Junco\
201912957

# Atención:
El proyecto presenta un error al correrlo esto por no manejar una promesa correctamente. La manera de solucionarlo es pegar la siguiente linea de código. Que lo unico que hace es verificar que lo que sea que traiga la promesa contenga algo.

reemplazar la linea 66:103 con el siguiente código:
```
<Grid container spacing={1} >

                        <Grid item  sm={2}>
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <ImageDisplay name="profile" />
                            </Avatar>
                        </Grid>
                        {user.length>0 &&(<>
                            <Grid item xs={19} sm={10}>
                                <Typography component="h2" variant="p">
                                    {user[0].username}
                                </Typography>
                                <Typography component="h4" variant="p">
                                    {user[0].fistName} {user[0].lastName}
                                </Typography>
                                <Typography component="p" variant="p">
                                    website
                                </Typography>
                                <Grid container spacing={10}>
                                    <Grid item  sm={4}>
                                        <Typography component="h2" variant="p">
                                            {user[0].posts}  Posts
                                        </Typography>
                                    </Grid>
                                    <Grid item  sm={4}>
                                        <Typography component="h2" variant="p">
                                            {user[0].followers}  Followers
                                        </Typography>
                                    </Grid>
                                    <Grid item  sm={4}>
                                        <Typography component="h2" variant="p">
                                            {user[0].following}  Following
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </>)}

                    </Grid>
```

No se añadio nada más de lo que se desarrollo durante la hora del parcial, más que la validación de user.length > 0 para pintar el fragmento.
