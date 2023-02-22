import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Validator from 'validatorjs';

export default function FormValidation() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        errors: [],
    });

    const handleChange = (event) => {
        const { value, name } = event.target;

        setForm((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // let notif = []
        const {email, password} = form;
        // if(email.length === 0) notif.push("You have not type anything on the email field")
        // if(password.length === 0) notif.push("You have not type anything on the password field")

        // setForm({email, password, errors: notif});

        let data = {
            email, password
        }

        let rules = {
            email: 'required|email',
            password: 'required|min:8',
          };
        
        let validation = new Validator(data, rules);
        validation.passes(); // true
        validation.fails(); // false
        setForm({email, password, errors: [...validation.errors.get("email"), ...validation.errors.get("password")]})

        function passes() {
            alert("Validation Berhasil");
            console.log("Validation Berhasil");
          }
        
        validation.checkAsync(passes);
    }
    
  return (
    <Container>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        name="email" 
        placeholder="Enter email"
        value={form.email}
        onChange={handleChange}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        name="password"
        placeholder="Password" 
        value={form.password}
        onChange={handleChange}
        />
      </Form.Group>

        <ul>
            {form.errors.map((item, i)=> (
                <li style={{color: "red"}} key={i}>{item}</li>
            ))}
        </ul>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}
