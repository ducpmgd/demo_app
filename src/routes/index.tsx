import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Home } from "../pages/home/Home";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/auth/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="login" element={<Login/>}/>
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<Home />} />
      </Route>
    </>
  )
);
export default router;
