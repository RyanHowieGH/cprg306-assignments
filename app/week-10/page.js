"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    console.log(user);

    return (
    <main>
        <h1>Week 9</h1>
        <p>This is the Login Page</p>
        <p>
            {user ? (<button onClick={firebaseSignOut}>Sign Out</button> ) : (<button onClick={gitHubSignIn}>Sign In with GitHub</button>)}
            {user && (
                <p>
                    Welcome, {user.displayName}!
                    Your email is {user.email}.
                    <Link href="/week-10/secure">Go to Shopping List</Link>
                </p>
            )}
        </p>
    </main>
    );
}