import { groupService } from "../services/GroupServices.js";
import { STORE } from "../store.js";

export class GroupController {
    createGroup() {
        debugger;
        event.preventDefault();
        let form = event.target;
        try {
            groupService.createGroup({
                // @ts-ignore
                name: form.groupName.value,
                // @ts-ignore
                color: form.groupColor.value
            })
            console.log(STORE.state.groups)
        } catch (error) {
            alert(error);
        }
    }
}