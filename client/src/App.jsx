import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Write } from "./pages/Write";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    ),
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/write", element: <Write /> },
  { path: "/home", element: <Home /> },
  { path: "/single", element: <Single /> },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
