import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import HeroSection from "./pages/student/HeroSection";
import Login from "./pages/Login";
import Courses from "./pages/student/Courses";
import Profile from "./pages/student/Profile";
import MyLearning from "./pages/student/MyLearning";
import Sidebar from "./pages/admin/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import ListCourse from "./pages/admin/course/ListCourse";
import CreateCourse from "./pages/admin/course/CreateCourse";
import EditCourse from "./pages/admin/course/EditCourse";

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
      },
      //admin routes
      {
        path:"admin",
        element:<Sidebar />,
        children:[
          {
            path:"dashboard",
            element:<Dashboard />
          },
          {
            path:"course",
            element:<ListCourse />
          },
          {
            path:"course/create",
            element:<CreateCourse />
          },
          {
            path:"course/:courseId",
            element:<EditCourse />
          }
        ]
      }
    ]
  }
  
]);

export default router;
