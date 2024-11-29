import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import HeroSection from "./pages/student/HeroSection";
import Login from "./pages/Login";
import Courses from "./pages/student/Courses";
import Profile from "./pages/student/Profile";
import MyLearning from "./pages/student/MyLearning";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Courses />
          </>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "my-learning",
        element: <MyLearning />,
      },
      {
        path: "/profile",
        element: <Profile />,
      }
    ]
  }
  
]);

export default router;
