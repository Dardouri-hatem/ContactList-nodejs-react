import React from 'react';
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import AddContact from './components/addContact'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Contactlist from './components/contactlist';
import Users from './components/users'


function App() {
  return (
    <Router>
     <div className="App">
        <Header />
        <Route path='/' exact component ={Users}/>
        <Route path='/contacts' exact component={Contactlist}/>
        <Route path="/add_contact" exact component = {AddContact}/>
     </div>
    </Router>
  );
}

export default App;
