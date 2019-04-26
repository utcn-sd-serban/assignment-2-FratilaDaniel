import userModel from "../model/userModel";

class LogUserPresenter {

    onLogIn(){
        var successfulLogIn = false;
        for(var iterator = 0; iterator < userModel.state.users.length; ++iterator)
        {
            debugger;
            if( userModel.state.users[iterator].id === userModel.state.loggedUser.id
                && userModel.state.users[iterator].pass === userModel.state.loggedUser.pass)
            {
                successfulLogIn = true;
            }
        }
        if(successfulLogIn)
        {
            window.location.assign("#/user-account");
        }
        else 
        {
            window.location.assign("#/user-failed");    
        }
    }

    onChange(property, value) {
        userModel.changeLoggedUserProperty(property, value);
    }
}

const logUserPresenter = new LogUserPresenter();

export default logUserPresenter;