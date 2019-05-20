
import React from "react";
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
import { Link } from "react-router-dom";
import axios from "axios"
import { Dispatcher, Constants } from "../flux";

class Send extends React.Component {
  constructor() {
    super()
    this.state = { email: '', name: '', body: '',error: false }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInput(event) {
    event.preventDefault()
    // console.log(event.target.type)
    this.setState({ [event.target.type]: event.target.value,error:false }, () => console.log(this.state))
    // console.log(this.state)
  }
  handleSubmit(e) {
    e.preventDefault();
    axios.post("/api/auth/send",
      { email: this.state.email, name: this.state.name, body: this.state.body, }).then((data) => {
        // console.log("hi", data.data.error);
        if (data._id) {
          
          console.log(data._id)
          Dispatcher.dispatch({
            actionType: Constants.USERID,
            payload: data._id
          });
        // } else if (data.data.error === "That Username Already Exists") {
        //   console.log("bye")
        //   this.setState({ error: true })
        // }
      }
     )

  }
  render() {
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
                  alt="Shards Dashboards - Register Template"
                />

                {/* Title */}
            //     <h5 className="auth-form__title text-center mb-4">
            //       <strong>I Need Consent</strong> <br></br>Create New Account
            // </h5>
                // {this.state.error ? <p>That Username/Email Already Exist</p> : null}
                // {/* Form Fields */}
            //     <Form>
            //       <FormGroup>
            //         <label htmlFor="exampleInputEmail1">Email address</label>
            //         <FormInput
            //           type="email"
            //           id="exampleInputEmail1"
            //           placeholder="Enter email"
            //           autoComplete="email"
            //           onChange={this.handleInput}
            //           value={this.state.email}
            //         />
            //       </FormGroup>
            //       <FormGroup>
            //         <label htmlFor="exampleInputPassword1">Password</label>
            //         <FormInput
            //           type="password"
            //           id="exampleInputPassword1"
            //           placeholder="Password"
            //           autoComplete="new-password"
            //           onChange={this.handleInput}
            //           value={this.state.password}
            //         />
            //       </FormGroup>
            //       <FormGroup>
            //         <label htmlFor="exampleInputPassword2">Repeat Password</label>
            //         <FormInput
            //           type="password"
            //           id="exampleInputPassword2"
            //           placeholder="Repeat Password"
            //           autoComplete="new-password"
            //           onChange={this.handleInput}
            //           value={this.state.password}
            //         />
            //       </FormGroup>
            //       <FormGroup>
            //         <FormCheckbox>
            //           I agree with the <a href="#">Terms & Conditions</a>.
            //     </FormCheckbox>
            //       </FormGroup>
            //       <Button
            //         pill
            //         theme="accent"
            //         className="d-table mx-auto"
            //         type="submit"
            //         onClick={this.handleSubmit}
            //       >
            //         Create Account
            //   </Button>
            //     </Form>
            //   </CardBody>

              {/* Social Icons
          <CardFooter>
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
              <Link to="/login" className="ml-auto">
                Sign In?
          </Link>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
};
export default Send;