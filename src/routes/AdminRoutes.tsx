import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

/* Autenticação para fazer a reenderização condicional
das rotas que serão envolvidas por este PrivateRoutes */
import { useAuthJwt } from '../utils/auth';

const PrivateRoutes = () => {
  /* Caso seja a autenticação seja true, reenderizamos a pagina
  usando outlet, e caso não, redirecionamos para o login. */
  const auth = useAuthJwt();

  return auth
  ? <Outlet/>
  : <Navigate to="/login"/>
};

export default PrivateRoutes;
