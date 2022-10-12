import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

import { useAuthJwt } from '../utils/auth';

const AdminRoutes = () => {
  const auth = useAuthJwt();

  return auth
  ? <Outlet/>
  : <Navigate to="/login"/>
};

export default AdminRoutes;
