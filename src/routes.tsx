import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./pages/main";
import Shadows from "./pages/shadows";

export default function RoutesC() {
  return (
    <Router>
      <Routes>
        <Route Component={Main} path="/" />
        <Route Component={Shadows} path="/enhanced-of-shadows" />
      </Routes>
    </Router>
  );
}
