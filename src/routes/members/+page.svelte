<script>
  import MemberCard from '$lib/components/PersonCard.svelte';

  let members = [
    {
        slug: "maria-papadopoulou",
      name: "Μαρία Παπαδοπούλου",
      title: "Web Developer",
      email: "maria@example.com",
      photo: '../../lib/assets/Alex.jpg',
      description: "Εξειδίκευση σε Svelte και UX Design"
    },
    {
        slug: "giorgos-konstantinou",
      name: "Γιώργος Κωνσταντίνου",
      title: "Project Manager",
      email: "george@example.com",
      photo: '../../lib/assets/Alex.jpg',
      description: "Οργανώνει και φέρνει εις πέρας έργα με επιτυχία"
    },
    {
      slug: "anna-stathatou",
      name: "Άννα Σταθάτου",
      title: "UI Designer",
      email: "anna@example.com",
      photo: '../../lib/assets/Alex.jpg',
      description: "Δημιουργεί μοναδικές εμπειρίες χρήστη"
    }
  ];
</script>


<div class="page">

    <div class="title-container py-5 center">
        <h1 class="title">Meet our Members</h1>
    </div>

        <div class="grid-container">
        {#each members as member}
            <MemberCard {...member} />            
        {/each}
       
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
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
  }
    .title-container {  
        display: flex;
        justify-content: center;
        align-items: center;
        background: hsl(186, 100%, 96%);
        backdrop-filter: blur(6px);
        border-radius: 1rem;
        padding: 2rem;
        margin: 0 auto;
        max-width: fit-content;
    }
    .title {
        font-size: 3rem;
        font-weight: 800;
        color: #004d80;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        margin: 0;
    }
    
</style>