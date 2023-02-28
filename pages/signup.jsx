import React, { useState } from "react";
import { useAuth } from "@/contexts/authContext";
import Link from "next/link";
function SignUp() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { user ,signup } = useAuth();
  console.log(user)
  async function handleSubmit(e){
    e.preventDefault();
    console.log(email, password);
    try{
      let A = signup(name,email, password);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <form className="bg-white flex flex-col items-center border p-8 rounded-md" onSubmit={handleSubmit}>
        <h1 className="font-bold text-lg text-[#408080]">SignUp</h1>
        <input className="px-3 py-2 shadow-lg my-2 focus:outline-[#408080]" type="text" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)} required/>
        <input className="px-3 py-2 shadow-lg my-2 focus:outline-[#408080]" type="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)} required/>
        <input className="px-3 py-2 shadow-lg my-2 focus:outline-[#408080]" type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} required/>
        <button className="bg-primary text-white bg-[#408080] px-10 py-2 rounded-full hover:bg-[#408080bb] m-3">SignUp</button>
        <Link href={"/signup"}>Already Have A Account? <span className="text-[#408080]">Login</span> </Link>
      </form>
    </div>
  );
}

export default SignUp;
