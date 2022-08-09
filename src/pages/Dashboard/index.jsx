import React, {Component} from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Grid from "@mui/material/Grid";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Grid container spacing={3} direction={"row"} style={{backgroundColor: "yellow"}}>
                    <Grid item lg={3} md={3} xs={3} sm={3}>
                        <Button variant={"contained"} color={"primary"} style={{margin: "2vw"}}>Dashboard</Button>
                    </Grid>
                    <Grid item lg={6} md={6} xs={6} sm={6} display={"flex"} alignItems={"center"}
                          justifyContent={"center"}>
                        <Button variant={"contained"} color={"primary"} style={{margin: "2vw"}}>Products</Button>
                        <Button variant={"contained"} color={"primary"} style={{margin: "2vw"}}>Cart</Button>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={3} display={"flex"} alignItems={"center"}
                          justifyContent={"flex-end"}>
                        <Typography variant={"h6"} marginRight={"1vw"}>Name</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={3} style={{display: 'flex', flexDirection: 'row', alignContent: 'center'}}>
                    <Row style={{marginLeft: '200px'}}>
                        <Col>
                            <Grid style={{
                                alignContent: 'center',
                                textAlign:"center",
                                height: '300px',
                                width: '456px',
                                background: 'gray',
                                fontSize: '23px'
                            }}>
                                <h1>Products</h1>
                                <h1>60</h1>
                            </Grid>
                        </Col>

                        <Col>
                            <Grid style={{
                                height: '300px',
                                textAlign:"center",
                                width: '456px',
                                background: 'gray',
                                marginLeft: '4px',
                                fontSize: '23px'
                            }}>
                                <h1>Users</h1>
                                <h1>60</h1>
                            </Grid>
                        </Col>
                    </Row>

                    <Row style={{marginLeft: '150px'}}>
                        <Col>
                            <Grid style={{
                                height: '300px',
                                width: '456px',
                                textAlign:"center",
                                background: 'gray',
                                fontSize: '23px'}}>
                                <h1>Cart</h1>
                                <h1>60</h1>
                            </Grid>
                        </Col>
                    </Row>
                </Grid>
            </>
        )
    }
}

export default Dashboard;