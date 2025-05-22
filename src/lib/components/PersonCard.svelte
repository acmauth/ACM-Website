<script>
  import photo from '../../lib/assets/Alex.jpg';
  export let slug = "";
  export let name = "";
  export let title = "";
  export let email = "";
  export let github = "";

</script>

<a class="card-link" href={`/members/${slug}`}>
  <div class="card">
    <img class="photo" src={photo} alt={name} />
    <div class="info">
      <h2>{name}</h2>
      <p class="title">{title}</p>
      <p class="email">{email}</p>
      <p class="email">{github}</p>

  </div>
</a>

<style>
  .card-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .card {
    display: flex;
    background: rgb(198, 239, 250);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin: 1rem 0;
    align-items: stretch;
    max-width: 600px;
    transition: transform 0.2s ease;
  }

  .card:hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  .photo {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 1rem;
  }

  .info {
    flex: 1;
  }

  .title {
    font-weight: bold;
    color: #555;
    margin: 0.25rem 0;
  }

  .email {
    display: inline-block;
    margin-top: 0.5rem;
    color: #5ec2fb;
    text-decoration: none;
  }

  .email:hover {
    text-decoration: underline;
  }
</style>
  