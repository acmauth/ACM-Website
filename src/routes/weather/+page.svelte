<!--
 * Consider the scenario that the coordinates were not static, but given by the user
 * from an input form's field, or somehow stored in a variable in +page.svelte.
 * 
 * In that case, we need to pass these values to the load() function when loading the page.    
 * In order to do that we need to pass to the page url params the variables' values and read
 * them inside the load() function.
-->


<script>
  import { page } from '$app/stores';   // Import page to use the session variables across refreshes
  import { goto } from '$app/navigation'; // Import goto to perform refresh
  
  let lat = '';
  let lon = '';

  async function searchWeather() {
    await goto(`?lat=${lat}&lon=${lon}`); // Perform reloads the page adding url parameters 
  }
</script>

<div class="container py-5">
  <h1>Check Weather</h1>
  
  <input bind:value={lat} placeholder="Latitude" class="form-control my-2" />
  <input bind:value={lon} placeholder="Longitude" class="form-control my-2" />
  
  <button class="btn btn-primary" on:click={searchWeather}>Get Weather</button>

  {#if $page.data.weather}
    <div class="mt-4">
      <h2>Weather Result:</h2>
      <pre>{JSON.stringify($page.data.weather, null, 2)}</pre>
    </div>
  {/if}
</div>