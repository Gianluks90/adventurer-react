import { useEffect, useState } from 'react';
import './App.css'
import { ThemeService } from './services/themeService';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthProvider';
import Char from './pages/Char';
import Home from './pages/Home/Home';

export default function App() {

  useEffect(() => {
    ThemeService.getUserThemePreference();
  }, []);
  const [backgroundUrl, setBackgroundUrl] = useState<string>('/backgrounds/summer.jpg');

  return (
    <div className="login-container" style={{ background: `url(${backgroundUrl})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="/chars" element={
              <ProtectedRoute>
                <Char />
              </ProtectedRoute>
            } />
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}