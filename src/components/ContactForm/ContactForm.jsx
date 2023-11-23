import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export const ContactForm = ({ addContacts }) => {
  const handleSubtit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
    const contactData = {
      name,
      number,
      id: nanoid(),
    };
    addContacts(contactData);
    event.currentTarget.reset();
  };
  /*  . */

  return (
    <div>
      <form onSubmit={handleSubtit} className={css.formWrap}>
        <p className={css.inputTitle}>Name</p>
        <label>
          <input
            type="text"
            name="name"
            pattern={
              "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            }
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <p className={css.inputTitle}>Number</p>
        <label>
          <input
            type="tel"
            name="number"
            pattern={
              '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}'
            }
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={css.btn} type="onSubmit">
          Add contact
        </button>
      </form>
    </div>
  );
};
