/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  FormInput,
  FormCheckbox,
  Button
} from "shards-react";
import axios from "axios"

class Login extends React.Component {
  constructor(){
    super()
    this.state={email:'',password:''}

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInput(event){ 
    event.preventDefault()
    // console.log(event.target.type)
    this.setState({[event.target.type]: event.target.value},()=>console.log(this.state))
    // console.log(this.state)
  }
  handleSubmit(e){
    e.preventDefault();
    axios.post("/api/auth/login", {email: this.state.email, password: this.state.password}).then(function(data){console.log(data)})
  }
  render(){
    return ( 
    <Container fluid className="main-content-container h-100 px-4">
    <Row noGutters className="h-100">
      <Col lg="3" md="5" className="auth-form mx-auto my-auto">
        <Card>
          <CardBody>
            {/* Logo */}
            <img
              className="auth-form__logo d-table mx-auto mb-3"
              src={require("../images/shards-dashboards-logo.svg")}
              alt="Shards Dashboards - Login Template"
            />

            {/* Title */}
            <h5 className="auth-form__title text-center mb-4">
            <strong>I Need Consent</strong> <br></br>Access Your Account
            </h5>

            {/* Form Fields */}
            <Form>
              <FormGroup>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <FormInput
                  type="email"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                  autoComplete="email"
                  onChange={this.handleInput}
                  value={this.state.email}
                   />
              </FormGroup>
              <FormGroup>
                <label htmlFor="exampleInputPassword1">Password</label>
                <FormInput
                  type="password"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={this.handleInput}
                  value={this.state.password}
                />
              </FormGroup>
              <FormGroup>
                <FormCheckbox>Remember me for 30 days.</FormCheckbox>
              </FormGroup>
              <Button
                pill
                theme="accent"
                className="d-table mx-auto"
                type="submit"
                onClick={this.handleSubmit}
              >
                Access Account
              </Button>
            </Form>
          </CardBody>

          {/* Social Icons */}
          {/* <CardFooter>
            <ul className="auth-form__social-icons d-table mx-auto">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-google-plus-g" />
                </a>
              </li>
            </ul>
          </CardFooter> */}
        </Card>

        {/* Meta Details */}
        <div className="auth-form__meta d-flex mt-4">
          <Link to="/forgot-password">Forgot your password?</Link>
          <Link to="/register" className="ml-auto">
            Create a new account?
          </Link>
        </div>
      </Col>
    </Row>
  </Container>
    )}
};

export default Login;
