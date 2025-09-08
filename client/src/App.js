import { Route, Routes } from "react-router-dom";

import Home from "./Components/assets/components/home";
import Info from "./Components/assets/components/info";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="api/myInventory/home/search" element={<Home />} />
        <Route path="api/myInventory/:searchValue/info" element={<Info />} />
      </Routes>
    </>
  );
};

export default App;
