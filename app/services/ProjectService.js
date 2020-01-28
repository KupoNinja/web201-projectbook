import { Project } from "../models/Project.js";
import { STORE } from "../store.js";

// The services job is to control data access
class ProjectService {
  createProject() {
    // TODO check all business rules before creating project
    // TODO CREATE the project
    let project = new Project("example project");
    // TODO add project to the store
    STORE.state.projects.push(project);
  }
}

export const projectService = new ProjectService();
