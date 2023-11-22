import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./pages/main";
import Shadows from "./pages/shadows";
import PressKit from "./pages/presskit";

export default function RoutesC() {
  //prepare to i18n ou any internationalization
  // if(document.location.)
  return (
    <Router>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Shadows />} path="/inheritance" />
        <Route element={<PressKit />} path="/press-kit" />
      </Routes>
    </Router>
  );
}
