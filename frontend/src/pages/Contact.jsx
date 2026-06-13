import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [status, setStatus] = useState({ success: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission / future API integration
    console.log('Contact Form Submitted:', formData);
    setStatus({
      success: true,
      message: 'Thank you for reaching out! We will get back to you shortly.'
    });
    setFormData({ name: '', email: '', mobile: '', message: '' });
  };

  return (
    <>
      {/* ===== CONTACT HERO ===== */}
      <section className="service-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We are here to help you. Get in touch with Mera Digital Pay</p>
        </div>
      </section>

      {/* ===== CONTACT CONTENT ===== */}
      <section className="service-content">
        <div className="container service-grid">

          {/* LEFT : CONTACT INFO */}
          <div className="service-text">
            <h2>Get in Touch</h2>
            <p>
              Have questions or need support? Reach out to us through the contact
              details below or send us a message.
            </p>

            <ul className="service-points">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                Ground Floor, Office No. 82, Bari Kheda, Aonla, Bareilly, UP – 243301
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                +91 70888 98725
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                help.meradigitalpay@gmail.com
              </li>
            </ul>
          </div>

          {/* RIGHT : CONTACT FORM */}
          <div className="service-image">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Message</h3>

              {status.success && (
                <div style={{
                  background: '#d4edda',
                  color: '#155724',
                  padding: '12px',
                  borderRadius: '8px',
                  marginBottom: '15px',
                  fontSize: '0.9rem'
                }}>
                  {status.message}
                </div>
              )}

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="mobile"
                placeholder="Your Mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit" className="btn-primary">
                <i className="fa-solid fa-paper-plane"></i> Submit
              </button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
