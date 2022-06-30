import PropTypes from "prop-types";
import s from "./contactItem.module.css";
function ContactItem(props) {
  const { items, onClick } = props;
  const elements = items.map(({ number, name, id }) => (
    <li className={s.item} key={id}>
      <p>{`${name}: -> ${number}`}</p>
      <button
        onClick={(e) => {
          onClick(id);
        }}
        className={s.btn}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
  return elements;
}
ContactItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactItem;
