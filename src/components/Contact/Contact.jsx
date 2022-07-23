import PropTypes from 'prop-types';
// import { useDeleteContactMutation } from '../../contactsAPI/contactsAPI';
const Contact = ({ contact }) => {
  // const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const { name, number, id } = contact;
  return (
    <li>
      <p>
        {name} : {number}
      </p>
      <button
        type="button"
        // onClick={() => deleteContact(id)}
      >
        {/* {isDeleting ? 'Удаляем...' : 'Удалить'} */}
        Удалить
      </button>
    </li>
  );
};
export default Contact;
Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
