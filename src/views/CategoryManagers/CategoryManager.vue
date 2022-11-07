<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Category Manager 
          <router-link to="/categories/add" class="btn btn-success btn-sm"> <i class="fa fa-plus-circle"></i> New</router-link>
        </p>
        <p class="fst-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam eaque nostrum nulla sapiente eius! Esse, minus ratione consectetur iste assumenda eos ipsa accusamus similique nostrum quos debitis quia modi tenetur?
        </p>
          
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                  <div class="col-md-6">
                  <input type="text" class="form-control" placeholder="Search Category"> 
                </div>
                <div class="col">
                  <input type="submit" class="btn btn-outline-dark" value="Search">
                </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  
    <div v-if="loading">
        <div class="cintainer">
          <div class="row">
            <div class="col">
              <Spinner/>
            </div>
          </div>
        </div>
    </div>

    <div v-if="!loading && errorMessage">
        <div class="cintainer">
          <div class="row">
            <div class="col">
              <p class="h3 text-danger fw-bold">{{errorMessage}}</p>
            </div>
          </div>
        </div>
    </div>

      <div class="container mt-3" v-if="categories.length > 0">
        <div class="row">
          <div class="col-md-6" v-for="cat of categories" :key="cat">
            <div class="card my-2 list-group-item-success shadow-lg">
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col-sm-4">
                      <img :src="cat.image" alt="" class="cat-img">
                  </div>
                  <div class="col-sm-7">
                    <ul class="list-group">
                      <li class="list-group-item"> <span class="fw fw-bold">{{cat.description}}</span></li>
                    </ul>
                  </div>
                  <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                      <router-link to="/categories/view/:categoryId" class="btn btn-warning my-1">
                        <i class="fa fa-eye"></i>
                      </router-link>
                      <router-link to="/categories/edit/:categoryId" class="btn btn-primary my-1">
                        <i class="fa fa-pen"></i>
                      </router-link>
                      <router-link to="/" class="btn btn-danger my-1">
                        <i class="fa fa-trash"></i>
                      </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    

   
  </template>
  
  
  <script>
    import { categorieService } from "@/services/categorieService";
// import axios from "axios";
    
    export default {
      name: 'CategoryManager',     
      data: function(){
        return {
          loading : false,
          categories: [],
          errorMessage: null
        }
      },

created : async function(){ 
try{ 
  this.loading = true;
  let response = await categorieService.getAllCategories();
  this.categories = response.data;
  this.loading = false;
} 
catch(error){
this.errorMessage = error;
this.loading = false;
}
},
methods:{
 
}
      // mounted(){
      //   axios
      //   .get('http://194.163.172.123:8080/api/categories')
      //   then.((reponse) => {

      //   }))

      // }
      
    }
  </script>

<style scoped>
  
</style>