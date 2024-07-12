import { useEffect } from 'react';
import './App.css'
import Home from './pages/Home';
import { ThemeService } from './services/themeService';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthProvider';
import Char from './pages/Char';

export default function App() {

  useEffect(() => {
    ThemeService.getUserThemePreference();
  }, []);
  
  return (
    <>
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
    </>
  )
}