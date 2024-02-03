import { useRef } from "react";
import { useDictionary } from "../context/DictionaryProvider";
import styles from "./WordHeader.module.css";

export default function WordHeader() {
  const audioRef = useRef();
  const { word } = useDictionary();

  const phonetic =
    word.phonetic ||
    word.phonetics.filter(
      (phonetic) => phonetic?.text && phonetic.text !== ""
    )[0].text ||
    "";

  const audio =
    word.phonetics.filter((phonetic) => phonetic.audio !== "")[0]?.audio || "";

  function handlePlay() {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }

  return (
    <header className={styles.header}>
      <h1>{word.word}</h1>
      {phonetic !== "" && <p>{phonetic}</p>}
      {audio !== "" && (
        <>
          <button className={styles.play} onClick={handlePlay}>
            Play
          </button>
          <audio className="sr-only" ref={audioRef}>
            <source src={audio} type="audio/mpeg" />
          </audio>
        </>
      )}
    </header>
  );
}
