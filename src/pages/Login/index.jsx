import React, {useEffect, useState} from "react";
import withStyles from "@material-ui/styles/withStyles";
import {styleSheet} from "./style";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {Navigate} from "react-router";
import GetCookie from "../../Hooks/getCookies";
import adminService from "../../Services/adminService";
import SetCookie from "../../Hooks/setCookies";

function Login(props) {
    const [isLogin, setLogged] = useState(false)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {classes} = props;

    const [token, setToken] = useState(false)

    const checkTokenValidity = () => {
        if (GetCookie("loginToken") != undefined) {
            setToken(true)
        }
    }

    useEffect(() => {
        checkTokenValidity()
    }, [])

    const loginUser = async () => {
        const userAcc = {
            username: userName,
            password: password
        }
        let response = await adminService.login(userAcc);
        if (response.status == 200) {
            SetCookie("loginToken", response.data.token)
            props.setLogged()
            setLogged(true)
        } else {
            alert("User Name Or Password Incorrect")
        }
    }

    const loadingDashBoard = () => {
        props.setLogged()
        return <Navigate to="/dash" replace={true}/>
    }

    return (
        token ? loadingDashBoard() :
            isLogin ? <Navigate to="/dash" replace={true}/> :
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
                                onChange={(e) => {
                                    setUserName(e.target.value)
                                }}
                            />
                            <TextField
                                id="outlined-basic"
                                type="password"
                                label="Password"
                                variant="outlined"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                            />
                        </div>
                        <div className={classes.btn__container}>
                            <Button
                                variant="contained"
                                type="submit"
                                className="primary"
                                onClick={async () => {
                                    await loginUser()
                                }}
                            >Login
                            </Button>
                        </div>
                        <Typography variant="h5" style={{marginTop: "-30px"}}>Create new user
                            <Button>account ?</Button> </Typography>
                    </div>
                </div>
    )
}

export default withStyles(styleSheet)(Login)