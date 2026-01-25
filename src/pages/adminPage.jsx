import { AiOutlineProduct } from "react-icons/ai";
import { FaListAlt } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { MdReviews } from "react-icons/md";
import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage(){
 return(
    <div className="w-full h-full bg-primary flex">
      <div className="w-[300px] h-full bg-accent max-h-full flex flex-col gap-[30px] ">
            <div className="w-full h-[100px]">
               <img src="/logo.png" alt="" />
            </div>

            <div className="w-full h-[40px] text-[40px] text-center">
               <h1>Admin Pannel</h1>
            </div>
      
         <div className="w-full h-[400px] flex flex-col text-[30px] gap-[20px] items-center">
               <Link to="/admin" className="flex flex-row gap-3 justify-center items-center"><FaListAlt/>Orders</Link>
               <Link to="/admin/products" className="flex flex-row items-center justify-center gap-3"><AiOutlineProduct />Products</Link>
               <Link to="/admin/users" className="flex flex-row items-center justify-center gap-3" ><HiOutlineUsers />Users</Link>
               <Link to="/admin/Reviews" className="flex flex-row items-center justify-center gap-3" ><MdReviews />Reviews</Link>
         </div>
         </div>

      <div className="w-[calc(100%-300px)] h-full bg-accent max-h-full flex items-center justify-center ">
         <div className="w-full h-full max-h-full overflow-y-scroll border-2 border-accent bg-primary rounded-4xl text-7xl">
            <Routes>
               <Route element={<h1>orders</h1>}/>
               <Route path="/products" element={<h1>products</h1>}/>
               <Route path="/users" element={<h1>Users</h1>}/>
               <Route path="/reviews" element={<h1>Reviews</h1>}/>
            </Routes>

         </div>
      </div>
    </div>
 )
}