import { changeFilter } from '../../contactsAPI/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../contactsAPI/selectors';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label>
      Find contacts by name
      <input
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </label>
  );
}
