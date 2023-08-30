import React from 'react';
import PropTypes from 'prop-types';
import { ContactInfo, ContactItemContainer, ContactName, ContactNumber, DeleteButton } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  const handleDelete = () => {
    onDeleteContact(id);
  };

  return (
    <ContactItemContainer>
      <ContactInfo>
        <ContactName>{name}</ContactName>
        <ContactNumber>{number}</ContactNumber>
      </ContactInfo>
      <DeleteButton onClick={handleDelete}>Видалити</DeleteButton>
    </ContactItemContainer>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;



