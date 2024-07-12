import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "./AuthProvider";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <div>Loading...</div>; // Puoi sostituirlo con un componente di caricamento
    }
    if (!user) {
        return <Navigate to="/login" />;
    }
    return children;
}

export default ProtectedRoute;