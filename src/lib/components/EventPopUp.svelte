<script>
    import { createEventDispatcher, onMount } from 'svelte';

    export let selectedEvent;

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

    function deleteEvent() {
        dispatch('delete', { id });
    }

    let popupTop = 0;
    let isAdmin = false;
    onMount(() => {
      popupTop = window.scrollY + window.innerHeight / 2.5;
      isAdmin = localStorage.getItem('isAdmin') === 'true';
    });
</script>

{#if selectedEvent}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="popup-overlay" on:click={close}></div>

  <div class="popup-container" style="top: {popupTop}px;">
    <div class="card shadow-lg rounded-4 border border-dark popup-card">
      <div class="d-flex flex-column flex-md-row">
        <div class="image-container flex-shrink-0">
          <img loading="lazy" src={image} class="img-fluid rounded-start-4" alt={name}/>
        </div>

        <div class="card-body flex-grow-1">
          <h5 class="card-title fs-3">{name}</h5>
          <p class="fs-6 mb-2">
            <i class="bi bi-calendar-event me-2"></i>
            {date}
          </p>
          <p class="fs-6 mb-2">
            <i class="bi bi-geo-alt me-2"></i>
            {location}
          </p>
          <p class="mt-3 fs-7">{description}</p>

          {#if isAdmin}
            <div class="admin-delete-event-container mt-4 text-center">
              <button class="btn btn-danger btn-lg" on:click={deleteEvent}>🗑️ Διαγραφή Event</button>
            </div>
          {/if}

          <button class="close-btn" on:click={close} aria-label="Close event popup">x</button>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .popup-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
  }
  .popup-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    max-width: 1500px;  
    height: auto;
    overflow: hidden;
    z-index: 1001;
    max-height: 90vh
  }
  .popup-card {
    position: relative;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: transparent;
    border: none;
    font-size: 2rem;
    line-height: 1;
    color: #000;
    cursor: pointer;
    z-index: 1002;
  }
  .image-container {
    width: 55%;           
    max-height: none;
    overflow: hidden;
  }
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-body {
    width: 45%;       
    padding: 2rem;
    max-height: 80vh;
    overflow-y: auto;  
  }
  @media (max-width: 1300px) {
    .popup-container {
      width: 95%;
      max-height: 95vh;
    }
    .popup-card .d-flex {
      flex-direction: column !important;
    }
    .image-container {
      width: 100%;
      max-height: 40vh;  
    }
    .card-body {
      width: 100%;
      max-height: 50vh;  
      padding: 1rem;
    }
  }
</style>
