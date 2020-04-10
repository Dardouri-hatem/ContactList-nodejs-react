import { Card, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import {getContacts,deleteContact} from '../JS/actions/contactsActions'
import React, { Component } from 'react'
import { message } from "antd"

class Contactlist extends Component {
  
  componentDidMount(){
    this.props.getContacts()
  }
handleDelete(id){
  this.props.deleteContact(id);
  message.warning(`Contact was deleted Successfully`);

}
  render() {
    const {contacts,isLoading}=this.props
    return (
      isLoading ? (
        <div className='row justify-content-md-center'>
          <div className='spinner-border' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      ) : (
      <div className="container" style={{display : "flex",flexWrap:"wrap"}}>
      {contacts.map((contact,i) => (
        <div key={contact._id} style={{display : "flex" , margin : "30px"}}>
          <Card
            bg="light"
            text= "dark"
            style={{ width: "19rem" }}
          >
            <Card.Header>Contact N : {i+1}</Card.Header>
            <Card.Body>
              <Card.Title>Contact Name : "{contact.name}"</Card.Title>
              <Card.Text>
                Email : {contact.email}
              </Card.Text>
              <Button variant="danger" onClick={()=>this.handleDelete(contact._id)}> Delete </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>)
    )
  }
}

const mapStateToprops = (state)=>{
  return { contacts : state.contactReducer.contactsList,
  isLoading : state.contactReducer.isLoading}
}




export default connect(mapStateToprops,{getContacts,deleteContact})(Contactlist);
