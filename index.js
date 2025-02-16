let allPetsLocal = [];
const loaderCategory=()=>{
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then(res=>res.json())
    .then(data=>displayCategory(data.categories));
    allPetsLocal = data.pets;
}

const displayCategory=(animals)=>{
    const categorys=document.getElementById("category")
    animals.forEach((animal)=>{
const{category,category_icon}=animal
        console.log(animal);
        const btnClick=document.createElement("div");
        btnClick.innerHTML=`<button  onclick="handleSearch('${category}')" id="btn-${category}" class="btn rounded-xl border-green-300 flex  category-btn"">
        <img class="w-10" src=${category_icon}/>
        <p class="">${category}</p>
        </button>`
        categorys.append(btnClick)
    })

}
const handleId=(id)=>{
    document.getElementById("round-loading").classList.add("hidden");
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    
    .then(res=>res.json())
    .then(data=>allPeddyDisplay(data.data))
 
   
    
}



// main card
const handleSearch = (category) => {

    document.getElementById("round-loading").classList.remove("hidden")

    setTimeout(function () {
        handleId(category)
    }, 2000)
}
const allPeddyLoader=async()=>{
    const url="https://openapi.programming-hero.com/api/peddy/pets"
    const res=await fetch(url);
    const data=await(res.json());
    allPeddyDisplay(data.pets);
     allPetsLocal = data.pets;
    
}

const allPeddyDisplay=(peddys)=>{
   
const mainContainer=document.getElementById("main-container");
mainContainer.innerHTML="";
if(peddys.length==0){
    mainContainer.classList.remove("grid");
    mainContainer.innerHTML =
        `
    <div class="text-center bg-gray-100 p-2 lg:p-10 rounded-lg">
   <div class="flex justify-center">
    <img class="" src="./images/error.webp"/>       
   </div>
   <h3 class="text-2xl font-semibold">No Information Available</h3>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
    its layout. The point of using Lorem Ipsum is that it has a.</p>
    </div>
    `
}
else{
    mainContainer.classList.add("grid")
}
    peddys.forEach((peddy)=>{
        console.log(peddy);
        const{image,pet_name,breed,date_of_birth,gender,price,petId

        }=peddy;
        const card=document.createElement("div");
        card.innerHTML=`<div class="card bg-base-100 shadow-xl">
  <figure class="p-3"
  >
    <img
      src=${image}
      alt="Shoes" />
  </figure>
  <div class="card-body p-3 "> 
    <h2 class="font-bold text-xl">
      ${pet_name}
      
    </h2>

    <div class="flex items-center gap-2  ">
    <img class="w-5 h-5" src="https://maxst.icons8.com/vue-static/icon/svg/detailed.svg" />
     <h2 class="font-bold><span class="">Breed:</span>${breed ? breed :""}</h2>
    
    </div>
    <div class="flex items-center gap-2 ">
    <img class="w-5 h-5" src="https://img.icons8.com/?size=80&id=cfHxgQpm0mfw&format=png" />
     <h2 class="font-bold><span class="">Birth:</span>${date_of_birth ? date_of_birth :"" }</h2>
    
    </div>
    <div class="flex items-center gap-2 ">
    <img class="w-5 h-5" src="https://img.icons8.com/?size=50&id=70834&format=png" />
     <h2><span class="">Gender:</span>${gender ? gender : ''}</h2>
    
    </div>
    
    <div class="flex items-center gap-2 ">
    <img class="w-5 h-5" src="https://img.icons8.com/?size=50&id=7163&format=png" />
     <h2><span class="">Price:</span>${price ? price : ''}</h2>

    
    </div>
    
    <div class="card-actions mt-5 justify-center items-center">
      <button onclick="loaderLike('${petId}')"  class=" btn px-3 py-1 border border-green-500 "><img class="w-7 h-7 " src="https://img.icons8.com/?size=50&id=24816&format=png" /></button>
       <button onclick="loaderAdopt('${petId}')" class="btn font-bold px-3 py-2 border border-green-500">Adopt</button>
      <button onclick="loaderDetails('${petId}')" id="btn-" class="btn font-bold px-3 py-2 border border-green-500">Details</button>
    </div>
  </div>
</div>`
        mainContainer.append(card)

    })

}
// main card end

// details

