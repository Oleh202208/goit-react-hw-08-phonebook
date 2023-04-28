import PropTypes from 'prop-types';
import { ButtonDelete, Item } from './ContactItem.styled';

export const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <Item>
      <span>
        {name}: {number}
      </span>
      <ButtonDelete type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </ButtonDelete>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
