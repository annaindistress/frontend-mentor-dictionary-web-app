import { useDictionary } from "../context/DictionaryProvider";
import styles from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  const { errorTitle, errorMessage } = useDictionary();

  return (
    <section className={styles.section}>
      <span className={styles.emoji}>😕</span>
      <h2>{errorTitle}</h2>
      <p>{errorMessage}</p>
    </section>
  );
}
