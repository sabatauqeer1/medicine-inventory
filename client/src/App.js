import { Route, Routes } from "react-router-dom";

import Home from "./Components/assets/components/home";
import Info from "./Components/assets/components/info";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="api/medicineInventory/home/search" element={<Home />} />
        <Route
          path="api/medicineInventory/:searchValue/info"
          element={<Info />}
        />
      </Routes>
    </>
  );
};

export default App;
