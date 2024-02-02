import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useColorScheme() {
  const [storageValue, setStorageValue] = useLocalStorage(
    "auto",
    "color-theme"
  );
  const [value, setValue] = useState(function () {
    if (storageValue !== "auto") return storageValue;
    const isDark = window.matchMedia("(prefers-color-scheme: dark)");
    return isDark.matches ? "dark" : "light";
  });

  function handleColorSchemeChange(newValue) {
    setValue(newValue);
    setStorageValue(newValue);
  }

  useEffect(
    function () {
      if (storageValue !== "auto") return;

      function handleMediaChange({ matches }) {
        setValue(matches ? "dark" : "light");
      }

      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", handleMediaChange);

      return window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleMediaChange);
    },
    [storageValue]
  );

  return [value, handleColorSchemeChange];
}
