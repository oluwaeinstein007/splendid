import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ocean from './pages/Ocean';
import Air from './pages/Air';
import Rail from './pages/Rail';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Road from './pages/Road';
import Warehousing from './pages/Warehousing';
import Project from './pages/Project';
import Defence from './pages/Defence';
import Hightech from './pages/Hightech';
import Agricultural from './pages/Agricultural';
import Chemical from './pages/Chemical';
import Pharma from './pages/Pharma';
import Fastmoving from './pages/Fastmoving';
import Industrial from './pages/Industrial';
import Projectcargo from './pages/Projectcargo';
import Atmspares from './pages/Atmspares';
import Atmdeployment from './pages/Atmdeployment';
import Atmstaging from './pages/Atmstaging';
import Atmcivil from './pages/Atmcivil';
import Atmtechnical from './pages/Atmtechnical';
import Intcoterms from './pages/Intcoterms';
import Hscode from './pages/Hscode';
import Cargowait from './pages/Cargowait';
import Instantquotes from './pages/Instantquotes';
import Mediarelease from './pages/Mediarelease';
import Aboutus from './pages/Aboutus';
import Mission from './pages/Mission';
import Career from './pages/Career';
import Trackpages from './pages/Trackpages';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/ocean",
    element: <Ocean/>,
  },
  {
    path: "/air",
    element: <Air/>,
  },
  {
    path: "/rail",
    element: <Rail/>,
  },
  {
    path: "/road",
    element: <Road/>,
  },
  {
    path: "/warehousing",
    element: <Warehousing/>,
  },
  {
    path: "/project",
    element: <Project/>,
  },
  {
    path: "/defence",
    element: <Defence/>,
  },
  {
    path: "/hightech",
    element: <Hightech/>,
  },
  {
    path: "/agricultural",
    element: <Agricultural/>,
  },
  {
    path: "/chemical",
    element: <Chemical/>,
  },
  {
    path: "/pharma",
    element: <Pharma/>,
  },
  {
    path: "/fastmoving",
    element: <Fastmoving/>,
  },
  {
    path: "/industrial",
    element: <Industrial/>,
  },
  {
    path: "/projectcargo",
    element: <Projectcargo/>,
  },
  {
    path: "/atmspares",
    element: <Atmspares/>,
  },
  {
    path: "/atmdeployment",
    element: <Atmdeployment/>,
  },
  {
    path: "/atmstaging",
    element: <Atmstaging/>,
  },
  {
    path: "/atmcivil",
    element: <Atmcivil/>,
  },
  {
    path: "/atmtechnical",
    element: <Atmtechnical/>,
  },
  {
    path: "/incoterms",
    element: <Intcoterms/>,
  },
  {
    path: "/hscodes",
    element: <Hscode/>,
  },
  {
    path: "/cargoweight",
    element: <Cargowait/>,
  },
  {
    path: "/instantquote",
    element: <Instantquotes/>,
  },
  {
    path: "/mediarelease",
    element: <Mediarelease/>,
  },
  {
    path: "/aboutus",
    element: <Aboutus/>,
  },
  {
    path: "/mission",
    element: <Mission/>,
  },
  {
    path: "/career",
    element: <Career/>,
  },
  {
    path: "/trackshippment",
    element: <Trackpages/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
