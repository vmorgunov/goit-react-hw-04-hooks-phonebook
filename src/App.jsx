import React, { useState } from 'react';
import ContactForm from 'components/ContactForm';
import shortid from 'shortid';
import ContactList from 'components/ContactList';
import Section from 'components/Section';
import Filter from 'components/Filter';
import useLocalStorage from 'hooks/useLocalStorage';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts(prevState => [contact, ...prevState]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return (
    <>
      <Section titel="Phonebook">
        <ContactForm onSubmit={addContact} contacts={contacts} />
        <Filter value={filter} onChange={handleFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContacts={deleteContact}
        />
      </Section>
    </>
  );
}
