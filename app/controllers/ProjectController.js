import { projectService } from "../services/ProjectService.js";
import { STORE } from "../store.js";

// The controllers job is to manage view
export class ProjectController {
  createProject() {
    projectService.createProject();
    console.log(STORE.state.projects);
  }
}
