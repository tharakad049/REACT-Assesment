import React, {Component} from "react";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {Button, Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import NavBar from "../../Components/Navbar";
import productService from "../../Services/productService";
import GDSESnackBar from "../../Components/SnackBar";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                title: "",
                price: "",
                description: "",
                category: "",
            },

            alert: false,
            message: '',
            severity: '',
            data: []
        }
    }

    handleSubmit = async () => {
        let formData = this.state.formData;
        let response = await productService.post(formData);
        console.log(response);
        if (response.status===201){
            this.setState({
                alert: true,
                message:"post saved",
                severity: "success"
            });
        }else{
            this.setState({
                alert : true,
                message : "unsuccess",
                severity : "error"
            });
        }
    }

    render() {
        return (
            <>
                <NavBar/>
                <ValidatorForm ref="form" onSubmit={this.handleSubmit}>
                    <Grid container spacing={1}>
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            <Typography variant="h4" style={{background:'#1f4037',color: 'white',margin:'14px'}}><b>Product Manage</b></Typography>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Title</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Title"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.title}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.title = e.target.value;
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Price</h3></Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeholder="Price"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.price}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.price = e.target.value;
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Category</h3></Typography>
                            <TextValidator
                                multiple
                                placeholder="Category"
                                options={this.state.top100Films}
                                value={this.state.formData.category}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.category = e.target.value;
                                    this.setState({formData})
                                }}
                                style={{width: 500}}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="body1"><h3>Description</h3></Typography>
                            <TextValidator
                                placeholder="Description"
                                variant="outlined"
                                size="large"
                                style={{width: '100%'}}
                                value={this.state.formData.description}
                                onChange={(e) => {
                                    let formData = this.state.formData;
                                    formData.description = e.target.value;
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end"
                          alignItems="flex-end" direction="row" ontainer marginTop={"10px"}>
                        <Button size="small" variant="contained" color={"warning"}
                                style={{marginRight: "10px"}}>Clear</Button>
                        <Button size="small" variant="contained" style={{marginRight: "10px"}}
                                onClick={this.handleSubmit}>Save</Button>
                    </Grid>

                    <Grid>
                        <TableContainer component={Paper}>
                            <Table sx={{minWidth: 650}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="right">Title</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                        <TableCell align="right">Category</TableCell>
                                        <TableCell align="right">Description</TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </TableContainer>
                    </Grid>

                </ValidatorForm>
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

export default Product
