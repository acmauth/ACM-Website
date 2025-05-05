<script>
    export let name="";
    export let image;
    export let date = "";
    export let description="";
    export let location="";
</script>

<div class="page py-5 text-center bg-body-secondary w-100">

    <div class="title-container text-center py-5">
        <h1 class="title fw-bold">{name}</h1>
        <p> Published on {date}</p>
    </div>

    <div class="component-container py-5 justify-content-center">
        <img loading="lazy" src={image} class="image" alt={name}/>
        <p>{description}</p>
        <p class="small mt-3">
            Location: {location} <br>
            Date: {date}
        </p>
    </div>

</div>

<style>
    .page {
    background-image: url('../assets/blue-white-background.jpg');
    background-size: cover;
    background-position: center;
    padding-top: 4rem;
    padding-bottom: 4rem;
    }
    .title-container {
        display: inline-block;
        background: #daf1fc;
        backdrop-filter: blur(6px);
        border-radius: 1rem;
        padding: 1.5rem 2rem;
    }

    .title {
        font-size: 3rem;
        font-weight: 800;
        color: #004d80;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        margin: 0;
    }
    .component-container {
        margin-top: 5rem;
        background: #daf1fc;
        border-radius: 1rem;
        padding: 2rem;
        box-shadow: inset 0 0 10px rgba(0, 100, 160, 0.05);
        width: 90%;              
        max-width: 1300px;     
        margin-left: auto;
        margin-right: auto;
    }
    .component-container img {
        border-radius: 1rem;
    }
    .image {
        width: 80%;
        border-radius: 1rem;
        margin-bottom: 2.5rem;
    }
</style>