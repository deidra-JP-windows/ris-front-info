import riftenLogo from '../public/riften.png'
import { Routes, Route, Link, Navigate } from "react-router";
import Recruit from './recruit/Recruit';
import MissionVision from './mission-vision/MissionVision';
import NewsRelease from './news-release/NewsRelease';
import ProductsServices from './products-services/ProductsServices';
import Home from './home/Home';
import Root from './root/Root';
import './App.css'

function App() {

  return (
    <>
      {/* ナビゲーションバー */}
      <nav style={{ background: '#ffffffff', color: '#fff', padding: '10px 0', marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', alignItems: 'center' }}>
          <Link to="/home" style={{ color: '#213547', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
          <Link to="/recruit" style={{ color: '#213547', textDecoration: 'none' }}>Recruit</Link>
          <Link to="/about" style={{ color: '#213547', textDecoration: 'none' }}>Mission & Vision</Link>
          <Link to="/" style={{ color: '#213547', textDecoration: 'none' }}>-</Link>
          <Link to="/products-services" style={{ color: '#213547', textDecoration: 'none' }}>Products & Services</Link>
          <Link to="/contact" style={{ color: '#213547', textDecoration: 'none' }}>News Release</Link>
        </div>
      </nav>
      {/* ルーター */}
      <Routes>
        <Route index path="/" element={<Root />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/about" element={<MissionVision />} />
        <Route path="/contact" element={<NewsRelease />} />
        <Route path="/products-services" element={<ProductsServices />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* 共通コンポーネント */}
      <img src={riftenLogo} className="logo" alt="Riften logo" />
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
