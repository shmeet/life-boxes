import React, { useState } from "react";
import "./styles/boxes.css";

export default function Boxes() {
  const [dob, setDob] = useState("");
  const [passedTimeInWeek, setPassedTimeInWeek] = useState(0);
  const ESTIMATED_LIFE_YEARS = 80;
  const ESTIMATED_LIFE_WEEKS = ESTIMATED_LIFE_YEARS * 52;

  const onDobChange = (ev) => {
    const dob = ev.target.value;
    setDob(() => dob);
    const difference = Date.now() - Date.parse(dob);
    const p = Math.round(difference / (1000 * 60 * 60 * 24 * 7));
    setPassedTimeInWeek(p);
  };

  const boxes = [];
  for (let i = 0; i < ESTIMATED_LIFE_WEEKS; i++) {
    boxes.push(passedTimeInWeek - i);
  }

  const Box = (props) => {
    let c = props.filled ? "box filled" : "box";
    return <span className={c}>&nbsp;</span>;
  };

  return (
    <>
      <div className="form-container">
        <label className={"dob-labe"} htmlFor="dob">
          Enter your date of birth:{" "}
        </label>
        <input
          type="date"
          name="dob"
          data-testid="dob"
          id="dob"
          onChange={onDobChange}
          value={dob}
          className="dob"
        />
      </div>
      <div className={"box-container"}>
        {boxes.map((element) => {
          let c = !!(element > 0);
          return <Box filled={c} />;
        })}
      </div>
    </>
  );
}
