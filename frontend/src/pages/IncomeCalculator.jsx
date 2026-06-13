import { useState } from 'react';
import { Link } from 'react-router-dom';

const serviceGroups = [
  {
    title: 'Banking Services',
    items: [
      { id: 'aeps', label: 'AEPS Services (₹14)', rate: 14 },
      { id: 'cash_deposit', label: 'Cash Deposit (₹14)', rate: 14 },
      { id: 'aadhaar_pay', label: 'Aadhaar Pay (₹25)', rate: 25 },
      { id: 'm_pos_atm', label: 'M POS ATM (₹14)', rate: 14 },
      { id: 'ppi_dmt_jio', label: 'PPI DMT JIO (₹20)', rate: 20 }
    ]
  },
  {
    title: 'Utility Services',
    items: [
      { id: 'bbps', label: 'BBPS Services (₹50)', rate: 50 },
      { id: 'recharge', label: 'Recharge (₹10)', rate: 10 },
      { id: 'lic_payment', label: 'LIC Payment (₹20)', rate: 20 },
      { id: 'cms_airtel', label: 'CMS Airtel (₹100)', rate: 100 },
      { id: 'airtel_wifi', label: 'Airtel Wi-Fi (₹300)', rate: 300 }
    ]
  },
  {
    title: 'Travel Services',
    items: [
      { id: 'train_booking', label: 'Train Booking (₹40)', rate: 40 },
      { id: 'bus_booking', label: 'Bus Booking (₹50)', rate: 50 },
      { id: 'flight_booking', label: 'Flight Booking (₹100)', rate: 100 },
      { id: 'hotel_booking', label: 'Hotel Booking (₹100)', rate: 100 }
    ]
  },
  {
    title: 'Insurance & Loan',
    items: [
      { id: 'insurance', label: 'Insurance (₹100)', rate: 100 },
      { id: 'loan_apply', label: 'Loan Apply (₹100)', rate: 100 }
    ]
  },
  {
    title: 'Government Services',
    items: [
      { id: 'nsdl_pan', label: 'NSDL PAN Card (₹10)', rate: 10 },
      { id: 'itr_reg', label: 'ITR Registration (₹50)', rate: 50 },
      { id: 'gst_reg', label: 'GST Registration (₹50)', rate: 50 },
      { id: 'iso_reg', label: 'ISO Registration (₹50)', rate: 50 },
      { id: 'udyam_reg', label: 'Udyam Registration (₹50)', rate: 50 }
    ]
  },
  {
    title: 'Account Services',
    items: [
      { id: 'nsdl_opening', label: 'NSDL Account Opening (₹18)', rate: 18 },
      { id: 'kotak_opening', label: 'Kotak Account Opening (₹250)', rate: 250 },
      { id: 'sbm_fd', label: 'SBM FD Card Apply (₹250)', rate: 250 },
      { id: 'credit_card', label: 'Credit Card Apply (₹500)', rate: 500 }
    ]
  },
  {
    title: 'Seller & Delivery',
    items: [
      { id: 'flipkart_seller', label: 'Flipkart Seller Apply (₹200)', rate: 200 },
      { id: 'amazon_seller', label: 'Amazon Seller Apply (₹200)', rate: 200 },
      { id: 'ondc_seller', label: 'ONDC Seller Apply (₹200)', rate: 200 },
      { id: 'flipkart_delivery', label: 'Flipkart Delivery Job Apply (₹20)', rate: 20 },
      { id: 'shopping_services', label: 'Shopping Services (₹10)', rate: 10 }
    ]
  }
];

export default function IncomeCalculator() {
  // Initialize state with all item IDs mapping to 1 as default
  const [quantities, setQuantities] = useState(() => {
    const initial = {};
    serviceGroups.forEach(group => {
      group.items.forEach(item => {
        initial[item.id] = 1;
      });
    });
    return initial;
  });

  const handleQtyChange = (id, value) => {
    const val = parseInt(value);
    setQuantities(prev => ({
      ...prev,
      [id]: isNaN(val) ? '' : val
    }));
  };

  // Calculate daily total
  let dailyTotal = 0;
  serviceGroups.forEach(group => {
    group.items.forEach(item => {
      const qty = quantities[item.id] || 0;
      dailyTotal += qty * item.rate;
    });
  });

  const monthlyTotal = dailyTotal * 30;

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="income-hero">
        <div className="container">
          <h1>Income Calculator</h1>
          <p>Estimate your daily & monthly earnings with Mera Digital Pay</p>
        </div>
      </section>

      {/* ================= CALCULATOR ================= */}
      <section className="income-wrap">
        <div className="container income-grid">

          {/* LEFT : SERVICES */}
          <div className="income-form">
            {serviceGroups.map((group, groupIdx) => (
              <div key={groupIdx}>
                <h3>{group.title}</h3>
                {group.items.map((item) => (
                  <div className="row" key={item.id}>
                    <label>{item.label}</label>
                    <input
                      type="number"
                      value={quantities[item.id]}
                      onChange={(e) => handleQtyChange(item.id, e.target.value)}
                      className="calc"
                      min="0"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* RIGHT : SUMMARY */}
          <div className="income-summary">
            <h2>Income Summary</h2>

            <div className="summary-box">
              <span>Income Per Day</span>
              <strong id="daily">₹{dailyTotal.toLocaleString('en-IN')}</strong>
            </div>

            <div className="summary-box highlight">
              <span>Total Income / Month</span>
              <strong id="monthly">₹{monthlyTotal.toLocaleString('en-IN')}</strong>
            </div>

            <p className="note">
              * Monthly income calculated for 30 working days
            </p>

            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <Link to="/signup" className="btn-primary" style={{ padding: '15px 30px', fontSize: '18px', width: '100%', display: 'block' }}>
                Apply Now <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
