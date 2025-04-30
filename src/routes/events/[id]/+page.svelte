<script>
    import { events } from '$lib/data/events';
    import { page } from '$app/stores';
    import EventsPage from '$lib/components/EventsPage.svelte';

    $:id=$page.params.id;
    $:event = events.find(event=>event.id===id);

    if(!event){
        console.error(`Event με ID ${id} δεν βρέθηκε.`);
    }
</script>

{#if event}
    <EventsPage
    name={event.name}
    image={event.image}
    date = {event.date}
    description={event.description}
    location={event.location}
/>
{:else}
    <div class="container mt-5">
        <p>Το event δεν βρεθηκε</p>
    </div> 
{/if}       