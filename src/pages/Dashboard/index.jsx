import React, {Component} from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Grid from "@mui/material/Grid";
import NavBar from "../../Components/Navbar";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <NavBar/>
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