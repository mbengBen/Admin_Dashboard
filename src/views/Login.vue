<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
                <div>
                    <h3>Login Page</h3>
                    <hr />
                </div>
                <form @submit.prevent="submit">
                <div class="form-group">
                    <!-- Email input -->
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example1">Email address</label>
                        <input type="email" id="form2Example1" class="form-control" v-model="email" />
                        <div class = "error" v-if= "errors.email">
                          {{errors.email}}
                        </div>
                      </div>
                    
                      <!-- Password input -->
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Password</label>
                        <input type="password" id="form2Example2" class="form-control" v-model= "password"/>
                        <div class = "error" v-if= "errors.password">
                          {{errors.password}}
                        </div>
                      </div>
                    
                      <!-- 2 column grid layout for inline styling -->
                      <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                          <!-- Checkbox -->
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label class="form-check-label" for="form2Example31"> Remember me </label>
                          </div>
                        </div>
                    
                        <div class="col">
                          <!-- Simple link -->
                          <a href="#!">Forgot password?</a>
                        </div>
                      </div>
                    
                      <!-- Submit button -->
                      <button type="button" class="btn btn-primary btn-block mb-4" @click="submit">Log in</button>
                    
                      <!-- Register buttons -->
                      <div class="text-center">
                        <p>Not a member? <a href="Signup">SignUp</a></p>
                        <p>or sign up with:</p>
                        <button type="button" class="btn btn-link btn-floating mx-1">
                          <i class="fab fa-facebook-f"></i>
                        </button>
                    
                        <button type="button" class="btn btn-link btn-floating mx-1">
                          <i class="fab fa-google"></i>
                        </button>
                    
                        <button type="button" class="btn btn-link btn-floating mx-1">
                          <i class="fab fa-twitter"></i>
                        </button>
                    
                        <button type="button" class="btn btn-link btn-floating mx-1">
                          <i class="fab fa-github"></i>
                        </button>
                      </div>
                </div>
              </form>
            </div>
        </div>
    </div>
    
</template>

<script>
import { ENV } from "../api/env";
import { mapGetters } from 'vuex';
export default {
  name: 'login',
  computed: {
     ...mapGetters(["loggedIn"]),
  },
  data() {
    return {
      email: '',
      password: '',
      errors: [],
    };
  },
  methods: {
    onPressed() {
      let validations = new SignupValidations(
        this.email, 
        this.password,
        );


      this.errors = validations.checkValidations();
      if (this.errors.length) {
        return false;
      }
    },
    submit: function() {
        //  this.$v.$touch();

        // if(!this.$v.$invalid) {
                    let args = {
                        username: this.email,
                        password: this.password
                    };
                    this.isLoading = true;
                    this.$store.dispatch('loginHandler', { args }).then(() => {
                         setTimeout(() => {
                            this.isLoading = false;
                        }, 5000)
                    }).catch(error => {
                        this.isLoading = false;
                    });
       }
    //  }
  }
};
</script>

<style>
</style>