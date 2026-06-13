export default function About() {
  return (
    <>
      {/* ===== ABOUT HERO ===== */}
      <section className="service-hero">
        <div className="container">
          <h1>About Mera Digital Pay</h1>
          <p>Your trusted partner for Digital Banking & Financial Services</p>
        </div>
      </section>

      {/* ===== ABOUT CONTENT ===== */}
      <section className="service-content">
        <div className="container service-grid">

          <div className="service-text">
            <h2>Who We Are</h2>
            <p>
              Mera Digital Pay is a digital service platform that empowers retailers,
              agents and entrepreneurs to offer banking, financial and digital services
              under one roof. Our mission is to bring digital India services to every
              corner of the country.
            </p>

            <ul className="service-points">
              <li><i className="fa-solid fa-circle-check"></i> AEPS, Banking & Payment Services</li>
              <li><i className="fa-solid fa-circle-check"></i> Travel, Insurance & Bill Payments</li>
              <li><i className="fa-solid fa-circle-check"></i> Government & Business Services</li>
              <li><i className="fa-solid fa-circle-check"></i> Secure & Reliable Platform</li>
              <li><i className="fa-solid fa-circle-check"></i> High Earning Opportunities</li>
            </ul>
          </div>

          <div className="service-image">
            <img src="/assets/images/business.png" alt="About Mera Digital Pay" />
          </div>

        </div>
      </section>

      {/* ===== OUR MISSION ===== */}
      <section className="service-cta">
        <div className="container">
          <h3>Our Mission</h3>
          <p>
            To empower individuals and businesses by providing easy access to digital
            banking and financial services with transparency, security and trust.
          </p>
        </div>
      </section>
    </>
  );
}
