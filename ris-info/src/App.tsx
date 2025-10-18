import riftenLogo from '../public/riften.png'
import { Routes, Route, Link, Navigate, useLocation } from "react-router";
import Recruit from './recruit/Recruit';
import MissionVision from './mission-vision/MissionVision';
import NewsRelease from './news-release/NewsRelease';
import ProductsServices from './products-services/ProductsServices';
import Home from './home/Home';
import Root from './root/Root';
import './App.css'

import { useState, useEffect } from 'react';

function App() {
  const [logoVisible, setLogoVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLogoVisible(false);
    const timeout = setTimeout(() => setLogoVisible(true), 600);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {/* ナビゲーションバー */}
      <nav style={{ background: '#ffffffff', color: '#fff', padding: '10px 0', marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', alignItems: 'center' }}>
          <Link to="/ris-front-info/home" style={{ color: '#213547', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
          <Link to="/ris-front-info/recruit" style={{ color: '#213547', textDecoration: 'none' }}>Recruit</Link>
          <Link to="/ris-front-info/about" style={{ color: '#213547', textDecoration: 'none' }}>Mission & Vision</Link>
          <Link to="/ris-front-info/" style={{ color: '#213547', textDecoration: 'none' }}>-</Link>
          <Link to="/ris-front-info/products-services" style={{ color: '#213547', textDecoration: 'none' }}>Products & Services</Link>
          <Link to="/ris-front-info/contact" style={{ color: '#213547', textDecoration: 'none' }}>News Release</Link>
        </div>
      </nav>
      {/* ルーター */}
      <Routes>
        <Route index path="/ris-front-info/" element={<Root />} />
        <Route path="/ris-front-info/home" element={<Home />} />
        <Route path="/ris-front-info/recruit" element={<Recruit />} />
        <Route path="/ris-front-info/about" element={<MissionVision />} />
        <Route path="/ris-front-info/contact" element={<NewsRelease />} />
        <Route path="/ris-front-info/products-services" element={<ProductsServices />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* 共通コンポーネント */}
      <img src={riftenLogo} className={`common_logo${logoVisible ? ' visible' : ''}`} alt="Riften logo" />
      {/* フッター */}
      <div className="common_padding"></div>
      <footer style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
        color: '#37546eff',
        textAlign: 'center',
        padding: '8px 0',
        fontSize: '9px',
        borderTop: '1px solid #eee',
        zIndex: 100,
        fontWeight: 500
      }}>
        I am me, you are you, that is the answer... 2024-2025
      </footer>
    </>
  )
}

export default App
