class questions{
    constructor(id,description,categoryId,){
        this.id = id;
        this.description = description;
        this.categoryId = categoryId;
        this.image = null;
        this.explanation = null;
        this.choices= [];

    }

    addChoice(choice){
        this.choices.push(choice);
    }

    getChoices(){
        return this.choices;
    }

    setChoices(choices){
        this.choices = choices;
    }

    removeChoice(choice){ 
        this.choices.splice(this.choices.indexOf(choice));
    }

    map(quest){
        this.id = quest.id; 
        this.description = quest.description;
        this.image = quest.image; 
        this.choices = quest.choices;
        this.categoryId = quest.category.id;
    }
}