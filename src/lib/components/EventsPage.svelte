<script>
    export let name="";
    export let image;
    export let date = "";
    export let description="";
    export let location="";
  </script>

  <div class="py-5 text-center bg-body-secondary w-100">
       <div class="container-fluid text-white py-5" style="background: linear-gradient(to right,#ffffff,#7dd0f0); position:relative;">
            <h1 class="fw-bold">{name}</h1>
            <p> Published on {date}</p>
       </div>

        <div class="container py-5 justify-content-center">
            <div class="image-link ratio ratio-16x9">
                <img loading="lazy" src={image} class="card-img-top rounded-top-4 img-fluid object-fit-cover" alt={name} />
            </div>
            <p>
               {description} 
            </p>
            <p class="small mt-3">
                Location:{location}
                Date:{date}
            </p>
        </div>
       
   
        
    


  </div>