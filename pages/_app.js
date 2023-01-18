import Layout from "../components/Layout";
import "../styles/globals.css";

import { NotifProvider } from "../src/context/notif";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <NotifProvider>
        <Component {...pageProps} />
      </NotifProvider>
    </Layout>
  );
}
