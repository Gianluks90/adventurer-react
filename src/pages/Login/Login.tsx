import { useAuth } from "../../components/AuthProvider";
import { Google} from "iconoir-react";
import "./login.css";
import { useState } from "react";

export default function Login() {
  const { login } = useAuth();
  const [backgroundUrl, setBackgroundUrl] = useState<string>('/backgrounds/summer.jpg');

  return (
    <div className="login-container" style={{background: `url(${backgroundUrl})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <h1 className="cinzel-font app-title">A<span>dventure</span>R</h1>
      <h2 className="montserrat-font app-subtitle">studio</h2>
      <h3>Crea i tuoi personaggi per il gioco di ruolo più famoso del mondo!</h3>
      <button className="as-standard-btn" onClick={login}>
        <Google/> Login with Google</button>
    </div>
  );
}