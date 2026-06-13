import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="footer-main">
        <div className="container">
          <div className="footer-single-row">

            {/* COL 1 — Logo + Address + Contact */}
            <div className="fc">
              <img src="/assets/images/footer-logo.jpg" className="footer-logo" alt="Mera Digital Pay" style={{ display: 'block', background: '#fff', borderRadius: '8px' }} />
              <p className="fc-desc">India's trusted B2B Fintech platform — AEPS, Banking, Recharge &amp; more digital services.</p>
              <p className="fc-sub">Head Office</p>
              <p className="fc-addr"><i className="fa-solid fa-location-dot"></i> Office No. 82, Aonla, Bareilly, UP - 243301</p>
              <p className="fc-sub">Branch Office</p>
              <p className="fc-addr"><i className="fa-solid fa-location-dot"></i> 1/2, Ekta Nagar, Bareilly, UP - 243122</p>
              <p className="fc-addr"><i className="fa-solid fa-phone"></i> +91 7088898725</p>
              <p className="fc-addr"><i className="fab fa-whatsapp"></i> +91 9675695450</p>
              <div className="fc-social" style={{ marginTop: '10px' }}>
                <a href="https://www.youtube.com/@meradigitalpay_official" target="_blank" rel="noreferrer" title="YouTube"><i className="fab fa-youtube"></i></a>
                <a href="https://www.instagram.com/meradigitalpay_" target="_blank" rel="noreferrer" title="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/share/1NJGzCu1yv/" target="_blank" rel="noreferrer" title="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="https://whatsapp.com/channel/0029Vb6Xac9Gk1FmZbg5kD3G" target="_blank" rel="noreferrer" title="WhatsApp"><i className="fab fa-whatsapp"></i></a>
              </div>
              <a href="https://play.google.com/store/apps/details?id=com.aps.partners" target="_blank" rel="noreferrer" className="fc-play-btn" style={{ marginTop: '10px' }}>
                <i className="fab fa-google-play"></i> Download App
              </a>
              <p className="fc-sub" style={{ marginTop: '10px' }}>Scan QR</p>
              <img src="/assets/images/qr.png" alt="Scan QR Code" className="footer-qr" />
            </div>

            {/* COL 2 — Emails + Registrations + Brands + Websites */}
            <div className="fc">
              <h4 className="fc-heading">Contact &amp; Info</h4>
              <p className="fc-email-row"><strong>Helpdesk:</strong> <a href="mailto:help@meradigitalpay.com">help@meradigitalpay.com</a></p>
              <p className="fc-email-row"><strong>Accounts:</strong> <a href="mailto:account@meradigitalpay.com">account@meradigitalpay.com</a></p>
              <p className="fc-email-row"><strong>Director:</strong> <a href="mailto:director@meradigitalpay.com">director@meradigitalpay.com</a></p>
              <p className="fc-email-row"><strong>B2B:</strong> <a href="mailto:B2B@meradigitalpay.com">B2B@meradigitalpay.com</a></p>
              <p className="fc-email-row"><strong>API:</strong> <a href="mailto:Api@meradigitalpay.com">Api@meradigitalpay.com</a></p>

              <p className="fc-sub" style={{ marginTop: '10px' }}>Registrations</p>
              <p className="fc-addr"><strong>GSTIN:</strong> 09FQBPR9639J1ZZ</p>
              <p className="fc-addr"><strong>Udyam:</strong> UP-15-0017747</p>
              <p className="fc-addr"><strong>ISO:</strong> 9001 : 2015</p>

              <p className="fc-sub" style={{ marginTop: '8px' }}>Websites</p>
              <a className="fc-link" href="https://www.meradigitalpay.com" target="_blank" rel="noreferrer">www.meradigitalpay.com</a>
              <a className="fc-link" href="https://www.meradigitalpay.com" target="_blank" rel="noreferrer">www.meradigitalpay.com</a>
            </div>

            {/* COL 3 — Policy + Panels + Account Opening */}
            <div className="fc">
              <h4 className="fc-heading">Company Policy</h4>
              <Link className="fc-link" to="/terms">Terms &amp; Conditions</Link>
              <Link className="fc-link" to="/privacy">Privacy Policy</Link>
              <Link className="fc-link" to="/refund-and-cancellation">Refund &amp; Cancellation</Link>
              <Link className="fc-link" to="/adhikari-chargeback">Adhikari Chargeback</Link>
              <Link className="fc-link" to="/b2b-chargeback">B2B Chargeback Policy</Link>

              <p className="fc-sub" style={{ marginTop: '10px' }}>Digital Pay Panels</p>
              <Link className="fc-link" to="/services/b2b-admin-panel">B2B Admin Panel</Link>
              <Link className="fc-link" to="/services/b2c-admin-panel">B2C Admin Panel</Link>
              <Link className="fc-link" to="/services/api-panel">API Panel</Link>
              <Link className="fc-link" to="/services/reseller-admin-panel">Reseller Admin Panel</Link>

              <p className="fc-sub" style={{ marginTop: '8px' }}>Account Opening APIs</p>
              <Link className="fc-link" to="/services/nsdl-biometric-account-opening">NSDL Biometric</Link>
              <Link className="fc-link" to="/services/kotak-biometric-account-opening">Kotak Biometric</Link>
            </div>

            {/* COL 4 — API Products + Govt Services */}
            <div className="fc">
              <h4 className="fc-heading">API Products</h4>
              <Link className="fc-link" to="/services/aeps">AEPS</Link>
              <Link className="fc-link" to="/services/micro-atm">Micro ATM</Link>
              <Link className="fc-link" to="/services/aeps">Aadhaar Pay</Link>
              <Link className="fc-link" to="/services/payout">Instant Payout</Link>
              <Link className="fc-link" to="/services/money-transfer">PPI DMT</Link>
              <Link className="fc-link" to="/services/upi-payment">UPI Cash Withdrawal</Link>
              <Link className="fc-link" to="/services/cms-airtel">CMS</Link>
              <Link className="fc-link" to="/services/bbps">BBPS</Link>
              <Link className="fc-link" to="/services/mobile-dth-recharge">Mobile &amp; DTH Recharge</Link>
              <Link className="fc-link" to="/services/digital-gift-cards">Digital Gift Cards</Link>

              <p className="fc-sub" style={{ marginTop: '8px' }}>Government Services</p>
              <Link className="fc-link" to="/services/pan-card">UTI &amp; NSDL PAN Card</Link>
              <Link className="fc-link" to="/services/loan">All Types of Loans</Link>
              <Link className="fc-link" to="/services/motor-insurance">Motor Insurance</Link>
            </div>

            {/* COL 5 — Travel + Smart Verification */}
            <div className="fc">
              <h4 className="fc-heading">Travel Booking</h4>
              <Link className="fc-link" to="/services/irctc-ticket-booking">IRCTC Ticket Booking</Link>
              <Link className="fc-link" to="/services/flight-booking">Flight Booking</Link>
              <Link className="fc-link" to="/services/bus-booking">Bus Booking</Link>
              <Link className="fc-link" to="/services/hotel-booking">Hotel Booking</Link>

              <p className="fc-sub" style={{ marginTop: '10px' }}>Smart Verification (50+)</p>
              <Link className="fc-link" to="/services/aadhaar-verification">Aadhaar Verification</Link>
              <Link className="fc-link" to="/services/pan-verification">PAN Verification</Link>
              <Link className="fc-link" to="/services/voter-card-verification">Voter Card Verification</Link>
              <Link className="fc-link" to="/services/passport-verification">Passport Verification</Link>
              <Link className="fc-link" to="/services/driving-license-verification">Driving License</Link>
              <Link className="fc-link" to="/services/rc-verification">RC Verification</Link>
              <Link className="fc-link" to="/services/bank-account-verification">Bank Account Verification</Link>
              <Link className="fc-link" to="/services/upi-verification">UPI Verification</Link>
              <Link className="fc-link" to="/services/gst-verification">GST Verification</Link>
              <Link className="fc-link" to="/services/company-cin-verification">Company CIN</Link>
              <Link className="fc-link" to="/services/digilocker-verification">DigiLocker</Link>
              <Link className="fc-link" to="/services/more-verification-apis"><strong>&amp; 50+ More APIs</strong></Link>
            </div>

          </div>
        </div>

        <div className="footer-bottom-bar">
          © 2026 <strong>Mera Digital Pay</strong>. All Rights Reserved.
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/919675695450?text=Hello%20Mera%20Digital%20Pay%20Team,%20I%20need%20help"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}
