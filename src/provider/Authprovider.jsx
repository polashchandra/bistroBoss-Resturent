import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,} from "firebase/auth";
import { app } from "../firebase/firebase.config";





export const AuthContext = createContext(null)

const auth = getAuth(app);

const Authprovider = ({ children }) => {

    const [user, setuser] = useState(null)
    const [loding, setloding] = useState(true)
    const createUser=(email,password)=>{
        setloding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(email,password)
    }
    const logout =()=>{
        setloding(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentuser =>{
            setuser(currentuser)
            console.log('setuser',currentuser);
            setloding(false)
        });
        return ()=>{
            return unsubscribe()
        }
    },[])


    const userInfo = {
        user,
        loding,
        createUser,
        signIn,
        logout
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;