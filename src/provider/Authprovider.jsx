import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,} from "firebase/auth";
import { app } from "../firebase/firebase.config";





export const AuthContext = createContext(null)

const auth = getAuth(app);

const Authprovider = ({ children }) => {

    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)
    //use google signup
    const gooleProvider=new GoogleAuthProvider()

    const createUser=(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    //google auth
    const googlesignIn=()=>{
        setloading(true)
        return signInWithPopup(auth,gooleProvider)
    }
    const logout =()=>{
        setloading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentuser =>{
            setuser(currentuser)
            console.log('setuser',currentuser);
            setloading(false)
        });
        return ()=>{
            return unsubscribe()
        }
    },[])


    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        logout,
        googlesignIn,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;