import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [adhikariId, setAdhikariId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { adhikariId, password });
    // In a real application, this would authenticate against a backend.
    alert('Login attempted. Integrations will be set up in later phases.');
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
        .input-group input {
          border: none;
          outline: none;
          width: 100%;
          font-size: 14px;
        }
        .forgot {
          text-align: right;
          margin-bottom: 10px;
        }
        .forgot a {
          font-size: 13px;
          color: #0a144a;
          text-decoration: none;
        }
        .btn-login {
          width: 100%;
          background: #0a7c6a;
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
          background: #086456;
        }
        .login-info {
          margin: 15px 0;
          text-align: center;
          font-size: 13px;
          color: #555;
          line-height: 1.6;
        }
        .login-info strong {
          color: #0a144a;
        }
        .login-info a {
          color: #0a7c6a;
          font-weight: 600;
          text-decoration: none;
        }
        .social {
          margin-top: 25px;
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
        .lock-illustration {
          position: absolute;
          bottom: 40px;
          right: 40px;
          font-size: 90px;
          opacity: .15;
        }
        @media (max-width: 900px) {
          .login-wrapper {
            grid-template-columns: 1fr;
            margin: 30px 15px;
          }
          .login-right {
            text-align: center;
          }
          .lock-illustration {
            position: static;
            margin-top: 30px;
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
        {/* LEFT : LOGIN FORM */}
        <div className="login-left">
          {/* LOGO */}
          <img src="/assets/images/logo.png" className="login-logo" alt="Mera Digital Pay" />

          <h2>MERA DIGITAL PAY PARIVAAR ME AAPKA SWAGAT HAI</h2>

          <p className="sub">
            Don't have any account?{' '}
            <Link to="/signup">Register now</Link>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <i className="fa fa-user"></i>
              <input
                type="text"
                placeholder="Adhikari ID"
                value={adhikariId}
                onChange={(e) => setAdhikariId(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="forgot">
              <a href="#forgot">Forgot Password?</a>
            </div>

            <div className="login-info">
              <p><strong>Adhikari Helpline:</strong> 7088898725</p>
              <p>
                By signing in, you agree to our{' '}
                <a href="#terms">Terms & Conditions</a> and{' '}
                <a href="#privacy">Privacy Policy</a>
              </p>
            </div>

            <button type="submit" className="btn-login">
              ADHIKARI LOGIN <i className="fa fa-arrow-right"></i>
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

        {/* RIGHT : HELP PANEL */}
        <div className="login-right">
          <h2>HOW TO GET HELP?</h2>
          <p>Get instant support for all your queries</p>

          <div className="help-item">
            <i className="fa fa-envelope"></i>
            help.com@meradigitalpay.com
          </div>

          <div className="help-item">
            <i className="fa fa-phone"></i>
            +91 70888 98725
          </div>

          <div className="lock-illustration">
            <i className="fa fa-user-shield"></i>
          </div>
        </div>
      </div>
    </>
  );
}
