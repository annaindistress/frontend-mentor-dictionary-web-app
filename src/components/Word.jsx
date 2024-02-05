import { useDictionary } from "../context/DictionaryProvider";
import WordHeader from "./WordHeader";
import WordMeaning from "./WordMeaning";
import WordFooter from "./WordFooter";

export default function Word() {
  const { word } = useDictionary();

  return (
    <section>
      <WordHeader />
      {word.meanings.map((meaning) => (
        <WordMeaning key={meaning.partOfSpeech} meaning={meaning} />
      ))}
      <WordFooter />
    </section>
  );
}
