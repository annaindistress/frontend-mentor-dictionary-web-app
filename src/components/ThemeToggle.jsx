import { useEffect } from "react";
import { useColorScheme } from "../hook/useColorScheme";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const [theme, handleColorSchemeChange] = useColorScheme();

  useEffect(
    function () {
      document.documentElement.classList = `${theme}-theme`;
    },
    [theme]
  );

  return (
    <div className={styles.toggle}>
      <input
        id="theme-toggle"
        className="sr-only"
        type="checkbox"
        checked={theme === "dark"}
        onChange={() =>
          handleColorSchemeChange(theme === "dark" ? "light" : "dark")
        }
      />
      <label className={styles.label} htmlFor="theme-toggle">
        Dark theme is {theme === "dark" ? "on" : "off"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 22 22"
          aria-hidden="true"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
      </label>
    </div>
  );
}
