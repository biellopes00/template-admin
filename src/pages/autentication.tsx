import AuthInput from "@/components/auth/AuthInput";
import { WarnIcon } from "@/components/icons";
import { useState } from "react";

export default function Autentication() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [mode, setMode] = useState<'login' | 'register'>('login')

    function showError(message, time=5){
        setError(message)
        setTimeout(() => setError(null), time * 1000)
    }
    function submit() {
        if (mode === 'login') {
            console.log('login')
            showError("An error occurred")
        } else {
            console.log('register')
            showError("An error occurred")
        }
    }
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img
                    src="https://source.unsplash.com/random"
                    alt="Imagens login screen"
                    className="h-screen w-full object-cover"
                />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className={`
            text-3xl font-bold mb-5
        `}>
                    {mode === 'login' ? "Enter with your login" : "Register on the platform"}
                </h1>
                {error ? (
                     <div className={`
                     flex items-center
                         bg-red-500 text-white py-3 px-5 my-2
                         border border-red-700 rounded-lg
                     `}>
                         {WarnIcon()}
                         <span className="ml-3">{error}</span>
                     </div>
                ):(
                    false
                )}
               

                <AuthInput
                    label="Email"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    required
                />
                <AuthInput
                    label="Password"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    required
                />

                <button onClick={submit} className={`
            w-full bg-indigo-500 hover:bg-indigo-400 rounded-lg px-4 py-3 mt-6
        `}>
                    {mode === 'login' ? "Enter" : "Register"}
                </button>
                <hr className="my-6 border-gray-300 w-full" />

                <button onClick={submit} className={`
            w-full bg-red-500 hover:bg-red-400 rounded-lg px-4 py-3
        `}>
                    Sign up with google
                </button>
                {mode === 'login' ? (
                    <p className="mt-8">
                        <a onClick={() => setMode('register')}
                            className={`text-blue-500 hover:text-blue-700 font-semibold
                                cursor-pointer
                            `}>
                            Create an account
                        </a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Already have an account?
                        <a onClick={() => setMode('login')}
                            className={`text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}>
                            Login here
                        </a>
                    </p>
                )}
            </div>
        </div>
    )
}