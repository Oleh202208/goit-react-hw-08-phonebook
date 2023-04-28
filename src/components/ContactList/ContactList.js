import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useContacts } from 'hooks/useContacts';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactItem
          id={id}
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => dispatch(deleteContact(id))}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
