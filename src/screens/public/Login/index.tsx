import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setJwt, selectToken } from "../../../providers/slices/token.slice";
import { setUser, selectUser } from "../../../providers/slices/user.slice";

import { Input } from "../../../components/inputs/Input";

import api from "../../../services/api";
import { LoginContainer } from "../../../components/containers/LoginContainer";
import { StandardButton } from "../../../components/buttons/StandardButton";

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

  async function handleLogin() {
    try {
      const response = await api.post("/login", login);
      dispatch(setJwt(response.data.token));
      dispatch(setUser(response.data.user));
    } catch (error) {
      console.log("erro", error )
    };
  };

  console.log(email)

  return(
    <>
      <LoginContainer
        title="Login"
      >
        <Input
          label="E-mail"
          value={email}
          setValue={(e: any) => setEmail(e.target.value)}
        />

        <Input
          label="Password"
          type="password"
          value={password}
          setValue={(e: any) => setPassword(e.target.value)}
        />

        <StandardButton
          title="Login"
          handleSomething={handleLogin}
        />
      </LoginContainer>
    </>
  );
};

export { Login };
