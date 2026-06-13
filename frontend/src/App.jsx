import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import IncomeCalculator from './pages/IncomeCalculator';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import AdhikariChargeback from './pages/AdhikariChargeback';
import B2bChargeback from './pages/B2bChargeback';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="income-calculator" element={<IncomeCalculator />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="terms" element={<Terms />} />
          <Route path="term" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="refund-and-cancellation" element={<Refund />} />
          <Route path="adhikari-chargeback" element={<AdhikariChargeback />} />
          <Route path="b2b-chargeback" element={<B2bChargeback />} />
        </Route>

        {/* Catch-all page */}
        <Route path="*" element={
          <div style={{ textAlign: 'center', padding: '120px 20px' }}>
            <h2 style={{ fontSize: '2rem', color: '#0a144a', marginBottom: '15px' }}>404 — Page Not Found</h2>
            <p style={{ color: '#666' }}>The page you are looking for does not exist.</p>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

