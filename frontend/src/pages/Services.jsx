import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const [modal, setModal] = useState({
    active: false,
    title: '',
    desc: '',
    points: []
  });

  const openServiceModal = (title, desc, points) => {
    setModal({ active: true, title, desc, points });
    document.body.style.overflow = 'hidden';
  };

  const closeServiceModal = (e) => {
    // Close only if backdrop clicked or close button clicked
    if (!e || e.target.classList.contains('service-modal-overlay') || e.target.classList.contains('modal-close-btn') || e.target.tagName === 'BUTTON') {
      setModal(prev => ({ ...prev, active: false }));
      document.body.style.overflow = '';
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setModal(prev => ({ ...prev, active: false }));
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; // cleanup on unmount
    };
  }, []);

  const services = [
    {
      title: 'AEPS',
      desc: 'AEPS allows retailers to offer basic banking services using biometric authentication. Customers can withdraw cash, check balance and get mini statements without visiting a bank branch.',
      points: ['Cash Withdrawal using Aadhaar', 'Balance Enquiry', 'Mini Statement', 'Secure Biometric Authentication', 'Works Across All Major Banks', 'High Commission Per Transaction']
    },
    {
      title: 'Money Transfer',
      desc: 'Send money instantly to any bank account across India. Fast, secure and reliable domestic money transfer service for your customers.',
      points: ['Transfer to Any Bank Account', 'Instant Settlement', 'High Transaction Limit', 'Low Commission Charges', '24/7 Service Available', 'Real-time Status Updates']
    },
    {
      title: 'Recharge',
      desc: 'Offer mobile recharge, DTH recharge and data card recharge services to your customers instantly with best commission rates.',
      points: ['All Operator Recharge', 'DTH Recharge', 'Data Card Recharge', 'Instant Processing', 'Best Commission Rates', 'Easy to Use']
    },
    {
      title: 'BBPS',
      desc: 'Pay utility bills like electricity, water, gas, and more using BBPS. One-stop solution for all bill payment needs.',
      points: ['Electricity Bill Payment', 'Water Bill Payment', 'Gas Bill Payment', 'Broadband & DTH Bills', 'Fast Confirmation', 'RBI Regulated Platform']
    },
    {
      title: 'Insurance',
      desc: 'Offer life, health, motor and shop insurance services to your customers and earn high commission on every policy sold.',
      points: ['Life Insurance', 'Health Insurance', 'Motor Insurance', 'Shop Insurance', 'Device Insurance', 'High Commission Per Policy']
    },
    {
      title: 'Travel Booking',
      desc: 'Book flights, buses, hotels and IRCTC train tickets for your customers. One platform for all travel needs.',
      points: ['Flight Ticket Booking', 'Bus Ticket Booking', 'Hotel Booking', 'IRCTC Train Tickets', 'Instant Confirmation', 'Best Prices Guaranteed']
    },
    {
      title: 'PAN Card',
      desc: 'Help customers apply for new PAN card or make corrections in existing PAN card easily through our platform.',
      points: ['New PAN Card Application', 'PAN Card Correction', 'Quick Processing', 'Doorstep Delivery', 'Status Tracking', 'Affordable Charges']
    },
    {
      title: 'Neo Banking',
      desc: 'Open digital bank accounts, apply for credit cards and access modern banking features for your customers.',
      points: ['Digital Bank Account Opening', 'Credit Card Apply', 'Kotak BC Apply', 'NSDL BC Apply', 'SBM FD Card', 'Physical Card Services']
    }
  ];

  return (
    <>
      <style>{`
        .service-modal-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          z-index: 9999;
          justify-content: center;
          align-items: center;
        }
        .service-modal-overlay.active {
          display: flex;
        }
        .service-modal-box {
          background: #fff;
          border-radius: 18px;
          padding: 40px 36px 32px;
          max-width: 480px;
          width: 92%;
          position: relative;
          box-shadow: 0 20px 60px rgba(0,0,0,0.25);
          animation: slideUpModal 0.3s ease;
          text-align: left;
        }
        @keyframes slideUpModal {
          from { transform: translateY(40px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .modal-close-btn {
          position: absolute;
          top: 14px;
          right: 18px;
          background: none;
          border: none;
          font-size: 26px;
          cursor: pointer;
          color: #888;
          line-height: 1;
          transition: color 0.2s;
        }
        .modal-close-btn:hover { color: #e63946; }
        .modal-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff6b35, #e63946);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .modal-icon i { color: #fff; font-size: 22px; }
        #modal-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 6px;
        }
        #modal-desc {
          color: #555;
          font-size: 0.95rem;
          margin-bottom: 16px;
          line-height: 1.6;
        }
      `}</style>

      <section className="page-title">
        <div className="container">
          <h1>Our Services</h1>
          <p>All Digital &amp; Banking Services at One Place</p>
        </div>
      </section>

      <section className="services-list">
        <div className="container service-grid">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="service-box"
              onClick={() => openServiceModal(item.title, item.desc, item.points)}
              style={{ cursor: 'pointer' }}
            >
              {item.title}
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICE MODAL ===== */}
      <div
        id="serviceModal"
        className={`service-modal-overlay ${modal.active ? 'active' : ''}`}
        onClick={closeServiceModal}
      >
        <div className="service-modal-box">
          <button className="modal-close-btn" onClick={() => setModal(prev => ({ ...prev, active: false }))}>
            &times;
          </button>
          <div className="modal-icon">
            <i className="fa-solid fa-star"></i>
          </div>
          <h2 id="modal-title">{modal.title}</h2>
          <p id="modal-desc">{modal.desc}</p>
          <ul id="modal-points" className="service-points">
            {modal.points.map((point, index) => (
              <li key={index}>
                <i className="fa-solid fa-circle-check"></i> {point}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="btn-primary"
            style={{ display: 'inline-block', marginTop: '18px' }}
            onClick={() => {
              document.body.style.overflow = '';
            }}
          >
            <i className="fa-solid fa-phone"></i> Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
