<script>
    import { createEventDispatcher } from 'svelte';

    export let name="";
    export let id="";
    export let image;
    export let date = "";

    const dispatch = createEventDispatcher();
    function handleClick() {
      dispatch('select', { id, name, image, date });
    }
  </script>

<button class="card-button" on:click={handleClick}>
  <div class="card shadow-lg rounded-4 border border-dark">
    <div class="ratio ratio-16x9">
      <img loading="lazy" src={image} class="card-img-top rounded-top-4 img-fluid object-fit-cover" alt={name}/>
    </div>
    <div class="card-body">
      <h5 class="card-title fs-4">{name}</h5>
      <p class="fs-7 mb-0">
        <i class="bi bi-calendar-event me-2"></i>
        {date}
      </p>
    </div>
  </div>
</button>

<style>
  .card-button {
    background: none;
    border: none;
    padding: 0;
    width: 80%;
    text-align: left;
    cursor: pointer;
  }
  .card-button:focus {
    outline: 3px solid rgba(0, 77, 128, 0.6);
  }
  .card-button:hover .card,
  .card-button:focus .card {
    transform: scale(1.05);
  }
  .card {
    transition: transform 0.3s ease;
    transform-origin: center center;
  }
  .card:hover {
    transform: scale(1.05);
  }
  
</style>