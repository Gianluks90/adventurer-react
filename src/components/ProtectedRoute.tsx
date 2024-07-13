import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "./AuthProvider";
import Loader from "./Loader";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <Loader />;
    }
    if (!user) {
        return <Navigate to="/login" />;
    }
    return children;
}

export default ProtectedRoute;