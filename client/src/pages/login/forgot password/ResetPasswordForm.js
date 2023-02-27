import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Div, Div1, Div2, Form, H2, Input } from './ResetPasswordFormElements';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPasswordForm = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate= useNavigate();
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
    }

    try {
      const response = await axios.post('http://localhost:3600/api/reset-password', {
        token,
        password,
      });
      setMessage(response.data.message);
      navigate('/offers');
    } catch (error) {
      setMessage(error.response.data.message);
    }

  };

  return (
    <Container>
      <Div>
        <Form onSubmit={handleSubmit}>
          <H2>Reset Password</H2>
          <Div1>
            <label htmlFor="password">New Password</label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Div1>
          <Div2>
            <label htmlFor="confirm-password">Confirm Password</label>
            <Input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </Div2>
          <Button type="submit">Reset Password</Button>
          {message && <div>{message}</div>}
        </Form>
      </Div>
    </Container>
  );
};

export default ResetPasswordForm;