import { projectService } from "../services/ProjectService.js";
import { STORE } from "../store.js";

// Private Parts
function drawProjects() {
  let template = "";
  STORE.state.projects.forEach(project => {
    template += project.ListTemplate;
  });

  document.getElementById("projects").innerHTML = template;
}

function drawProjectDetails() {
  let project = STORE.state.activeProject;
  if (!project.id) {
    return;
  }
  
  let template = ;
  document.getElementById("projectDetails").innerHTML = template;
}

// The controllers job is to manage view
export class ProjectController {
  constructor() {
    drawProjects();
    drawProjectDetails();
  }

  // Public Parts
  createProject() {
    event.preventDefault();
    let form = event.target;
    try {
      // @ts-ignore
      projectService.createProject({
        // @ts-ignore
        name: form.projectName.value,
        // @ts-ignore
        description: form.projectDescription.value
      });
      // @ts-ignore
      form.reset();
      drawProjects();
    } catch (error) {
      alert(error);
    }
  }

  viewProject(projectId) {
    try {
      projectService.setActiveProject(projectId);
      drawProjectDetails();
    } catch (error) {
      alert(error);
    }
  }
}
