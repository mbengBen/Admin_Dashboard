<template>
    <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold"> Edit Category</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima unde ea esse ipsam rerum, voluptas autem dolorem expedita nisi laboriosam cum fuga reprehenderit nulla. Placeat porro reiciendis soluta maxime?</p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <form >
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Category Name">
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="image URL">
          </div>
          <div class="mb-2">
            
            <!-- <label for="exampleFormControlTextarea1" class="form-label">Category description</label> -->
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Update">
          </div>
        </form>
        </div>
        <div class="col-md-4">
          <img src="https://cdn-icons-png.flaticon.com/512/194/194630.png " alt="" class="cat-img">
        </div>
    </div>
  </div>
  </template>
  
  
  <script>
    
    
    export default {
      name: 'EditCategoryEdit',
      
    }
  </script>

<style scoped>
  
</style>