<script>
    import EventCard from '$lib/components/EventCard.svelte';
    export let events = [];
  
    let scrollContainer;
    let selectedYear;
  
    const startYear = 2007;
    const endYear = new Date().getFullYear(); // Current year
  
    // Create a descending list of years from endYear to startYear
    let years = [];
    $: {
        years = [];
        for (let y = endYear; y >= startYear; y--) {
            years.push(y);
        }
    }
  
    // Initialize selection to endYear if no year is selected 
    $: if (years.length != 0 && selectedYear === undefined) {
        selectedYear = endYear;
    }
  
    function selectYear(year) {
        selectedYear = year;
        const index = years.indexOf(year);
        const item = scrollContainer.querySelectorAll('.timeline-item')[index];

        const containerRect = scrollContainer.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const offset = itemRect.left - containerRect.left - (containerRect.width / 2) + (itemRect.width / 2);
        
        scrollContainer.scrollBy({ left: offset, behavior: 'smooth' });
    }
  
    function scrollLeft() {
        const item = scrollContainer.querySelector('.timeline-item');
        const itemWidth = item?.offsetWidth || 100;
        scrollContainer.scrollBy({ left: -2 * itemWidth, behavior: 'smooth' });
    }
  
    function scrollRight() {
        const item = scrollContainer.querySelector('.timeline-item');
        const itemWidth = item?.offsetWidth || 100;
        scrollContainer.scrollBy({ left: 2 * itemWidth, behavior: 'smooth' });
    }
  
    function jumpToLatestYear() {
        selectYear(endYear);
    }
  
    function jumpToEarliestYear() {
        selectYear(startYear);
    }
</script>
  
<!-- Timeline container -->
<div class="d-flex align-items-center">
    <!-- Scroll to latest year button -->
    <button type="button" class="btn btn-light me-2" on:click={jumpToLatestYear} aria-label="Jump to Latest Year">
        <i class="bi bi-chevron-double-left"></i>
    </button>
    <!-- Scroll left button -->
    <button type="button" class="btn btn-light me-3" on:click={scrollLeft} aria-label="Scroll Left">
        <i class="bi bi-chevron-left"></i>
    </button>
    
    <!-- Timeline -->
    <div class="timeline" bind:this={scrollContainer}>
        <ul class="d-flex list-unstyled mb-0">
            {#each years as year}
                <li class="timeline-item">
                    <button
                    class="btn btn-outline-primary"
                    class:active={year === selectedYear}
                    on:click={() => selectYear(year)}
                    >
                    {year}
                    </button>
                </li>
            {/each}
        </ul>
    </div>
  
    <!-- Scroll right button -->
    <button type="button" class="btn btn-light ms-3" on:click={scrollRight} aria-label="Scroll Right">
        <i class="bi bi-chevron-right"></i>
    </button>
    <!-- Scroll to earliest year -->
    <button type="button" class="btn btn-light ms-2" on:click={jumpToEarliestYear} aria-label="Jump to Earliest Year">
        <i class="bi bi-chevron-double-right"></i>
    </button>
</div>
  
<!-- Show events for selected year -->
{#if selectedYear}
    <div class="mt-4">
        <h3>Events in {selectedYear}</h3>
        {#if events.filter(e => new Date(e.date).getFullYear() === selectedYear).length}
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                {#each events as event}
                    {#if new Date(event.date).getFullYear() === selectedYear}
                        <div class="col">
                            <EventCard name={event.name} date={event.date} image={event.image} id={event.id} />
                        </div>
                    {/if}
                {/each}
            </div>
        {:else}
            <p>No events in {selectedYear}.</p>
        {/if}
    </div>
{/if}
  
<style>
    .timeline {
        display: flex;
        flex-grow: 1;
        overflow: auto;
        scrollbar-width: none;
    }
    .timeline-item {
        min-width: 50px;
        flex-shrink: 0;
        margin-right: 8px;
    }
    .timeline-item .btn {
        width: 100%;
    }
    button.active {
        background-color: #0d6efd;
        color: #fff;
        border-color: #0d6efd;
    }
</style>