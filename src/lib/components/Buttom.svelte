<script>
    export let type ='floating-buttom';
    import joinUsIcon from '$lib/assets/join.png'
</script>
<button class={type} >
    <img src={joinUsIcon} alt="join" class="icon"/>
</button>

<style>
    .floating-buttom{
        position:fixed;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        z-index: 1000;  
        padding:5px 10px ;
        background-color: rgb(64, 150, 249);
        border-radius: 50%;
        border: none;
        cursor: pointer;
    }
    .icon{
        height: 40px;
        width: 40px
    }
</style>