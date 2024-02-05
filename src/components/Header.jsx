import { useDictionary } from "../context/DictionaryProvider";
import logoUrl from "../assets/logo.svg";
import ThemeToggle from "./ThemeToggle";
import FontSelect from "./FontSelect";
import styles from "./Header.module.css";

export default function Header() {
  const { initialQuery, handleQueryChange } = useDictionary();

  function handleClick(event) {
    event.preventDefault();
    handleQueryChange(initialQuery);
  }

  return (
    <header className={styles.header}>
      <a href="" onClick={(event) => handleClick(event)}>
        <img src={logoUrl} alt="Dictionary logo" width="28" height="32" />
      </a>
      <FontSelect />
      <ThemeToggle />
    </header>
  );
}
