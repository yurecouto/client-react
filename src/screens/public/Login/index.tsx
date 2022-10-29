import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setUser, selectUser } from "../../../providers/slices/user.slice";

import api from "../../../services/api";

import { Input } from "../../../components/inputs/Input";
import { LoginContainer } from "../../../components/containers/centred/LoginContainer";
import { ButtonDefault } from "../../../components/buttons/ButtonDefault";
import { SwitchTheme } from "../../../components/buttons/SwitchTheme";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useSelector(selectUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = {
    email: email,
    password: password,
  };

  async function handleLogin() {
    try {
      const response = await api.post("/auth/login", login);
      // dispatch(setTokens({
      //   accessToken: response.data.accessToken,
      //   refreshToken: response.data.refreshToken
      // }));

      localStorage.setItem("tokens", JSON.stringify({
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken
      }))

      dispatch(setUser(response.data.user));

      const tokens = JSON.parse( localStorage.getItem("tokens") || "{}" )

      if (tokens.accessToken !== "") { navigate("/home") }
    } catch (error) {
      console.log("erro", error )
    };
  };

  return(
    <>
      <SwitchTheme/>

      <LoginContainer>
        <Input
          label="E-mail"
          type="email"
          value={email}
          setValue={(e: any) => setEmail(e.target.value)}
        />

        <Input
          label="Password"
          type="password"
          value={password}
          setValue={(e: any) => setPassword(e.target.value)}
        />

        <ButtonDefault
          title="Login"
          handleSomething={handleLogin}
        />
      </LoginContainer>
    </>
  );
};

export { Login };
