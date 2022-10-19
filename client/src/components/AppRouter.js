import React from 'react';
import {Switch, Routes, Route, Router, Redirect, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const isAuth = true
    return (
        <Switch>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;

/*Попытки с 'react-router-dom' версией 6+
const AppRouter = () => {
    const isAuth = true
    return (
       /* <Router>
        <Routes>
            <Route path="/" element={SHOP_ROUTE} />
        </Routes>
        </Router>*//*
        <Router>
            <Routes>
                {isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                <Navigate to={SHOP_ROUTE}/>
            </Routes>
        </Router>
    );
};*/