import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./pages/main";
import Shadows from "./pages/shadows";
import { languages } from "./utils/types";
import { useStateStorage } from "./utils/useStateStorage";

export default function RoutesC() {
  const [lang, setLang] = useStateStorage<languages>("lang", "en");
  //prepare to i18n ou any internationalization
  return (
    <Router>
      <Routes>
        <Route element={<Main locale={lang} setLang={setLang} />} path="/" />
        <Route element={<Shadows locale={lang} />} path="/inheritance" />
      </Routes>
    </Router>
  );
}
