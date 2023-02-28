import React from 'react'
import { useAuth } from '@/contexts/authContext'
import { useRouter } from "next/router";
function logout() {
    const { logout } = useAuth();
    logout();
    const router = useRouter();
    router.push('/');
  return (
    <div onClick={()=>logout()}>Logout</div>
  )
}

export default logout