import { SpaceApp } from './pages/SpaceApp.jsx';
// import { Route, Routes } from 'react-router-dom';
import { Route, Switch, Router } from "react-router-dom"
import routes from './routes.js';

function RootCmp() {
  return (
    <div className="RootCmp">
      <SpaceApp />
      {/* <Router>
        {routes.map(route => (<Route path={route.path} exact key={route.path} component={route.component} />))}
      </Router> */}

    </div>
  );
}

export default RootCmp;