// servicesData.js
// Each key is the URL slug (= PHP filename without .php)
// Values exactly match PHP: $page_title, $page_desc, $page_about, $page_image, $points
// Images: /assets/images/<filename>  (served from frontend/public/assets/images/)

const servicesData = {

  /* ── BANKING ─────────────────────────────────────────────── */
  'aeps': {
    title: 'AEPS (Aadhaar Enabled Payment System)',
    desc:  'Provide Aadhaar based banking services like cash withdrawal & balance enquiry.',
    about: 'AEPS is an Aadhaar based payment system that allows retailers to offer basic banking services to customers using biometric authentication. Customers can withdraw cash, check balance and get mini statements without visiting a bank branch.',
    image: '/assets/images/banking.png',
    points: [
      'Cash Withdrawal using Aadhaar',
      'Balance Enquiry',
      'Mini Statement',
      'Secure Biometric Authentication',
      'Works Across All Major Banks',
      'High Commission Per Transaction'
    ]
  },

  'money-transfer': {
    title: 'Money Transfer (DMT)',
    desc:  'Transfer money instantly to any bank account across India.',
    about: 'Money Transfer service helps customers send money to any bank account quickly and securely. Retailers can provide instant domestic remittance services and earn commission on every successful transaction.',
    image: '/assets/images/banking.png',
    points: [
      'Instant Domestic Money Transfer',
      'Transfer to Any Bank in India',
      'IMPS / NEFT Support',
      'Safe & Secure Transactions',
      '24x7 Availability',
      'Attractive Retailer Commission'
    ]
  },

  'micro-atm': {
    title: 'Micro ATM Services',
    desc:  'Provide basic banking services using Micro ATM devices.',
    about: 'Micro ATM service enables retailers and business correspondents to offer banking services like cash withdrawal and balance enquiry using debit cards and Aadhaar authentication. It brings banking services closer to customers.',
    image: '/assets/images/banking.png',
    points: [
      'Cash Withdrawal',
      'Balance Enquiry',
      'Debit Card Based Transactions',
      'Aadhaar Enabled Authentication',
      'Low Cost Device',
      'Daily Earning Opportunity'
    ]
  },

  /* ── UTILITY & BILL PAYMENT ──────────────────────────────── */
  'mobile-dth-recharge': {
    title: 'Mobile & DTH Recharge',
    desc:  'Provide instant mobile and DTH recharge services for all operators.',
    about: 'Mobile & DTH Recharge service allows retailers to offer fast prepaid recharge services for mobile and DTH connections. Customers get instant confirmation while retailers earn commission on every recharge.',
    image: '/assets/images/utility.png',
    points: [
      'All Mobile Operators Supported',
      'DTH Recharge for All Providers',
      'Instant Recharge Confirmation',
      '24x7 Service Availability',
      'Low Failure Rate',
      'Attractive Retailer Commission'
    ]
  },

  'recharge': {
    title: 'Mobile & DTH Recharge',
    desc:  'Recharge prepaid mobile and DTH connections instantly for all major operators.',
    about: 'Recharge service allows retailers to offer mobile recharge, DTH recharge and data card recharge services to their customers instantly with best commission rates.',
    image: '/assets/images/utility.png',
    points: [
      'Mobile Recharge',
      'DTH Recharge',
      'Fast & Secure'
    ]
  },

  'bbps': {
    title: 'BBPS (Bharat Bill Payment System)',
    desc:  'Accept and process utility bill payments under BBPS.',
    about: 'BBPS service allows retailers to collect utility bill payments like electricity, water, gas, broadband and more. It is a secure and RBI authorized bill payment system with real-time confirmation.',
    image: '/assets/images/utility.png',
    points: [
      'Electricity Bill Payment',
      'Water & Gas Bill Payment',
      'Broadband & Landline Bills',
      'Secure RBI Approved System',
      'Instant Payment Receipt',
      'Commission on Every Bill'
    ]
  },

  'ott-recharge': {
    title: 'OTT Recharge Services',
    desc:  'Provide subscription recharge for popular OTT platforms.',
    about: 'OTT Recharge service enables retailers to recharge subscriptions for popular OTT platforms. Customers can easily activate or renew their OTT plans through your digital service point.',
    image: '/assets/images/utility.png',
    points: [
      'Popular OTT Platforms Supported',
      'Instant Subscription Activation',
      'Easy Renewal Process',
      'Growing Customer Demand',
      'Additional Income Source',
      'Fast & Secure Transactions'
    ]
  },

  'cms-airtel': {
    title: 'CMS Airtel',
    desc:  'Cash Management Services powered by Airtel.',
    about: 'CMS Airtel service allows retailers to manage cash collection and deposits efficiently. It helps businesses handle daily cash flow securely using Airtel powered CMS solutions.',
    image: '/assets/images/business.png',
    points: [
      'Cash Collection & Management',
      'Secure Cash Handling',
      'Fast Settlement Process',
      'Ideal for Retail Businesses',
      'Airtel Powered Service',
      'Additional Business Revenue'
    ]
  },

  /* ── INSURANCE ───────────────────────────────────────────── */
  'insurance': {
    title: 'Insurance Services',
    desc:  'Provide insurance services to your customers and earn fixed commission on every policy through Mera Digital Pay.',
    about: 'Insurance service enables retailers to offer various insurance products including health, motor, shop and device insurance. Earn fixed commission on every policy issued to customers.',
    image: '/assets/images/insurance.png',
    points: [
      'Health Insurance',
      'Motor Insurance',
      'Shop Insurance',
      'Device Insurance'
    ]
  },

  'health-insurance': {
    title: 'Health Insurance',
    desc:  'Provide health insurance services and help customers secure their medical needs.',
    about: 'Health Insurance service enables retailers to offer medical insurance policies to individuals and families. Customers get financial protection against medical expenses while retailers earn commission on every successful policy.',
    image: '/assets/images/insurance.png',
    points: [
      'Individual & Family Health Insurance',
      'Cashless Hospital Network',
      'Affordable Premium Plans',
      'Quick Policy Issuance',
      'Renewal & Claim Assistance',
      'Attractive Retailer Commission'
    ]
  },

  'motor-insurance': {
    title: 'Motor Insurance',
    desc:  'Two-wheeler and four-wheeler insurance services at one place.',
    about: 'Motor Insurance service allows customers to insure their bikes and cars easily. Retailers can issue new policies, renew existing ones and assist with claims using a digital process.',
    image: '/assets/images/insurance.png',
    points: [
      'Bike & Car Insurance',
      'Third Party & Comprehensive Plans',
      'Instant Policy Generation',
      'Policy Renewal Facility',
      'Digital Documentation',
      'Commission on Every Policy'
    ]
  },

  'shop-insurance': {
    title: 'Shop Insurance',
    desc:  'Protect shops and small businesses with insurance coverage.',
    about: 'Shop Insurance service helps shop owners and small businesses secure their premises against risks like fire, theft and natural calamities. Retailers can assist business owners in selecting suitable insurance plans.',
    image: '/assets/images/insurance.png',
    points: [
      'Shop & Commercial Insurance',
      'Protection Against Fire & Theft',
      'Affordable Business Plans',
      'Easy Policy Issuance',
      'Small Business Focused',
      'Additional Income Opportunity'
    ]
  },

  'device-insurance': {
    title: 'Device Insurance',
    desc:  'Insurance coverage for mobile phones and electronic devices.',
    about: 'Device Insurance service allows customers to insure their mobile phones and electronic gadgets against damage, theft and malfunction. Retailers can offer value-added protection services.',
    image: '/assets/images/insurance.png',
    points: [
      'Mobile & Gadget Insurance',
      'Protection Against Damage & Theft',
      'Affordable Insurance Plans',
      'Easy Claim Process',
      'Instant Policy Activation',
      'Retailer Commission Benefits'
    ]
  },

  /* ── TRAVEL ──────────────────────────────────────────────── */
  'travel': {
    title: 'Travel Booking Services',
    desc:  'Book train, bus, flight and hotel tickets easily for your customers.',
    about: 'Travel Booking service allows retailers to book IRCTC train tickets, bus tickets, flight tickets and hotel rooms for customers. It is a high-demand service with attractive commission rates.',
    image: '/assets/images/travel.png',
    points: [
      'IRCTC Ticket Booking',
      'Bus Booking',
      'Flight & Hotel Booking'
    ]
  },

  'irctc-ticket-booking': {
    title: 'IRCTC Ticket Booking',
    desc:  'Book railway tickets easily for customers and earn commission.',
    about: 'IRCTC Ticket Booking service allows retailers to book train tickets for customers using an online platform. Retailers can check PNR status, assist in ticket booking and earn commission on every successful transaction.',
    image: '/assets/images/travel.png',
    points: [
      'Train Ticket Booking',
      'PNR Status Check',
      'Tatkal & General Booking',
      'Cancellation Assistance',
      'Fast & Secure Process',
      'Retailer Commission'
    ]
  },

  'flight-booking': {
    title: 'Flight Booking',
    desc:  'Domestic and international flight ticket booking services.',
    about: 'Flight Booking service enables retailers to book air tickets for customers at competitive prices. Customers can choose from multiple airlines while retailers earn commission on every booking.',
    image: '/assets/images/travel.png',
    points: [
      'Domestic Flight Booking',
      'International Flight Booking',
      'Multiple Airline Options',
      'Best Fare Availability',
      'Easy Cancellation Support',
      'Commission on Every Ticket'
    ]
  },

  'bus-booking': {
    title: 'Bus Booking',
    desc:  'Book bus tickets for all major routes across India.',
    about: 'Bus Booking service allows retailers to book bus tickets for customers on various routes. Customers can select seats and travel comfortably while retailers earn commission.',
    image: '/assets/images/travel.png',
    points: [
      'All India Bus Routes',
      'Seat Selection Facility',
      'Instant Ticket Confirmation',
      'Multiple Bus Operators',
      'Easy Refund Support',
      'Additional Retailer Income'
    ]
  },

  'hotel-booking': {
    title: 'Hotel Booking',
    desc:  'Hotel booking services for customers at affordable prices.',
    about: 'Hotel Booking service allows customers to book hotels online through retailers. From budget hotels to premium stays, customers get multiple options and retailers earn commission.',
    image: '/assets/images/travel.png',
    points: [
      'Budget & Premium Hotels',
      'Pan India Hotel Network',
      'Instant Booking Confirmation',
      'Best Price Deals',
      'Customer Support Assistance',
      'Retailer Commission'
    ]
  },

  /* ── E-GOVERNANCE ────────────────────────────────────────── */
  'pan-card': {
    title: 'PAN Card Services',
    desc:  'Apply for new PAN card or make corrections easily through Mera Digital Pay.',
    about: 'PAN Card service allows customers to apply for a new PAN card, correction in existing PAN or download e-PAN digitally. Retailers can provide PAN related services quickly and earn commission on every successful application.',
    image: '/assets/images/egov.png',
    points: [
      'New PAN Card Application',
      'PAN Card Correction',
      'e-PAN Download',
      'Aadhaar Based KYC',
      'Fast Processing',
      'Retailer Commission on Every PAN'
    ]
  },

  'itr-filing': {
    title: 'ITR Filing',
    desc:  'File Income Tax Returns for individuals and businesses easily.',
    about: 'ITR Filing service helps individuals and businesses file their income tax returns accurately and on time. Retailers can assist customers with documentation and earn commission by providing tax filing services.',
    image: '/assets/images/egov.png',
    points: [
      'Individual ITR Filing',
      'Business ITR Filing',
      'Accurate Tax Calculation',
      'Expert Assistance',
      'Timely Filing',
      'Attractive Service Charges'
    ]
  },

  'itr': {
    title: 'ITR Filing',
    desc:  'File Income Tax Returns quickly and securely with professional support.',
    about: 'ITR service covers all aspects of income tax compliance including return filing, verification and refund tracking for individuals and businesses.',
    image: '/assets/images/egov.png',
    points: [
      'Individual ITR',
      'Business ITR',
      'Fast Processing'
    ]
  },

  'gst-registration': {
    title: 'GST Registration',
    desc:  'Register your business under GST quickly and hassle-free.',
    about: 'GST Registration service enables businesses to register under Goods and Services Tax (GST). Retailers can assist shop owners, traders and service providers in completing GST registration digitally.',
    image: '/assets/images/egov.png',
    points: [
      'New GST Registration',
      'GST Amendment Support',
      'GST Compliance Assistance',
      'Online Application Process',
      'Business Friendly Service',
      'Retailer Earning Opportunity'
    ]
  },

  'msme-registration': {
    title: 'MSME / UDYAM Registration',
    desc:  'Register small and medium businesses under UDYAM (MSME).',
    about: 'MSME (UDYAM) Registration service helps small and medium enterprises get government recognition and benefits. Retailers can help business owners complete UDYAM registration easily.',
    image: '/assets/images/egov.png',
    points: [
      'UDYAM / MSME Registration',
      'Government Recognition',
      'Access to Government Schemes',
      'No Registration Fee',
      'Quick Online Process',
      'Retailer Commission'
    ]
  },

  /* ── NEO BANKING ─────────────────────────────────────────── */
  'neo-banking': {
    title: 'Neo Banking Services',
    desc:  'Open digital bank accounts, issue cards and provide UPI based services easily with Mera Digital Pay.',
    about: 'Neo Banking services allow retailers to open digital bank accounts, issue physical cards and offer UPI payment services to customers without traditional banking infrastructure.',
    image: '/assets/images/neobanking.png',
    points: [
      'Digital Bank Account Opening',
      'Physical & Virtual Cards',
      'UPI Payment Services',
      'Loan & Investment'
    ]
  },

  'digital-bank-account': {
    title: 'Digital Bank Account',
    desc:  'Instant digital bank account opening for customers with Aadhaar & PAN.',
    about: 'Digital Bank Account service enables retailers to open zero balance savings accounts instantly for customers without visiting a bank branch. Customers get UPI, debit card and mobile banking access.',
    image: '/assets/images/neobanking.png',
    points: [
      'Instant Savings Account Opening',
      'Zero Balance Account',
      'UPI & Mobile Banking',
      'Debit Card Facility',
      'Aadhaar & PAN Based KYC',
      'Commission on Every Account'
    ]
  },

  'physical-card': {
    title: 'Physical Card',
    desc:  'Provide physical debit cards linked with digital bank accounts.',
    about: 'Physical Card service allows customers to receive debit cards for ATM withdrawal, POS usage and online transactions. Retailers earn commission on every successful card issuance.',
    image: '/assets/images/neobanking.png',
    points: [
      'ATM Withdrawal Facility',
      'POS & Online Usage',
      'Secure Chip Enabled Cards',
      'Linked with Digital Bank Account',
      'Easy Card Issuance',
      'Retailer Commission'
    ]
  },

  'upi-payment': {
    title: 'UPI Payment',
    desc:  'Enable fast and secure UPI payment services for customers.',
    about: 'UPI Payment service allows customers to make instant money transfers, merchant payments and bill payments using UPI apps. Retailers benefit by offering daily-use banking services.',
    image: '/assets/images/neobanking.png',
    points: [
      'Instant UPI Transfers',
      '24x7 Payment Service',
      'Scan & Pay Feature',
      'Safe & Secure Transactions',
      'High Usage & Daily Earnings',
      'Easy Customer Onboarding'
    ]
  },

  'loan': {
    title: 'Loan Services',
    desc:  'Offer personal, business and instant loans to customers.',
    about: 'Loan service helps customers apply for different types of loans digitally with minimal documentation. Retailers can earn commission by assisting customers in loan applications.',
    image: '/assets/images/neobanking.png',
    points: [
      'Personal Loan',
      'Business Loan',
      'Instant Loan Approval',
      'Minimum Documentation',
      'Attractive Commission',
      'Trusted Financial Partners'
    ]
  },

  'investment': {
    title: 'Investment Services',
    desc:  'Help customers invest in secure and profitable financial products.',
    about: 'Investment service allows customers to invest in fixed deposits and other financial instruments. Retailers earn commission while helping customers grow their savings.',
    image: '/assets/images/neobanking.png',
    points: [
      'Fixed Deposit Investment',
      'Safe & Secure Returns',
      'Easy Investment Process',
      'Trusted Banking Partners',
      'Retailer Earnings',
      'Customer Wealth Growth'
    ]
  },

  /* ── ACCOUNT SERVICES ────────────────────────────────────── */
  'account-opening': {
    title: 'Account Opening Services',
    desc:  'Open savings bank accounts digitally for customers with ease.',
    about: 'Account Opening service allows retailers to help customers open bank accounts digitally using Aadhaar and PAN. Customers get access to banking services without visiting a bank branch, while retailers earn commission on every successful account opening.',
    image: '/assets/images/egov.png',
    points: [
      'Digital Savings Account Opening',
      'Aadhaar & PAN Based KYC',
      'Zero Balance Account Options',
      'UPI & Mobile Banking Access',
      'Fast Approval Process',
      'Retailer Commission on Every Account'
    ]
  },

  'credit-card-apply': {
    title: 'Credit Card Apply',
    desc:  'Apply for credit cards from leading banks with minimum documentation.',
    about: 'Credit Card Apply service enables customers to apply for credit cards digitally. Retailers can assist customers in choosing suitable cards and earn commission on every approved application.',
    image: '/assets/images/egov.png',
    points: [
      'Credit Cards from Leading Banks',
      'Online Application Process',
      'Minimum Documentation',
      'Quick Approval Assistance',
      'Attractive Offers & Benefits',
      'Retailer Earning Opportunity'
    ]
  },

  'sbm-fd-card': {
    title: 'SBM FD Card Apply',
    desc:  'Apply for SBM FD backed cards with secure banking benefits.',
    about: 'SBM FD Card service allows customers to apply for fixed deposit backed cards. This service is ideal for customers looking for secure card options while retailers earn commission on every successful application.',
    image: '/assets/images/egov.png',
    points: [
      'FD Backed Card Facility',
      'Secure Banking Product',
      'Easy Application Process',
      'Low Risk Financial Product',
      'Fast Issuance',
      'Commission for Retailers'
    ]
  },

  'account-services': {
    title: 'Account Services',
    desc:  'Offer various account related services to customers using Mera Digital Pay platform.',
    about: 'Account Services includes a range of banking account related services including opening, management, card issuance and digital banking access for customers.',
    image: '/assets/images/egov.png',
    points: [
      'Account Opening',
      'Credit Card Apply',
      'SBM FD Card Apply'
    ]
  },

  /* ── BUSINESS ────────────────────────────────────────────── */
  'nsdl-bc-apply': {
    title: 'NSDL BC Apply',
    desc:  'Apply for NSDL Business Correspondent and start digital banking services.',
    about: 'NSDL BC Apply service allows individuals and businesses to become authorized Business Correspondents. BCs can provide AEPS, account opening, money transfer and other banking services to customers and earn commission.',
    image: '/assets/images/business.png',
    points: [
      'NSDL Authorized BC Application',
      'Provide Banking Services Locally',
      'AEPS & Account Opening Facility',
      'Zero or Low Investment Model',
      'Attractive Monthly Earnings',
      'Support & Training Provided'
    ]
  },

  'kotak-bc-apply': {
    title: 'Kotak BC Apply',
    desc:  'Become a Kotak Bank Business Correspondent and offer banking services.',
    about: 'Kotak BC Apply service enables retailers to partner with Kotak Bank as a Business Correspondent. BCs can provide cash withdrawal, account opening and other digital banking services.',
    image: '/assets/images/business.png',
    points: [
      'Kotak Bank Authorized BC',
      'Digital Account Opening',
      'Cash Withdrawal Services',
      'Trusted Banking Partner',
      'Regular Commission Income',
      'Easy Onboarding Process'
    ]
  },

  'payout': {
    title: 'Payout Services',
    desc:  'Instant payout solutions for businesses and retailers.',
    about: 'Payout service enables businesses to make bulk or individual payouts instantly to bank accounts. This service is useful for salary, incentives, refunds and partner payments.',
    image: '/assets/images/business.png',
    points: [
      'Instant Bank Payouts',
      'Bulk & Single Payout Options',
      'Secure Transaction Processing',
      'API & Dashboard Support',
      'Fast Settlement',
      'Business Friendly Solution'
    ]
  },

  'business': {
    title: 'Business Services',
    desc:  'Start and grow your business by providing banking and digital services using Mera Digital Pay.',
    about: 'Business Services includes all business registration, seller onboarding and digital commerce services to help entrepreneurs grow their businesses.',
    image: '/assets/images/utility.png',
    points: [
      'NSDL BC Apply',
      'Kotak BC Apply',
      'CMS Airtel',
      'Payout Services'
    ]
  },

  /* ── SELLER SERVICES ─────────────────────────────────────── */
  'amazon-seller': {
    title: 'Amazon Seller Registration',
    desc:  'Become an Amazon seller and grow your online business.',
    about: 'Amazon Seller Registration service allows businesses and individuals to sell products on Amazon. Retailers can help with seller onboarding, documentation and account activation.',
    image: '/assets/images/business.png',
    points: [
      'Amazon Seller Account Setup',
      'GST & KYC Documentation',
      'Product Upload Assistance',
      'Access to Millions of Buyers',
      'Reliable Payment Settlement',
      'Commission for Retailers'
    ]
  },

  'flipkart-seller': {
    title: 'Flipkart Seller Registration',
    desc:  'Register as a Flipkart seller and start selling products online.',
    about: 'Flipkart Seller Registration service helps individuals and businesses onboard as sellers on Flipkart. Retailers can assist sellers with registration, documentation and catalog setup.',
    image: '/assets/images/business.png',
    points: [
      'Flipkart Seller Account Creation',
      'GST & Bank Account Assistance',
      'Product Listing Support',
      'Pan India Customer Reach',
      'Fast Onboarding Process',
      'Retailer Service Earnings'
    ]
  },

  'flipkart-delivery': {
    title: 'Flipkart Delivery Partner Apply',
    desc:  'Apply for Flipkart delivery partner or delivery job easily.',
    about: 'Flipkart Delivery Partner Apply service helps individuals apply for delivery jobs or delivery point setup with Flipkart. Retailers can assist applicants with registration and documentation.',
    image: '/assets/images/business.png',
    points: [
      'Flipkart Delivery Job Apply',
      'Delivery Partner Registration',
      'Attractive Monthly Earnings',
      'Flexible Working Hours',
      'Fast Application Process',
      'Retailer Assistance Income'
    ]
  },

  'ondc-seller': {
    title: 'ONDC Seller Registration',
    desc:  'Register your business on ONDC and sell through open digital network.',
    about: 'ONDC Seller Registration service enables local sellers and businesses to join the Open Network for Digital Commerce. It helps sellers expand their reach without depending on a single marketplace.',
    image: '/assets/images/business.png',
    points: [
      'ONDC Seller Onboarding',
      'Government Supported Platform',
      'Lower Commission Structure',
      'Increased Local Visibility',
      'Simple Digital Registration',
      'Future Ready Business Model'
    ]
  },

  'seller-services': {
    title: 'Seller & Delivery Services',
    desc:  'Become a seller or delivery partner with top platforms using Mera Digital Pay.',
    about: 'Seller Services helps businesses and individuals register on major e-commerce platforms and manage their online selling journey effectively.',
    image: '/assets/images/travel.png',
    points: [
      'Flipkart Seller Apply',
      'Amazon Seller Apply',
      'ONDC Seller Apply',
      'Flipkart Delivery Job Apply'
    ]
  },

  /* ── REGISTRATIONS ───────────────────────────────────────── */
  'registrations': {
    title: 'Registration Services',
    desc:  'Government and business registrations made simple with Mera Digital Pay.',
    about: 'Registration Services covers GST, MSME, PAN, ITR and various other government and business registrations through a single digital platform.',
    image: '/assets/images/egov.png',
    points: [
      'GST Registration',
      'MSME / UDYAM Registration',
      'ISO Certificate',
      'Company Registration'
    ]
  },

  /* ── PANELS & PLATFORMS ─────────────────────────────────── */
  'b2b-admin-panel': {
    title: 'B2B Admin Panel',
    desc: 'Manage your B2B Fintech network, members, and service distributions seamlessly.',
    about: 'The B2B Admin Panel gives you complete control over your business-to-business Fintech network. Configure services, manage member balances, track transaction logs, customize commission rates, and monitor your network\'s overall growth from a single, secure dashboard.',
    image: '/assets/images/business.png',
    points: [
      'Member & Distributor Management',
      'Commission Configuration',
      'Transaction & Wallet Logs',
      'Service On/Off Controls',
      'Secure Admin Dashboard',
      'Real-time Network Analytics'
    ]
  },
  'b2c-admin-panel': {
    title: 'B2C Admin Panel',
    desc: 'Provide financial and banking services directly to consumers with our robust B2C panel.',
    about: 'The B2C Admin Panel allows business owners to target direct retail consumers. It includes self-registration features, wallet transfers, mobile payments, and utility integrations, built on a highly secure and consumer-friendly interface.',
    image: '/assets/images/business.png',
    points: [
      'Direct Consumer Signup',
      'Secure User Wallets',
      'Consumer Service Integrations',
      'Promotions & Banner Management',
      'Detailed Activity Tracking',
      'Instant Billing Support'
    ]
  },
  'api-panel': {
    title: 'API Partner Panel',
    desc: 'Access, manage, and test our B2B Fintech APIs inside a single developer panel.',
    about: 'The API Partner Panel is designed for developers and fintech integrations. It offers sandboxed API keys, full API request/response logs, documentation, SDK links, and usage reports to help integrate AEPS, DMT, and BBPS services into your own software.',
    image: '/assets/images/business.png',
    points: [
      'Developer API Key Management',
      'Detailed Debugging Logs',
      'Interactive API Documentation',
      'SDK Downloads & Code Snippets',
      'High Success Rate Monitoring',
      'Live API Usage Reports'
    ]
  },
  'reseller-admin-panel': {
    title: 'Reseller Admin Panel',
    desc: 'Run your own reseller business by white-labeling our B2B services.',
    about: 'The Reseller Admin Panel enables you to sell our Fintech portal software under your own brand. You can onboard B2B Admins, set wholesale prices, customize color themes, and build your own customer support system while we manage the backend tech.',
    image: '/assets/images/business.png',
    points: [
      'White-label Custom Branding',
      'B2B Admin Onboarding',
      'Wholesale Tariff Configuration',
      'Brand Logo & Colors Customizer',
      'Separate Support Ticket Panel',
      'Reseller Revenue Tracker'
    ]
  },

  /* ── ADDITIONAL ACCOUNT OPENING ────────────────────────── */
  'nsdl-biometric-account-opening': {
    title: 'NSDL Biometric Account Opening',
    desc: 'Open instant NSDL bank accounts for customers using biometric fingerprint scan.',
    about: 'NSDL Biometric Account Opening API enables retailers to open fully functional savings accounts for customers using biometric fingerprint authentication. It is a paperless, quick KYC process that issues instant debit cards.',
    image: '/assets/images/egov.png',
    points: [
      '100% Paperless Account Opening',
      'Biometric Fingerprint Authentication',
      'Instant Account Number Generation',
      'Zero Balance Account Options',
      'Virtual Debit Card Issuance',
      'Fixed Commissions per Account'
    ]
  },
  'kotak-biometric-account-opening': {
    title: 'Kotak Bank Biometric Account Opening',
    desc: 'Instant Kotak Bank savings account opening using Aadhaar biometric authentication.',
    about: 'Kotak Bank Biometric Account Opening service allows retailers to open Kotak savings accounts securely. By scanning the customer\'s fingerprint and validating their Aadhaar details, the account is activated instantly with all banking features.',
    image: '/assets/images/egov.png',
    points: [
      'Instant Account Activation',
      'Biometric Fingerprint Scan',
      'Aadhaar Based Paperless KYC',
      'Kotak 811 Savings Account Features',
      'Attractive Earning Commissions',
      'Customer Debit Card Support'
    ]
  },

  /* ── ADDITIONAL UTILITY ─────────────────────────────────── */
  'digital-gift-cards': {
    title: 'Digital Gift Cards API',
    desc: 'Generate and distribute digital gift cards for top brands and e-commerce platforms.',
    about: 'Our Digital Gift Cards API allows businesses and retailers to sell and issue digital gift vouchers for popular platforms like Amazon, Flipkart, Google Play, and other top brands. It offers instant code delivery and high margins.',
    image: '/assets/images/utility.png',
    points: [
      'Top Brands & E-commerce Supported',
      'Instant Code Generation',
      'Secure API Issuance',
      'Custom Gift Card Amounts',
      'High Margins for Retailers',
      'Perfect for Customer Gifting'
    ]
  },

  /* ── SMART VERIFICATION ─────────────────────────────────── */
  'aadhaar-verification': {
    title: 'Aadhaar Verification API',
    desc: 'Verify customer identity instantly using secure Aadhaar number verification.',
    about: 'Aadhaar Verification API allows businesses to check customer identity details securely in real-time. It validates the Aadhaar number directly with official databases to prevent identity fraud.',
    image: '/assets/images/egov.png',
    points: [
      'Real-time Aadhaar Validation',
      'Identity Fraud Prevention',
      'Paperless Verification Process',
      'Secure & RBI Compliant',
      'Ideal for Customer Onboarding',
      'High Match Accuracy'
    ]
  },
  'pan-verification': {
    title: 'PAN Card Verification API',
    desc: 'Instant real-time validation of Permanent Account Number (PAN) details.',
    about: 'PAN Verification API helps businesses verify the authenticity of PAN cards. It pulls tax registration details instantly to confirm the user\'s name and active status, preventing financial frauds.',
    image: '/assets/images/egov.png',
    points: [
      'Real-time Tax Database Check',
      'Instant Name Matching',
      'Individual & Business PAN Support',
      'Compliance Made Simple',
      'Fast API Response Time',
      'Fraud Detection System'
    ]
  },
  'voter-card-verification': {
    title: 'Voter ID Card Verification API',
    desc: 'Verify Voter ID card details instantly against official voter databases.',
    about: 'Voter Card Verification API allows quick validation of Voter ID documents during customer onboarding. It retrieves voter name, assembly constituency, and card status instantly to check voter details.',
    image: '/assets/images/egov.png',
    points: [
      'Official Voter DB Verification',
      'Instant Identity Checks',
      'High Database Match Rate',
      'Onboarding Verification API',
      'Prevent Voter Card Fraud',
      'Reliable Service API'
    ]
  },
  'passport-verification': {
    title: 'Passport Verification API',
    desc: 'Instant real-time validation of Indian Passport details for identity checks.',
    about: 'Passport Verification API checks and validates passport details directly against national databases. It confirms the passport status, name of the holder, file number, and issue details instantly.',
    image: '/assets/images/egov.png',
    points: [
      'Official Passport Database Verification',
      'Real-time Name & File Number Checks',
      'Secure KYC & Identity Audits',
      'Enterprise Compliance Support',
      'Instant Match Status Reports',
      'Robust Fraud Detection API'
    ]
  },
  'driving-license-verification': {
    title: 'Driving License Verification API',
    desc: 'Verify Driving License (DL) details instantly against national database records.',
    about: 'Driving License Verification API validates driving licenses in real-time, fetching license status, categories of vehicles permitted, expiry dates, and the license holder\'s details directly from RTO databases.',
    image: '/assets/images/egov.png',
    points: [
      'Instant RTO Database Queries',
      'Retrieve Expiry & Authorizations',
      'Holder Identity Verification',
      'Commercial & Personal DL Verification',
      'Secure Paperless Process',
      'Compliance & Audit Friendly'
    ]
  },
  'rc-verification': {
    title: 'Vehicle RC Verification API',
    desc: 'Verify vehicle Registration Certificate (RC) details directly from Vahan databases.',
    about: 'Vehicle RC Verification API fetches registrations records for any vehicle in India instantly. It retrieves owner name, chassis number, engine number, insurance validity, tax status, and RTO register status.',
    image: '/assets/images/egov.png',
    points: [
      'Vahan Database Integration',
      'Owner & Chassis Match Reports',
      'Insurance & Fitness Validity Tracking',
      'Real-time API Responses',
      'Automotive & Insurance Compliance',
      'Comprehensive Vehicle Audits'
    ]
  },
  'bank-account-verification': {
    title: 'Bank Account Verification API',
    desc: 'Verify customer bank account status and name matching in real-time.',
    about: 'Bank Account Verification API (penny drop) validates bank account status by depositing a small test amount. It retrieves the exact name registered at the bank to prevent payout errors and fraudulent account details.',
    image: '/assets/images/egov.png',
    points: [
      'Penny Drop Automated Verification',
      'Retrieve Bank Account Holder Name',
      'Support All Major Indian Banks',
      'Prevent Transaction Payout Failures',
      'Secure & Compliant API Gateway',
      'Instant Validation Reports'
    ]
  },
  'upi-verification': {
    title: 'UPI ID / VPA Verification API',
    desc: 'Validate UPI IDs (Virtual Payment Address) and holder names instantly.',
    about: 'UPI Verification API checks the validity of any VPA/UPI ID and fetches the account holder\'s name in real-time. This ensures secure payments and eliminates user errors before completing UPI transactions.',
    image: '/assets/images/egov.png',
    points: [
      'Real-time VPA / UPI Validation',
      'Holder Name Retrieval',
      'Universal UPI App Compatibility',
      'Smooth Checkout Integration',
      'Highly Secure & PCI Compliant',
      'Instant E-commerce Validation'
    ]
  },
  'gst-verification': {
    title: 'GSTIN Verification API',
    desc: 'Instant real-time validation of GSTIN numbers and business credentials.',
    about: 'GSTIN Verification API fetches business registration details, trade name, active status, address, and GST filing history directly from the government GST portal to verify corporate entities.',
    image: '/assets/images/egov.png',
    points: [
      'Government GST Database Query',
      'Retrieve Trade Name & Status',
      'Filing Frequency & Records',
      'Business KYC & Compliance Checks',
      'Prevent Tax Compliance Risks',
      'Automated Invoicing Audits'
    ]
  },
  'company-cin-verification': {
    title: 'Company CIN Verification API',
    desc: 'Verify MCA registered Corporate Identification Numbers (CIN) instantly.',
    about: 'Company CIN Verification API helps you verify companies registered under the Ministry of Corporate Affairs (MCA). It fetches incorporation dates, company status, capital details, and directors list.',
    image: '/assets/images/egov.png',
    points: [
      'MCA Database Direct Queries',
      'Verify Incorporation Dates & Status',
      'Director Details & Allocations',
      'Corporate KYC & Risk Check',
      'Reliable B2B Verification',
      'Instant Response Times'
    ]
  },
  'digilocker-verification': {
    title: 'DigiLocker Verification API',
    desc: 'Access verified government documents directly through user consent DigiLocker APIs.',
    about: 'DigiLocker Verification API allows platforms to request and fetch verified documents (Aadhaar, DL, PAN, Marks sheets) directly from a user\'s DigiLocker with their digital consent.',
    image: '/assets/images/egov.png',
    points: [
      'Consent-based Document Retrieval',
      'Digitally Signed Authentic Files',
      '100% Paperless Auditing',
      'Government Backed Infrastructure',
      'Secure OAuth 2.0 Integration',
      'Instant Document KYC Verification'
    ]
  },
  'more-verification-apis': {
    title: '50+ Verification APIs Suite',
    desc: 'Comprehensive suite of identification and verification APIs for all requirements.',
    about: 'Our Verification APIs suite provides 50+ additional identification APIs including Electric bill verify, Passport verify, Credit score check, Aadhaar OTP verify, Face matching, and more B2B developer utilities.',
    image: '/assets/images/egov.png',
    points: [
      '50+ Document Verification Gateways',
      'Face Matching & Liveness Checks',
      'Secure & Compliant Servers',
      'developer Friendly API Sandbox',
      'Best Success Rates in Industry',
      'Dedicated Verification Portal'
    ]
  }
};

