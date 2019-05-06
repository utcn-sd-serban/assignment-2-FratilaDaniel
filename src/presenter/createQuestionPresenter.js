import model from "../model/questionModel";
import userModel from "../model/userModel";

class CreateQuestionPresenter {

    onCreate() {
        if(userModel.state.loggedUser.id !== ""){
            var currentDate = new Date().toUTCString();
            model.addQuestion(
                userModel.state.loggedUser.id,
                model.state.newQuestion.title,
                model.state.newQuestion.text,
                currentDate.toString(),
                model.state.newQuestion.tags);
    
            model.changeNewQuestionProperty("title", "");
            model.changeNewQuestionProperty("text", "");
            model.changeNewQuestionProperty("tags", "");
    
            window.location.assign("#/user-account");
        }
    }

    onChange(property, value) {
        model.changeNewQuestionProperty(property, value);
    }

}

const createQuestionPresenter = new CreateQuestionPresenter();

export default createQuestionPresenter;