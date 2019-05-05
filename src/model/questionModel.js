import { EventEmitter } from "events";

class QuestionModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            questions: [{
                author: "John",
                title: "DummyTitle1",
                text: "DummyText1",
                date: "13/02/2013",
                tags: ["dummyTag1", "dummyTag2"]
            }, {
                author: "Jack",
                title: "DummyTitle2",
                text: "DummyText2",
                date: "22/08/2016",
                tags: ["dummyTag1", "dummyTag3"]
            }],
            newQuestion: {
                author: "",
                title: "",
                text: "",
                date: "",
                tags: []
            },
            filterTag:"",
            filteredQuestions: []
        };
    }

    addFilteredQuestion(foundQuestion){
        this.state = {
            ...this.state,
            filteredQuestions: this.state.filteredQuestions.concat([foundQuestion])
        };
        this.emit("change", this.state);
    }

    addQuestion(author, title, text, date, tags) {
        this.state = {
            ...this.state,
            questions: this.state.questions.concat([{
                author: author,
                title: title,
                text: text,
                date: date,
                tags: tags
            }]),    
        };
        this.emit("change", this.state);
    }

    changeNewQuestionProperty(property, value) {
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    changeFilterProperty(value){
        this.state = {
            ...this.state,
            filterTag: value
        };
        this.emit("change", this.state);
    }

    clearFilters(){
        this.state = {
            ...this.state,
            filterTag: "",
            filteredQuestions: []
        };
        this.emit("change", this.state);
    }
}




const questionModel = new QuestionModel();

export default questionModel;