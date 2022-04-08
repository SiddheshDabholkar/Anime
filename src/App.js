import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Welcome from "./Pages/Welcome/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/:id" element={<Single />} />
    </Routes>
  );
}

export default App;
