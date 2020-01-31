import { Group } from "../models/Group.js";
import { STORE } from "../store.js";

class GroupService {
    createGroup(groupData) {
        //TODO Connect/Validate ProjectId
        let group = new Group(groupData);
        STORE.state.groups.push(group);
    }
}

export const groupService = new GroupService();