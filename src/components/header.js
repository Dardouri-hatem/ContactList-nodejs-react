import React from "react";
import { Link , Redirect} from "react-router-dom";
import { Navbar,Nav,} from "react-bootstrap";
import{connect} from "react-redux"
import {logout} from "../JS/actions/authActions"
function Header (props){
    return (
      <div className="container " >
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand> Contact App</Navbar.Brand>
          {!props.isAuthenticated ?<Redirect to ='/'/>:<>
          <Nav className="mr-auto">
            <Link to="/contacts" style={{color : "grey",margin: "0px 50px"}}>Contact List</Link>
            <Link to="/add_contact" style={{color : "grey"}}>Add Contact</Link>
          </Nav>
          <Nav.Link href="#" onClick={props.logout}>Logout</Nav.Link>
          </>}
        </Navbar>
      </div>
    );
  }
const mapStateToProps=state=>{
  return {isAuthenticated : state.auth.token}
}
export default connect (mapStateToProps,{logout})(Header);
