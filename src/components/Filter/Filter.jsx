import PropTypes from "prop-types";
import s from "./filter.module.css";
const Filter = ({ onChange }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        onChange={onChange}
        className={s.input}
        placeholder="enter name"
        type="text"
        name="filter"
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
