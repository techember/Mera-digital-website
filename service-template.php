<?php
/* 
Required variables before including this file:

$page_title   = "Service Title";
$page_desc    = "Short service description";
$page_about   = "Detailed service explanation";
$page_image   = "assets/images/xyz.png";
$points       = [ "Point 1", "Point 2", ... ];
*/
?>

<?php include 'includes/header.php'; ?>

<!-- ===== SERVICE HERO ===== -->
<section class="service-hero">
  <div class="container">
    <h1><?php echo $page_title; ?></h1>
    <p><?php echo $page_desc; ?></p>
  </div>
</section>

<!-- ===== SERVICE CONTENT ===== -->
<section class="service-content">
  <div class="container service-grid">

    <!-- LEFT : TEXT -->
    <div class="service-text">
      <h2>About <?php echo $page_title; ?></h2>
      <p><?php echo $page_about; ?></p>

      <?php if(!empty($points)){ ?>
      <ul class="service-points">
        <?php foreach($points as $p){ ?>
          <li>
            <i class="fa-solid fa-circle-check"></i>
            <?php echo $p; ?>
          </li>
        <?php } ?>
      </ul>
      <?php } ?>
    </div>

    <!-- RIGHT : IMAGE -->
    <div class="service-image">
      <img src="<?php echo $page_image; ?>" alt="<?php echo $page_title; ?>">
    </div>

  </div>
</section>

<!-- ===== CTA ===== -->
<section class="service-cta">
  <div class="container">
    <h3>Start <?php echo $page_title; ?> Today</h3>
    <p>Join Mera Digital Pay and grow your digital service business.</p>
    <a href="contact.php" class="btn-primary">
      <i class="fa-solid fa-phone"></i> Contact Us
    </a>
  </div>
</section>

<?php include 'includes/footer.php'; ?>
