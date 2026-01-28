import ResultGrid from "./components/ResultGrid";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div className="bg-gray-950 h-screen w-full text-white">
      <SearchBar/>
      <Tabs/>
      <ResultGrid/>
    </div>
  );
};

export default App;
