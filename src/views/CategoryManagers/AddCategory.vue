<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold"> Add Category</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima unde ea esse ipsam rerum, voluptas autem dolorem expedita nisi laboriosam cum fuga reprehenderit nulla. Placeat porro reiciendis soluta maxime?</p>
      </div>
    </div>
  </div>
<pre>{{}}</pre>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <form @submit.prevent ="submitCreate()">
          <div class="mb-2">
            <input v-model="categorie.description" type="text" class="form-control" placeholder="Category Name">
          </div>
          <div class="mb-2">
            <input v-model="categorie.image" type="text" class="form-control" placeholder="image URL">
          </div>
          <div class="mb-2">
            
            <!-- <label for="exampleFormControlTextarea1" class="form-label">Category description</label> -->
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Create">
          </div>
        </form>
        </div>
        <div class="col-md-4">
          <img :src="categorie.image" alt="waiting for image" class="cat-img">
        </div>
    </div>
  </div>
</template>


<script>
import { categorieService } from '@/services/categorieService';

  
  
  export default {
    name: 'AddCategory',
    data: function(){
      return{
        categorie:{
        description:'',
        image:'',       
      }
      }
      
    },

    // created: async function(){
    //     try{
    //       let reponse = await categorieService.getAllCategories(),

    //     }catch{

    //     }
    // },
    methods:{
      submitCreate:  async function(){
        try {
          let response = await categorieService.createCategory(this.categorie);
          if(response){
            return this.$router.push('kkk/');
          }else{
            return this.$router.push('/categories/add');
          }
        } catch (error) {
            // console.log(error);
          
        }
      }
     
    }
  }
</script>

<style scoped>
  
  </style>