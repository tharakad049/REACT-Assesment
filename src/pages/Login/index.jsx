import React, {Component} from "react";
import withStyles from "@material-ui/styles/withStyles";
import {styleSheet} from "./style";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.login__cover}>
                    <div className={classes.title__container}>
                        <Typography variant="h4">Login</Typography>
                    </div>
                    <div className={classes.form__container}>
                        <TextField
                            id="outlined-basic"
                            label="User name"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-basic"
                            type="password"
                            label="Password"
                            variant="outlined"
                        />
                    </div>
                    <div className={classes.btn__container}>
                        <Button variant="contained" type="submit" className="primary">Login</Button>
                    </div>
                    <Typography variant="h5" style={{ marginTop: "-30px"}}>Create new user
                        account? </Typography>

                </div>
            </div>
        )
    }
}
export default withStyles(styleSheet)(Login)