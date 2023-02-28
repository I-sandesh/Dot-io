import React from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/authContext'
function ProtectedRoute({children}) {
    const { user } = useAuth()
    const router = useRouter()
    React.useEffect(() => {
        if(!user?.uid){
            router.push("/login","",{ shallow: true });
        }
        console.log(user,"user")
    }, [user,router])
    return <> {user.email?children:null} </>
}

export default ProtectedRoute