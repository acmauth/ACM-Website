<script>
   
    import EventCard from '$lib/components/EventCard.svelte';
    import Timeline from '$lib/components/Timeline.svelte';
    import {events} from '$lib/data/events.json';
    import {upcomingEvents} from '$lib/data/upcomingEvents.json';
    

</script>

<div class="page">

    <div class="title-container">
        <h1 class="title">Events</h1>
    </div>
    
    {#if upcomingEvents.length!==0}
        <div class="component-container">
            <div class="inner-content">
                <h2 class="component-header">Upcoming Events</h2>
                <div id="upcomingEventsCarousel" class="carousel slide carousel-fade container " data-bs-ride="carousel" >
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
            </div>
        </div>
    {/if}
    <div class="component-container">
            <h2 class="component-header">Past Events</h2>
            {#if events}   
                <div class="container py-4">
                    <Timeline {events} />
                </div>
            {:else}
                    <p>No events to show</p>
            {/if}     
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
    .title-container {
        display: inline-block;
        background: #daf1fc;
        backdrop-filter: blur(6px);
        border-radius: 1rem;
        text-align: center;
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }
    .title {
        font-size: 3rem;
        font-weight: 800;
        color: #004d80;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        margin: 0;
    }
    .component-container {
        margin-top: 5rem;
        background: #daf1fc;
        border-radius: 1rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        padding-top: 3rem;
        padding-bottom: 3rem;
        box-shadow: inset 0 0 10px rgba(0, 100, 160, 0.05);
        width: 90%;              
        max-width: 1300px;     
        margin-left: auto;
        margin-right: auto;
    }
    .component-header {
        font-size: 2.5rem;
        font-weight: 700;
        color: #004d80;
        margin-bottom: 3rem;
        margin-top: 0rem;
    }
    .component-container .inner-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 600px;
        margin-left: auto;       
        margin-right: auto;
    }
    .carousel-inner {
        border-radius: 16px;
    }
</style>