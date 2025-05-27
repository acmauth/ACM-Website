<script>
    export let name="";
    export let id="";
    export let image;
    export let date = "";
  </script>

<div class="card shadow-lg rounded-4 border border-dark">

  <a href={`/events/${id}`} title={name} class="image-link ratio ratio-16x9">
    <img loading="lazy" src={image} class="card-img-top rounded-top-4 img-fluid object-fit-cover" alt={name}/>
  </a>
  
  <a href={`/events/${id}`} class="card-title text-dark hover-text fs-4 mt-2 text-link">
    <h5 class="card-title fs-4">{name}</h5>
    <p class="fs-7 mb-2">
      <i class="bi bi-calendar-event me-2"></i>
      {date}
    </p>
  </a>

</div>

<style>
  .text-link{
    text-decoration: none;
  }
  .hover-text {
    transition: opacity 0.3s ease; 
  }
  .hover-text:hover {
    opacity: 0.5; 
    text-decoration: underline;
  }
  .image-link {
    display: inline-block;
    position: relative;
  }
  .card {
    transition: transform 0.3s ease;
    transform-origin: center center;
  }
  .card:hover {
    transform: scale(1.05);
  }
  
</style>