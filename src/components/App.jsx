import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addContacts = contactData => {
    const hasDuplicates = contacts.some(
      contact => contactData.name === contact.name
    );
    if (hasDuplicates) {
      alert(`${contactData.name} is already in contacts.`);
      return;
    }

    setContacts([...contacts, contactData]);
  };
  const handleFilterChange = event => {
    const value = event.target.value.toLowerCase();
    setFilter(value);
  };

  const handleDeleteProduct = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = filter
    ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
    : contacts;
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start-left',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <h2>Contacts</h2>
      <Filter handleInputChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        handleDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
};
