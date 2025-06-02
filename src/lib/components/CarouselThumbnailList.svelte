<script>
    export let events = [];
    export let currentIndex = 0;
    export let listHeight = '550px'; // Ύψος της λίστας, ίσο με το carousel viewport

    let scrollContainer;

    // Scroll to active item when currentIndex changes
    $: if (scrollContainer && events.length > 0) {
        const activeItem = scrollContainer.querySelector(`.thumbnail-item.active`);
        if (activeItem) {
            activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
</script>

<div class="thumbnail-list-container" style="height: {listHeight};">
    <div class="thumbnail-list-inner" bind:this={scrollContainer}>
        {#each events as event, i (event.id)}
            <div class="thumbnail-item {i === currentIndex ? 'active' : ''}">
                <div class="item-number">{i + 1}</div>
                <div class="item-info">
                    <h4>{event.name}</h4>
                    <p>{new Date(event.date).toLocaleDateString('el-GR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .thumbnail-list-container {
        width: 250px; /* Πλάτος της λίστας */
        height: var(--list-height); /* Θα οριστεί από το prop */
        overflow: hidden; /* Κρύβει το scrollbar του outer container */
        border-radius: 12px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        background-color: #f8f9fa; /* Ελαφρύ φόντο */
        display: flex;
        flex-direction: column;
        justify-content: center; /* Κεντράρει τη λίστα κάθετα μέσα στο κοντέινερ */
    }

    .thumbnail-list-inner {
        height: 100%; /* Εξασφαλίζει ότι το inner container γεμίζει το outer */
        overflow-y: auto; /* Εμφανίζει scrollbar αν χρειάζεται */
        padding: 15px;
        box-sizing: border-box;
        scrollbar-width: thin; /* Firefox */
        scrollbar-color: #007bff #f1f1f1; /* Firefox */
    }

    /* Webkit scrollbar styles */
    .thumbnail-list-inner::-webkit-scrollbar {
        width: 8px;
    }

    .thumbnail-list-inner::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
    }

    .thumbnail-list-inner::-webkit-scrollbar-thumb {
        background: #007bff;
        border-radius: 10px;
    }

    .thumbnail-list-inner::-webkit-scrollbar-thumb:hover {
        background: #0056b3;
    }


    .thumbnail-item {
        display: flex;
        align-items: center;
        padding: 10px 12px;
        margin-bottom: 8px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
        transition: background-color 0.2s ease, transform 0.1s ease;
        cursor: pointer; /* Για πιθανή μελλοντική λειτουργικότητα click */
        border: 1px solid #e9ecef; /* Ελαφρύ περίγραμμα */
    }

    .thumbnail-item:hover {
        background-color: #e2f0ff;
        transform: translateY(-2px);
    }

    .thumbnail-item.active {
        background-color: #007bff;
        color: white;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        transform: scale(1.02);
        border-color: #007bff;
    }
    .thumbnail-item.active .item-number {
        background-color: white;
        color: #007bff;
    }
    .thumbnail-item.active p {
        color: rgba(255, 255, 255, 0.8);
    }

    .item-number {
        width: 28px;
        height: 28px;
        min-width: 28px; /* Ensure fixed width */
        min-height: 28px; /* Ensure fixed height */
        background-color: #007bff;
        color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 0.9em;
        margin-right: 12px;
    }

    .item-info {
        flex-grow: 1;
        overflow: hidden; /* Κρύβει υπερχείλιση κειμένου */
        white-space: nowrap; /* Αποτρέπει αλλαγή γραμμής */
        text-overflow: ellipsis; /* Προσθέτει ... σε κείμενο που ξεχειλίζει */
    }

    .item-info h4 {
        margin: 0;
        font-size: 1.1em;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .item-info p {
        margin: 0;
        font-size: 0.8em;
        color: #6c757d;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>