import { ToastContainer } from "react-toastify";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./components/AuthContext/AuthContext";

export default function App() {
  return (
    <>
      <div className="bg-[#f3f3f3] flex justify-center items-center min-h-screen">
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
        <ToastContainer />
      </div>
    </>
  );
}
