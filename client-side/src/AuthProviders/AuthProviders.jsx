import React, { createContext, useEffect, useState } from 'react';
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
 } from "firebase/auth";
import app from './../firebase/firebase.config'
export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading]= useState(true);
    const createUser  = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const updateUserProfile =(name,imgUrl)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{displayName: name, photoURL: imgUrl})

    }
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider);
    }
    
    const signInWithGithub=()=>{
        setLoading(true)
        return signInWithPopup(auth,gitProvider);
    }
    //observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>unsubscribe();
    },[])

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    const authInfo ={
        user,
        createUser,
        loginUser,
        logOut,
        updateUserProfile,
        signInWithGoogle,
        signInWithGithub,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}            
        </AuthContext.Provider>
    );
};

export default AuthProviders;