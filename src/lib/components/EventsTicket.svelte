<script>
  export let name;
  export let location;
  // export let description;
  export let image;
  export let date;
  export let id;
  
</script>

<a href={`/events/${id}`} class="ticket-link">
<div class="ticket rounded overflow-hidden shadow-lg">
  <!-- Αριστερά: Εικόνα -->
  <div class="ticket-image">
    <img src={image} alt={name} />
  </div>

  <!-- Δεξιά: Πληροφορίες -->
  <div class="ticket-info p-4 bg-light d-flex flex-column justify-content-between">
    <div>
      <h3 class="fw-bold mb-2">{name}</h3>
      <div class="text-muted mb-1"><strong>Τοποθεσία:</strong> {location}</div>
      <div class="text-muted mb-1"><strong>Ημερομηνία:</strong> {date}</div>
      
    </div>

    <!-- Barcode -->
    <div class="barcode-box mt-2 text-center">
      <div class="barcode"></div>
    </div>
  </div>
</div>
</a>




<style>
  .ticket {
  max-width: 800px;
  margin: 2rem auto;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fff;
}

.ticket-image {
  width: 100%;
  overflow: hidden;
}

.ticket-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.ticket-info {
  width: 100%;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .ticket {
    flex-direction: row;
    align-items: stretch; /* Κάνει και την εικόνα και το info ίδιο ύψος */
  }

  .ticket-image {
    width: 70%;
    height: auto; /* άφησέ το να μεγαλώσει */
  }

  .ticket-image img {
    height: 100%; /* <-- το πιο σημαντικό */
    width: 100%;
    object-fit: cover; /* Καλύπτει πλήρως το διαθέσιμο ύψος */
  }

  .ticket-info {
    width: 30%;
  }
}

.barcode {
  width: 100%;
  height: 60px;
  background-image: repeating-linear-gradient(
    to right,
    #000,
    #000 2px,
    #fff 2px,
    #fff 4px
  );
  border-radius: 4px;
}

  

  .ticket-link {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0;
    display: block;
    color:inherit;
    transition: transform 0.3s ease;
    transform-origin: center center;
    text-decoration: none;
  }
  .ticket-link:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
</style>
