import { ContactsForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsContactsEmpty } from 'redux/selectors';
import {
  ContactListContainer,
  ContainerBook,
  TitleBook,
} from './PhoneBook.styled';

const PhoneBook = () => {
  const dispatch = useDispatch();
  const isContactsEmpty = useSelector(selectIsContactsEmpty);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerBook>
      <TitleBook>Phone book</TitleBook>
      <ContactsForm />
      <TitleBook>Contacts</TitleBook>
      <ContactListContainer>
        <Filter />
        {isContactsEmpty ? (
          <h2>Contactbook is empty, please add your first contact!</h2>
        ) : (
          <ContactList />
        )}
      </ContactListContainer>
    </ContainerBook>
  );
};

export default PhoneBook;
