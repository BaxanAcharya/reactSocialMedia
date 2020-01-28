import React from 'react'; 
import ReactDOM from 'react-dom';
import Login from "./components/login/login.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import Register from './components/register/register';
import "./index.css"
import Navbar from 'react-bootstrap/Navbar'


class Index extends React.Component {

  

    render() {
        return (
         
    <>
    <Navbar className="myNav">
  <Navbar.Brand href="#home">Login</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
       <a href="#login">Register</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
    </>

      
              
      
               
                
   
              

        )
    }

}

ReactDOM.render(<Index />, document.getElementById('root'))
