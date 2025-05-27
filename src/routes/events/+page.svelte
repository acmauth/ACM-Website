<script>
   
    import EventCard from '$lib/components/EventCard.svelte';
    import Timeline from '$lib/components/Timeline.svelte';
    import {events} from '$lib/data/events.json';
    import {upcomingEvents} from '$lib/data/upcomingEvents.json';
    

</script>

<div class="page">

    <h1 class="title">Events</h1>

    {#if upcomingEvents.length!==0}
        <h2 class="component-header">Upcoming Events</h2>
        <div class="carousel slide carousel-fade container position-relative" id="upcomingEventsCarousel"  data-bs-ride="carousel" >
            <div class="carousel-inner">
                {#each upcomingEvents as upComingEvent ,index}
                <div class="carousel-item {index===0? 'active': ''}">
                    <EventCard 
                    name={upComingEvent.name}
                    image={upComingEvent.image}
                    date={upComingEvent.date}
                    id={upComingEvent.id}
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
    <h2 class="component-header">Past Events</h2>
    <div class="container py-4">
            <Timeline {events} />
    </div>
</div>

<style>
    .page {
        min-height: 100vh;
        background-image: url('../../lib/assets/blue-white-background.jpg');
        background-size: cover;
        background-position: center;
        padding-top: 3rem;
        padding-bottom: 3rem;
        text-align: center;
        width: 100%;
        background-color: var(--bs-body-bg-secondary);
    }
    .title {
        font-size: 3rem;
        font-weight: 800;
        color: #004d80;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        text-shadow: #daf1fc 2px 2px 4px;
        margin-bottom: 4rem;
    }
    .carousel {
        margin-top: 5rem;
        border-radius: 1rem;
        padding: 0rem;
        width: 80%;              
        max-width: 1300px;     
        margin-left: auto;
        margin-right: auto;
    }
    .component-header {
        font-size: 2.5rem;
        font-weight: 700;
        color: #004d80;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        text-shadow: #daf1fc 2px 2px 4px;
        margin: 3rem;
    }
    .carousel-inner {
        border-radius: 16px;
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
        left: -3rem; 
    }
    .carousel-control-next { 
        right: -3rem; 
    }
    .carousel-control-prev-icon, .carousel-control-next-icon {
        background-size: 1rem 1rem;
        filter: invert(1);
    }
    .carousel-control-prev:hover, .carousel-control-next:hover {
        border-color: rgba(255, 255, 255, 1);
    }
</style>