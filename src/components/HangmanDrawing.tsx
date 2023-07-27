// CONSTANTS -
const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid orange",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      position: "absolute",
      top: "120px",
      right: 0,
      background: "orange",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      top: "150px",
      right: "-100px",
      background: "orange",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      top: "150px",
      right: "10px",
      background: "orange",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      top: "210px",
      right: "-90px",
      background: "orange",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      top: "210px",
      right: 0,
      background: "orange",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDawingProp = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDawingProp) => {
  return (
    <>
      <div style={{ position: "relative" }}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div
          style={{
            height: "50px",
            width: "10px",
            background: "orangered",
            position: "absolute",
            top: 0,
            right: 0,
          }}
        />

        <div
          style={{
            height: "10px",
            width: "200px",
            background: "orangered",
            marginLeft: "120px",
          }}
        />

        <div
          style={{
            height: "400px",
            width: "10px",
            background: "orangered",
            marginLeft: "120px",
          }}
        />

        <div
          style={{ height: "10px", width: "250px", background: "orangered" }}
        />
      </div>
    </>
  );
};

export default HangmanDrawing;
