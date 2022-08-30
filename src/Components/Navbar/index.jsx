import React, {Component} from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router";

    function NavBar(){
        const navigate = useNavigate();
        const navigateToProducts = () => {
            navigate('/products');
        };
        const navigateToDashboard = () => {
            navigate('/dash');
        };
        return (
            <>
                <Grid container spacing={3} direction={"row"} style={{backgroundColor: "yellow"}}>
                    <Grid item lg={3} md={3} xs={3} sm={3}>
                        <Button variant={"contained"} color={"primary"} style={{margin: "2vw"}} onClick={navigateToDashboard} >Dashboard</Button>
                    </Grid>
                    <Grid item lg={6} md={6} xs={6} sm={6} display={"flex"} alignItems={"center"}
                          justifyContent={"center"}>
                        <Button variant={"contained"} color={"primary"} style={{margin: "2vw"}}  onClick={navigateToProducts} >Products</Button>
                        <Button variant={"contained"} color={"primary"} style={{margin: "2vw"}}>Cart</Button>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={3} display={"flex"} alignItems={"center"}
                          justifyContent={"flex-end"}>
                        <Typography variant={"h6"} marginRight={"1vw"}>Hey</Typography>
                    </Grid>
                </Grid>
            </>
        )
}
export default NavBar