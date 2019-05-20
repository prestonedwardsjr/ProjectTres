/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, ButtonGroup, Button } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import { NavLink } from "react-router-dom";
import DropzoneArea from "../components/file-manager-cards/DropzoneArea";
import MetaActions from "../components/file-manager-cards/MetaActions";
import SectionTitle from "../components/file-manager-cards/SectionTitle";
import DirectoriesList from "../components/file-manager-cards/DirectoriesList";
import DocumentsList from "../components/file-manager-cards/DocumentsList";
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

class FileManagerCards extends React.Component {
    constructor() {
        super()
        this.state = { name: '', email: '', body: '' }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInput(event) {
        event.preventDefault()
        // console.log(event.target.type)
        this.setState({ [event.target.type]: event.target.value }, () => console.log(this.state))
        // console.log(this.state)
    }
    handleSubmit(e) {
        e.preventDefault();

        axios.post("/api/auth/send", { name: this.state.name, email: this.state.email, body: this.state.body })
            .then(response => {
                console.log(response)
                // if (response.data.length) {
                //   this.setState({ userId: response.data[0]._id })
                //   this.props.handleUserLogin(response.data[0]._id);


                // }
            })
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
                                    alt="Shards Dashboards - Login Template"
                                />

                                {/* Form Fields */}
                                <Form>
                                    <div className="file-manager file-manager-cards">
                                        <Card small className="mb-3">
                                            <FormGroup>
                                                <label htmlFor="exampleInputName">Name</label>
                                                <FormInput
                                                    type="name"
                                                    id="exampleInputName"
                                                    placeholder="name"
                                                    autoComplete="current-name"
                                                    onChange={this.handleInput}
                                                    value={this.state.name}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <label htmlFor="exampleInputEmail">email</label>
                                                <FormInput
                                                    type="email"
                                                    id="exampleInputEmail"
                                                    placeholder="email"
                                                    autoComplete="current-email"
                                                    onChange={this.handleInput}
                                                    value={this.state.email}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <label htmlFor="exampleInputBody">Body</label>
                                                <FormInput
                                                    type="password"
                                                    id="exampleInputBody"
                                                    placeholder="Body"
                                                    autoComplete="current-body"
                                                    onChange={this.handleInput}
                                                    value={this.state.body}
                                                />
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

          
        </Card>

                                {/* Meta Details */}
                                <div className="auth-form__meta d-flex mt-4">
                                    <Link to="/forgot-password">Forgot your password?</Link>
                                    <Link to="/register" className="ml-auto">
                                        Don't have an Account?  Create a new account?
          </Link>
                                </div>
      </Col>
    </Row>
  </Container>
                    )}
                };
                
                export default FileManagerCards;
