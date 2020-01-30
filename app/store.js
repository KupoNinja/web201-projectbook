import { Project } from "./models/Project.js";

class Store {
  state = {
    projects: [
      new Project({ id: "8", name: "P1", description: "this is p1" }),
      new Project({ id: "dfjslksa", name: "P2", description: "this is p2" })
    ],
    activeProject: {}
  };
}

export const STORE = new Store();
