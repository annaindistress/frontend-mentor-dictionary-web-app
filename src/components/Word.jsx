import { useDictionary } from "../context/DictionaryProvider";
import WordHeader from "./WordHeader";
import WordMeaning from "./WordMeaning";
import WordFooter from "./WordFooter";
import styles from "./Word.module.css";

export default function Word() {
  const { word } = useDictionary();

  return (
    <section className={styles.section}>
      <WordHeader />
      {word.meanings.map((meaning) => (
        <WordMeaning key={meaning.partOfSpeech} meaning={meaning} />
      ))}
      <WordFooter />
    </section>
  );
}
