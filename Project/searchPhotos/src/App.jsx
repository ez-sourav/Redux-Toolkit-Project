import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import NavBar from "./components/NavBar";
import { ToastContainer, Zoom } from "react-toastify";

const App = () => {
  return (
    <div className="min-h-screen w-full pb-5 bg-linear-to-br from-[#020617] via-[#020617] to-[#0f172a] text-white">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Zoom}
      />
    </div>
  );
};

export default App;
