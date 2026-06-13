import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

/* ── DEMO MODAL ───────────────────────────────────────────── */
function DemoModal({ onClose, presetService }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', whatsapp: '',
    state: '', city: '', date: '', time: '', service: presetService || ''
  });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    alert('Demo request submitted! We will contact you soon.');
    onClose();
  };

  return (
    <div className="demo-modal" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="demo-box" style={{ background: '#fff', borderRadius: '18px', padding: '40px', maxWidth: '500px', width: '95%', boxShadow: '0 20px 60px rgba(0,0,0,0.35)', position: 'relative' }}>
        <button className="demo-close" onClick={onClose} style={{ color: '#222' }}>&times;</button>
        <h2 style={{ fontSize: '24px', color: '#0a144a', marginBottom: '8px', textAlign: 'center' }}>Book Live Demo</h2>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px', textAlign: 'center' }}>
          Fill in your details below to schedule a live walkthrough session
        </p>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" required value={form.name} onChange={handleChange} style={{ width: '100%', padding: '12px 14px', marginBottom: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }} />
          <input name="email" type="email" placeholder="Email ID" required value={form.email} onChange={handleChange} style={{ width: '100%', padding: '12px 14px', marginBottom: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }} />
          <input name="phone" type="tel" placeholder="Contact Number" required value={form.phone} onChange={handleChange} style={{ width: '100%', padding: '12px 14px', marginBottom: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }} />
          <input name="whatsapp" type="tel" placeholder="WhatsApp Number" required value={form.whatsapp} onChange={handleChange} style={{ width: '100%', padding: '12px 14px', marginBottom: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }} />
          <div style={{ display: 'flex', gap: '10px' }}>
            <input name="state" placeholder="State" required value={form.state} onChange={handleChange} style={{ width: '50%', padding: '12px 14px', marginBottom: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }} />
            <input name="city" placeholder="City" required value={form.city} onChange={handleChange} style={{ width: '50%', padding: '12px 14px', marginBottom: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }} />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input name="date" type="date" required value={form.date} onChange={handleChange} style={{ width: '50%', padding: '12px 14px', marginBottom: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }} />
            <input name="time" type="time" required value={form.time} onChange={handleChange} style={{ width: '50%', padding: '12px 14px', marginBottom: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }} />
          </div>
          <select name="service" required value={form.service} onChange={handleChange} style={{ width: '100%', padding: '12px 14px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px', background: '#fff', fontSize: '14px' }}>
            <option value="">Demo kis service ke liye chahiye?</option>
            <option value="AEPS / Banking">AEPS / Banking</option>
            <option value="Recharge / BBPS">Recharge / BBPS</option>
            <option value="Travel Services">Travel Services</option>
            <option value="Insurance">Insurance</option>
            <option value="B2B / White Label">B2B / White Label</option>
            <option value="API / SDK Integration">API / SDK Integration</option>
          </select>
          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px', padding: '14px' }}>
            <i className="fa fa-paper-plane"></i> Submit Demo Request
          </button>
        </form>
      </div>
    </div>
  );
}

/* ── MAIN BANNER SLIDER (full-width image only) ──────── */
const bannerSlides = [
  { img: '/assets/images/banner.jpeg', alt: 'Mera Digital Pay Banner 1' },
  { img: '/assets/images/banking.png', alt: 'Banking Services Banner' },
  { img: '/assets/images/business.png', alt: 'Business Services Banner' }
];

function MainSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const go = idx => setCurrent((idx + bannerSlides.length) % bannerSlides.length);

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % bannerSlides.length), 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section style={{ width: '100%', overflow: 'hidden', background: '#ffffff', padding: '16px 0', lineHeight: 0, position: 'relative' }}>
      <style>{`
        .bsw-container {
          width: 95%;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        .bsw { position: absolute; inset: 0; opacity: 0; transition: opacity 0.8s ease; pointer-events: none; }
        .bsw.bsw-on { position: relative; opacity: 1; pointer-events: auto; }
        .bsw-img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          display: block;
          transition: transform 7s ease;
        }
        .bsw.bsw-on .bsw-img { transform: scale(1.03); }
        .bsw-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 55%);
          pointer-events: none; z-index: 2;
        }
        .bsw-dots {
          position: absolute; bottom: 18px; left: 50%;
          transform: translateX(-50%);
          display: flex; gap: 8px; z-index: 10;
        }
        .bsw-dot {
          height: 8px; width: 8px; border-radius: 4px;
          background: rgba(255,255,255,0.45);
          border: none; cursor: pointer; padding: 0;
          transition: all 0.4s ease;
        }
        .bsw-dot.on {
          width: 26px; background: #ff6a00;
          box-shadow: 0 0 8px rgba(255,106,0,0.7);
        }
        @media(max-width:900px){ .bsw-img { height: 360px; } }
        @media(max-width:600px){ .bsw-img { height: 210px; } }
        @media(max-width:400px){ .bsw-img { height: 160px; } }
      `}</style>

      <div className="bsw-container">
        {bannerSlides.map((s, i) => (
          <div key={i} className={`bsw${i === current ? ' bsw-on' : ''}`}>
            <img src={s.img} alt={s.alt} className="bsw-img" />
            <div className="bsw-overlay" />
          </div>
        ))}
        <div className="bsw-dots">
          {bannerSlides.map((_, i) => (
            <button key={i} className={`bsw-dot${i === current ? ' on' : ''}`}
              onClick={() => { clearInterval(timerRef.current); go(i); timerRef.current = setInterval(() => setCurrent(c => (c + 1) % bannerSlides.length), 5000); }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


/* ── SERVICE TABS ─────────────────────────────────────────── */
const tabData = [
  {
    id: 'banking', label: 'Banking Services', icon: 'fa-building-columns',
    img: '/assets/images/banking.png',
    title: 'Banking Services',
    titleIcon: 'fa-university',
    desc: 'Mera Digital Pay provides AEPS, Money Transfer, Micro ATM and Aadhaar Pay services with high commission on every transaction.',
    items: [
      { icon: 'fa-hand-holding-dollar', text: 'AEPS – Cash Withdrawal' },
      { icon: 'fa-right-left', text: 'Money Transfer (DMT)' },
      { icon: 'fa-credit-card', text: 'Micro ATM' }
    ]
  },
  {
    id: 'utility', label: 'Utility & Bill Payments', icon: 'fa-bolt',
    img: '/assets/images/utility.png',
    title: 'Utility & Bill Payments',
    titleIcon: 'fa-bolt',
    desc: 'With Mera Digital Pay, offer fast recharge and bill payment services.',
    items: [
      { icon: 'fa-mobile', text: 'Mobile & DTH Recharge' },
      { icon: 'fa-file-invoice', text: 'Electricity & Gas Bill' },
      { icon: 'fa-building-columns', text: 'BBPS' }
    ]
  },
  {
    id: 'insurance', label: 'Insurance', icon: 'fa-shield-halved',
    img: '/assets/images/insurance.webp',
    title: 'Insurance Services',
    titleIcon: 'fa-shield-halved',
    desc: 'Sell insurance through Mera Digital Pay and earn fixed commission.',
    items: [
      { icon: 'fa-heart-pulse', text: 'Health Insurance' },
      { icon: 'fa-car', text: 'Motor Insurance' },
      { icon: 'fa-mobile-screen', text: 'Device Insurance' }
    ]
  },
  {
    id: 'travel', label: 'Travel Services', icon: 'fa-plane-departure',
    img: '/assets/images/travel.webp',
    title: 'Travel Services',
    titleIcon: 'fa-plane',
    desc: 'Book travel tickets easily with Mera Digital Pay.',
    items: [
      { icon: 'fa-train', text: 'IRCTC Ticket Booking' },
      { icon: 'fa-bus', text: 'Bus & Flight Booking' },
      { icon: 'fa-hotel', text: 'Hotel Booking' }
    ]
  },
  {
    id: 'egov', label: 'E-Governance', icon: 'fa-id-card',
    img: '/assets/images/egov.png',
    title: 'E-Governance Services',
    titleIcon: 'fa-id-card',
    desc: 'Government digital services powered by Mera Digital Pay.',
    items: [
      { icon: 'fa-address-card', text: 'PAN Card' },
      { icon: 'fa-file-signature', text: 'GST Registration' },
      { icon: 'fa-file-lines', text: 'ITR Filing' }
    ]
  },
  {
    id: 'neo', label: 'Neo Banking', icon: 'fa-wallet',
    img: '/assets/images/neo.webp',
    title: 'Neo Banking',
    titleIcon: 'fa-wallet',
    desc: 'Modern digital banking solutions by Mera Digital Pay.',
    items: [
      { icon: 'fa-user-plus', text: 'Account Opening' },
      { icon: 'fa-qrcode', text: 'UPI & Cards' },
      { icon: 'fa-sack-dollar', text: 'Loan Services' }
    ]
  }
];

function ServiceTabs() {
  const [active, setActive] = useState('banking');
  const tab = tabData.find(t => t.id === active);
  return (
    <section className="service-tabs-section">
      <div className="service-tabs">
        {tabData.map(t => (
          <button key={t.id} className={`tab-btn ${active === t.id ? 'active' : ''}`} onClick={() => setActive(t.id)}>
            <i className={`fa-solid ${t.icon}`}></i> {t.label}
          </button>
        ))}
      </div>
      <div className="container">
        <div className="tab-content active">
          <div className="tab-grid">
            <img src={tab.img} alt={tab.title} />
            <div>
              <h2><i className={`fa-solid ${tab.titleIcon}`}></i> {tab.title}</h2>
              <p>{tab.desc}</p>
              <ul>
                {tab.items.map((item, i) => (
                  <li key={i}><i className={`fa-solid ${item.icon}`}></i> {item.text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── VIDEO REVIEWS ──────────────────────────────────────────── */
function VideoReviews() {
  return (
    <section className="video-reviews" style={{ padding: '80px 0', background: '#fff' }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          <i className="fa-brands fa-youtube" style={{ color: '#ff0000' }}></i> Video Reviews
        </h2>
        <p className="section-sub" style={{ textAlign: 'center', marginBottom: '40px' }}>
          Watch what our partners have to say about Mera Digital Pay
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <iframe width="100%" height="250" src="https://www.youtube.com/embed/ScMzIvxBSi4" title="Video Review 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <iframe width="100%" height="250" src="https://www.youtube.com/embed/tgbNymZ7vqY" title="Video Review 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <iframe width="100%" height="250" src="https://www.youtube.com/embed/aqz-KE-bpKQ" title="Video Review 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── TESTIMONIAL SLIDER ───────────────────────────────────── */
const testimonials = [
  { text: 'Mera digital Pay company is having a really really great online services platform and the service are very good', name: 'Raman Singh', location: 'Rajasthan' },
  { text: 'Mera digital Pay it is the best and trusted finance company which will help to fulfill the aim and dreams of customer 💯', name: 'Chaman Singh', location: 'Bareilly' },
  { text: 'Mera digital Pay company is having a really really great online services platform and the service are very good. Using from last 1 year 💯💯💯💯💯', name: 'Alisha Gupta', location: 'Mumbai' },
  { text: 'Digital partner pay app is very useful for everyone. We can earn lot of money and build a great career. Thank you Mera Digital Pay ✨️✨️✨️✨️✨️', name: 'Abhay Singh', location: 'Aligarh, Uttar Pradesh' },
  { text: 'Mera Digital Pay is a good brand you can rely on. Their mobile application truly creates wonders. Good job team ✨️✨️✨️✨️✨️', name: 'Nihal Singh', location: 'Patna, Bihar' },
  { text: 'Best customer care facilities and one of the best ways to track investments. Really loved it. Thank you team Mera Digital Pay', name: 'Chirag Singh', location: 'Nainital' },
  { text: 'Very good financial services and a great team of experts to help you. Thank you Mera Digital Pay', name: 'Anurag Sharma', location: 'Rishikesh' },
  { text: 'Mera Digital Pay is a trusted fintech company offering secure and fast services like AEPS, recharge, DMT etc. Highly recommended!', name: 'Vaishnav Singh', location: 'Katra, Jammu' },
  { text: 'Pleased with Mera Digital Pay and its services. One of the most exceptional platforms. Thank you team Mera Digital Pay', name: 'Shubham Sharma', location: 'Gujarat' }
];

function TestimonialSlider() {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef(null);

  const slide = step => {
    const visible = window.innerWidth < 768 ? 1 : 3;
    const next = (idx + step + testimonials.length) % testimonials.length;
    setIdx(next);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${next * (100 / visible)}%)`;
    }
  };

  useEffect(() => {
    const t = setInterval(() => slide(1), 4000);
    return () => clearInterval(t);
  }, [idx]);

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title"><i className="fa-solid fa-quote-left"></i> What Our Partners Say</h2>
        <p className="section-sub">Real experiences from retailers &amp; distributors using Mera Digital Pay</p>
        <div className="testimonial-slider">
          <div className="testimonial-track" ref={trackRef}>
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p>{t.text}</p>
                <h4>{t.name}</h4>
                <span>{t.location}</span>
              </div>
            ))}
          </div>
          <button className="ts-prev" onClick={() => slide(-1)}>❮</button>
          <button className="ts-next" onClick={() => slide(1)}>❯</button>
        </div>
      </div>
    </section>
  );
}

/* ── DOCUMENT SLIDER ─────────────────────────────────────── */
const docs = [
  { src: '/assets/images/docu1.jpeg', alt: 'Document 1' },
  { src: '/assets/images/docu2.jpeg', alt: 'Document 2' },
  { src: '/assets/images/docu3.jpeg', alt: 'Document 3' },
  { src: '/assets/images/docu4.jpeg', alt: 'Document 4' }
];

function DocumentSlider() {
  const [docIdx, setDocIdx] = useState(0);
  const [zoomSrc, setZoomSrc] = useState(null);
  const trackRef = useRef(null);

  const move = step => {
    const visible = window.innerWidth < 768 ? 1 : 3;
    const maxIdx = Math.max(0, docs.length - visible);
    let next = docIdx + step;
    if (next < 0) {
      next = maxIdx;
    } else if (next > maxIdx) {
      next = 0;
    }
    setDocIdx(next);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${next * (100 / visible)}%)`;
    }
  };

  useEffect(() => {
    const t = setInterval(() => move(1), 4000);
    return () => clearInterval(t);
  }, [docIdx]);

  return (
    <section className="company-documents">
      <div className="container">
        <h2 className="section-title">Our Company Documents</h2>
        <div className="doc-slider">
          <button className="doc-prev" onClick={() => move(-1)}>❮</button>
          <div className="doc-track" ref={trackRef}>
            {docs.map((d, i) => (
              <div className="doc-item" key={i}>
                <div className="doc-card" onClick={() => setZoomSrc(d.src)}>
                  <img src={d.src} alt={d.alt} />
                  <div className="doc-overlay">
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="doc-next" onClick={() => move(1)}>❯</button>
        </div>
      </div>
      {zoomSrc && (
        <div className="doc-modal-overlay" onClick={() => setZoomSrc(null)}>
          <button className="doc-close" onClick={() => setZoomSrc(null)}>×</button>
          <img src={zoomSrc} alt="Document zoom" />
        </div>
      )}
    </section>
  );
}

/* ── STAFF SCROLL ─────────────────────────────────────────── */
const staff = [
  { img: '/assets/images/staff1.jpg', name: 'Ravi Sharma', role: 'Support Manager' },
  { img: '/assets/images/staff2.jpg', name: 'Pooja Verma', role: 'Operations Head' },
  { img: '/assets/images/staff1.jpg', name: 'Amit Singh', role: 'Technical Support' },
  { img: '/assets/images/staff2.jpg', name: 'Neha Gupta', role: 'Sales Executive' },
  { img: '/assets/images/staff1.jpg', name: 'Rahul Verma', role: 'Relationship Manager' }
];

function StaffScroll() {
  const scrollRef = useRef(null);
  const scrollBy = dir => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector('.staff-card');
    if (!card) return;
    scrollRef.current.scrollBy({ left: dir * (card.offsetWidth + 25), behavior: 'smooth' });
  };
  return (
    <section className="our-staff">
      <div className="container">
        <h2 className="section-title">Our Staff</h2>
        <div className="staff-wrapper">
          <button className="staff-btn left" onClick={() => scrollBy(-1)}>❮</button>
          <div className="staff-scroll" ref={scrollRef} id="staffScroll">
            {staff.map((s, i) => (
              <div className="staff-card" key={i}>
                <img src={s.img} alt={s.name} />
                <h4>{s.name}</h4>
                <span>{s.role}</span>
              </div>
            ))}
          </div>
          <button className="staff-btn right" onClick={() => scrollBy(1)}>❯</button>
        </div>
      </div>
    </section>
  );
}

/* ── SUCCESS RATE BARS ────────────────────────────────────── */
const rates = [
  { label: 'AEPS', percent: 97 },
  { label: 'Aadhaar Pay', percent: 99 },
  { label: 'Money Transfer', percent: 98 },
  { label: 'Recharge', percent: 100 },
  { label: 'BBPS', percent: 99 },
  { label: 'PAN Card', percent: 98 },
  { label: 'Payout', percent: 97 },
  { label: 'Cash Deposit', percent: 98 },
  { label: 'CMS', percent: 98.5 },
  { label: 'Kotak Bank BC Apply', percent: 99 },
  { label: 'Account Opening', percent: 100 }
];

function SuccessRateBars() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setAnimated(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="success-rate" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Transaction Success Rate</h2>
        <p className="section-sub">Our platform delivers consistently high success rates across all services</p>
        <div className="rate-grid">
          {rates.map((r, i) => (
            <div className="rate-item" key={i}>
              <span>{r.label}</span>
              <div className="bar">
                <div className="fill" style={{ width: animated ? `${r.percent}%` : '0%' }}></div>
              </div>
              <strong>{r.percent}%</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── DIRECTOR SECTION ────────────────────────────────────── */
function DirectorSection() {
  return (
    <section className="director-section">
      <div className="container">
        <div className="director-grid">
          <div className="director-image-wrapper">
            <img src="/assets/images/director.png" alt="Rohitash (Rohit Singh)" />
          </div>
          <div className="director-info">
            <h2>Meet Our Director</h2>
            <div className="director-name">Rohitash ( Rohit Singh )</div>
            <div className="director-role">Managing Director, Mera Digital Pay &amp; Mera Digital Pay</div>
            <div className="director-email">
              <i className="fa-solid fa-envelope"></i> <strong>Email:</strong>{' '}
              <a href="mailto:director@meradigitalpay.com">director@meradigitalpay.com</a>
            </div>
            <div className="director-bio">
              <p>
                <strong>Rohitash (widely known as Rohit Singh)</strong> is the visionary leader and driving force behind Mera Digital Pay. With over 4 years of rich experience in the Indian Fintech ecosystem, he specializes in scaling Neo-Banking solutions, advanced API integrations, and secure digital payment architectures.
              </p>
              <p>
                Under his strategic direction, the company has transformed into a high-performance network, empowering thousands of B2B partners, distributors, and digital retailers across India through innovative and secure banking APIs.
              </p>
              <p>
                <em>"Our mission is to build a highly secure, seamless, and next-generation digital ecosystem that makes modern banking accessible to every business."</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PARTNER LOGOS SLIDER ─────────────────────────────────── */
const partnerLogos = [
  '/assets/images/footer-logo.jpg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.25.jpeg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.27.jpeg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.27 (1).jpeg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.28.jpeg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.28 (1).jpeg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.28 (2).jpeg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.29.jpeg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.29 (1).jpeg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.29 (2).jpeg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.30.jpeg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.30 (1).jpeg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.31.jpeg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.31 (1).jpeg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.32.jpeg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.32 (1).jpeg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.32 (2).jpeg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.33.jpeg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.33 (1).jpeg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.34.jpeg',
  '/assets/images/WhatsApp Image 2026-06-10 at 15.22.34 (1).jpeg'
];

function PartnerLogosSlider() {
  return (
    <section className="partner-logos-section">
      <div className="container">
        <h2 className="section-title">Our Partners</h2>
        <p className="section-sub">Trusted by India's leading banks and fintech companies</p>
        <div className="marquee-container">
          <div className="marquee-content">
            {partnerLogos.map((logo, i) => (
              <img src={logo} alt={`Partner Logo ${i + 1}`} key={i} className={logo.includes('footer-logo') ? 'marquee-main-logo' : ''} />
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {partnerLogos.map((logo, i) => (
              <img src={logo} alt={`Partner Logo ${i + 1}`} key={i} className={logo.includes('footer-logo') ? 'marquee-main-logo' : ''} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── OUR PARTNERS GRID (5 cards side by side) ───────────── */
const partnerCards = [
  {
    img: '/assets/images/partner-retailer.jpeg',
    label: 'Retailer Partner',
    count: '100,000+',
    desc: 'Happy Retailers Across India delivering AEPS, Banking, Recharge & Government services.',
    applyLabel: 'Apply as Retailer',
    service: 'AEPS / Banking'
  },
  {
    img: '/assets/images/partner-distributor.jpeg',
    label: 'Distributor',
    count: '4,200+',
    desc: 'Build a retailer network & earn attractive commission on every transaction.',
    applyLabel: 'Apply as Distributor',
    service: 'B2B / White Label'
  },
  {
    img: '/assets/images/partner-franchise.jpeg',
    label: 'Franchise Partner',
    count: '1,200+',
    desc: 'Build and manage your own digital service center with high growth potential.',
    applyLabel: 'Apply as Franchise',
    service: 'AEPS / Banking'
  },
  {
    img: '/assets/images/partner-district.jpeg',
    label: 'District Franchise',
    count: '200+',
    desc: 'Lead & grow our ecosystem of retail franchises in your district.',
    applyLabel: 'Apply as District Franchise',
    service: 'B2B / White Label'
  },
  {
    img: '/assets/images/partner-b2b.jpeg',
    label: 'B2B Software Partner',
    count: '25+',
    desc: 'Empowering businesses with robust white-label API, SDK & platform solutions.',
    applyLabel: 'Apply for B2B',
    service: 'API / SDK Integration'
  }
];

function OurPartnersSlider({ onApply }) {
  return (
    <section className="our-partners-section">
      <style>{`
        .our-partners-section {
          background: #ffffff;
          padding: 70px 20px 60px;
          position: relative;
          overflow: hidden;
        }
        .our-partners-section::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: rgba(255,106,0,0.06);
          pointer-events: none;
        }
        .partners-heading {
          text-align: center;
          color: var(--color-primary);
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 800;
          margin-bottom: 8px;
        }
        .partners-sub {
          text-align: center;
          color: #555;
          font-size: 1rem;
          margin-bottom: 44px;
        }
        .partners-grid-5 {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 22px;
          max-width: 1600px;
          margin: 0 auto;
        }
        .partner-card-v2 {
          background: #1C2256;
          border: 1px solid #1C2256;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s;
        }
        .partner-card-v2:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          border-color: rgba(255,106,0,0.55);
        }
        .partner-card-v2 .card-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          background: #0a144a;
        }
        .partner-card-v2 .card-body {
          padding: 18px 16px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .partner-card-v2 .card-count {
          font-size: 2.1rem;
          font-weight: 800;
          color: #ff6a00;
          line-height: 1;
          margin-bottom: 4px;
        }
        .partner-card-v2 .card-title {
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .partner-card-v2 .card-desc {
          font-size: 0.83rem;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          flex: 1;
          margin-bottom: 16px;
        }
        .partner-card-v2 .card-btn {
          background: linear-gradient(90deg, #ff6a00, #ff9a40);
          color: #fff;
          border: none;
          border-radius: 30px;
          padding: 11px 0;
          width: 100%;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.2s;
          box-shadow: 0 4px 14px rgba(255,106,0,0.35);
        }
        .partner-card-v2 .card-btn:hover {
          opacity: 0.88;
          transform: scale(1.03);
        }
        @media (max-width: 1200px) {
          .partners-grid-5 { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 750px) {
          .partners-grid-5 { grid-template-columns: repeat(2, 1fr); gap: 14px; }
        }
        @media (max-width: 480px) {
          .partners-grid-5 { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        <h2 className="partners-heading">🤝 Partner With Us</h2>
        <p className="partners-sub">Become a Digital Sahaayata Kendra partner &amp; earn up to <strong style={{ color: '#ff9a40' }}>₹1 Lakh per month</strong> — Choose your role below</p>

        <div className="partners-grid-5">
          {partnerCards.map((p, i) => (
            <div className="partner-card-v2" key={i}>
              <img src={p.img} alt={p.label} className="card-img" />
              <div className="card-body">
                <div className="card-count">{p.count}</div>
                <div className="card-title">{p.label}</div>
                <p className="card-desc">{p.desc}</p>
                <button className="card-btn" onClick={() => onApply(p.service)}>
                  {p.applyLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── HOME PAGE ───────────────────────────────────────────── */
export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoService, setDemoService] = useState('');
  const navigate = useNavigate();

  const openDemo = (service = '') => {
    setDemoService(service);
    setDemoOpen(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-video">
            <video autoPlay muted loop controls>
              <source src="/assets/videos/demo.mp4" type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>
          <div className="hero-content">
            <h1>Launch Your Customised App With <span>MERA DIGITAL PAY</span></h1>
            <p>
              Most Secure, Faster &amp; Smarter Solution.
              MERA DIGITAL PAY offers a wide range of financial services through{' '}
              <strong>RESELLERS / B2B / B2C Platforms, API &amp; SDKs</strong>.
            </p>
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => openDemo()}>
                <i className="fa fa-video"></i> Book a Live Demo
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* MAIN BANNER SLIDER */}
      <MainSlider />

      {/* SERVICE TABS */}
      <ServiceTabs />

      {/* BENEFITS */}
      <section className="benefits">
        <div className="container">
          <h2><i className="fa-solid fa-gift"></i> Benefits of Mera Digital Pay</h2>
          <p className="sub">A great earning potential with minimal investment and zero working capital</p>
          <div className="benefit-grid">
            {[
              { icon: 'fa-lock', title: 'Safe & Secure', desc: 'Your transactions are fully secure.' },
              { icon: 'fa-bolt-lightning', title: 'Fast & Easy', desc: 'Quick services with minimum clicks.' },
              { icon: 'fa-headset', title: '24/7 Support', desc: 'Always available for your help.' },
              { icon: 'fa-percent', title: 'High Margin', desc: 'Best commission on every service.' }
            ].map((b, i) => (
              <div className="benefit-card" key={i}>
                <i className={`fa-solid ${b.icon} fa-2x`}></i>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PARTNERS SLIDER */}
      <OurPartnersSlider onApply={(service) => openDemo(service)} />

      {/* ONE APP MULTIPLE SERVICES */}
      <section className="one-app">
        <div className="container">
          <h2 className="section-title"><i className="fa-solid fa-layer-group"></i> One App, Multiple Services</h2>
          <p className="section-sub">Manage all your Digital, Banking &amp; Business services in one powerful platform</p>
          <div className="services-grid">
            {[
              { icon: 'fa-building-columns', label: 'AEPS' },
              { icon: 'fa-fingerprint', label: 'Aadhaar Pay' },
              { icon: 'fa-money-bill-transfer', label: 'Money Transfer' },
              { icon: 'fa-credit-card', label: 'Micro ATM' },
              { icon: 'fa-mobile-screen', label: 'Recharge' },
              { icon: 'fa-file-invoice', label: 'Bill Payments' },
              { icon: 'fa-id-card', label: 'PAN Card' },
              { icon: 'fa-receipt', label: 'Taxation' },
              { icon: 'fa-bus', label: 'Bus Booking' },
              { icon: 'fa-plane', label: 'Flight Booking' },
              { icon: 'fa-train', label: 'IRCTC' },
              { icon: 'fa-briefcase', label: 'Kotak BC' },
              { icon: 'fa-landmark', label: 'NSDL BC' },
              { icon: 'fa-store', label: 'Flipkart Seller' },
              { icon: 'fa-brands fa-amazon', label: 'Amazon Seller' },
              { icon: 'fa-network-wired', label: 'ONDC Seller' },
              { icon: 'fa-cart-shopping', label: 'Shopping Services' },
              { icon: 'fa-wifi', label: 'CMS' }
            ].map((s, i) => (
              <div
                className="service-box"
                key={i}
                onClick={() => navigate('/login')}
                style={{ cursor: 'pointer' }}
              >
                <i className={`fa-solid ${s.icon}`}></i>
                <h4>{s.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="advantages">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            <i className="fa-solid fa-star"></i> Advantages of <span>Mera Digital Pay</span>
          </h2>
          <p className="section-sub" style={{ textAlign: 'center', margin: '15px auto 60px', maxWidth: '600px' }}>Grow your digital business with powerful, secure and profitable services</p>
          <div className="adv-grid">
            {[
              { icon: 'fa-rocket', title: 'Zero Investment Business', desc: 'Start your digital service business with minimal setup cost.' },
              { icon: 'fa-shield-halved', title: 'Secure Platform', desc: 'Bank-grade security with reliable and safe transactions.' },
              { icon: 'fa-layer-group', title: 'All Services in One App', desc: 'AEPS, Recharge, Bill Payment, Travel & more in one platform.' },
              { icon: 'fa-chart-line', title: 'High Earning Potential', desc: 'Earn commission on every transaction done by you.' },
              { icon: 'fa-user-shield', title: 'Trusted by Retailers', desc: 'Trusted by thousands of retailers across India.' },
              { icon: 'fa-headset', title: '24/7 Support', desc: 'Dedicated support team to help you anytime.' }
            ].map((a, i) => (
              <div className="adv-card" key={i}>
                <i className={`fa-solid ${a.icon}`}></i>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO REVIEWS */}
      <VideoReviews />

      {/* TESTIMONIALS */}
      <TestimonialSlider />

      {/* FEATURE SECTIONS */}
      <section className="feature-section">
        <div className="container feature-grid">
          <div className="feature-image"><img src="/assets/images/scr2.jpeg" alt="AEPS Services" /></div>
          <div className="feature-content">
            <h2>AEPS &amp; Banking Services</h2>
            <p>Mera Digital Pay ke through AEPS Cash Withdrawal, Balance Enquiry aur Mini Statement jaise banking services ek hi app me provide karein.</p>
            <ul>
              <li>Cash Withdrawal &amp; Aadhaar Pay</li>
              <li>Mini Statement &amp; Balance Enquiry</li>
              <li>Fast, Secure &amp; Reliable Transactions</li>
            </ul>
            <div className="cta-buttons">
              <Link to="/signup" className="btn-primary">Apply Online</Link>
              <a href="https://play.google.com/store/apps/details?id=com.aps.partners" className="btn-outline" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-google-play"></i> Download App
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section light">
        <div className="container feature-grid reverse">
          <div className="feature-image"><img src="/assets/images/scr3.jpeg" alt="Seller Registration" /></div>
          <div className="feature-content">
            <h2>Seller Registration Services</h2>
            <p>Amazon, Flipkart, ONDC aur Kotak Bank BC jaise seller &amp; business services ek hi digital platform par.</p>
            <ul>
              <li>Amazon &amp; Flipkart Seller Registration</li>
              <li>ONDC Seller &amp; Delivery Job Apply</li>
              <li>Zero Investment Business Opportunity</li>
            </ul>
            <div className="cta-buttons">
              <Link to="/signup" className="btn-primary">Apply Online</Link>
              <a href="https://play.google.com/store/apps/details?id=com.aps.partners" className="btn-outline" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-google-play"></i> Download App
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="container feature-grid">
          <div className="feature-image"><img src="/assets/images/scr1.jpeg" alt="Insurance Services" /></div>
          <div className="feature-content">
            <h2>Insurance &amp; Government Services</h2>
            <p>Customers ko insurance ke sath GST, PAN, ITR jaise government services bhi provide karein.</p>
            <ul>
              <li>Car, Bike &amp; Health Insurance</li>
              <li>GST, PAN &amp; ITR Registration</li>
              <li>Trusted &amp; Verified Service Providers</li>
            </ul>
            <div className="cta-buttons">
              <Link to="/signup" className="btn-primary">Apply Online</Link>
              <a href="https://play.google.com/store/apps/details?id=com.aps.partners" className="btn-outline" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-google-play"></i> Download App
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section light">
        <div className="container feature-grid reverse">
          <div className="feature-image"><img src="/assets/images/scr4.jpeg" alt="Wallet & Recharge" /></div>
          <div className="feature-content">
            <h2>Secure Wallet, Recharge &amp; Money Transfer</h2>
            <p>Secure digital wallet ke sath instant money add, fund request, recharge aur domestic money transfer.</p>
            <ul>
              <li>Secure Wallet &amp; Fast Settlement</li>
              <li>Mobile &amp; DTH Recharge Services</li>
              <li>Domestic Money Transfer (DMT)</li>
            </ul>
            <div className="cta-buttons">
              <Link to="/signup" className="btn-primary">Apply Online</Link>
              <a href="https://play.google.com/store/apps/details?id=com.aps.partners" className="btn-outline" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-google-play"></i> Download App
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY DOCUMENTS */}
      <DocumentSlider />

      {/* OUR STAFF */}
      <StaffScroll />

      {/* CTA */}
      <section className="cta">
        <div className="container cta-box">
          <h2>Mera Digital Pay <br /><span>आज ही डाउनलोड करें</span></h2>
          <p>
            <b>India's No.1 B2B Fintech Platform</b><br />
            AEPS, Banking, Recharge, BBPS, Money Transfer और Business Services – सब कुछ एक ही App में
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.aps.partners"
            className="cta-btn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-google-play"></i> Download from Google Play
          </a>
        </div>
      </section>

      {/* DIRECTOR SECTION */}
      <DirectorSection />

      {/* PARTNER LOGOS */}
      <PartnerLogosSlider />

      {/* SUCCESS RATE */}
      <SuccessRateBars />

      {/* DEMO MODAL */}
      {demoOpen && <DemoModal onClose={() => setDemoOpen(false)} presetService={demoService} />}
    </>
  );
}
