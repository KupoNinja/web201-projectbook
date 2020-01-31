import { Contact } from "../models/Contact.js";
import { STORE } from "../store.js";

class ContactsService {
    createContact(contactData) {
        if (!STORE.state.activeProject.id) {
            throw new Error("Sorry, please select a project first.");
        }

        contactData.projectId = STORE.state.activeProject.id;
        //TODO Find Group 
        let contact = new Contact(contactData);
        STORE.state.contacts.push(contact);
    }
}

export const contactService = new ContactsService();