import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Div, Div1, Div2, Form, H2, Input, Input1, Input2, Label, Label1, Label2 } from './ResetPasswordFormElements';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPasswordForm = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false); // flag variable
  const navigate = useNavigate();
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    };
    let successFlag = false; // initialize flag to false
    await ResetPasswordCandidate();
    await ResetPasswordCompany();
    if (successFlag === false) {
      setMessage('An error occurred'); // set error message if neither function was successful
    }

    async function ResetPasswordCandidate() {
      try {
        const response = await axios.post('http://localhost:3600/api/reset-password', {
          token,
          password,
        });
        setMessage(response.data.message);
        navigate('/offers');
        setSuccess(true); // update flag variable
      } catch (error) {
        console.log(error)
        //setMessage(error.response.data.message);
      }
    }

    async function ResetPasswordCompany() {
      try {
        const response = await axios.post('http://localhost:3600/api/reset-company-password', {
          token,
          password,
        });
        setMessage(response.data.message);
        navigate('/offers');
        setSuccess(true); // update flag variable
      } catch (error) {
       // setMessage(error.response.data.message);
       console.log(error)
      }
    }
  };

  return (
    <Container>
      <Div>
        <Form onSubmit={handleSubmit}>
          <H2>Reset Password</H2>
          <Div1>
            <Label1 htmlFor="password">New Password</Label1>
            <Input1
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Div1>
          <Div2>
            <Label2 htmlFor="confirm-password">Confirm Password</Label2> 
            <Input2
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </Div2>
          <Button type="submit">Reset Password</Button>
          {message && !success && <div>{message}</div>} {/* show error message if flag is false */}
        </Form>
      </Div>
    </Container>
  );
};

export default ResetPasswordForm;
