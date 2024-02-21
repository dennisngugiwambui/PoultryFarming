import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const LoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const LoginForm = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Title = styled.h2`
  text-align: center;
  color: #333333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export default function Index() {
    return (
        <LoginPage>
            <LoginForm>
                <Title>Login</Title>
                <Form>
                    <Input type="text" placeholder="Username" />
                    <Input type="password" placeholder="Password" />
                    <Button type="submit">Login</Button>
                </Form>
            </LoginForm>
        </LoginPage>
    );
}

const container = document.getElementById('index');
const root = ReactDOM.createRoot(container);
root.render(<index />)
