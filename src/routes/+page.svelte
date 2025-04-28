<script>
    export let data;
    const weather = data.weather;
</script>


<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
      <a class="navbar-brand" href="#">MyWebsite</a>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
      
        <span class="navbar-toggler-icon"></span>
      </button>
      

      <div class="collapse navbar-collapse" id="navbarContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/about-us">About</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/weather">Weather</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/events">Events</a>
          </li>
      </ul>
      </div>
  </div>
</nav>

<!-- Main Content -->
<section class="container py-5 text-center">
<h1 class="display-4">Welcome to My Website!</h1>
<p class="lead">This is a simple homepage built with SvelteKit and Bootstrap 5.</p>
<a href="/about" class="btn btn-light btn-lg mt-3">Learn more</a>
</section>

<section class="container py-5 text-center">
    <h1 class="display-4">Current Weather</h1>
  
    {#if weather}
      <div class="card p-4 mt-4">
        <h2 class="h5 mb-3">Thessaloniki</h2>
        <p><strong>Temperature:</strong> {weather.temperature} °C</p>
        <p><strong>Wind Speed:</strong> {weather.windspeed} km/h</p>
        <p><strong>Last Updated:</strong> {new Date(weather.time).toLocaleString()}</p>
      </div>
    {:else}
      <p>Loading weather data...</p>
    {/if}
    
</section>

