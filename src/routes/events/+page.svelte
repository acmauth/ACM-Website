<script>
   
    import EventCard from '$lib/components/EventCard.svelte';
    import Timeline from '$lib/components/Timeline.svelte';

    let events=[
     {name:"Event 1",date:"September 1,2007",image:"https://auth.acm.org/wp-content/uploads/2021/10/meet-ACM-Facebook-banner-1536x796.png",id:"event-1"}, 
     {name:"Event 2",date:"October 22,2007",image:"https://auth.acm.org/wp-content/uploads/2021/10/Campus-tour.png", id:"event-2"},
     {name:"Event 3",date:"October 29,2025",image:"https://auth.acm.org/wp-content/uploads/2021/03/git1.png",id:"event-3"},
     {name:"Event 4",date:"November 16,2007",image:"https://auth.acm.org/wp-content/uploads/2021/02/Linux-1.png"},
     {name:"Event 5",date:"November 24,2015",image:"https://auth.acm.org/wp-content/uploads/2022/05/Picture2.png"},
     {name:"Event 6",date:"December 3,2007",image:"https://auth.acm.org/wp-content/uploads/2020/12/76974937_1462395150575663_4064387411164004352_o.jpg"},
     {name:"Event 7",date:"December 19,2009",image:"https://auth.acm.org/wp-content/uploads/2020/12/29178681_977989562349560_3687398306025046016_o.jpg"}
    ];
    
    let upComingEvents=[{name:"Event 1",date:"September 1,2008",image:"https://auth.acm.org/wp-content/uploads/2021/10/meet-ACM-Facebook-banner-1536x796.png"},
    {name:"Event 2",date:"October 1,2008",image:"https://auth.acm.org/wp-content/uploads/2021/10/Campus-tour.png"},
    ]
        
</script>

<div class="page py-5 text-center bg-body-secondary w-100">

    <div class="title-container text-center py-5">
        <h1 class="title">Events</h1>
    </div>
    
    {#if upComingEvents.length!==0}
        <div class="component-container container py-5 col-12 col-md-8 col-lg-6  justify-content-center">
            <div class="inner-content">
                <h2 class="component-header mb-4 mt-1">Upcoming Events</h2>
                <div id="upComingEventsCarousel" class="carousel slide carousel-fade container " data-bs-ride="carousel" >
                    <div class="carousel-inner">
                        {#each upComingEvents as upComingEvent ,index}
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
                    <button class="carousel-control-prev" type="button" data-bs-target="#upComingEventsCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon  " aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#upComingEventsCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon text-dark" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    {/if}
    <div class="component-container container mt-4">
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
        background-image: url('../../lib/assets/blue-white-background.jpg');
        background-size: cover;
        background-position: center;
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
    .title-container {
        display: inline-block;
        background: #daf1fc;
        backdrop-filter: blur(6px);
        border-radius: 1rem;
        padding: 1.5rem 2rem;
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
        padding: 2rem;
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