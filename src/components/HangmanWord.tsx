type HangmanWordProps = {
  guessedLetters: string[];
  wordsToGuess: string;
};

const HangmanWord = ({ guessedLetters, wordsToGuess }: HangmanWordProps) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "0.25em",
          fontSize: "6rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          fontFamily: "monospace",
          color: "orangered",
        }}
      >
        {wordsToGuess.split("").map((letter, index) => (
          <span style={{ borderBottom: "0.1em solid orange" }} key={index}>
            <span
              style={{
                visibility: guessedLetters.includes(letter)
                  ? "visible"
                  : "hidden",
              }}
            >
              {letter}
            </span>
          </span>
        ))}
      </div>
    </>
  );
};

export default HangmanWord;
