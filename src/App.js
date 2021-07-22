import React, { Component } from 'react';
import ContactAddForm from './components/Phonebook/ContactAddForm';
import ContactList from './components/Phonebook/ContactList';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
  };
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {  
    const { contacts } = this.state;
    return (
     <div> 
        <ContactAddForm/>
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact}/>
      </div>
    )
  };
};

export default App;
