import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "./providers/slices/theme.slice";
import { Router } from "./routes/Router";

function App() {
  const theme = useSelector(selectTheme);

  useEffect(() => {
    document.body.style.backgroundColor = theme.COLORS.BODY_DEFAULT;
  }, [theme]);

  return (
    <>
      <Router/>
    </>
  );
}

export default App;
