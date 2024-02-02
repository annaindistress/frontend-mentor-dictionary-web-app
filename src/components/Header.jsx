import styles from "./Header.module.css";
import logoUrl from "../assets/logo.svg";
import ThemeToggle from "./ThemeToggle";
import FontSelect from "./FontSelect";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logoUrl} alt="Dictionary logo" width="28" height="32" />
      <FontSelect />
      <ThemeToggle />
    </header>
  );
}
