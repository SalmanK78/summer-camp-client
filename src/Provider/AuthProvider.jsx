import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
export const AuthContext = createContext(null);

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }

    const signIn = (email, password)=>{
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, CurrentUser =>{
            setUser(CurrentUser);
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        signIn,
        createUser,
        updateUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;