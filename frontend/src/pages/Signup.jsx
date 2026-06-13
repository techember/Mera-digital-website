import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    district: '',
    state: '',
    position: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup submitted:', formData);
    // In a real application, this would register the agent.
    alert('Registration submitted successfully. Integrations will be set up in later phases.');
    setFormData({
      fullName: '',
      mobile: '',
      district: '',
      state: '',
      position: ''
    });
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Inter, Segoe UI, Arial;
        }
        body {
          background: #f5f7ff;
        }
        .login-wrapper {
          max-width: 1100px;
          margin: 60px auto;
          background: #fff;
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0,0,0,.15);
        }
        .login-left {
          padding: 50px;
          text-align: center;
        }
        .login-logo {
          width: 110px;
          margin: 0 auto 15px;
          display: block;
        }
        .login-left h2 {
          color: #0a144a;
          margin-bottom: 10px;
          font-size: 22px;
        }
        .login-left .sub {
          font-size: 14px;
          margin-bottom: 25px;
        }
        .login-left .sub a {
          color: #ff6a00;
          font-weight: 600;
          text-decoration: none;
        }
        .input-group {
          display: flex;
          align-items: center;
          border: 1px solid #ddd;
          padding: 12px 14px;
          border-radius: 10px;
          margin-bottom: 15px;
          text-align: left;
        }
        .input-group i {
          color: #999;
          margin-right: 10px;
        }
        .input-group input,
        .input-group select {
          border: none;
          outline: none;
          width: 100%;
          font-size: 14px;
          background: none;
        }
        .btn-login {
          width: 100%;
          background: #ff6a00;
          color: #fff;
          padding: 14px;
          border: none;
          border-radius: 30px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: .3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .btn-login:hover {
          background: #e85d00;
        }
        .social {
          margin-top: 30px;
        }
        .social p {
          font-size: 13px;
          margin-bottom: 10px;
          color: #555;
        }
        .icons a {
          display: inline-flex;
          width: 36px;
          height: 36px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #eef1ff;
          margin: 0 4px;
          color: #0a144a;
          transition: .3s;
          text-decoration: none;
        }
        .icons a:hover {
          background: #ff6a00;
          color: #fff;
        }
        .login-right {
          background: #2f3388;
          color: #fff;
          padding: 50px;
          position: relative;
        }
        .login-right h2 {
          margin-bottom: 10px;
        }
        .login-right p {
          font-size: 14px;
          opacity: .9;
          margin-bottom: 30px;
        }
        .help-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
          font-size: 14px;
        }
        .help-item i {
          background: #fff;
          color: #2f3388;
          padding: 10px;
          border-radius: 50%;
          width: 34px;
          height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .right-illustration {
          width: 260px;
          margin-top: 30px;
          opacity: 0.9;
        }
        @media (max-width: 900px) {
          .login-wrapper {
            grid-template-columns: 1fr;
            margin: 30px 15px;
          }
          .login-right {
            text-align: center;
          }
          .right-illustration {
            width: 220px;
            margin: 30px auto 0;
            display: block;
          }
        }
        @media (max-width: 500px) {
          .login-left,
          .login-right {
            padding: 30px 20px;
          }
          .login-logo {
            width: 90px;
          }
        }
      `}</style>

      <div className="login-wrapper">
        {/* LEFT : REGISTRATION FORM */}
        <div className="login-left">
          {/* LOGO */}
          <img src="/assets/images/logo.png" className="login-logo" alt="Mera Digital Pay" />

          <h2>FREE REGISTRATION</h2>
          <p className="sub">
            Already have an account?{' '}
            <Link to="/login">Login here</Link>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <i className="fa fa-user"></i>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <i className="fa fa-phone"></i>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <i className="fa fa-location-dot"></i>
              <input
                type="text"
                name="district"
                placeholder="District"
                value={formData.district}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <i className="fa fa-map"></i>
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <i className="fa fa-briefcase"></i>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              >
                <option value="">Select Position</option>
                <option value="Retailer">Retailer</option>
                <option value="Distributor">Distributor</option>
                <option value="Franchise">Franchise</option>
                <option value="District Franchise">District Franchise</option>
              </select>
            </div>

            <button type="submit" className="btn-login">
              Register Now <i className="fa fa-arrow-right"></i>
            </button>
          </form>

          {/* SOCIAL */}
          <div className="social">
            <p>JOIN US ON SOCIAL</p>
            <div className="icons">
              <a href="https://www.facebook.com/share/1NJGzCu1yv/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://whatsapp.com/channel/0029Vb6Xac9Gk1FmZbg5kD3G" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
              <a href="https://t.me/+kuz7ioMUeC1iMjM9" target="_blank" rel="noreferrer"><i className="fab fa-telegram-plane"></i></a>
              <a href="https://www.instagram.com/meradigitalpay_" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.youtube.com/@meradigitalpay_official" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        {/* RIGHT : INFO PANEL */}
        <div className="login-right">
          <h2>WHY JOIN MERA DIGITAL PAY?</h2>
          <p>India's trusted B2B Fintech platform</p>

          <div className="help-item">
            <i className="fa fa-check"></i>
            High Commission & Fast Settlement
          </div>

          <div className="help-item">
            <i className="fa fa-check"></i>
            AEPS, Banking, Recharge & More
          </div>

          <div className="help-item">
            <i className="fa fa-check"></i>
            Dedicated Support Team
          </div>

          <img
            src="/assets/images/reg.webp"
            className="right-illustration"
            alt="Agent Registration"
          />
        </div>
      </div>
    </>
  );
}
