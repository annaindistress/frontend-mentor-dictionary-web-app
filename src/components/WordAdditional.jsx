import PropTypes from "prop-types";
import { useDictionary } from "../context/DictionaryProvider";
import styles from "./WordAdditional.module.css";

export default function WordAdditional({ title, words }) {
  const { handleQueryChange } = useDictionary();

  function handleClick(event, value) {
    event.preventDefault();
    handleQueryChange(value);
  }

  return (
    <div className={styles.section}>
      <p className={styles.title}>{title}</p>
      <ul>
        {words.map((word) => (
          <li key={word}>
            <a href="#" onClick={(event) => handleClick(event, word)}>
              {word}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

WordAdditional.propTypes = {
  title: PropTypes.string,
  words: PropTypes.arrayOf(PropTypes.string),
};
