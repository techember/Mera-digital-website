export default function Privacy() {
  return (
    <>
      <section className="service-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Your privacy is important to us. Learn how we collect, use, and protect your information.</p>
        </div>
      </section>

      <section className="policy-content">
        <div className="container">
          <div className="policy-text">
            <p>At <strong>Mera Digital Pay</strong>, we are committed to protecting the privacy and security of your personal and business data. This Privacy Policy describes how we collect, use, store, and share your information when you use our website, mobile application, APIs, or partner services.</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information to provide better services, verify your identity, and ensure compliance with regulatory standards. This includes:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, contact number, email address, date of birth, residential address, and profile photo.</li>
              <li><strong>Business Information:</strong> Shop name, business address, registration documents, and GST details.</li>
              <li><strong>KYC Documents:</strong> Aadhaar Card, PAN Card, bank account details, and video KYC recordings as required by banking partners and NPCI guidelines.</li>
              <li><strong>Transaction Data:</strong> Transaction amount, date, time, status, beneficiary details, and IP address for all financial activities performed on our platform.</li>
              <li><strong>Device &amp; Location Data:</strong> Device model, operating system, unique device identifier, IP address, and location coordinates to verify retail points.</li>
            </ul>

            <h2>2. Biometric Data Protection</h2>
            <p>For Aadhaar Enabled Payment System (AEPS) transactions, biometric data (fingerprint scans) is captured using certified RD services. Mera Digital Pay **does not store** your biometric details. The data is encrypted immediately upon capture and forwarded directly to the respective banking host and UIDAI for authentication in accordance with security standards.</p>

            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>To create, verify, and manage your partner/agent account.</li>
              <li>To execute financial transactions, settle funds to bank accounts, and calculate commissions.</li>
              <li>To detect, prevent, and mitigate fraud, money laundering, and other unauthorized or illegal activities.</li>
              <li>To comply with regulatory directives from RBI, NPCI, UIDAI, and tax authorities.</li>
              <li>To provide support, send transaction notifications, and improve the performance of our application.</li>
            </ul>

            <h2>4. Information Sharing &amp; Disclosures</h2>
            <p>We do not sell your personal information. We may share your data only in the following scenarios:</p>
            <ul>
              <li><strong>Banking Partners &amp; Intermediaries:</strong> To complete transactions and settle wallet funds.</li>
              <li><strong>Regulatory Authorities:</strong> To comply with legal processes or government queries (e.g., RBI, UIDAI, NPCI, law enforcement agencies).</li>
              <li><strong>Third-party Service Providers:</strong> Who assist us in hosting, analytics, SMS delivery, and customer verification (subject to strict data confidentiality agreements).</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>We implement industry-standard physical, technical, and administrative security measures to protect your data against unauthorized access, loss, or alteration. We use Secure Socket Layer (SSL) encryption, firewalls, and regular security audits. However, please remember that no transmission method over the internet is 100% secure, and you must protect your login credentials.</p>

            <h2>6. Cookies</h2>
            <p>We use cookies and similar tracking technologies to store your preferences, keep you logged in, and analyze web traffic. You can choose to disable cookies through your browser settings, though some features of our site may not function properly as a result.</p>

            <h2>7. Data Retention</h2>
            <p>We retain your personal, transaction, and KYC data for as long as your account is active, and for a mandatory minimum period thereafter as prescribed by financial regulations, tax laws, and anti-money laundering guidelines in India.</p>

            <h2>8. Changes to Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. Any changes will be published on this page with an updated revision date. We encourage you to review this policy periodically.</p>

            <h2>9. Contact Us</h2>
            <p>If you have any questions or grievances regarding this Privacy Policy or data protection, you can reach out to our Grievance Officer at:</p>
            <p>
              <strong>Mera Digital Pay Support Team</strong><br />
              Email: support@meradigitalpay.com<br />
              WhatsApp: +91 9675695450
            </p>

            <p style={{ marginTop: '40px', fontSize: '14px', color: '#64748b' }}>Last Updated: June 12, 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
