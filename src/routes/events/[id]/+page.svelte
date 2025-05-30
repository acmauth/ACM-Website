<!-- <script>


    ----------------- Replaced by EventPopUp.svelte -----------------


    import {events} from '$lib/data/events.json';
    import {upcomingEvents} from '$lib/data/upcomingEvents.json';
    import {page} from '$app/stores';
    import EventsPage from '$lib/components/EventsPage.svelte';

    let id;
	let event;
	let upcomingEvent;
    let selectedEvent;

    $:{
		if ($page.params.id) {
			id = $page.params.id;
			event = events.find(e => e.id === id);
			upcomingEvent = upcomingEvents.find(e => e.id === id);
            selectedEvent = event || upcomingEvent; 

			if (!event && !upcomingEvent) {
				console.error(`Event με ID ${id} δεν βρέθηκε.`);
			}
		}
	}

</script>

{#if selectedEvent}
    <EventsPage
        name={selectedEvent.name}
        image={selectedEvent.image}
        date={selectedEvent.date}
        description={selectedEvent.description}
        location={selectedEvent.location}
    />
{:else}
    <div class="container mt-5">
        <p>Το event δεν βρεθηκε</p>
    </div> 
{/if}        -->