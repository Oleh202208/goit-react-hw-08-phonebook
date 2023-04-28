import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import PropTypes from 'prop-types';
import { selectAllContacts } from 'redux/selectors';
import { Button, Form, LabelForm, Wrapper } from './ContactForm.styled';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const handleChange = e => {
    const nameInput = e.currentTarget.name;
    const valueInput = e.currentTarget.value;

    switch (nameInput) {
      case 'name':
        setName(valueInput);
        break;
      case 'number':
        setNumber(valueInput);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    const newContact = contacts.find(
      ({ name }) =>
        name.toLocaleLowerCase() ===
        e.currentTarget.name.value.toLocaleLowerCase()
    );

    if (newContact) {
      return alert(`${e.currentTarget.name.value} is already in contacs.`);
    }

    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <LabelForm>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </LabelForm>
        <LabelForm>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </LabelForm>
        <Button type="submit">Add contacts</Button>
      </Wrapper>
    </Form>
  );
};

ContactsForm.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
