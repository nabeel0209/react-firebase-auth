import { AuthContext } from "../AuthContext/AuthContext";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useContext(AuthContext);

  if (!auth?.authed) {
    return children;
  } else {
    return <Navigate to="/dashboard" />;
  }
}
