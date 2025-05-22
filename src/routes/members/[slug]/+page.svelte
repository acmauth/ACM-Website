<script>
    import { people } from '$lib/data/people';
    import { page } from '$app/stores';
    import PeoplePage from '$lib/components/PeoplePage.svelte';

    $:slug=$page.params.slug;
    $:person = people.find(person=>person.slug===slug);
    if(!person){
        console.error(`Person με ID ${slug} δεν βρέθηκε.`);
    }
</script>
{#if person}
    <PeoplePage
        photo={person.photo}
        name={person.name}
        title={person.title} 
        email={person.email}
        github={person.github}
        description={person.description}
    />
{:else}
    <div class="container mt-5">
        <h2>Το άτομο δεν βρεθηκε</h2>
    </div> 
{/if}        