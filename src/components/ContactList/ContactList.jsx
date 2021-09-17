import React from 'react';
import PropTypes from 'prop-types';
import { Titel, Button, List, Item } from './ContactList.styled';
import { BsFillPersonFill, BsFillTrashFill } from 'react-icons/bs';

const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <>
      <Titel>Contacts</Titel>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id} id={id}>
            <BsFillPersonFill />
            <span>{name}:</span> <span>{number}</span>
            <Button type="button" onClick={() => onDeleteContacts(id)}>
              <BsFillTrashFill />
            </Button>
          </Item>
        ))}
      </List>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContacts: PropTypes.func.isRequired,
};
