class category {
    constructor(id,description, image) {
        this.id = id;
        this.description = description;
        this.image = image;
        this.questions= new Array();
    }

    addQuestion(question) {
        this.questions.push(question);

    }

    removeQuestion(question) { 
        this.questions.splice(this.questions.indexOf(question)); 
    }

    map(cat){
        this.id = cat.id; 
        this.description = cat.description;
        this.image = cat.image; 
        this.questions = cat.questions;
    }
}