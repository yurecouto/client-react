import React, { useEffect } from "react";
import light from "./themes/light.theme";
import dark from "./themes/dark.theme";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "./providers/slices/theme.slice";
import { Router } from "./routes/Router";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const localTheme = localStorage.getItem("theme")

  useEffect(() => {
    if (localTheme === "dark") {
      dispatch(setTheme(dark))
      localStorage.setItem("theme", "dark")
    } else {
      dispatch(setTheme(light))
      localStorage.setItem("theme", "light")
    }
  }, [dispatch, localTheme])

  useEffect(() => {
    document.body.style.backgroundColor = theme.COLORS.BODY_DEFAULT;
    document.body.style.padding = "0";
    document.body.style.margin = "0";
  }, [theme]);

  return (
    <>
      <Router/>
    </>
  );
}

export default App;
