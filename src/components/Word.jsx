import WordHeader from "./WordHeader";
import WordFooter from "./WordFooter";
import styles from "./Word.module.css";

export default function Word() {
  return (
    <section className={styles.section}>
      <WordHeader />
      <WordFooter />
    </section>
  );
}
