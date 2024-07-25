import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorld from "./pages/HelloWorld";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/helloWorld" element={<HelloWorld />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
