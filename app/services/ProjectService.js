import { Project } from "../models/Project.js";
import { STORE } from "../store.js";

// The services job is to control data access
class ProjectService {
  createProject(projectName) {
    if (STORE.state.projects.length >= 3) {
      throw new Error("You've exceeded your limit! Send us Money!!!");
    }

    let project = new Project(projectName);
    STORE.state.projects.push(project);
  }
}

export const projectService = new ProjectService();
