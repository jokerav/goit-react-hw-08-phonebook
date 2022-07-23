import Contact from '../Contact/Contact';
// import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'contactsAPI/contactsApi';
// import { getFilter } from '../../contactsAPI/selectors';

const ContactList = () => {
  const { data: contacts = [], error, isLoading } = useGetContactsQuery();

  // const getVisibleContacts = () => {
  //   const normFilter = filter.toLowerCase();
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normFilter)
  //   );
  // };

  // const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {isLoading && <p>Грузим...</p>}
      {error && <p>Ошибочка...</p>}
      {contacts.length > 0 &&
        contacts.map(contact => <Contact key={contact.id} contact={contact} />)}
    </ul>
  );
};

export default ContactList;
