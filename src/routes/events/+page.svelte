<script>
    import EventCard from '$lib/components/EventCard.svelte';
    import EventDetails from '$lib/components/EventPopUp.svelte';
    import Timeline from '$lib/components/Timeline.svelte';
    import {events} from '$lib/data/events.json';
    import {upcomingEvents} from '$lib/data/upcomingEvents.json';

    let selectedEvent = null;

    function openDetail(e) {
        selectedEvent = e.detail;
    }
    function closeDetail() {
        selectedEvent = null;
    }
</script>

<div class="page">

    <h1 class="title">Events</h1>

    {#if upcomingEvents.length!==0}
        <h2 class="component-header">Upcoming Events</h2>
        <div class="carousel slide carousel-fade" id="upcomingEventsCarousel"  data-bs-ride="carousel" >
            <div class="carousel-inner">
                {#each upcomingEvents as upComingEvent ,index}
                    <div class="carousel-item {index===0? 'active': ''}">
                        <EventCard 
                        name={upComingEvent.name}
                        image={upComingEvent.image}
                        date={upComingEvent.date}
                        id={upComingEvent.id}
                        on:select={openDetail}
                        />
                    </div>
                {/each}
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#upcomingEventsCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon  " aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#upcomingEventsCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon text-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>  
    {/if}
   
    {#if selectedEvent}
        <EventDetails {selectedEvent} on:close={closeDetail} />
    {/if}

    <h2 class="component-header">Past Events</h2>
    <div class="container">
        <Timeline {events} on:select={openDetail}/>
    </div>
</div>

<style>
    .page {
        min-height: 100vh;
        padding-top: 3rem;
        padding-bottom: 3rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        text-align: center;
        width: 100%;
        filter: contrast(1.1);
        position: relative;

        background-image:
            linear-gradient(
                to bottom right,
                rgba(0, 77, 128, 0.6),
                rgba(218, 241, 252, 0.6)
                ),
            url('../../lib/assets/blue-white-background.jpg');
        background-size: cover;
        background-position: center;
        background-blend-mode: overlay;
        background-attachment: fixed;
    }
    .page::before {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: radial-gradient(
            ellipse at center,
            rgba(0,0,0,0) 70%,
            rgba(0,0,0,0.4) 130%
        );
        mix-blend-mode: multiply;
    }
    .title, 
    .component-header {
        color: #004d80;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        text-shadow: #daf1fc 2px 2px 4px;
    }
    .title {
        font-size: 3rem;
        font-weight: 800;
    }
    .component-header {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 3rem;
        margin-top: 7rem;
    }
    .carousel {
        border-radius: 1rem;
        padding: 0rem;
        width: 80%;              
        max-width: 1000px;     
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        position: relative;
    }
    .carousel-inner {
        overflow: visible;
        padding-top: 1rem;
        padding-bottom: 1rem;

    }
    .carousel-control-prev, .carousel-control-next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 2.5rem;
        height: 2.5rem;
        border: 3px solid rgba(0, 0, 0, 0.7);
        background: transparent;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .carousel-control-prev { 
        left: -1rem; 
    }
    .carousel-control-next { 
        right: -1rem; 
    }
    .carousel-control-prev-icon, .carousel-control-next-icon {
        background-size: 1rem 1rem;
        filter: invert(1);
    }
    .carousel-control-prev:hover, .carousel-control-next:hover {
        border-color: rgba(255, 255, 255, 1);
    }

</style>