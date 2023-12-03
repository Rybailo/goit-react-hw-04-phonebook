import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect, useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem('contacts');
    const parcedContacts =
      JSON.parse(stringifiedContacts) ?? this.state.contacts;
    return parcedContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  const addContacts = contactData => {
    const hasDuplicates = contacts.some(
      contact =>
        contact.name &&
        contactData.name.toLowerCase() === contact.name.toLowerCase()
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
