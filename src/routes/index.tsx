import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Home } from "../pages/home/Home";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/auth/Login";
import Detail from "../pages/detail/Detail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="login" element={<Login/>}/>
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<Detail/>}/>
      </Route>
    </>
  )
);
export default router;
