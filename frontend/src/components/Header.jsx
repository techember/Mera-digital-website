import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesTimer = useRef(null);

  const handleServicesEnter = () => {
    clearTimeout(servicesTimer.current);
    setServicesOpen(true);
  };
  const handleServicesLeave = () => {
    servicesTimer.current = setTimeout(() => setServicesOpen(false), 300);
  };

  // Helper function to close all menus and scroll to top smoothly
  const handleLinkClick = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Close menu on initial mount
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, []);

  return (
    <header className="header">
      <div className="container nav">
        {/* LOGO */}
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <img src="/assets/images/logo.png" alt="MeraDigitalPay" />
          <span>Mera <span className="brand">Digital Pay DAUDEGA</span></span>
        </Link>

        {/* MOBILE TOGGLE */}
        {!isAuthPage && (
          <button className="menu-toggle" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            <i className={menuOpen ? 'fa fa-times' : 'fa fa-bars'}></i>
          </button>
        )}

        {/* NAV MENU */}
        {!isAuthPage && (
          <ul className={`menu ${menuOpen ? 'show' : ''}`} id="menu">
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>

          {/* SERVICES MEGA MENU */}
          <li
            className={`mega ${servicesOpen ? 'open' : ''}`}
            id="servicesMenu"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <a href="#" onClick={e => e.preventDefault()}>
              Services <i className="fa fa-angle-down"></i>
            </a>

            <div className="mega-menu four-col">
              {/* COL 1 */}
              <div className="mega-col">
                <h4><i className="fa fa-building-columns"></i> Banking Services</h4>
                <Link to="/services/aeps" onClick={handleLinkClick}><i className="dot"></i> AEPS</Link>
                <Link to="/services/money-transfer" onClick={handleLinkClick}><i className="dot"></i> Money Transfer (DMT)</Link>
                <Link to="/services/micro-atm" onClick={handleLinkClick}><i className="dot"></i> Micro ATM Withdrawal</Link>

                <h4 className="mid-title"><i className="fa fa-wallet"></i> Neo Banking</h4>
                <Link to="/services/digital-bank-account" onClick={handleLinkClick}><i className="dot"></i> Digital Bank Account</Link>
                <Link to="/services/physical-card" onClick={handleLinkClick}><i className="dot"></i> Physical Card</Link>
                <Link to="/services/upi-payment" onClick={handleLinkClick}><i className="dot"></i> UPI Payment</Link>
                <Link to="/services/loan" onClick={handleLinkClick}><i className="dot"></i> Loan</Link>
                <Link to="/services/investment" onClick={handleLinkClick}><i className="dot"></i> Investment</Link>
              </div>

              {/* COL 2 */}
              <div className="mega-col">
                <h4><i className="fa fa-bolt"></i> Utility &amp; Bill Payment</h4>
                <Link to="/services/mobile-dth-recharge" onClick={handleLinkClick}><i className="dot"></i> Mobile &amp; DTH Recharge</Link>
                <Link to="/services/bbps" onClick={handleLinkClick}><i className="dot"></i> BBPS</Link>
                <Link to="/services/ott-recharge" onClick={handleLinkClick}><i className="dot"></i> OTT Recharge</Link>

                <h4 className="mid-title"><i className="fa fa-shield-halved"></i> Insurance</h4>
                <Link to="/services/health-insurance" onClick={handleLinkClick}><i className="dot"></i> Health Insurance</Link>
                <Link to="/services/motor-insurance" onClick={handleLinkClick}><i className="dot"></i> Motor Insurance</Link>
                <Link to="/services/shop-insurance" onClick={handleLinkClick}><i className="dot"></i> Shop Insurance</Link>
                <Link to="/services/device-insurance" onClick={handleLinkClick}><i className="dot"></i> Device Insurance</Link>
              </div>

              {/* COL 3 */}
              <div className="mega-col">
                <h4><i className="fa fa-id-card"></i> E-Governance</h4>
                <Link to="/services/pan-card" onClick={handleLinkClick}><i className="dot"></i> PAN Card</Link>
                <Link to="/services/itr-filing" onClick={handleLinkClick}><i className="dot"></i> ITR Filing</Link>
                <Link to="/services/gst-registration" onClick={handleLinkClick}><i className="dot"></i> GST Registration</Link>
                <Link to="/services/msme-registration" onClick={handleLinkClick}><i className="dot"></i> MSME Registration</Link>

                <h4 className="mid-title"><i className="fa fa-user-check"></i> Account Services</h4>
                <Link to="/services/account-opening" onClick={handleLinkClick}><i className="dot"></i> Account Opening</Link>
                <Link to="/services/credit-card-apply" onClick={handleLinkClick}><i className="dot"></i> Credit Card Apply</Link>
                <Link to="/services/sbm-fd-card" onClick={handleLinkClick}><i className="dot"></i> SBM FD Card Apply</Link>
              </div>

              {/* COL 4 */}
              <div className="mega-col">
                <h4><i className="fa fa-plane"></i> Travel Services</h4>
                <Link to="/services/irctc-ticket-booking" onClick={handleLinkClick}><i className="dot"></i> IRCTC Ticket Booking</Link>
                <Link to="/services/flight-booking" onClick={handleLinkClick}><i className="dot"></i> Flight Booking</Link>
                <Link to="/services/bus-booking" onClick={handleLinkClick}><i className="dot"></i> Bus Booking</Link>
                <Link to="/services/hotel-booking" onClick={handleLinkClick}><i className="dot"></i> Hotel Booking</Link>

                <h4 className="mid-title"><i className="fa fa-briefcase"></i> Business</h4>
                <Link to="/services/nsdl-bc-apply" onClick={handleLinkClick}><i className="dot"></i> NSDL BC Apply</Link>
                <Link to="/services/kotak-bc-apply" onClick={handleLinkClick}><i className="dot"></i> Kotak BC Apply</Link>
                <Link to="/services/cms-airtel" onClick={handleLinkClick}><i className="dot"></i> CMS Airtel</Link>
                <Link to="/services/payout" onClick={handleLinkClick}><i className="dot"></i> Payout</Link>
              </div>
            </div>
          </li>

          <li><Link to="/income-calculator" onClick={handleLinkClick}>Income Calculator</Link></li>
          <li><Link to="/login" className="btn-outline-nav" onClick={handleLinkClick}>Login</Link></li>
          <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
        </ul>
        )}
      </div>
    </header>
  );
}
