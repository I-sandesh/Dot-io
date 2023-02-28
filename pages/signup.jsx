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
        <h1 className="font-bold text-lg">SignUp</h1>
        <input className="px-3 py-2 shadow-lg my-2" type="text" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)} required/>
        <input className="px-3 py-2 shadow-lg my-2" type="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)} required/>
        <input className="px-3 py-2 shadow-lg my-2" type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} required/>
        <button className="bg-blue-600 text-white font-bold p-1 px-3 rounded-2xl transition-all hover:scale-90">SignUp</button>
        <Link href={"/signup"}>Already Have A Account? Login</Link>
      </form>
    </div>
  );
}

export default SignUp;
