import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from "@material-tailwind/react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/dashboard';
import App from './App';
import './main.css';
import themes from './theme/schema';
import { setToLocalStorage } from './utils/localStorage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Dashboard/>,
      },
      {
        path: "portfolio",
        element: <div>Portfolio</div>,
      },
      {
        path: "clients",
        element: <div>Clients</div>,
      }
    ]
  },
  {
    path: "/login",
    element: <div>Login Page</div>
  }
]);

const Main = () => {
  setToLocalStorage('themes', themes);
  return (
    <StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Main />
);
