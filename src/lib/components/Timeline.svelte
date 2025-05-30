<script>
    import { createEventDispatcher } from 'svelte';
    import EventCard from '$lib/components/EventCard.svelte';

    export let events = [];

    let selectedYear;
    let years = [];
    let scrollContainer;
    const gapSize = 4; // Gap size between timeline items

    // Create a descending set of the years that events occurred
    $: {
        let yearsSet = new Set();
        for (const event of events) {
            const year = new Date(event.date).getFullYear();
            yearsSet.add(year);
        }
        years = Array.from(yearsSet).sort((a, b) => b - a);
    }

    // Initialize selection to the last year if no year is selected 
    $: if (years.length != 0 && selectedYear === undefined) {
        selectedYear = years[0];
    }

    const dispatch = createEventDispatcher();
    function handleSelect(e) {
        dispatch('select', e.detail);
    }

    function selectYear(year) {
        selectedYear = year;
        scrollToYear(year);
    }

    function jumpToLatestYear() {
        selectYear(years[0]);
        scrollToYear(years[0]);
    }

    function jumpToEarliestYear() {
        selectYear(years[years.length - 1]);
        scrollToYear(years[years.length - 1]);
    }

    function scrollLeft() {
        if (scrollContainer) {
            scrollContainer.scrollBy({ left: -scrollContainer.clientWidth / 4, behavior: 'smooth' });
        } 
    }

    function scrollRight() {
        if (scrollContainer) {
            scrollContainer.scrollBy({ left: scrollContainer.clientWidth / 4, behavior: 'smooth' });
        }
    }

    function scrollToYear(year) {
        const idx = years.indexOf(year);
        const item = scrollContainer.querySelectorAll('.timeline-item')[idx];
        if (item) {
            item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    }
</script>

<!-- HTML -->

<!-- Timeline container -->
<div class="timeline-container">
    <!-- Scroll to latest year button -->
    <button class="btn btn-light me-1" on:click={jumpToLatestYear} aria-label="Jump to Latest Year">
        <i class="bi bi-chevron-double-left"></i>
    </button>
    <!-- Scroll left button -->
    <button class="btn btn-light me-4" on:click={scrollLeft} aria-label="Scroll Left">
        <i class="bi bi-chevron-left"></i>
    </button>

    <!-- Timeline -->
    <div class="timeline" bind:this={scrollContainer}>
        <div class="axis-container" style="width: {years.length * gapSize}rem; gap: {gapSize}rem;">
            <div class="axis"></div>
            {#each years as year, i}
                <button
                    class="timeline-item {selectedYear === year ? 'active' : ''}"
                    on:click={() => selectYear(year)}
                >
                    <div class="dot"></div>
                    <div class="year {i % 2 === 0 ? 'above' : 'below'}">{year}</div>
                </button>
            {/each}
        </div>
    </div>

    <!-- Scroll right button -->
    <button class="btn btn-light ms-4" on:click={scrollRight} aria-label="Scroll Right">
        <i class="bi bi-chevron-right"></i>
    </button>
    <!-- Scroll to earliest year -->
    <button class="btn btn-light ms-1" on:click={jumpToEarliestYear} aria-label="Jump to Earliest Year">
        <i class="bi bi-chevron-double-right"></i>
    </button>
</div>

{#if selectedYear}
    {#if events.filter(e => new Date(e.date).getFullYear() === selectedYear).length}
        <div class="events-grid row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {#each events as event}
                {#if new Date(event.date).getFullYear() === selectedYear}
                    <div class="cell">
                        <EventCard
                            name={event.name}
                            date={event.date}
                            image={event.image}
                            id={event.id} 
                            on:select={handleSelect}
                        />
                    </div>
                {/if}
            {/each}
        </div>
    {/if}
{/if}

<style>

    .timeline-container {
        display: flex;
        align-items: center;
    }
    .timeline {
        height: 100px;
        overflow-x: auto;
        scroll-behavior: smooth;
        scrollbar-width: none;
        position: relative;
    }
    .axis-container {
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        padding-inline: 2rem;
    }
    .axis {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 2px;
        background: #ccc;
    }
    .timeline-item {
        all: unset;
        position: relative;
        cursor: pointer;
        text-align: center;
    }
    .timeline-item .dot {
        position: absolute;
        transform: translateY(-50%);
        width: 12px;
        height: 12px;
        background: #0d6efd;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 0 0 2px #0d6efd;
    }
    .timeline-item.active .dot {
        background: red;
        box-shadow: 0 0 0 2px red;
    }
    .timeline-item .year {
        font-weight: bold;
        color: black;
        position: absolute;
        transform: translateX(-35%);
    }
    .timeline-item .year.above {
        bottom: 100%;
        margin-bottom: 8px;
    }
    .timeline-item .year.below {
        top: 100%;
        margin-top: 8px;
    }
    .events-grid {
        margin-top: 1.5rem;
    }

</style>