import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Support from "./Pages/Detail";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Detail/:id' element={<Support/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
