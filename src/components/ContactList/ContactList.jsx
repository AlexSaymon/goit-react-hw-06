import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div>
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </div>
  );
};

export default ContactList;
