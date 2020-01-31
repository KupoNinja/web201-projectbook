import { ProjectController } from "./controllers/ProjectController.js";
import { GroupController } from "./controllers/GroupController.js";
import { ContactsController } from "./controllers/ContactsController.js";

// Entry Point

class App {
  // Container to hold all the things
  projectController = new ProjectController();
  groupController = new GroupController;
  contactsController = new ContactsController();
}

const APP = new App();
window["app"] = APP;
