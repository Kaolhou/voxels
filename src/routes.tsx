import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./pages/main";
import Shadows from "./pages/shadows";
import { languages } from "./utils/types";

export default function RoutesC() {
  //prepare to i18n ou any internationalization
  let locale: languages = "en";
  if (document.location.hostname.startsWith("pt.")) locale = "pt";
  return (
    <Router>
      <Routes>
        <Route element={<Main locale={locale} />} path="/" />
        <Route element={<Shadows locale={locale} />} path="/inheritance" />
      </Routes>
    </Router>
  );
}
