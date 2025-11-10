import { useEffect, useState } from "react";
import { auth } from "../../config/config";
import { signOut, onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  function HandleSignOut() {
    signOut(auth)
      .then(() => {
        toast.success("User Signed Out Successful.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        setTimeout(() => {
          navigate("/signin");
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="flex items-center justify-between p-5 bg-blue-500 top-0 fixed w-full h-25 text-white">
          <span>{user ? user.displayName : "Loading..."}</span>
          <button
            type="button"
            onClick={HandleSignOut}
            className="flex border border-white p-2 bg-white text-blue-500 rounded-[5px] text-[16px]"
          >
            Sign Out
          </button>
        </div>
        <h1 className="mt-50 text-4xl">Dashboard</h1>
      </div>
    </>
  );
}
