import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Modal from 'react-bootstrap/Modal'
import './login.css';
import {Redirect} from 'react-router-dom';
import Register from '../register/register.js';

class Login extends React.Component{

    render(){
      return(
        <div>
<Modal.Dialog  className="modalMove">

  <div className="loginModal">
  <Modal.Header >
    <Modal.Title>Login Here</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    
  <Form>
<Form.Group controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" />
<Form.Text className="text-muted">
  We'll never share your email with anyone else.
</Form.Text>
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" />
</Form.Group>
<Form.Group controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Remember Me" />
</Form.Group>

</Form>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary"> <Redirect to = "/registration">Register</Redirect></Button>
    <Button variant="primary" type="submit">
Submit
</Button>
  </Modal.Footer>
  </div>
</Modal.Dialog>
   
 
         </div>
      )
 

    }


}


export default Login;