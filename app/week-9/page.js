'use client'

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page(){
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    if(!user) {
        return(
            <div className="flex flex-col items-center justify-center h-screen p-4">
                <h1 className="text-3xl font-bold mb-6">Welcome to our Page </h1>
                <button onClick={gitHubSignIn} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Login With GitHub
                </button>
            </div>
        );
    }

    return(
        <div className="flex flex-col items-center justify-center h-screen p-4 text-center">
            <h1 className="text-3xl font-bold mb-6">Welcome to our Page </h1>
            <p className="mb-4">Welcome, ({user.email})</p>
            <button onClick={firebaseSignOut}  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Logout
            </button>
            <div>
                <Link href="../week-9/shopping-list" className="text-blue-500 hover:underline">
                Go to Shopping List
                </Link>
            </div>
        </div>
    )
}