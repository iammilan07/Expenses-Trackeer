import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Addexpense from "./pages/add-expense/Addexpense";
import Details from "./pages/details/Details";
import Demo from "./pages/details/Demo";
import Addcategory from "./pages/add-category/Addcategory";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "add-expense",
      element: <Addexpense />,
    },
    {
      path: "details",
      element: <Details />
    },
    {
      path: "demo",
      element: <Demo />
    },
    {
      path: "add-category",
      element: <Addcategory />
    }
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
