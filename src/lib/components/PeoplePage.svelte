
<script>
  import photo from '$lib/assets/Alex.jpg';
  export let name;
  export let title;
  export let description;
  export let email;
  export let github;
</script>

<div class= "page">
    <div class="profile">
        <img class="photo" src={photo} alt={name} />
        <div class="details">
            <h1>{name}</h1>
            <h3>{title}</h3>
            <p>{description}</p>
            <p class="socials">
                <a href={github} target="_blank">GitHub</a>
                 {email} 
            </p>
        </div>
    </div>

</div>

<style>
    .page {
        background-image: url('../../lib/assets/blue-white-background.jpg');
        background-size: auto;
        background-position: center;
        padding-top: 4rem;
        padding-bottom: 100%;
    }
  .profile {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    background-color: #eefbff;
    border-radius: 1rem;
  }

  .photo {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 50%;
  }

  .details {
    flex: 1;
  }

  .socials a {
    margin-right: 1rem;
    color: #0077cc;
    text-decoration:none;
  }

  .socials a:hover {
    text-decoration: underline;
  }
</style>