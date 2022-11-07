<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold"> View Category</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima unde ea esse ipsam rerum, voluptas autem dolorem expedita nisi laboriosam cum fuga reprehenderit nulla. Placeat porro reiciendis soluta maxime?</p>
      </div>
    </div>
  </div>
 <div class="container ">
  <div class="row align-items-center">
    <div class="col-md-4">
      <img src="https://cdn-icons-png.flaticon.com/512/194/194630.png" alt="" class="cat-img-big">
    </div>
    <div class="col-md-6">
      <ul class="list-group">
                      <li class="list-group-item">Id: <span class="fw fw-bold">Id</span></li>
                      <li class="list-group-item">Name: <span class="fw fw-bold">Name</span></li>
                      <li class="list-group-item">Desc: <span class="fw fw-bold">Desc</span></li>
                    </ul>
    </div>
    <div class="row mt-4">
      <div class="col">
        <router-link to="/" class="btn btn-success">
         <i class="fa fa-arrow-alt-circle-left"></i> Back
        </router-link>
      </div>
    </div>
  </div>
 </div>


  </template>
  
  
  <script>
    
    
    export default {
      name: 'CategoryView',
      
    }
  </script>

  <style scoped>
  
  </style>