<script>
    export let name;
    export let image;
    export let title = "";
  </script>
  
  <div class="card shadow-sm" style="width: 18rem;">
    <img src={image} class="card-img-top" alt={name} />
    <div class="card-body text-center">
      <h5 class="card-title">{name}</h5>
      {#if title}
        <p class="card-text text-muted">{title}</p>
      {/if}
    </div>
  </div>
  