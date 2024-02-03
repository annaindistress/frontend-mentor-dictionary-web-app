import { useDictionary } from "../context/DictionaryProvider";
import Header from "./Header";
import Main from "./Main";
import Search from "./Search";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import Word from "./Word";

export default function App() {
  const { status } = useDictionary();

  return (
    <>
      <Header />
      <Main>
        <Search />
        {status === "ready" && <Word />}
        {status === "rejected" && <ErrorMessage />}
        {status === "loading" && <Loader />}
      </Main>
    </>
  );
}
