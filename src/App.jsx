import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import List from "./pages/List";

const App = () => {
  return (
    <BrowserRouter>  
      <Header /> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;