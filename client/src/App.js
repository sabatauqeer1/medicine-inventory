import { Route, Routes } from "react-router-dom";
import Signup from "./Components/assets/components/signup";
import Login from "./Components/assets/components/login";
import Home from "./Components/assets/components/home";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="api/myInventory/signup" element={<Signup />} />
        <Route path="api/myInventory/login" element={<Login />} />
        <Route path="api/myInventory/home/search" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
