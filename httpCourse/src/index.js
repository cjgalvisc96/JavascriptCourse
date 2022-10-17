// import {init} from "./js/jokes-page";
// import {init} from "./js/users-page";
import * as userCRUD from "./js/users-crud";

userCRUD.getUser(1).then(console.log);

userCRUD.createtUser({
    name: "Cris",
    job: "Senior"
}).then(console.log);

userCRUD.updatetUser(1, {
    name: "Cris1",
    job: "Senior"
}).then(console.log);

userCRUD.deletetUser(1).then(console.log);