export default servicesData;

// Helper: get service data by slug, returns null if not found
export function getServiceBySlug(slug) {
  return servicesData[slug] || null;
}

// For Services listing page modal — compact list
export const servicesList = [
  { slug: 'aeps',            label: 'AEPS',           about: servicesData['aeps'].about,            points: servicesData['aeps'].points },
  { slug: 'money-transfer',  label: 'Money Transfer', about: servicesData['money-transfer'].about,  points: servicesData['money-transfer'].points },
  { slug: 'recharge',        label: 'Recharge',       about: servicesData['recharge'].about,        points: servicesData['recharge'].points },
  { slug: 'bbps',            label: 'BBPS',           about: servicesData['bbps'].about,            points: servicesData['bbps'].points },
  { slug: 'insurance',       label: 'Insurance',      about: servicesData['insurance'].about,       points: servicesData['insurance'].points },
  { slug: 'travel',          label: 'Travel Booking', about: servicesData['travel'].about,          points: servicesData['travel'].points },
  { slug: 'pan-card',        label: 'PAN Card',       about: servicesData['pan-card'].about,        points: servicesData['pan-card'].points },
  { slug: 'neo-banking',     label: 'Neo Banking',    about: servicesData['neo-banking'].about,     points: servicesData['neo-banking'].points }
];
