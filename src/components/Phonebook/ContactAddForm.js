import React from 'react';

const ContactAddForm = () => (
  <div>
    <h2>Phonebook</h2>
    <p>Name</p>
    <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
    />
    <button type="button">Add contact</button>
  </div>
);

export default ContactAddForm;