import { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { auth, signInWithPopup } from "../services/firebaseService";
import { GoogleAuthProvider, signOut, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<any>(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const navigate = useNavigate();
    const login = () => {
        signInWithPopup(auth, new GoogleAuthProvider())
          .then(result => {
            setUser(result.user);
            navigate("/home");
          })
          .catch(error => {
            console.error("Error during sign in", error);
          });
    };

    const logout = () => {
        signOut(auth)
          .then(() => {
            setUser(null);
          })
          .catch(error => {
            console.error("Error during sign out", error);
          });
    };
      
    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
