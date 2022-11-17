import React from "react";

// const Login = React.lazy(() => import('@views/login'));
// const Register = React.lazy(() => import('@views/register'));
const Login = React.lazy(() => import('../../views/home/index'));
const Register = React.lazy(() => import('../../views/home/index'));

let routerConfig = [
  { path: 'login', element: <Login></Login> },
  { path: 'register', element: <Register></Register> },
];

export default routerConfig;


