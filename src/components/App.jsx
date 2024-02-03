import Header from "./Header";
import Main from "./Main";
import Search from "./Search";

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Search />
        <div>Dictionary web app</div>
      </Main>
    </>
  );
}
