<script>
  export let selectedEvent;
  import { createEventDispatcher } from 'svelte';

  $: name = selectedEvent?.name;
  $: image = selectedEvent?.image;
  $: date = selectedEvent?.date;
  $: description = selectedEvent?.description;
  $: location = selectedEvent?.location;
  $: id = selectedEvent?.id;

  const dispatch = createEventDispatcher();
  function close() {
    dispatch('close');
  }
</script>

{#if selectedEvent}
  <div class="card shadow-lg rounded-4 border border-dark">
    <button class="close-btn" on:click={close} aria-label="Close event detail">
    &times;
  </button>
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
{/if}

<style>

</style>
