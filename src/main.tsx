import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/_routers";
import AppContextProvider from "./contexts/useAppContext";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "./utils/color";

const customTheme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
      dark: SECONDARY_COLOR,
    },
    text: {
      primary: "#000",
    },

    // text: {
    //   primary: "#FFFFFF", // Custom primary text color
    //   secondary: "#666666", // Custom secondary text color
    // },
  },
});

export default customTheme;
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <ThemeProvider theme={customTheme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
