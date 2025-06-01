<script>
    import { goto } from '$app/navigation';

    const adminPassword = 'admin';
    let password = '';

    function checkPassword() {
        if (password === adminPassword) {
            localStorage.setItem('isAdmin','true');
            goto('/');
        }
        else {
            alert('Incorrect password. Please try again.');
        }
    }    
</script>

<div class="page">
    <div class="title-container">
        <h1 class="title">Admin</h1>
    </div>
    <div class="component-container">
        <div class="component-header">Enter password here:</div>
        <div class="inner-content">
            <form class="input-group mb-3 w-50" on:submit|preventDefault={checkPassword}>
            <input
                type="password"
                class="form-control"
                bind:value={password}
                placeholder="Password"
                aria-label="Password"
            />
            <button
                class="btn btn-outline-secondary"
                type="button"
                on:click={checkPassword}
                aria-label="Submit password"
            >
                <i class="bi bi-chevron-right"></i>
            </button>
            </form>
        </div>
    </div>
</div>

<style>
    .page {
        min-height: 100vh;
        background-image: url('../../lib/assets/blue-white-background.jpg');
        background-size: cover;
        background-position: center;
        padding-top: 3rem;
        padding-bottom: 3rem;
        text-align: center;
        width: 100%;
        background-color: var(--bs-body-bg-secondary);
    }
    .title-container {
        display: inline-block;
        background: #daf1fc;
        backdrop-filter: blur(6px);
        border-radius: 1rem;
        text-align: center;
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-left: 2rem;
        padding-right: 2rem;
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
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        padding-top: 3rem;
        padding-bottom: 3rem;
        box-shadow: inset 0 0 10px rgba(0, 100, 160, 0.05);
        width: 90%;              
        max-width: 1300px;     
        margin-left: auto;
        margin-right: auto;
    }
    .component-header {
        font-size: 2.5rem;
        font-weight: 700;
        color: #004d80;
        margin-bottom: 3rem;
        margin-top: 0rem;
    }
    .component-container .inner-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        max-width: 600px;
        margin-left: auto;       
        margin-right: auto;
        justify-content: center;
    }
</style>