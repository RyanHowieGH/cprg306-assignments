import { AuthContextProvider } from "./_utils/auth-context";

export default function Layout({ children }) {
    return (
        <AuthContextProvider>
        <div>{children}</div>
        </AuthContextProvider>
    );
    }