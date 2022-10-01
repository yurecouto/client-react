import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setJwt, selectToken } from "../../providers/slices/token.slice";
import { setUser, selectUser } from "../../providers/slices/user.slice";


import api from "../../services/api";

const Login = () => {
  const navigate = useNavigate();

  const token = useSelector(selectToken);
  useSelector(selectUser)

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = {
      email: email,
      password: password,
  };

  useEffect(() => {
      if (token !== "") { navigate("/") }
  }, [token]);

  // async function handleLogin() {
  //   try {
  //     const response = await api.post("/login", login);
  //     dispatch(setJwt(response.data.token));
  //     dispatch(setUser(response.data.user));
  //     dispatch(setProfile(response.data.perfilUser));
  //   } catch (error) {
  //     console.log("erro", error )
  //   };
  // };

  return(
    <>
    </>
  );
};

export default Login;
