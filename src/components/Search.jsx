import { useState } from "react";
import styles from "./Search.module.css";

export default function Search() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function handleInput(event) {
    setValue(event.target.value);
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!value) {
      setError("Whoops, can't be empty…");
      return;
    }
  }

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for any word…"
        value={value}
        onChange={handleInput}
        className={error ? styles.inputError : ""}
      />
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
}
