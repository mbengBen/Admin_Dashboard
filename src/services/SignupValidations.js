export default class SignupValidations {
    constructor(email, password, birthday) {
        this.password = password;
        this.email = email;
        this.birthday = birthday;

    }
    //email Validation 
    checkValidation() {
        let errors = [];

        if (!Validations.checkEmail(this.email)) {
            errors['email'] = 'Invalid Email';
        }

        //password Validation
        if (!Validations.minLength(this.password,8)){
            errors['password'] = 'Invalid Password, Password should be of 8 characters minimum';
        }
        //birthdayValidation

        if (!Validations.checkBirthdate(this.birthday)){
            errors['birthday'] = 'Invalid date of birth should  be in yyyy-mm-dd';
        }

        return errors;
    }
    

}
