import { projectService } from "../services/ProjectService.js";
import { STORE } from "../store.js";

// Private Parts
function drawProjects() {
  let template = "";
  STORE.state.projects.forEach(project => {
    template += /*html*/ `
      <div class="project">
        <div class="project-name">
          ${project.name}
        </div>
      </div>
      `;
  });

  document.getElementById("projects").innerHTML = template;
}

// The controllers job is to manage view
export class ProjectController {
  // Public Parts
  createProject() {
    event.preventDefault();
    let form = event.target;
    try {
      // @ts-ignore
      projectService.createProject(form.projectName.value);
      // @ts-ignore
      form.reset();
      drawProjects();
    } catch (error) {
      alert(error);
    }
  }
}
