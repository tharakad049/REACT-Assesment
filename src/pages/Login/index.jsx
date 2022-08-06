import React, {Component} from "react";
import withStyles from "@material-ui/styles/withStyles";
import {styleSheet} from "./style";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid>
                <div className={classes.container}>
                    <div className={classes.login__cover}>
                        <div className={classes.title__container}>
                            <Typography variant="h4">Login</Typography>
                        </div>
                        <div className={classes.form__container}>
                            <Typography variant="body1"><h4>User Name</h4></Typography>

                            <TextField
                                id="outlined-basic"
                                label="User name"
                                variant="outlined"
                            />
                            <Typography variant="body1"><h4>Password</h4></Typography>

                            <TextField
                                id="outlined-basic"
                                type="password"
                                label="Password"
                                variant="outlined"
                            />
                        </div>
                        <div className={classes.btn__container}>
                            <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}}
                                  justifyContent="flex-end" container marginTop={"40px"}>
                                <Button size="small" variant="contained" color={"primary"}
                                        style={{marginRight: "80px"}}>Login</Button>
                            </Grid>
                            <Typography variant="h5">Create new user account? </Typography>
                        </div>

                        <Grid container style={{marginTop: "20px"}} direction="row" alignItems="center"
                              justifyContent="flex-start">
                        </Grid>

                    </div>
                </div>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(Login)