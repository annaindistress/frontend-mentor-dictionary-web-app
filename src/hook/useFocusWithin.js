import { useEffect, useState } from "react";

export function useFocusWithin(ref) {
  const [isFocus, setIsFocus] = useState(null);

  useEffect(
    function () {
      function onClick() {
        if (ref && ref.current) {
          setIsFocus(ref.current.contains(document.activeElement));
        }
      }

      function onTabPress(event) {
        if (ref && ref.current && event.key === "Tab") {
          setIsFocus(ref.current.contains(document.activeElement));
        }
      }

      if (ref && ref.current) {
        document.addEventListener("click", onClick);
        document.addEventListener("keyup", onTabPress);
      }

      return () => {
        document.removeEventListener("click", onClick);
        document.removeEventListener("keyup", onTabPress);
      };
    },
    [ref]
  );

  return isFocus;
}
