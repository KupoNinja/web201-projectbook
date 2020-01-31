import { generateId } from "../utils.js";

export class Project {
  constructor({ name, description, id = generateId() }) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}


