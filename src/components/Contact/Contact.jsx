import PropTypes from 'prop-types';
// import { useDeleteContactMutation } from '../../contactsAPI/contactsAPI';
import { useDeleteContactMutation } from '../../contactsAPI/contactsApi';
const Contact = ({ contact }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const { name, number, id } = contact;
  return (
    <li>
      <p>
        {name} : {number}
      </p>
      <button type="button" onClick={() => deleteContact(id)}>
        {isDeleting ? 'Wait...' : 'Delete'}
      </button>
    </li>
  );
};
export default Contact;
Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
