<template>
  <div class="row">
    <div class="col-md-12">
    <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
              <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">SignUp Page</h3>
                  <hr />
                  <form @submit.prevent="onSignUp()">
      
                    <div class="row">
                      <div class="col-md-6 mb-4">
      
                        <div class="form-outline">
                          <input type="text" id="firstName" class="form-control form-control-lg" />
                          <label class="form-label" for="firstName">First Name</label>
                        </div>
      
                      </div>
                      <div class="col-md-6 mb-4">
      
                        <div class="form-outline">
                          <input type="text" id="lastName" class="form-control form-control-lg" />
                          <label class="form-label" for="lastName">Last Name</label>
                        </div>
      
                      </div>
                    </div>
      
                    <div class="row">
                      <div class="col-md-6 mb-4 d-flex align-items-center">
                        <div class="form-outline datepicker w-100">
                          <input type="text" class="form-control form-control-lg" id="birthdayDate"
                           v-model.trim = "birthday" />
                           <div class = "error" v-if= "errors.birthday">
                            {{errors.birthday}}
                          </div>
                          <label for="birthdayDate" class="form-label">Birthday</label>
                        </div>
                      </div>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Password</label>
                        <input type="password" id="form2Example2" class="form-control" v-model= "password"/>
                        <div class = "error" v-if= "errors.password">
                          {{errors.password}}
                        </div>
                      </div>  
                    </div>
      
                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2">
      
                        <div class="form-outline">
                          <label class="form-label" for="emailAddress">Email</label>
                          <input type="email" id="emailAddress" class="form-control form-control-lg" 
                          v-model.trim = "email"/>
                          <div class = "error" v-if= "errors.email">
                            {{errors.email}}
                          </div>
                        </div>
      
                      </div>
                      <!-- <div class="col-md-6 mb-4 pb-2">
      
                        <div class="form-outline">
                          <input type="tel" id="phoneNumber" class="form-control form-control-lg" />
                          <label class="form-label" for="phoneNumber">Phone Number</label>
                        </div>
      
                      </div> -->
                    </div>  
                    <div class="mt-4 pt-2">
                      <input class="btn btn-primary btn-lg" type="submit" value="Signup" />
                    </div>
      
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      birthday: '',
      errors:[],
    };
  },
  methods: {
    onSignUp(){
      let validations = new SignupValidations(
        this.email, 
        this.password,
        );

        
      this.errors = validations.checkValidations();
      if (this.errors.length) {
        return false;
      }
    },
  }
}

</script>

<style>
</style>