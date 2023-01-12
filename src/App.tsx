import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Addexpense from "./pages/add-expense/Addexpense";
import Details from "./pages/details/Details";
import Addcategory from "./pages/add-category/Addcategory";
import React from 'react'
import PouchDB from 'pouchdb-browser'
import { Provider } from 'use-pouchdb'

function App() {


  var db = new PouchDB('expenses');
  var remoteCouch = false;

  // useEffect(() => {
  //   const listener = (dbName: any) => {
  //     if (dbName === 'local') {
  //       setDB(new PouchDB('local'))
  //     }
  //   }

  //   PouchDB.on('destroyed', listener)
  //   return () => {
  //     PouchDB.removeListener('destroyed', listener)
  //   }
  // }, [])

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
      path: "add-category",
      element: <Addcategory />
    }
  ]);
  return (
    <>
      <Provider pouchdb={db}>
        <RouterProvider router={router}></RouterProvider>;
      </Provider>
    </>
  )

}

export default App;
