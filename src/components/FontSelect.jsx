import { useEffect, useRef, useState } from "react";
import { useLocalStorage } from "../hook/useLocalStorage";
import { useFocusWithin } from "../hook/useFocusWithin";
import styles from "./FontSelect.module.css";

const fonts = ["sans serif", "serif", "mono"];

export default function FontSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef();

  const [font, setFont] = useLocalStorage("sans serif", "font-theme");
  const isFocus = useFocusWithin(listRef);

  useEffect(
    function () {
      const value = getComputedStyle(document.documentElement).getPropertyValue(
        `--font-${font.split(" ")[0]}`
      );
      document.body.style.setProperty("--font", value);
    },
    [font]
  );

  useEffect(
    function () {
      setIsOpen(isFocus);
    },
    [isFocus]
  );

  function handleClick(event, item) {
    setFont(item);
    event.target.blur();
    setIsOpen(false);
  }

  function handleEnter(event, item) {
    if (event.key === "Enter") {
      setFont(item);
      setIsOpen(false);
    }
  }

  return (
    <div className={styles.select}>
      <button type="button" onClick={() => setIsOpen((current) => !current)}>
        {font}
      </button>
      <ul className={isOpen ? styles.active : ""} ref={listRef}>
        {fonts.map((item) => (
          <li
            key={item}
            data-font={item}
            tabIndex={isOpen ? 0 : -1}
            onClick={(event) => handleClick(event, item)}
            onKeyDown={(event) => handleEnter(event, item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
