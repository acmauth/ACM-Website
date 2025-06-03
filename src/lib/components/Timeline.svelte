<script>
    import VerticalCarousel from './VerticalCarousel.svelte';
    import CarouselThumbnailList from './CarouselThumbnailList.svelte';

    export let events = [];

    let selectedYear;
    let years = [];
    let scrollContainer;
    const gapSize = 4; // Gap size between timeline items

    let currentCarouselIndex = 0;

    $: {
        let yearsSet = new Set();
        for (const event of events) {
            const year = new Date(event.date).getFullYear();
            yearsSet.add(year);
        }
        years = Array.from(yearsSet).sort((a, b) => b - a);
    }

    $: if (years.length !== 0 && selectedYear === undefined) {
        selectedYear = years[0];
    }

    function selectYear(year) {
        selectedYear = year;
        currentCarouselIndex = 0;
        scrollToYear(year);
    }

    function jumpToLatestYear() {
        if (years.length > 0) {
            selectYear(years[0]);
            scrollToYear(years[0]);
        }
    }

    function jumpToEarliestYear() {
        if (years.length > 0) {
            selectYear(years[years.length - 1]);
            scrollToYear(years[years.length - 1]);
        }
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
        const item = scrollContainer.querySelector(`.timeline-item[data-year="${year}"]`);
        if (item) {
            item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    }

    $: filteredEvents = events.filter(e => new Date(e.date).getFullYear() === selectedYear);
</script>

<div class="timeline-container">
    <button class="btn btn-light me-1" on:click={jumpToLatestYear} aria-label="Jump to Latest Year">
        <i class="bi bi-chevron-double-left"></i>
    </button>
    <button class="btn btn-light me-4" on:click={scrollLeft} aria-label="Scroll Left">
        <i class="bi bi-chevron-left"></i>
    </button>

    <div class="timeline" bind:this={scrollContainer}>
        <div class="axis-container" style="width: {years.length * gapSize}rem; gap: {gapSize}rem;">
            <div class="axis"></div>
            {#each years as year, i}
                <button
                    class="timeline-item {selectedYear === year ? 'active' : ''}"
                    on:click={() => selectYear(year)}
                    data-year={year}
                >
                    <div class="dot"></div>
                    <div class="year {i % 2 === 0 ? 'above' : 'below'}">{year}</div>
                </button>
            {/each}
        </div>
    </div>

    <button class="btn btn-light ms-4" on:click={scrollRight} aria-label="Scroll Right">
        <i class="bi bi-chevron-right"></i>
    </button>
    <button class="btn btn-light ms-1" on:click={jumpToEarliestYear} aria-label="Jump to Earliest Year">
        <i class="bi bi-chevron-double-right"></i>
    </button>
</div>

{#if selectedYear}
    <h2 class="component-header">Events {selectedYear}</h2>

    {#if filteredEvents.length > 0}
        <div class="carousel-and-list-container">
            <VerticalCarousel events={filteredEvents} bind:currentIndex={currentCarouselIndex}/>
            
            <CarouselThumbnailList
                events={filteredEvents}
                currentIndex={currentCarouselIndex}
                listHeight="550px"
            />
        </div>
    {/if}
{/if}

<style>
    .timeline-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .timeline {
        height: 100px;
        overflow-x: auto;
        scroll-behavior: smooth;
        scrollbar-width: none;
        position: relative;
        max-width: 800px;
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
        transform: translateY(-50%);
    }
    .timeline-item {
        all: unset;
        position: relative;
        cursor: pointer;
        text-align: center;
    }
    .timeline-item .dot {
        position: absolute;
        top: 50%;
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
        bottom: 50%;
        margin-bottom: 15px;
    }
    .timeline-item .year.below {
        top: 50%;
        margin-top: 15px;
    }

    .component-header {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 700;
        color: #004d80;
        text-shadow: #daf1fc 2px 2px 4px;
        margin-top: 3rem;
        margin-bottom: 2rem;
    }

    /* ΝΕΟ: Χρήση Grid για τη διάταξη */
    .carousel-and-list-container {
        display: grid; /* Αλλαγή από flex σε grid */
        /* Ορίζουμε δύο στήλες: η πρώτη παίρνει τον εναπομείναντα χώρο, η δεύτερη είναι 250px */
        grid-template-columns: 1fr 250px; 
        gap: 30px; /* Απόσταση μεταξύ των στηλών */
        align-items: flex-start; /* Ευθυγραμμίζει τα στοιχεία στην κορυφή της γραμμής του grid */
        margin: 0 auto 50px auto;
        max-width: 1200px; /* Το συνολικό μέγιστο πλάτος του grid */
    }

    /* Προαιρετικά: Μπορούμε να προσθέσουμε ένα media query αν θέλουμε να αλλάζει διάταξη σε πολύ μικρές οθόνες
       (π.χ. σε μία στήλη), αλλά για τώρα το κρατάμε αυστηρά σε δύο στήλες όπως ζητήθηκε.
    @media (max-width: 992px) {
        .carousel-and-list-container {
            grid-template-columns: 1fr;
            justify-items: center; // Κεντράρει τα στοιχεία σε μία στήλη
        }
    }
    */
</style>