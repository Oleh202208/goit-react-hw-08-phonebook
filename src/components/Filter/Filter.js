import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { useFilter } from 'hooks/useFilter';
import { LabelFiltr } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const inputValue = useFilter();

  const handleFilter = e => dispatch(filterContacts(e.currentTarget.value));

  return (
    <LabelFiltr>
      Find contacts by name
      <input type="text" value={inputValue} onChange={handleFilter}></input>
    </LabelFiltr>
  );
};
