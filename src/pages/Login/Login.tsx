import { useAuth } from "../../components/AuthProvider";
import { Google } from "iconoir-react";
import "./login.scss";

export default function Login() {
  const { login } = useAuth();

  return (
    <>
      <h1 className="cinzel-font app-title">A<span>dventure</span>R</h1>
      <h2 className="montserrat-font app-subtitle">studio</h2>
      <h3 className="montserrat-font app-caption">Crea i tuoi personaggi per il gioco di ruolo più famoso del mondo!</h3>
      <div className="as-clear-btn" onClick={login}>
        <div>
          <Google /> Accedi con Google
        </div>
      </div>
    </>
  );
}