import { useRoutes } from "react-router-dom";
import baseRouter from './modules/base.router';
import home from './modules/home.config.js';


const Routers = () => {
  let routerList = useRoutes([
    ...home,
    ...baseRouter
  ]);
  return routerList;
}

export default Routers;