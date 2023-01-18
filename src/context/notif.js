import { createContext, useEffect, useState } from "react";

const NotifContext = createContext();

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function NotifProvider({ children }) {
  const [notif, setNotif] = useState({});
  const notify = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <NotifContext.Provider value={{ notif, setNotif, notify }}>
      <ToastContainer />
      {children}
    </NotifContext.Provider>
  );
}

export default NotifContext;
