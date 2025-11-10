import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({
  children
}: {
  children: React.ReactNode;
}) {
  const auth = useContext(AuthContext);

  if (auth?.authed) {
    return <>{children}</>;
  } else {
    return <Navigate to="/signin" />;
  }
}
