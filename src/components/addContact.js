import React, { Component } from "react";
import { Form, Button} from "react-bootstrap";
import {connect} from "react-redux"
import {addContact} from "../JS/actions/contactsActions"
import { message } from "antd"
import{Redirect} from 'react-router-dom'

class AddContact extends Component {
  state = {
    name: "",
    telephone: "",
    email: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handelAdd = e => {
    e.preventDefault();
    this.props.addContact(this.state)
    this.setState({
      name: "",
      telephone: "",
      email: ""
    });
    message.success(`Contact added Successfully`);

  };
  render() {
    const {redirect} = this.props
    return (
      redirect?(<Redirect to ="/contacts"/>):(
        <Form onSubmit={this.handelAdd} className="container text-left mt-5" style={{width: "60%"}} > 
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Entre Name" value ={this.state.name} name ="name" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Telephone</Form.Label>
            <Form.Control type="text" placeholder="Telephone Number" value ={this.state.telephone} name ="telephone"onChange={this.handleChange}/>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.handelAdd}>
            Add
          </Button>
        </Form>
        )
           
    );
  }
}
const mapStateToProps=state=>{
  return {redirect : state.contactReducer.redirect}
}


export default connect (mapStateToProps,{addContact})(AddContact);
