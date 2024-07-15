import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { checkUserExists } from "../services/userService";
import { AdventurerUser } from "../models/AdventurerUser";
import firebaseService from "../services/firebaseService";

interface AuthContextType {
  user: AdventurerUser | null;
  login: () => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);
// export const useAuth = () => useContext(AuthContext);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AdventurerUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebaseService.auth.onAuthStateChanged((user: User) => {
      checkUserExists(user).then(advUser => {
        if (advUser) {
          const adventuerUser = AdventurerUser.fromData(user.uid, advUser);
          setUser(adventuerUser);
          setLoading(false);
        }
      })
    });
    return unsubscribe;
  }, []);

  const navigate = useNavigate();
  const login = () => {

    signInWithPopup(firebaseService.auth, new GoogleAuthProvider())
      .then(result => {
        checkUserExists(result.user).then(advUser => {
          if (!advUser) {
            navigate("/login");
          } else {
            const adventuerUser = AdventurerUser.fromData(result.user.uid, advUser);
            setUser(adventuerUser);
            navigate("/home");
          }
        });
      })
      .catch(error => {
        console.error("Error during sign in", error);
      });

  };

  const logout = () => {
    signOut(firebaseService.auth)
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
