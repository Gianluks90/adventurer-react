import { useEffect, useState } from 'react';
import './App.scss'
import { ThemeService } from './services/themeService';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthProvider';
import { useTheme } from './components/ThemeProvider';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import CharactersList from './pages/CharactersList/CharactersList';

export default function App() {

  useEffect(() => {
    ThemeService.getUserThemePreference();
  }, []);

  const [backgroundUrl, setBackgroundUrl] = useState<string>('/backgrounds/summer.jpg');
  const { isDarkTheme } = useTheme();

  return (
    <div className="main-container" style={{ background: `url(${backgroundUrl})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className='overlay' style={{ backgroundColor: `rgba(0, 0, 0, ${isDarkTheme ? '.4' : '0'}`}}>
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
    </div>
  )
}