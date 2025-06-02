<script>
    import EventsTicket from './EventsTicket.svelte';
    import { quintOut } from 'svelte/easing';

    export let events = [];
    export let currentIndex = 0; // ΤΩΡΑ ΕΚΤΙΘΕΤΑΙ ΩΣ BINDABLE PROP

    const transitionDuration = 600;

    function turn(node, { duration, direction }) {
        return {
            duration,
            easing: quintOut,
            css: t => {
                const rotation = (1 - t) * (direction === 'up' ? 90 : -90);
                const opacity = t;
                const scale = t * 0.1 + 0.9;
                return `
                    opacity: ${opacity};
                    transform: rotateX(${rotation}deg) scale(${scale});
                    transform-origin: center center;
                `;
            }
        };
    }

    function turnIn(node, { duration, direction }) {
        return {
            duration,
            easing: quintOut,
            css: t => {
                const rotation = (1 - t) * (direction === 'up' ? -90 : 90);
                const opacity = t;
                const scale = t * 0.1 + 0.9;
                return `
                    opacity: ${opacity};
                    transform: rotateX(${rotation}deg) scale(${scale});
                    transform-origin: center center;
                `;
            }
        };
    }

    function goToNext() {
        if (currentIndex < events.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
    }

    function goToPrev() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = events.length - 1;
        }
    }

    function handleKeyDown(event) {
        if (event.key === 'ArrowUp') {
            goToPrev();
        } else if (event.key === 'ArrowDown') {
            goToNext();
        }
    }
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="vertical-carousel-container">
    <div class="carousel-nav">
        <button class="btn btn-primary btn-lg mb-3" on:click={goToPrev} aria-label="Previous Event">
            <i class="bi bi-chevron-up"></i>
        </button>
    </div>

    <div class="carousel-viewport">
        {#key currentIndex}
            <div
                class="carousel-item-wrapper"
                in:turnIn={{ duration: transitionDuration, direction: 'down' }}
                out:turn={{ duration: transitionDuration, direction: 'down' }}
            >
                <EventsTicket
                    name={events[currentIndex].name}
                    date={events[currentIndex].date}
                    image={events[currentIndex].image}
                    id={events[currentIndex].id}
                    location={events[currentIndex].location}
                    description={events[currentIndex].description}
                />
            </div>
        {/key}
    </div>

    <div class="carousel-nav">
        <button class="btn btn-primary btn-lg mt-3" on:click={goToNext} aria-label="Next Event">
            <i class="bi bi-chevron-down"></i>
        </button>
    </div>
</div>

<style>
    .vertical-carousel-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 650px;
        /* margin: 50px auto;  Αυτό θα το διαχειριστεί ο γονέας τώρα */
        position: relative;
        overflow: hidden;
        border-radius: 15px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        padding: 20px 0;
        flex-shrink: 0; /* Δεν θα συρρικνώνεται */
        width: 100%; /* Επιτρέπει στο flex να το διαχειριστεί */
    }

    .carousel-viewport {
        position: relative;
        width: 100%;
        max-width: 450px;
        height: 550px;
        overflow: hidden;
        perspective: 1200px;
        border-radius: 12px;
        box-shadow: inset 0 0 15px rgba(0,0,0,0.05);
    }

    .carousel-item-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        backface-visibility: hidden;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        border-radius: 12px;
    }

    /* Στυλ για το EventsTicket μέσα στο carousel */
    .carousel-item-wrapper :global(.ticket-link) {
        margin: 0 !important;
        max-width: 100% !important;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: inherit;
    }

    .carousel-item-wrapper :global(.ticket) {
        flex-direction: column !important;
        height: 100%;
        width: 100%;
        margin: 0;
        box-shadow: none;
        border-radius: 0;
    }

    .carousel-item-wrapper :global(.ticket-image) {
        height: 250px !important;
        width: 100% !important;
        overflow: hidden;
        border-radius: 12px 12px 0 0;
    }
    .carousel-item-wrapper :global(.ticket-image img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .carousel-item-wrapper :global(.ticket-info) {
        flex-grow: 1 !important;
        padding: 1.2rem 1.8rem !important;
        width: 100% !important;
        background-color: #ffffff;
        border-radius: 0 0 12px 12px;
    }

    .carousel-item-wrapper :global(.ticket-info h3) {
        font-size: 1.6rem;
        margin-bottom: 0.6rem;
    }

    .carousel-item-wrapper :global(.ticket-info .text-muted) {
        font-size: 1rem;
    }

    .carousel-item-wrapper :global(.barcode-box) {
        margin-top: 1.2rem !important;
        padding-top: 0.6rem;
        border-top: 1px dashed #e0e0e0;
    }

    .carousel-item-wrapper :global(.barcode) {
        height: 40px !important;
    }

    .carousel-nav {
        z-index: 10;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .btn {
        background-color: #007bff;
        border-color: #007bff;
        color: white;
        padding: 12px 24px;
        font-size: 1.8rem;
        border-radius: 50%;
        transition: background-color 0.3s ease, transform 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .btn:hover {
        background-color: #0056b3;
        border-color: #0056b3;
        transform: translateY(-3px);
    }
    .btn:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
</style>