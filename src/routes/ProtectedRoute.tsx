import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

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
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
