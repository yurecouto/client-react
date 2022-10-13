import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setTokens, selectTokens } from "../../../providers/slices/token.slice";
import { setUser, selectUser } from "../../../providers/slices/user.slice";

import api from "../../../services/api";

import { Input } from "../../../components/inputs/Input";
import { LoginContainer } from "../../../components/containers/LoginContainer";
import { StandardButton } from "../../../components/buttons/StandardButton";
import { SwitchTheme } from "../../../components/buttons/SwitchTheme";
import { selectTheme } from "../../../providers/slices/theme.slice";

const Login = () => {
  const navigate = useNavigate();

  const theme = useSelector(selectTheme);
  const tokens = useSelector(selectTokens);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = {
    email: email,
    password: password,
  };

  async function handleLogin() {
    try {
      const response = await api.post("/auth/login", login);
      dispatch(setTokens({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken
      }));
      dispatch(setUser(response.data.user));

      if (tokens.accessToken !== "") { navigate("/admin/home") }
    } catch (error) {
      console.log("erro", error )
    };
  };

  // useEffect(() => {
  //   if (tokens.accessToken !== "") { navigate("/admin/home") }
  // }, [tokens]);

  return(
    <>
      <SwitchTheme/>

      <LoginContainer
        title="Login"
      >
        <Input
          label="E-mail"
          value={email}
          setValue={(e: any) => setEmail(e.target.value)}
          bgColor={theme.COLORS.LOGIN_BOX}
          color={theme.COLORS.ITEM_DEFAULT}
          hoverColor={theme.COLORS.ITEM_DEFAULT}
        />

        <Input
          label="Password"
          type="password"
          value={password}
          setValue={(e: any) => setPassword(e.target.value)}
          bgColor={theme.COLORS.LOGIN_BOX}
          color={theme.COLORS.ITEM_DEFAULT}
          hoverColor={theme.COLORS.ITEM_DEFAULT}
        />

        <StandardButton
          title="Login"
          handleSomething={handleLogin}
          color={theme.COLORS.ITEM_DEFAULT}
          hoverColor={theme.COLORS.ITEM_DEFAULT_HOVER}
        />
      </LoginContainer>
    </>
  );
};

export { Login };
