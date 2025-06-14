import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading, requestLogin } = useAuth();
  
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      requestLogin();
    }
  }, [isLoading, isAuthenticated, requestLogin]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};