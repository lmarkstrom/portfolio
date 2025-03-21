import { Bar } from "/src/presenters/barPresenter.jsx";
import { Welcome } from "/src/presenters/welcomePresenter.jsx";
import { Projects } from "/src/presenters/projectsPresenter.jsx";
import { Contact } from "/src/presenters/contactPresenter.jsx";
import "./style.css";
import { observer } from "mobx-react-lite";
import { createHashRouter, RouterProvider } from "react-router-dom";

const App = observer(
  function AppRender() {
    return (
      <div>
        <Bar/>
        <RouterProvider router={makeRouter()}/>
      </div>
    );
  }
);

function makeRouter(){
  return createHashRouter([
      {
          path: "/",
          element: <Welcome />,
      },
      {
          path: "/projects",
          element: <Projects />,
      },
      {
          path: "/contact",
          element: <Contact />,
      }
  ]);
}

export { App };
