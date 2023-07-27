const HangmanWord = () => {
  const WORD = "TEST";
  const guessedLetters = ["T", "E"];

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
        }}
      >
        {WORD.split("").map((letter, index) => (
          <span style={{ borderBottom: "0.1em solid black" }} key={index}>
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
