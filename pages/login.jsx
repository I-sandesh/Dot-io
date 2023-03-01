import React, { useState } from "react";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();
  const { user ,login,GoogleAuth } = useAuth();
  console.log(user)
  async function handleSubmit(e){
    e.preventDefault();
    console.log(email, password);
    try{
      const A = await login(email, password);
      router.push("/eventPage");
    }catch(err){
      console.log(err);
    }
  }
  return (
    
    <div className="bg-gray-100 h-screen flex justify-center items-center bg-gradient-to-r from-[#3EADCF] to-[#ABE9CD]">
      <form className="bg-white flex flex-col items-center border p-8 rounded-md" onSubmit={handleSubmit}>
        <h1 className="font-bold text-lg text-[#408080]">Login</h1>
        <input className="px-3 py-2 my-2 focus:outline-[#408080]" type="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)} required/>
        <input className="px-3 py-2 shadow-lg my-2 focus:outline-[#408080]" type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} required/>
        <button className="bg-primary text-white bg-[#408080] px-10 py-2 rounded-full hover:bg-[#408080bb] m-3" type="submit">login</button>

        <Link href={"/signup"}>Not Have A Account? <span className="text-[#408080]">Signup</span> </Link>
      </form>
      {/* <button onClick={()=>GoogleAuth()}>Sign In With Google</button> */}
    </div>
  );
}

export default Login;
