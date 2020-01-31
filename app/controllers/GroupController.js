import { groupService } from "../services/GroupServices.js";
import { STORE } from "../store.js";

export class GroupController {
    createGroup() {
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

    drawGroupForm() {
    let template = /*html*/ `
    <h2>Enter Group:</h2>
    <form onsubmit="app.groupController.createGroup()">
      <label for="groupName">Group Name:</label>
      <input name="groupName" type="text" required />
      <label for="groupColor">Choose Group Color:</label>
      <input name="groupColor" type="color" value="#015668" required />
      <button type="submit">Submit</button>
    </form>
    `;
    document.getElementById("groups").innerHTML = template;
}
}