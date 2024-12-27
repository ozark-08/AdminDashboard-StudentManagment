import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Create from "./components/Create";
import Help from "./pages/Help";
import Message from "./pages/Message";
import Setting from "./pages/Setting";
import Notify from "./pages/Notify";
import Update from "./components/Update";
import HomePage from "./pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "/:id",
      element: <Update />,
    },
    {
      path: "/help",
      element: <Help />,
    },
    {
      path: "/message",
      element: <Message />,
    },
    {
      path: "/setting",
      element: <Setting />,
    },
    {
      path: "/notify",
      element: <Notify />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
