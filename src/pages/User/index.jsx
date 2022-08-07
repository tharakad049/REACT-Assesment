import React, {Component} from "react";
import {Button, Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import GDSESnackBar from "../../Components/SnackBar";
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import PostService from "../../Services/PostService";
import TableBody from "@mui/material/TableBody";

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                username: '',
                password: '',
                name: {
                    firstname: '',
                    lastname: ''
                },
                address: {
                    city: '',
                    street: '',
                    number: '',
                    zipcode: '',
                    geolocation: {
                        lat: '',
                        long: ''
                    }
                },
                phone: ''
            },

            alert: false,
            message: '',
            severity: ''

           // data: []
        }
    }

    handleSubmit = async () => {
        let formData = this.state.formData
        let response = await PostService.createPost(formData);
        if (response.status === 201) {
            this.setState({
                alert: true,
                message: 'Customer Saved',
                severity: 'success'
            });
            //await this.loadData();
        } else {
            this.setState({
                alert: true,
                message: 'Customer Saved Un success fully',
                severity: 'error'
            });
        }
    }


    /*
       exampleForMap = () => {
           this.state.data.map((value) => {
               console.log(value);
           })
       };

       loadData = async () => {
           let res = await PostService.fetchPost();
           if (res.status === 200) {
               this.setState({
                   data: res.data.data
               });
           }
           console.log(this.state.data)
           this.exampleForMap();
       };

     componentDidMount(){
           this.loadData();
       };
   */


    render() {
        return (
            <>
                <ValidatorForm ref="form" onSubmit={this.handleSubmit}>
                    <Grid container spacing={1}>
                        <Grid item lg={12} xs={12} sm={12} md={12} background="">
                            <Typography variant="body1"><b><h1>User Registration</h1></b></Typography>
                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>First Name</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="First Name"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.firstname}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.firstname = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Last Name</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Last Name"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.lastname}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.lastname = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Email</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Email"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.email}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.email = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Username</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="User Name"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.username}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.username = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Password</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Password"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.password}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.password = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>City</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="City"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.city}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.city = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Street</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Street"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.street}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.street = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Street No</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Street No"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.number}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.number = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Zip Code</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Zip Code"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.zipcode}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.zipcode = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Lat Value</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Lat Value"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.lat}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.lat = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Long Value</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Long Value"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.long}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.long = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Mobile No</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Mobile No"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.phone}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.phone = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end"
                          container marginTop={"10px"}>
                        <Button size="small" variant="contained" color={"warning"}
                                style={{marginRight: "10px"}}>Clear</Button>
                        <Button size="small" variant="contained" style={{marginRight: "10px"}} label="Save"
                                type="submit" onClick={this.handleSubmit}>Save</Button>
                    </Grid>
                </ValidatorForm>
                <Grid>
     {/*               <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">First Name</TableCell>
                                    <TableCell align="right">Last Name</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">User Name</TableCell>
                                    <TableCell align="right">Password</TableCell>
                                    <TableCell align="right">City</TableCell>
                                    <TableCell align="right">Street</TableCell>
                                    <TableCell align="right">Street No</TableCell>
                                    <TableCell align="right">Zip Code</TableCell>
                                    <TableCell align="right">Lat Value</TableCell>
                                    <TableCell align="right">Long Value</TableCell>
                                    <TableCell align="right">Mobile No</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.firstname}</TableCell>
                                            <TableCell align="left">{row.lastname}</TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                            <TableCell align="left">{row.username}</TableCell>
                                            <TableCell align="left">{row.password}</TableCell>
                                            <TableCell align="left">{row.city}</TableCell>
                                            <TableCell align="left">{row.street}</TableCell>
                                            <TableCell align="left">{row.number}</TableCell>
                                            <TableCell align="left">{row.zipcode}</TableCell>
                                            <TableCell align="left">{row.lat}</TableCell>
                                            <TableCell align="left">{row.long}</TableCell>
                                            <TableCell align="left">{row.phone}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>*/}
                </Grid>
                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({alert: false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </>
        );
    }
}

export default UserForm
