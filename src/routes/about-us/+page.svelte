<script>
    import PersonCard from '$lib/components/PersonCard.svelte';
</script>
  
<section class="container py-5 text-center">
    <h1 class="display-4 mb-5">About Us</h1>

    <div class="d-flex flex-wrap justify-content-center gap-4">
        <PersonCard 
            name="John Doe" 
            image="https://media.istockphoto.com/id/1202957563/photo/smiling-afro-guy-portrait-on-orange-background.jpg?s=612x612&w=0&k=20&c=BL8EcOlKpApsp2VKgRi4rdLfFOZ2_1xRkKiLcTV2mzo="
            title="Founder & CEO"
        />
        <PersonCard 
            name="Jane Smith" 
            image="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
            title="Chief Engineer"
        />
    </div>
</section>
