<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>MeraDigitalPay</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

</head>
<body>

<header class="header">
  <div class="container nav">

    <!-- LOGO -->
    <div class="logo">
      <img src="assets/images/logo.png" alt="MeraDigitalPay">
      <span>Mera <span class="brand">Digital Pay DAUDEGA</span></span>
    </div>

    <!-- TOGGLE -->
    <div class="menu-toggle" onclick="toggleMenu()">
      <i class="fa fa-bars"></i>
    </div>

    <!-- MENU -->
    <ul class="menu" id="menu">
      <li><a href="index.php">Home</a></li>

      <li class="mega" id="servicesMenu">
  <a href="#" onclick="return false;">Services <i class="fa fa-angle-down"></i></a>

  <!-- MEGA MENU -->
  <div class="mega-menu four-col">

    <!-- COL 1 -->
    <div class="mega-col">
      <h4><i class="fa fa-building-columns"></i> Banking Services</h4>
      <a href="aeps.php"><i class="dot"></i> AEPS</a>
<a href="money-transfer.php"><i class="dot"></i> Money Transfer (DMT)</a>
<a href="micro-atm.php"><i class="dot"></i> Micro ATM Withdrawal</a>


      <h4 class="mid-title"><i class="fa fa-wallet"></i> Neo Banking</h4>
      <a href="digital-bank-account.php"><i class="dot"></i> Digital Bank Account</a>
<a href="physical-card.php"><i class="dot"></i> Physical Card</a>
<a href="upi-payment.php"><i class="dot"></i> UPI Payment</a>
<a href="loan.php"><i class="dot"></i> Loan</a>
<a href="investment.php"><i class="dot"></i> Investment</a>

    </div>

    <!-- COL 2 -->
    <div class="mega-col">
      <h4><i class="fa fa-bolt"></i> Utility & Bill Payment</h4>
      <a href="mobile-dth-recharge.php"><i class="dot"></i> Mobile & DTH Recharge</a>
<a href="bbps.php"><i class="dot"></i> BBPS</a>
<a href="ott-recharge.php"><i class="dot"></i> OTT Recharge</a>

      <h4 class="mid-title"><i class="fa fa-shield-halved"></i> Insurance</h4>
      <a href="health-insurance.php"><i class="dot"></i> Health Insurance</a>
<a href="motor-insurance.php"><i class="dot"></i> Motor Insurance</a>
<a href="shop-insurance.php"><i class="dot"></i> Shop Insurance</a>
<a href="device-insurance.php"><i class="dot"></i> Device Insurance</a>

    </div>

    <!-- COL 3 -->
    <div class="mega-col">
      <h4><i class="fa fa-id-card"></i> E-Governance</h4>
      <a href="pan-card.php"><i class="dot"></i> PAN Card</a>
<a href="itr-filing.php"><i class="dot"></i> ITR Filing</a>
<a href="gst-registration.php"><i class="dot"></i> GST Registration</a>
<a href="msme-registration.php"><i class="dot"></i> MSME Registration</a>


      <h4 class="mid-title"><i class="fa fa-user-check"></i> Account Services</h4>
      <a href="account-opening.php"><i class="dot"></i> Account Opening</a>
<a href="credit-card-apply.php"><i class="dot"></i> Credit Card Apply</a>
<a href="sbm-fd-card.php"><i class="dot"></i> SBM FD Card Apply</a>

    </div>

    <!-- COL 4 -->
    <div class="mega-col">
      <h4><i class="fa fa-plane"></i> Travel Services</h4>
      <a href="irctc-ticket-booking.php"><i class="dot"></i> IRCTC Ticket Booking</a>
<a href="flight-booking.php"><i class="dot"></i> Flight Booking</a>
<a href="bus-booking.php"><i class="dot"></i> Bus Booking</a>
<a href="hotel-booking.php"><i class="dot"></i> Hotel Booking</a>


      <h4 class="mid-title"><i class="fa fa-briefcase"></i> Business</h4>
      <a href="nsdl-bc-apply.php"><i class="dot"></i> NSDL BC Apply</a>
<a href="kotak-bc-apply.php"><i class="dot"></i> Kotak BC Apply</a>
<a href="cms-airtel.php"><i class="dot"></i> CMS Airtel</a>
<a href="payout.php"><i class="dot"></i> Payout</a>

    </div>

  </div>
</li>


      <li><a href="income-calculator.php">Income Calculator</a></li>
      <li><a href="login.php" class="btn-outline">Login</a></li>
      <li><a href="about.php">About Us</a></li>
      <li><a href="contact.php">Contact Us</a></li>

    </ul>
  </div>
</header>

<script>
function toggleMenu(){
  document.getElementById("menu").classList.toggle("show");
}
</script>
<script>
let timer;
const menu = document.getElementById("servicesMenu");

menu.addEventListener("mouseenter", () => {
  clearTimeout(timer);
  menu.classList.add("open");
});

menu.addEventListener("mouseleave", () => {
  timer = setTimeout(() => {
    menu.classList.remove("open");
  }, 300); // delay close
});
</script>
