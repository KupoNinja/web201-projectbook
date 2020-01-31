import { Group } from "../models/Group.js";
import { STORE } from "../store.js";

class GroupService {
    createGroup(groupData) {
        groupData.projectId = STORE.state.activeProject.id
        let exists = STORE.state.groups.find(g => g.name == groupData.name && g.projectId == groupData.projectId)
        if (exists) {
            throw new Error("Group already exists!");
        }
        let group = new Group(groupData);
        STORE.state.groups.push(group);
    }
}

export const groupService = new GroupService();