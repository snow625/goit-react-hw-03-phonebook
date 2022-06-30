import PropTypes from "prop-types";
import ContactItem from "./ContactItem";
import s from "./contacts.module.css";
function Contacts({ items, onClick }) {
  return (
    <ul className={s.list}>
      <ContactItem items={items} onClick={onClick} />
    </ul>
  );
}
Contacts.defaultProps = {
  items: [],
};

Contacts.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
export default Contacts;
