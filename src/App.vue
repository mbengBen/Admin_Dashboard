<template>
  <TheNavigation/>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>  
  </div>
  <!-- Begin page -->
    <div id="wrapper">
 
        <!-- Top Bar Start -->
         <!-- <Topbar/>  -->
        <!-- Top Bar End -->
        <!-- ========== Left Sidebar Start ========== -->
       

        <!-- Left Sidebar End -->
          <!-- <Sidebar/>  -->
        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->
        <div class="content-page">
            <!-- Start content -->
        
            <!-- content -->
           
            </div>
       
        
        <!-- ============================================================== -->
        <!-- End Right content here -->
        <!-- ============================================================== -->
    </div>
    <!-- END wrapper -->
</template>

<script>
import Topbar from "./components/Layouts/Topbar.vue";
import Sidebar from "./components/Layouts/Sidebar.vue";
import Spinner from "./components/Spinner.vue";
import TheNavigation from "./components/TheNavigation.vue"

export default {
  name: "App",
  components: {
    Topbar,
    Sidebar,
    TheNavigation,
    Spinner
  }
};
</script>