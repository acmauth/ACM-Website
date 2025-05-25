<script>
  import Buttom from "$lib/components/Buttom.svelte";
  import logo from "$lib/assets/our-logo.png";
  import mainPhoto from "$lib/assets/aesthetic-photo.png";
  import secondPhoto from "$lib/assets/aesthetic-photo(2).jpg";
  import acm from "$lib/assets/acm-logo(og).png";
  import auth from "$lib/assets/auth-logo.png";
  import whiteTower from "$lib/assets/white-tower.png";
  import calendar from "$lib/assets/calendar.png";
</script>

<!-- Carousel -->
<div id="heroCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="hero-slide" style="background-image: url('{mainPhoto}');"></div>
    </div>
    <div class="carousel-item">
      <div class="hero-slide" style="background-image: url('{secondPhoto}');"></div>
    </div>
    <!-- Add more slides if needed -->

    <!-- Text -->
    <div class="hero-text">
      <h1>ACM AUTH Student CHAPTER,</h1>
      <p>We learn and create, together</p>
    </div>
  </div>
</div>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg custom-navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="{logo}" alt="Logo" width="94" height="94" class="d-inline-block align-text-top">
    </a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
      <span class="navbar-toggler-icon"></span>
    </button> 

    <div class="collapse navbar-collapse" id="navbarContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about-us">ABOUT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/weather">TEAM</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/events">EVENTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects">PROJECTS</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Info Section -->
<section class="info-grid container mt-5 pt-5">
  <div class="row text-center">
    <div class="col-md-4 mb-5">
      <a href="https://www.acm.org" class="d-block text-decoration-none text-dark" style="cursor: pointer;">
        <img src="{acm}" alt="ACM Logo" class="img-fluid" style="max-width: 150px;">
        <img src="{auth}" alt="AUTH Logo" class="img-fluid" style="max-width: 150px;">
        <h6>ACM Student Chapter</h6>
        <p>ACM AUTH Student Chapter is the official student chapter of the ACM in the Aristotle University of Thessaloniki.</p>
      </a>
    </div>
    <div class="col-md-4 mb-5">
      <img src="{whiteTower}" alt="White Tower" class="img-fluid mb-3" style="max-width: 150px;"> 
      <h6>est. 2008</h6>
      <p>Since 2008 our chapter advances computing as a science and profession by bringing together students, educators, researchers, and professionals in the area of Thessaloniki.</p>
    </div>
    <div class="col-md-4 mb-5">
      <a href="/events" class="d-block text-decoration-none text-dark" style="cursor: pointer;">
        <img src="{calendar}" alt="Calendar" class="img-fluid mb-3" style="max-width: 150px;">
        <h6>Events</h6>
        <p>In the past few years, ACM AUTH has organized a variety of events such as workshops, hackathons, talks and more.</p>
      </a>
    </div>
  </div>
</section>

<!--<section class="timeline-stats container my-5 position-relative">
  <div class="row gx-5 gy-5 align-items-center">
    <div class="col-md-6 d-flex flex-column gap-5">
      <div class="timeline-item text-center">
        <img src="$lib/assets/events.jpg" class="img-fluid mb-2" />
        <h5>60</h5>
        <p>Events</p>
      </div>
      <div class="timeline-item text-center">
        <img src="$lib/assets/members.jpg" class="img-fluid mb-2" />
        <h5>100+</h5>
        <p>Members</p>
      </div>
    </div>

    <div class="col-md-6 d-flex flex-column gap-5">
      <div class="timeline-item text-center">
        <img src="$lib/assets/projects.jpg" class="img-fluid mb-2" />
        <h5>10</h5>
        <p>Projects</p>
      </div>
      <div class="timeline-item text-center">
        <img src="$lib/assets/attendees.jpg" class="img-fluid mb-2" />
        <h5>200+</h5>
        <p>Attendees</p>
      </div>
    </div>

    <div class="timeline-lines d-none d-md-block">
      <div class="dot dot-top"></div>
      <div class="dotted-line line-top"></div>

      <div class="dot dot-mid"></div>
      <div class="dotted-line line-mid"></div>

      <div class="dot dot-bottom"></div>
      <div class="dotted-line line-bottom"></div>
    </div>
  </div>
</section> -->

<style>
  .custom-navbar {
    background: rgba(71, 143, 215, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }

  #heroCarousel {
    position: relative;
    z-index: 1;
  }

  .hero-slide {
    height: 100vh;
    background-size: cover;
    background-position: center;
  }

  .hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    color: white;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
    text-align: center;
    pointer-events: none;
  }

  .hero-text h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .hero-text p {
    font-size: 1.5rem;
  }

  .info-grid h6 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .info-grid p {
    font-size: 0.9rem;
    color: #666;
  }

  /*.timeline-stats {
    background-color: #e7ecfb;
    border-radius: 20px;
    padding: 40px 20px;
    position: relative;
  }

  .timeline-lines {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translateX(-50%);
    z-index: 0;
  }

  .dotted-line {
    border-left: 4px dotted #2a4f9c;
    height: 100px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .line-top {
    top: 80px;
  }

  .line-mid {
    top: 260px;
  }

  .line-bottom {
    top: 440px;
  }

  .dot {
    width: 12px;
    height: 12px;
    background-color: #2a4f9c;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .dot-top {
    top: 80px;
  }

  .dot-mid {
    top: 260px;
  }

  .dot-bottom {
    top: 440px;
  }

  .timeline-item img {
    max-width: 100%;
    border-radius: 12px;
    height: auto;
  }*/
</style>

<button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>



<!-- Button to open Form -->
<div>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSe2eRcHwOTgRsQAIxirVysdI-5pVyCWpY4IDMh1Apw6pLBY3Q/viewform?usp=header">
  <Buttom></Buttom>
  </a>
</div>