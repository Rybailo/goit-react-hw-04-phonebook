import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDeleteProduct }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}
            {contact.number}
            <button
              className={css.btn}
              onClick={() => handleDeleteProduct(contact.id)}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
