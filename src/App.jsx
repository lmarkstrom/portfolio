import { Header } from "/src/components/Header.jsx";
import { WelcomePage } from "/src/pages/WelcomePage.jsx";
import { ProjectsPage } from "/src/pages/ProjectsPages.jsx";
import { ContactPage } from "/src/pages/ContactPages.jsx";
import "./style.css";
import { observer } from "mobx-react-lite";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MAIN_PATH } from "./constants/constants.ts";

const App = observer(function AppRender() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path={MAIN_PATH + "/"} element={<WelcomePage />} />
          <Route path={MAIN_PATH + "/projects"} element={<ProjectsPage />} />
          <Route path={MAIN_PATH + "/contact"} element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
});

export { App };
