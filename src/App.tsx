import { useEffect } from 'react';
import './App.css';
import { ThemeService } from './services/themeService';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

export default function App() {

  useEffect(() => {
    ThemeService.getUserThemePreference();
  }, []);
  
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}