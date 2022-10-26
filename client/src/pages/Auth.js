import React from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <Container
      /*className='d-lfex justify-content-center align-items-center'*/
      style={{height: window.innerHeight - 54, display: "flex", justifyContent: "center", alignItems: "center"}}
    >
      <Card style={{width: 600, padding: 10}}>
        <h2 style={{margin:"auto"}} /*className="ml-auto"*/>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form style={{display: "flex", flexDirection: "column"}}>
          <Form.Control
            style={{marginTop: 10 }}
            placeholder="Введите ваш email..." 
          />
          <Form.Control
            style={{marginTop: 10 }}
            placeholder="Введите ваш пароль..." 
          />
          <Row 
           style={{display: "flex", justifyContent: "space-between", marginTop: 10, paddingLeft: 10, paddingRight: 10}}>
            {isLogin ?
              <div>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зареистрируйтесь!</NavLink>
              </div>
              :
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            }
            <Button
              variant={"outline-success"}
            >
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
