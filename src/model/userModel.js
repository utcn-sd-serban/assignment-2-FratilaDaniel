import { EventEmitter } from "events";

class UserModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            users: [{
                id: "user1",
                pass: "1111"
            }, {
                id: "user2",
                pass: "1112"    
            }],
            loggedUser: {
                id: "",
                pass: ""    
            }
        };
    }

    changeLoggedUserProperty(property, value) {
        this.state = {
            ...this.state,
            loggedUser: {
                ...this.state.loggedUser,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }
}

const userModel = new UserModel();

export default userModel;