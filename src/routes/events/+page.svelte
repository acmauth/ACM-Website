<script>
   
    import EventCard from '$lib/components/EventCard.svelte';
    let events=[
     {name:"Event 1",date:"September 1,2007",image:"https://auth.acm.org/wp-content/uploads/2021/10/meet-ACM-Facebook-banner-1536x796.png"},
     {name:"Event 2",date:"October 22,2007",image:"https://auth.acm.org/wp-content/uploads/2021/10/Campus-tour.png"},
     {name:"Event 3",date:"October 29,2007",image:"https://auth.acm.org/wp-content/uploads/2021/03/git1.png"},
     {name:"Event 4",date:"November 16,2007",image:"https://auth.acm.org/wp-content/uploads/2021/02/Linux-1.png"},
     {name:"Event 5",date:"November 24,2007",image:"https://auth.acm.org/wp-content/uploads/2022/05/Picture2.png"},
     {name:"Event 6",date:"December 3,2007",image:"https://auth.acm.org/wp-content/uploads/2020/12/76974937_1462395150575663_4064387411164004352_o.jpg"},
     {name:"Event 7",date:"December 19,2007",image:"https://auth.acm.org/wp-content/uploads/2020/12/29178681_977989562349560_3687398306025046016_o.jpg"}
    ];
    let upComingEvents=[{name:"Event 1",date:"September 1,2008",image:"https://auth.acm.org/wp-content/uploads/2021/10/meet-ACM-Facebook-banner-1536x796.png"},
    {name:"Event 2",date:"October 1,2008",image:"https://auth.acm.org/wp-content/uploads/2021/10/Campus-tour.png"},
    ]
        
</script>

<div class=" py-5 text-center bg-body-secondary w-100" style="background-image: url('https://static.vecteezy.com/system/resources/thumbnails/008/617/161/small/abstract-gradient-pastel-blue-and-purple-background-neon-pastel-color-template-for-website-or-presentation-free-free-vector.jpg'); background-size: cover; background-position: center;">
    <div class="container-fluid text-white py-5" style="background: linear-gradient(to right,#ffffff,#7dd0f0); position:relative;">
        <h1 class="fw-bold">Events Calendar</h1>
    </div>
    
    <p class="lead">This is a demo</p>
    {#if upComingEvents.length!==0}
        <div class=" container py-5 col-12 col-md-8 col-lg-6  justify-content-center">
            <h2>Upcoming Events</h2>
            <div id="upComingEventsCarousel" class="carousel slide carousel-fade container " data-bs-ride="carousel" >
                <div class="carousel-inner">
                    {#each upComingEvents as upComingEvent ,index}
                    <div class="carousel-item {index===0? 'active': ''}">
                        <EventCard 
                        name={upComingEvent.name}
                        image={upComingEvent.image}
                        date={upComingEvent.date}
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
    {/if}

    <div class=" p-4 mt-5 border border-dark container" style="border-radius: 8px;">
            {#if events}   
                 <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {#each events as event }
                        <div class="col">
                            <EventCard 
                            name={event.name}
                            image={event.image}
                            date={event.date}
                            />
                        </div>     
                    {/each}
                </div>     
            {:else}
                    <p>No events to show</p>
            {/if}       
    </div>    
</div>