import route from "next/router";
import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import User from "@/model/User";
import Cookies from 'js-cookie'

interface AuthContextProps {
    user?: User
    loading?: boolean
    login?: (email: string, password: string) => Promise<void>
    register?: (email: string, password: string) => Promise<void>
    googleLogin?: () => Promise<void>
    logOut?: () => Promise<void>

}

const AuthContext = createContext<AuthContextProps>({})
async function normalizedUser(userFirebase: firebase.User): Promise<User> {
    const token = await userFirebase.getIdToken()
    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token,
        provider: userFirebase.providerData[0]?.providerId,
        urlImage: userFirebase.photoURL
    }
}

function manegementCookie(logedIn: boolean) {
    if (logedIn) {
        Cookies.set('admin-template-gabs-auth', logedIn, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-template-gabs-auth')
    }
}

export function AuthProvider(props) {
    const [user, setUser] = useState<User>(null)
    const [loading, setLoading] = useState(true)


    async function sessionConfig(userFirebase) {
        if (userFirebase?.email) {
            const user = await normalizedUser(userFirebase)
            setUser(user)
            manegementCookie(true)
            setLoading(false)
            return user.email
        } else {
            setUser(null)
            manegementCookie(false)
            setLoading(false)
            return false
        }
    }

    async function googleLogin() {
        try {
            setLoading(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            await sessionConfig(resp.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function login(email: string, password: string) {
        try {
            setLoading(true)
            const resp = await firebase.auth()
                .signInWithEmailAndPassword(email, password)

            await sessionConfig(resp.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function register(email: string, password: string) {
        try {
            setLoading(true)
            const resp = await firebase.auth()
                .createUserWithEmailAndPassword(email, password)

            await sessionConfig(resp.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }


    async function logOut() {
        try {
            setLoading(true)
            await firebase.auth().signOut()
            await sessionConfig(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (Cookies.get('admin-template-gabs-auth')) {
            const cancel = firebase.auth().onIdTokenChanged(sessionConfig)
            return () => cancel()
        } else {
            setLoading(false)
        }
    }, [])
    return (
        <AuthContext.Provider value={{
            user,
            loading,
            googleLogin,
            login,
            register,
            logOut
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext