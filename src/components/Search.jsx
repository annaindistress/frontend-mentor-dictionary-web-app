import { useState } from "react";
import { useDictionary } from "../context/DictionaryProvider";
import styles from "./Search.module.css";

export default function Search() {
  const { query, handleSubmit: onSubmit } = useDictionary();
  const [value, setValue] = useState(query);
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

    onSubmit(value);
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
