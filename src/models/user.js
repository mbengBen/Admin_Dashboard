class user {
    constructor(id,firstName, lastName, email, password,birthday) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.birthday = this.birthday;
    
    }

    addUser(user) {
        this.users.push(user);

    }

    removeUser(users) { 
        this.users.splice(this.users.indexOf(users)); 
    }

    map(users){
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
        this.birthday = user.birthday;
    }
}