const loaderDetails=(petId)=>{
    fetch(` https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
    .then(res=>res.json())
    .then(data=>detailsDisplay(data.
        petData))
    

}
const detailsDisplay=(details)=>{
    const {image,pet_name,breed,date_of_birth,gender,price,petId,vaccinated_status,pet_details}=details
    const modelContainer=document.getElementById('model-container')
    modelContainer.innerHTML=`<img class="h-[180px] w-full object-cover" src=${image}/>


<div class="card-body p-3  "> 
    <h2 class="font-bold">
      ${pet_name}
      
    </h2>
<div class="grid grid-cols-2">
    <div class="flex items-center gap-2 ">
    <img class="w-5 h-5" src="https://maxst.icons8.com/vue-static/icon/svg/detailed.svg" />
     <h2><span class="">Breed:</span>${breed ? breed :""}</h2>
    
    </div>
    <div class="flex items-center gap-2 ">
    <img class="w-5 h-5" src="https://img.icons8.com/?size=80&id=cfHxgQpm0mfw&format=png" />
     <h2><span class="">Birth:</span>${date_of_birth  ?date_of_birth : ""}</h2>
    
    </div>
    <div class="flex items-center gap-2 ">
    <img class="w-5 h-5" src="https://img.icons8.com/?size=50&id=70834&format=png" />
     <h2><span class="">Gender:</span>${gender ? gender : ""}</h2>
    
    </div>
    
    <div class="flex items-center gap-2 ">
    <img class="w-5 h-5" src="https://img.icons8.com/?size=50&id=7163&format=png" />
     <h2><span class="">Price:</span>${price ? price :""}</h2>
    
    </div>
    <div class="flex items-center gap-2 ">
    <img class="w-5 h-5" src="https://img.icons8.com/?size=50&id=70834&format=png" />
     <h2><span class="">Gender:</span>${vaccinated_status?vaccinated_status: ""}</h2>
     
    
    </div>
   
    </div>
    <h2 class="font-bold text-gray-500">${pet_details}</h2>
     <div class="card-actions mt-5 justify-center items-center">
      <button onclick="loaderLike('${petId}')"  class=" btn px-3 py-1 border border-green-500 "><img class="w-7 h-7 " src="https://img.icons8.com/?size=50&id=24816&format=png" /></button>
       <button class="btn font-bold px-3 py-2 border border-green-500">Adopt</button>
      <button onclick="loaderDetails('${petId}')" id="btn-" class="btn font-bold px-3 py-2 border border-green-500">Details</button>
  </div>




</div>

   `
    // way 1
    // document.getElementById('headModel').click();
    // way2
    
    document.getElementById("customModel").showModal();
}


const loaderLike=(petId)=>{
    fetch(` https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
    .then(res=>res.json())
    .then(data=>likeDisplay(data.
        petData))
    }
    const likeDisplay=(likes)=>{
       
       const imgContainer=document.getElementById("img-container")
             
                const {image}=likes
                const container=document.createElement('div');
                container.innerHTML=`<div class="shadow-lg bg-white p-2 ">
                
                <img class="rounded-xl" src=${image}/>
                </div>`
                imgContainer.append(container)
             
       

    }
// Adopt show modal

const loaderAdopt=()=>{
    let counter = 10; // Set your starting value
    const countdownEl = document.getElementById("countdown");
  
    const modelContainer=document.getElementById("model-containers")
    modelContainer.innerHTML=`<div class=" " >
    <img class="w-10 ml-[220px]" class="text-center" src="https://img.icons8.com/?size=48&id=ZDURYTlMxCmV&format=png"/>
    
    <h2 class="text-2xl font-bold">congrates</h2>
    <p class="font-bold">Adoption process is start  For your pet</p>
    <span class="countdown font-mono text-6xl">
  <span id="countdown" style="--value:${counter};"">3</span>
</span>
    </div>`
   
    document.getElementById("customModels").showModal();
}


// shortPrice()

const shortPrice=()=>{
    (async () => {
        await allPeddyLoader();

        const sortedPets =[... allPetsLocal].sort((a, b) => b.price - a.price);
        allPeddyDisplay(sortedPets);

        console.log("After fetch:", allPetsLocal);
    })();
}  
 
allPeddyLoader()   
loaderCategory();