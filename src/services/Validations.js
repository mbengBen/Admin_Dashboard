export default class Validations {
    static checkEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email,)) {
            return true;

        }
        return false;
    }


    static checkBirthdate(birthday) {
        if (/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(birthday)) {

            alert("invalid date of birth should be in yyyy-mm-dd");
            return false;
        }
        else {
            alert("valid date");
            return true;
        }
    }


    static minLength(name, minLenght) {
        if (name.length < minLenght) {
            return false;
        }
        return true;
    }
}