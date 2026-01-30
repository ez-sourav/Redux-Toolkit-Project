import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 w-full text-white">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/collection" element={<CollectionPage/>}/>
      </Routes>
      
    </div>
  );
};

export default App;
