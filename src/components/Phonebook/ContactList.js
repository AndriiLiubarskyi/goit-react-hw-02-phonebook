import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => (
  <div>
    <h2>Contacts</h2>
    <ul>
      {contacts.map(({ id, name, number, }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
          
          <button onClick={() => onDeleteContact(id)}>Удалить</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;