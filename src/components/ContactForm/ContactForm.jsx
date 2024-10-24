import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    dispatch(addContact({ id: Date.now().toString(), name, number }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" required />
      <input name="number" type="text" placeholder="Number" required />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
