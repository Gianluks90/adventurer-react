import { useAuth } from "../components/AuthProvider";

export default function Login() {
    const { user, login, logout } = useAuth();
    return (
        <div>
          <h1>Firebase Authentication with Google</h1>
          {user ? (
            <div>
              <p>Welcome, {user.displayName}</p>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <button onClick={login}>Login with Google</button>
          )}
        </div>
      );
}