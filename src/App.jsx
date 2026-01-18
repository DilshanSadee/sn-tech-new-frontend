import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/header";
import AdminPage from "./pages/adminPage";

function App() {
  return (
    <BrowserRouter>


    <div className="w-full h-screen bg-primary ">
        <Header/>
      <Routes path="/">
        <Route path="/" element={<h1>home page</h1>} />
        <Route path="/login" element={<h1>login</h1>} />
        <Route path="/register" element={<h1>register</h1>} />
        <Route path="/admin" element={<AdminPage/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
