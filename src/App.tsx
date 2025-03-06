import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Detail/:id' element={<Detail/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
