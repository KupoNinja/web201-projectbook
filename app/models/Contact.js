import { generateId } from "../utils.js";

export class Contact {
    constructor({ name, groupId, projectId, id = generateId() }) {
        this.id = id;
        this.name = name;
        this.groupId = groupId;
        this.projectId = projectId
    }

    get ListTemplate() {
        return /*html*/ `
            <div class="contact">
                ${this.name}
            </div>
        `
    }
}