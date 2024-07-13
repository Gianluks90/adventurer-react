import { useEffect, useState } from 'react';
import './App.css'
import { ThemeService } from './services/themeService';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthProvider';
import Home from './pages/Home/Home';
import CharactersList from './pages/CharactersList/CharactersList';

export default function App() {

  useEffect(() => {
    ThemeService.getUserThemePreference();
  }, []);

  const [backgroundUrl, setBackgroundUrl] = useState<string>('/backgrounds/summer.jpg');

  return (
    <div className="main-container" style={{ background: `url(${backgroundUrl})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="/characters" element={
              <ProtectedRoute>
                <CharactersList />
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