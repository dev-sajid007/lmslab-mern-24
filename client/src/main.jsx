import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store";
import { Toaster } from "./components/ui/sonner";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { useLoadUserQuery } from "./features/auth/authApi";
import LoadingSpinner from "./components/LoadingSpinner";

const CustomLoader = ({ children }) => {
  const { isLoading } = useLoadUserQuery();
  return <>{isLoading ? <LoadingSpinner /> : <>{children}</>}</>;
};

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <CustomLoader>
      <RouterProvider router={router} />
      <Toaster />
  </CustomLoader>
    </Provider>
);
