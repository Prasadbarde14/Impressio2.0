import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css'
import HomePage from "./mobileView/home/Home";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
