import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './pages/Landing';
import { SHOPIFY_APP_URL, RETAIL_APP_URL } from './utils/constants';
import './index.css';

function RedirectToShopify() {
  useEffect(() => {
    window.location.href = `${SHOPIFY_APP_URL}/shopify`;
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg text-border-subtle mb-4">Redirecting to Shopify app...</p>
      </div>
    </div>
  );
}

function RedirectToRetail() {
  useEffect(() => {
    window.location.href = `${RETAIL_APP_URL}/retail`;
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg text-border-subtle mb-4">Redirecting to Retail app...</p>
      </div>
    </div>
  );
}

function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route 
          path="/shopify" 
          element={<RedirectToShopify />}
        />
        <Route 
          path="/retail" 
          element={<RedirectToRetail />}
        />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppRoutes />
      </Router>
    </HelmetProvider>
  );
}

export default App;

