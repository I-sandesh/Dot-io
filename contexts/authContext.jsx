import { createContext,useContext, useEffect, useState} from "react"
import { onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup ,updateProfile} from "firebase/auth"
import {auth, userRef} from "firebaseConfig"
import { useRouter } from "next/router";
import { addUser } from "@/components/firebase/firebase";

export const AuthContext = createContext({})
const provider = new GoogleAuthProvider();
export const useAuth = () => useContext(AuthContext)


export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userr) => {
            if (userr) {
                setUser({
                    uid:userr.uid,
                    email:userr.email,
                    displayName: userr.displayName,
                    photoURL: userr.photoURL,
                    isVerified: userr.emailVerified
                })
                console.log(user)
            } else {
                setUser({})
            }
            console.log(user)
            setLoading(false)
        });
        return ()=> unsubscribe();
    },[])
    const signup = async (name,email, password) => {
        const newUser = await createUserWithEmailAndPassword(auth, email, password);
        if(newUser.user.email){
            updateProfile(
                newUser.user,
                {
                    displayName: name,
                }
            )
            // await addUser({
            //     email: email,
            //     password: password,
            //     displayName: name
            // },newUser.user.uid);
        }
        
        router.push("/");
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth);
    }
    const GoogleAuth = async ()=>{
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log(token);
        console.log(user,"Google Auth User");
        router.push("/");
    }

    const value = {
        user,
        signup,
        login,
        logout,
        GoogleAuth
    }
    if(loading){
        return <div>Authenticating...</div>
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
