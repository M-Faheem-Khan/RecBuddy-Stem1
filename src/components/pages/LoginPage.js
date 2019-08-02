import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import login from '../logic/authentication';

class LoginPage extends React.Component{
    state = {
        email: "faheem5948@gmail.com",
        password: "password"
    };
    
    // Check if the user is already logged in by validating the token
    // if valid redirect to dashboard, 
    // else clear the token cookie
    
    // ChangeHandler
    changeHandler = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

    // onFormSubmit check if the email and password are valid
	submitHandler = event => {
		event.preventDefault();
		event.target.className += " was-validated";
		let data = {
			"email": this.state.email,
			"password": this.state.password,
        };
        // -------------------THIS IS NOT SECURE---------------------------//
        // calling the login function from authentication file
        let response = login(data.email, data.password)
        console.log(response)
    };

    render() {
        return (
            <React.Fragment>
                <MDBRow className="justify-content-center">
                    <MDBCol sm="12" md="6" lg="8" className="mb-5">
                        <MDBCard>
                            <MDBCardBody>
                                <form onSubmit={this.submitHandler}>
                                    <p className="text-center h1 mb-4 mt-3">Login Page</p>
                                    <input type="email" id="email" name="email" value="faheem5948@gmail.com " placeholder="Email" onChange={this.changeHandler}/>
                                    <input type="password" id="password" name="password" value="password" placeholder="Password" onChange={this.changeHandler} />
                                    <button type="submit">Login</button>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </React.Fragment>
        );
    };
}

export default LoginPage;