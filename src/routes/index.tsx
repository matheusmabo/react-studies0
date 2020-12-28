import React from 'react';

import Layout from '../components/Layout';

import AppRoutes from './App.routes';

import {BrowserRouter} from 'react-router-dom'
export const Routes: React.FC = () => {
  return(
    <BrowserRouter>
  <AppRoutes />
  </BrowserRouter>
    )
}

