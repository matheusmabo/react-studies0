import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import DashBoard from '../pages/Dashboard';
import { List } from '../pages/List';


const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/DashBoard" exact component={DashBoard} />
        <Route path="/Institutions/:type
        " exact component={List} />
      </Switch>
    </Layout>
  );
}

export default AppRoutes;
