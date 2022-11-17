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
                  <form @submit.prevent="register">
      
                    <div class="row">
                      <div class="col-md-6 mb-4">
      
                        <div class="form-outline">
                          <label class="form-label" for="firstName">First Name</label>
                          <input name="firstname" type="text" id="firstName" class="form-control form-control-lg" v-model = "firstname"/>
                        </div>
      
                      </div>
                      <div class="col-md-6 mb-4">
      
                        <div class="form-outline">
                          <label class="form-label" for="lastName">Last Name</label>
                          <input name="lastname" type="text" id="lastName" class="form-control form-control-lg" v-model = "lastname"/>
                        </div>
      
                      </div>
                      <div class="col-md-6 mb-4">
      
                        <div class="form-outline">
                          <label class="form-label" for="phoneNumber">Phone</label>
                          <input name="phonenumber" type="tel" id="phoneNumber" class="form-control form-control-lg" v-model = "phonenumber"/>
                        </div>

                      </div>

                      <div class="col-md-6 mb-4 pb-2">
                        <div class="form-outline">
                          <label class="form-label" for="emailAddress">Email</label>
                          <input type="email" id="emailAddress" class="form-control form-control-lg" 
                          v-model = "email"/>
                          <div class = "error" v-if= "errors.email">
                            {{errors.email}}
                          </div>
                        </div>
                      </div>
                    </div>
      
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <label for="birthdayDate" class="form-label">Birthday</label>
                        <div class="form-outline w-100">
                          <input type="date" class="form-control form-control-lg" id="birthdayDate"
                           v-model = "birthday" />
                           <div class = "error" v-if= "errors.birthday">
                            {{errors.birthday}}
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline w-100">
                          <label for="Country" class="form-label">Country</label>
                          <input type="text" class="form-control form-control-lg" id="country"
                           v-model = "location.country" />
                           <div class = "error" v-if= "errors.country">
                            {{errors.country}}
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6 mb-4">
                        <div class="form-outline w-100">
                          <label for="Postalcode" class="form-label">Code Postal</label>
                          <input type="text" class="form-control form-control-lg" id="postalcode"
                           v-model = "location.postalcode" />
                           <div class = "error" v-if= "errors.postalcode">
                            {{errors.postalcode}}
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6 mb-4">
                        <div class="form-outline w-100">
                          <label for="city" class="form-label">Ville</label>
                          <input type="text" class="form-control form-control-lg" id="city"
                           v-model = "location.city" />
                           <div class = "error" v-if= "errors.city">
                            {{errors.city}}
                          </div>
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
import SignupValidations from "../services/SigninValidation"
export default {
  data () {
    return {
      // user: {
        firstname: '',
        lastname: '',
        phonenumber:'',
        email: '',
        password: '',
        birthday: '',
        location: {
          country:'',
          postalcode:'',
          city: ''
        // }
      },

      errors:[],
    };
  },
  methods: {
    onSignUp(){
      let validations = new SignupValidations(
        this.firstname,
        this.lastname,
        this.phonenumber,
        this.email, 
        this.password,
        this.birthday,
        this.location.country,
        this.location.postalcode,
        this.location.city,
        );

        // console.log(validations);

        
      this.errors = validations.checkValidations();
      if (this.errors.length) {
        return false;
      }
    },

    async register(){
      let args = {
        firstname:this.firstname,
        lastname:this.lastname,
        phonenumber:this.phonenumber,
        email:this.email, 
        password:this.password,
        birthday:this.birthday,
        country:this.location.country,
        postalcode:this.location.postalcode,
        city:this.location.city,
      }
      await this.$store.dispatch('register',args);
      await this.$router.push("/categories");
      // console.log(this.getMessage);
    }
  }
}

</script>

<style>
</style>