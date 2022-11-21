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
      localStorage.clear()

      const response = await api.post("/auth/login", login);

      localStorage.setItem("ACCESS_TOKEN", response.data.accessToken);
      localStorage.setItem("REFRESH_TOKEN", response.data.refreshToken);

      dispatch(setUser(response.data.user));

      const accessToken = localStorage.getItem("ACCESS_TOKEN");

      if (accessToken !== "") { navigate("/home") }
    } catch (error) {
      console.log("error =>", error )
    };
  };

  return(
    <>
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
