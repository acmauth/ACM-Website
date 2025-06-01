<script>
  export let show = false;
  export let onClose;

  let name = '';
  let date = '';
  let id = '';
  let location = '';
  let description = '';
  let image = '';

  async function save() {
    const newEvent = { name, date,id, location, description, image };

    const res = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEvent)
    });

    if (res.ok) {
      onClose();
      location.reload();
    } else {
      alert('Σφάλμα κατά την αποθήκευση');
    }
  }
</script>

{#if show}
  <div class="modal-backdrop">
    <div class="modal-content bg-white p-4 rounded shadow">
      <h3 class="mb-3">Προσθήκη Event</h3>

      <input class="form-control mb-2" placeholder="Όνομα" bind:value={name} />
      <input class="form-control mb-2" placeholder="Month day,year" bind:value={date} />
      <input class="form-control mb-2" placeholder="Τοποθεσία" bind:value={location} />
      <textarea class="form-control mb-2" placeholder="Περιγραφή" bind:value={description}></textarea>
      <input class="form-control mb-3" placeholder="URL εικόνας" bind:value={image} />
      <input class="form-control mb-2" placeholder="ID" bind:value={id} />

      <div class="d-flex justify-content-end gap-2">
        <button class="btn btn-secondary" on:click={onClose}>Ακύρωση</button>
        <button class="btn btn-success" on:click={save}>Αποθήκευση</button>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    top: 0; left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    width: 100%;
    max-width: 500px;
  }
</style>
