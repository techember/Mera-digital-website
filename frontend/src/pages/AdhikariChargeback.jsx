export default function AdhikariChargeback() {
  return (
    <>
      <section className="service-hero">
        <div className="container">
          <h1>Adhikari Chargeback Policy</h1>
          <p>Important compliance guidelines and chargeback dispute procedures for Mera Digital Pay Retailers (Adhikaris).</p>
        </div>
      </section>

      <section className="policy-content">
        <div className="container">
          <div className="policy-text">
            <p>At <strong>Mera Digital Pay</strong>, security and compliance are our top priorities. As an authorized Retailer (Adhikari), you play a critical role in maintaining the integrity of digital banking transactions. This Adhikari Chargeback Policy outlines your responsibilities regarding transaction disputes, chargebacks, and regulatory compliance.</p>

            <h2>1. What is an AEPS Chargeback?</h2>
            <p>An AEPS (Aadhaar Enabled Payment System) chargeback occurs when a customer files a dispute with their bank, claiming that a cash withdrawal transaction debited from their account was unauthorized, fraudulent, or that the retail agent (Adhikari) did not hand over the equivalent cash.</p>

            <h2>2. Mandatory Retailer Register Maintenance</h2>
            <p>To defend against chargeback disputes, every Adhikari **MUST** maintain a physical, handwritten logbook/register for all AEPS transactions. Each register entry must record:</p>
            <ul>
              <li>Date and Time of the transaction</li>
              <li>Customer's Name and Mobile Number</li>
              <li>Bank Name</li>
              <li>Last 4 digits of the customer's Aadhaar Number</li>
              <li>Transaction Amount (in figures and words)</li>
              <li>12-digit Retrieval Reference Number (RRN) / Transaction ID</li>
              <li>Transaction Status (Success / Failed)</li>
              <li><strong>Mandatory: Customer's handwritten Signature or Thumb Impression (as physical proof of cash delivery)</strong></li>
            </ul>
            <p>Failure to maintain this register is a direct violation of NPCI and RBI rules, and will make you liable for all disputed amounts.</p>

            <h2>3. Chargeback Dispute Resolution Process</h2>
            <p>When a customer's bank raises a formal chargeback request, the following steps are initiated:</p>
            <ol>
              <li>Mera Digital Pay's risk team will notify the Adhikari via email, portal notice, or SMS about the disputed transaction details.</li>
              <li>The Adhikari must submit a clear, scanned image or photo of the register entry containing the customer's signature/thumb impression, along with the system receipt, within **48 hours** of notification.</li>
              <li>Our team submits this documentation to the NPCI and the customer's bank to dispute the chargeback.</li>
              <li>If the provided proof is valid and accepted, the chargeback is successfully defended, and no funds are debited from the retailer.</li>
            </ol>

            <h2>4. Consequence of Failure to Provide Proof</h2>
            <ul>
              <li>If the Adhikari fails to submit the signed register entry within 48 hours, or if the signature/thumb impression is missing, unclear, or found to be forged, the chargeback will be decided in favor of the customer.</li>
              <li>The disputed amount will be **directly debited** from the Adhikari's wallet balance.</li>
              <li>If the wallet balance is insufficient, the wallet will reflect a negative balance, and future commission/settlement payouts will be held until the debit is resolved.</li>
              <li>Repeated failures to defend chargebacks or suspected collusive fraud will result in permanent suspension of the Adhikari ID and potential legal reporting to the cybercrime cell.</li>
            </ul>

            <h2>5. Best Practices to Prevent Chargebacks</h2>
            <ul>
              <li><strong>Wait for confirmation:</strong> Disburse cash to the customer **ONLY** when the application screen shows a clear "Transaction Successful" status.</li>
              <li><strong>Do not split:</strong> Avoid doing multiple split withdrawals for the same customer within minutes (e.g. withdrawing 1000 ten times). Run a single transaction whenever possible.</li>
              <li><strong>No extra fee:</strong> Never charge extra commission/cash fee from the customer for AEPS withdrawals.</li>
              <li><strong>Digital Receipts:</strong> Share digital SMS receipts or print thermal receipts for the customer.</li>
            </ul>

            <p style={{ marginTop: '40px', fontSize: '14px', color: '#64748b' }}>Last Updated: June 12, 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
