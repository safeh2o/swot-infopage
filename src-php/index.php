<!DOCTYPE html>
<html lang="en">

<?php include 'includes/head.php'; ?>

<body class="home">

  <!-- partial: -->
  <?php include 'includes/header.php'; ?>

  <!-- partial: -->
  <article>
    <section id="intro">
      <div class="section-wrap">
        <header>
          <h1 class="section-title">Keeping water safe to drink&nbsp;— <br />from the tapstand to the last cup. </h1>
        </header>
        <div class="image">
          <figure>
            <div class="media">
              <img src="/public/assets/intro.png" alt="" width="1080px" height="960px" />
            </div>
          </figure>
        </div>
        <div class="text">
          <p>Safe water is essential for protecting public health during humanitarian emergencies.</p>
          <p>Chlorination is an effective way to protect water from contamination, but dosing to achieve the right level is challenging.</p>
          <p>The SWOT applies advanced analytics to water quality data you already collect and provides evidence-based, context-specific water chlorination targets that help you ensure the water you provide is safe to drink.</p>
          <!-- <a href="#" class="btn try-it-now"><span>Try it Now</span></a> -->
        </div>
      </div>
      <svg preserveAspectRatio="none" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="svg-wave-how-it-works">
        <path d="M 0,600 C 0,600 0,300 0,300 C 127.06666666666666,336 254.13333333333333,372 405,378 C 555.8666666666667,384 730.5333333333333,360 907,342 C 1083.4666666666667,324 1261.7333333333333,312 1440,300 C 1440,300 1440,600 1440,600 Z"></path>
      </svg>
    </section>

    <section id="how-it-works">
      <div class="section-wrap">
        <header>
          <h1 class="section-subtitle">What is the SWOT?</h1>
          <p>A tool to help you uncover the hidden message in your water quality data</p>
        </header>
      </div>
      <div class="section-wrap points">
        <div class="image-text how">
          <figure>
            <div class="media">
              <img src="/public/assets//slice3.png" alt="" width="" height="" />
            </div>
          </figure>
          <div>
            <h2>Advanced Analytics</h2>
            <p>The SWOT uses advanced analytics to chlorine decay between the tapstand and home</p>
          </div>
        </div>
        <div class="image-text how">
          <figure>
            <div class="media"><img src="/public/assets//slice1.png" alt="" width="" height="" />
            </div>
          </figure>
          <div>
            <h2>Routine data</h2>
            <p>It uses routine water quality data to generate site-specific guidance on the level of chlorination required to ensure water.</p>
          </div>
        </div>
        <div class="image-text how">
          <figure>
            <div class="media"><img src="/public/assets//slice2.png" alt="" width="" height="" />
            </div>
          </figure>
          <div>
            <h2>Actionable insights</h2>
            <p>Your teams have the data they need to be confident that the water they provide is safe to the last drop.</p>
          </div>
        </div>
      </div>
      <footer><a class="btn" href="how-it-works.php"><span>Learn More</span></a></footer>
    </section>

    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="704 -184 1440 400" class="svg-wave-signup">
      <path d="M704 16h80c80 0 240 0 400 13.4 160 12.9 320 40.4 480 46.6s320-6.3 400-13.4l80-6.6v160H704V16z" />
    </svg>
    <section id="signup">
      <div class="section-wrap">
        <div class="sign-up">
          <div class="sign-up-img">
            <img src="/public/assets/view-2.jpg" alt="Person holding water sample" />
          </div>
          <div class="sign-up-content">
            <h1 class="section-subtitle">Get Started</h1>
            <p>Our team is standing by to provide training and support to your team today. Let's get safe water to the people who need it.</p>
            <a class="btn" href="https://live.safeh2o.app/contact" target="_blank"><span>Request an Account</span></a>
          </div>
        </div>
      </div>
    </section>

    <section id="newsletter">
      <div class="section-wrap">
        <!-- Begin Mailchimp Signup Form -->
        <form action="https://app.us2.list-manage.com/subscribe/post?u=4e51b95811143b5dba0fbb5c3&amp;id=fb6ca52d01" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="">
          <h2 class="section-title">Newsletter</h2>

          <div class="form-wrap">
            <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="enter email" required="">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn">
            <div class="credit small">
              powered by <a href="https://mailchimp.com" target="_blank">mailchimp</a> </div>
          </div>

          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4e51b95811143b5dba0fbb5c3_fb6ca52d01" tabindex="-1" value=""></div>
        </form>
        <!--End mc_embed_signup-->
      </div>
    </section>
  </article>

  <!-- partial -->
  <?php include 'includes/footer.php'; ?>

  <!-- partial -->
  <?php include 'includes/scripts.php'; ?>

</body>

</html>