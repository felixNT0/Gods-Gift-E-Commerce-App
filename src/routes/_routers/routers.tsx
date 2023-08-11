// import {
//   Organisation,
//   OrganisationList,
//   Sandbox,
//   RepositoryFilesAndFolders,
// } from "_pages";

import { createBrowserRouter } from "react-router-dom";
import App from "../../App.tsx";
import {
  HomePage,
  LoginPage,
  SignupPage,
  ProductDetailsPage,
} from "../../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/products",
        element: <ProductDetailsPage />,
      },
    ],
  },
]);

export default router;
