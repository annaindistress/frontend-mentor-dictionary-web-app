import { PropTypes } from "prop-types";
import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const DictionaryContext = createContext();

const initialState = {
  status: "loading",
  query: "keyboard",
  errorTitle: "",
  errorMessage: "",
  word: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "rejected":
      return {
        ...state,
        status: "rejected",
        errorTitle: action.payload[0],
        errorMessage: action.payload[1],
      };
    case "query/updated":
      return { ...state, status: "loading", query: action.payload };
    case "word/loaded":
      return {
        ...state,
        status: "ready",
        errorTitle: "",
        errorMessage: "",
        word: action.payload,
      };
    default:
      throw new Error("Unknown action");
  }
}

function DictionaryProvider({ children }) {
  const [{ status, query, errorTitle, errorMessage, word }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(
    function () {
      const controller = new AbortController();

      async function getWord() {
        try {
          const res = await fetch(`${BASE_URL}${query}`, {
            signal: controller.signal,
          });
          const data = await res.json();
          if (!res.ok)
            throw new Error(data.title, {
              cause: `${data.message} ${data.resolution}`,
            });
          dispatch({ type: "word/loaded", payload: data[0] });
        } catch (error) {
          if (!controller.signal.aborted) {
            dispatch({
              type: "rejected",
              payload: [error.message, error.cause],
            });
          }
        }
      }

      getWord();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  function handleSubmit(value) {
    dispatch({
      type: "query/updated",
      payload: value,
    });
  }

  return (
    <DictionaryContext.Provider
      value={{ status, query, errorTitle, errorMessage, word, handleSubmit }}
    >
      {children}
    </DictionaryContext.Provider>
  );
}

DictionaryProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

function useDictionary() {
  const context = useContext(DictionaryContext);

  if (context === undefined)
    throw new Error("DictionaryContext was used outside of DictionaryProvider");

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { DictionaryProvider, useDictionary };
