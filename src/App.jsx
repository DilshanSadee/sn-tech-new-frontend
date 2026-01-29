import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/header";
import AdminPage from "./pages/adminPage";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>

    <Toaster position="top-right"/>

    <div className="w-full h-screen bg-primary "> 
      <Routes path="/">

        <Route path="/*" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<h1>register</h1>} />
        <Route path="/admin/*" element={<AdminPage/>} />

      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
