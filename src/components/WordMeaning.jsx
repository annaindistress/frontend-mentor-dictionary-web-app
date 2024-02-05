import PropTypes from "prop-types";
import WordAdditional from "./WordAdditional";
import styles from "./WordMeaning.module.css";

export default function WordMeaning({ meaning }) {
  return (
    <div className={styles.section}>
      <h2>{meaning.partOfSpeech}</h2>
      <p className={styles.subtitle}>Meaning</p>
      <ul className={styles.meanings}>
        {meaning.definitions.map((definition) => (
          <li key={definition.definition}>
            <p>{definition.definition}</p>
            {definition.example && (
              <q>
                {definition.example.replace(/“/gi, "‘").replace(/[”]/gi, "’")}
              </q>
            )}
          </li>
        ))}
      </ul>
      {meaning.synonyms.length > 0 && (
        <WordAdditional title="synonyms" words={meaning.synonyms} />
      )}
      {meaning.antonyms.length > 0 && (
        <WordAdditional title="antonyms" words={meaning.antonyms} />
      )}
    </div>
  );
}

WordMeaning.propTypes = {
  meaning: PropTypes.object,
};
