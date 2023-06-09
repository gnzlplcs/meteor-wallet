import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { useTracker } from "meteor/react-meteor-data";

export const ContactList = () => {
  const contacts = useTracker(() => {
    return ContactsCollection.find({}).fetch(); // Tracker
  });

  return (
    <div>
      <h3>Contact List</h3>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
