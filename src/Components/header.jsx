import { Link } from "react-router-dom";

export default function Header(){
    return(
       <div className="w-full h-[100px] bg-accent flex  ">
            <img src="./logo.png" className="h-25 w-auto"/>
            <div className="w-full h-full flex text-white text-xl items-center justify-center gap-[30px] ">
                <Link to="/">Home</Link>
                <Link to="/product">Product</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>


            </div>
       </div>
    )
}