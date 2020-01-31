import { contactService } from "../services/ContactsService.js";
import { STORE } from "../store.js";

function drawContacts() {
    let template = "";
    STORE.state.contacts.forEach(c => {
        if (c.projectId != STORE.state.activeProject.id) {
            return;
        }
        template += c.ListTemplate
    });

    document.getElementById("contactList").innerHTML = template;
}

export class ContactsController {
    createContact() {
        try {
            event.preventDefault();
            let form = event.target;
            let contact = {
                // @ts-ignore
                name: form.name.value
            };
            contactService.createContact(contact);
            drawContacts();
            // @ts-ignore
            form.reset();
        } catch (e) {
            alert(e);
        }
    }
}