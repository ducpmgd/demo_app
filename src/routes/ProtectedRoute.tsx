import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Header from "../pages/layout/Header";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { isLogin } = useAuth();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  if(!isLogin) return null
  return (
    <div>
      <Header/>
      <div className="pt-4">
      <Outlet />
      </div>
    </div>
  );
};

export default ProtectedRoute;
