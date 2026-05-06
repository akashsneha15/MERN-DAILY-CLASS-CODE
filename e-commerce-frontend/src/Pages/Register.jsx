import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ToastContainer } from 'react-toastify';

function Register() {

  const [details, setDetails]= useState({
    name:" ",
    email:" ",
    phone:" ",
    password:" ",
    address:" ",
    city:" ",
    state:" ",
    zipCode:" ",
  });

  
  return (
    <div id='form-container'>
        <Form>
           <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter Your name" />
        </Form.Group>
        </Row>
         <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone No</Form.Label>
          <Form.Control required type="tel" placeholder="Enter phone number" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Create Password</Form.Label>
          <Form.Control required type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control required placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control required placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control required  />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select required defaultValue="Choose...">
            <option value="AndhraPradesh">AP</option>
            <option value="TamilNadu">TN</option>
            <option value= "Telangana">Telangana</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" >
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Form.Group className= "mb-3">
        <span>
          If You Already Have Registered Click here to{" "} 
          <a href="/login">Login</a>
        </span>
      </Form.Group>



      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <ToastContainer/>
    </div>
  );
}

export default Register;