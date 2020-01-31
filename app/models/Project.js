import { generateId } from "../utils.js";

export class Project {
  constructor({ name, description, id = generateId() }) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  get ListTemplate() {
    return /*html*/ `
      <div class="project">
        <div onclick="app.projectController.viewProject('${this.id}')" class="project-name">
          ${this.name}
        </div>
      </div>
      `
  }

  get DetailsTemplate() {
    return /*html*/ `
    <h1 class="project-title">${this.name}</h1>
    <p class="project-description">${this.description}</p>
    <div id="groups"></div>
    <button onclick="app.groupController.drawGroupForm()">Add a Group</button>
    `
  }
}


