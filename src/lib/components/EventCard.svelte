<script>
    export let name="";
    export let image;
    export let date = "";
  </script>

<div class="card shadow-lg rounded-4 border-0">
    <a href="/" title={name} class="image-link">
        <img loading="lazy" src={image} class="card-img-top rounded-top-4 img-fluid " alt={name} />
    </a>
   
    <div class="card-body text-center">
        <a href="/" class="card-title text-dark hover-text fs-4 text-link">
           {name}
        </a>
        <p class="fs-7">
            <i class="bi bi-calendar-event me-2 "> </i>
            {date}
        </p>
    </div>
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

  .image-link img {
    transition: transform 0.3s ease; 
  }

  .image-link:hover img {
    transform: scale(1.05); 
  }

  
</style>

  