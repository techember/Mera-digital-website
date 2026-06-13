<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Agent Registration | Mera Digital Pay</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Inter,Segoe UI,Arial;
}

body{
  background:#f5f7ff;
}

/* MAIN WRAPPER */
.login-wrapper{
  max-width:1100px;
  margin:60px auto;
  background:#fff;
  display:grid;
  grid-template-columns:1fr 1fr;
  border-radius:18px;
  overflow:hidden;
  box-shadow:0 25px 60px rgba(0,0,0,.15);
}

/* LEFT */
.login-left{
  padding:50px;
  text-align:center;
}

/* LOGO */
.login-logo{
  width:110px;
  margin:0 auto 15px;
  display:block;
}

.login-left h2{
  color:#0a144a;
  margin-bottom:10px;
  font-size:22px;
}

.login-left .sub{
  font-size:14px;
  margin-bottom:25px;
}
.login-left .sub a{
  color:#ff6a00;
  font-weight:600;
}

/* FORM */
.input-group{
  display:flex;
  align-items:center;
  border:1px solid #ddd;
  padding:12px 14px;
  border-radius:10px;
  margin-bottom:15px;
  text-align:left;
}
.input-group i{
  color:#999;
  margin-right:10px;
}
.input-group input,
.input-group select{
  border:none;
  outline:none;
  width:100%;
  font-size:14px;
  background:none;
}

.btn-login{
  width:100%;
  background:#ff6a00;
  color:#fff;
  padding:14px;
  border:none;
  border-radius:30px;
  font-size:15px;
  font-weight:600;
  cursor:pointer;
  transition:.3s;
}
.btn-login:hover{
  background:#e85d00;
}

/* SOCIAL */
.social{
  margin-top:30px;
}
.social p{
  font-size:13px;
  margin-bottom:10px;
  color:#555;
}
.icons a{
  display:inline-flex;
  width:36px;
  height:36px;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  background:#eef1ff;
  margin:0 4px;
  color:#0a144a;
  transition:.3s;
}
.icons a:hover{
  background:#ff6a00;
  color:#fff;
}

/* RIGHT */
.login-right{
  background:#2f3388;
  color:#fff;
  padding:50px;
  position:relative;
}

.login-right h2{
  margin-bottom:10px;
}

.login-right p{
  font-size:14px;
  opacity:.9;
  margin-bottom:30px;
}

.help-item{
  display:flex;
  align-items:center;
  gap:12px;
  margin-bottom:15px;
  font-size:14px;
}
.help-item i{
  background:#fff;
  color:#2f3388;
  padding:10px;
  border-radius:50%;
}

.right-illustration{
  width:260px;
  margin-top:30px;
  opacity:0.9;
}

/* RESPONSIVE */
@media(max-width:900px){
  .login-wrapper{
    grid-template-columns:1fr;
  }
  .login-right{
    text-align:center;
  }
  .right-illustration{
    width:220px;
    margin:30px auto 0;
    display:block;
  }
}

@media(max-width:500px){
  .login-left,
  .login-right{
    padding:30px 20px;
  }
  .login-logo{
    width:90px;
  }
}
</style>
</head>

<body>

<div class="login-wrapper">

  <!-- LEFT : REGISTRATION FORM -->
  <div class="login-left">

    <!-- LOGO -->
    <img src="assets/images/logo.png" class="login-logo" alt="Mera Digital Pay">

    <h2>FREE REGISTRATION</h2>
    <p class="sub">
      Already have an account?
      <a href="login.php">Login here</a>
    </p>

    <form>

      <div class="input-group">
        <i class="fa fa-user"></i>
        <input type="text" placeholder="Full Name" required>
      </div>

      <div class="input-group">
        <i class="fa fa-phone"></i>
        <input type="tel" placeholder="Mobile Number" required>
      </div>

      <div class="input-group">
        <i class="fa fa-location-dot"></i>
        <input type="text" placeholder="District" required>
      </div>

      <div class="input-group">
        <i class="fa fa-map"></i>
        <input type="text" placeholder="State" required>
      </div>

      <div class="input-group">
        <i class="fa fa-briefcase"></i>
        <select required>
          <option value="">Select Position</option>
          <option>Retailer</option>
          <option>Distributor</option>
          <option>Franchise</option>
          <option>District Franchise</option>
        </select>
      </div>

      <button type="submit" class="btn-login">
        Register Now <i class="fa fa-arrow-right"></i>
      </button>

    </form>

    <!-- SOCIAL -->
    <div class="social">
      <p>JOIN US ON SOCIAL</p>
      <div class="icons">
        <a href="https://www.facebook.com/share/1NJGzCu1yv/" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="https://whatsapp.com/channel/0029Vb6Xac9Gk1FmZbg5kD3G" target="_blank"><i class="fab fa-whatsapp"></i></a>
        <a href="https://t.me/+kuz7ioMUeC1iMjM9" target="_blank"><i class="fab fa-telegram-plane"></i></a>
        <a href="https://www.instagram.com/meradigitalpay_" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.youtube.com/@meradigitalpay_official" target="_blank"><i class="fab fa-youtube"></i></a>
      </div>
    </div>

  </div>

  <!-- RIGHT : INFO PANEL -->
  <div class="login-right">
    <h2>WHY JOIN MERA DIGITAL PAY?</h2>
    <p>India’s trusted B2B Fintech platform</p>

    <div class="help-item">
      <i class="fa fa-check"></i>
      High Commission & Fast Settlement
    </div>

    <div class="help-item">
      <i class="fa fa-check"></i>
      AEPS, Banking, Recharge & More
    </div>

    <div class="help-item">
      <i class="fa fa-check"></i>
      Dedicated Support Team
    </div>

    <img src="assets/images/reg.webp"
         class="right-illustration"
         alt="Agent Registration">
  </div>

</div>

</body>
</html>
