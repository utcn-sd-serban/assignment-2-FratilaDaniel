import model from "../model/questionModel";

class QuestionsListPresenter {
    onCreateQuestion() {
        window.location.assign("#/create-question");
    }


    onFilterByTag(){
        for(var iterator = 0; iterator < model.state.questions.length; ++iterator){
            var tagFound = false;
            for(var tagIterator = 0; tagIterator < model.state.questions[iterator].tags.length; ++tagIterator){
                if(model.state.questions[iterator].tags[tagIterator]  === model.state.filterTag){
                    tagFound = true;
                    model.state.filteredQuestions.concat(model.state.questions[iterator]);
                }
            }
            if(tagFound === true){
                model.addFilteredQuestion(model.state.questions[iterator]);       
            }
        }
        window.location.assign("#/filtered-questions");
    }

    onFilterByTitle(){
        for(var iterator = 0; iterator < model.state.questions.length; ++iterator){
            var tagFound = false;
            if(model.state.questions[iterator].title  === model.state.filterTag){
                tagFound = true;
                model.state.filteredQuestions.concat(model.state.questions[iterator]);
            }
            if(tagFound === true){
                model.addFilteredQuestion(model.state.questions[iterator]);       
            }
        }
        window.location.assign("#/filtered-questions");
    }


    onChangeFilter(property, value) {
        model.clearFilters();
        model.changeFilterProperty(value);
    }
}

const questionsListPresenter = new QuestionsListPresenter();

export default questionsListPresenter;