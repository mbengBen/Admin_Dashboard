
<template>
    <!-- ========== Left Sidebar Start ========== -->
    <div class="left side-menu">
            <div class="slimscroll-menu" id="remove-scroll">
                <!--- Sidemenu -->
                <div id="sidebar-menu">
                    <!-- Left Menu Start -->
                    <ul class="metismenu" id="side-menu">
                        
                        <li>
                            <a href="./Home" class="waves-effect">
                                <i class="icon-accelerator"></i><span class="badge badge-success badge-pill float-right">9+</span> <span> Dashboard </span>
                            </a>
                        </li>
                        
                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><i class="fa fa-user" aria-hidden="true"></i><span> Users <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                            <ul class="submenu">

                                <li><a href="#"><i class="fa fa-list" aria-hidden="true"></i> <span>User list</span> </a></li>
                                <li><a href="#">Users role</a></li>
                                <li><a href="#">Users role</a></li>
                                                       
                            </ul>
                        </li>
                        
                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><i class="icon-pencil-ruler"></i> <span>Quizz Managment <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span> </a>
                            <ul class="submenu">
                                <li><a href="#"> Quizz list</a></li>
                                <li><a href="#">Quizz form</a></li>
                                <li><a href="#">Quizz form</a></li>
                                
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><i class="fa-duotone fa-cart-shopping"></i><span> Category managment <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span> </a>
                            <ul class="submenu">
                                <router-link to="/categorylist" class="side-link" >Category list</router-link>
                                <router-link to="/categoryform">Category form</router-link>
                                <!-- <li><a href="/categorylist">Category list</a></li> -->
                                <li><a href="/categoryform">Category form</a></li>
                                
                               
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="waves-effect"><i class="icon-todolist-check"></i><span> Exams <span class="badge badge-pill badge-danger float-right">8</span> </span></a>
                            <ul class="submenu">
                                <li><a href="#">Form Elements</a></li>
                                <li><a href="#">Form Validation</a></li>
                               
                            </ul>
                        </li>
                        
                        
                        
                    </ul>
                    
                </div>
                <!-- Sidebar -->
                <div class="clearfix"></div>
            </div>
            <!-- Sidebar -left -->
        </div>
</template>

<script>
export default {
  name: 'Sidebar',
  components: {
   
  }
}


</script>