import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  async function login(){
    console.log("login button clicked");

    if (!email || !password) {
      toast.error("email and password required")
      return;
    }

    try {
      const res = await axios.post(import.meta.env.VITE_BACKEND_URL +"users/login",{
      email : email,
      password : password,
    })
    console.log(res);
    
    if(res.data.role == "admin"){
      //window.location.href ="/admin"
      navigate("/admin")
    }else{
      //window.location.href ="/home"
      navigate("/")
      
    }
  
    toast.success("Login Successfull")
    
    } catch (error) {
        console.log("error during login");
        toast.error("error during login")
        console.log(error);
        
        
    }

    
  }

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-[100px] bg-accent flex justify-center items-center relative ">
        <img src="./logo.png" className="absolute left-10 w-[150px]" />
        <h1 className="font-bold text-center text-3xl">
          Welcome to the Future
        </h1>
      </div>
      <div className="w-full h-full flex justify-center items-center bg-primary ">
        <div className="w-[600px] min-h-[500px] shadow-2xl rounded-4xl">
          <h1 className="text-center font-bold text-4xl ">
            Let's Login To Your future
          </h1>
          <div className=" w-full min-h-[400px] flex flex-col justify-center items-center gap-[50px] relative">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Enter Your Email"
              className="w-[500px] h-[50px] border-1 text-center rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Enter Your Password"
              className="w-[500px] h-[50px] border-1 text-center rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
            />
            <p className="text-right absolute right-[60px]">
              Forgot Your Password{" "}
              <Link to="/register" className="italic">
                Reset Here
              </Link>
            </p>
            <button onClick={login}
            className="w-[150px] h-[50px] bg-black text-white rounded-4xl font-bold hover:bg-accent hover:text-secondary">
              Log In
            </button>
            <p className="">
              Don't Have An Account?{" "}
              <Link to="/register" className="italic">
                Register Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
