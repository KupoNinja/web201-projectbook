import { Project } from "./models/Project.js";
import { Group } from "./models/Group.js";

class Store {
  state = {
    projects: [
      new Project({ id: "8", name: "P1", description: "this is p1" }),
      new Project({ id: "dfjslksa", name: "P2", description: "this is p2" })
    ],
    activeProject: new Project({
      name: "starter",
      description: "If you click away from me I will never return"
    }),
    groups: [
      new Group({ name: "Developers", color: "#015668", projectId: "8" }),
      new Group({ name: "Product Owner", color: "#ffd369", projectId: "dfjslksa" })
    ],
    contacts: []
  };
}

export const STORE = new Store();
