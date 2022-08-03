import React, { useState } from "react";
import "../App.css";
import Type from "./PayType";

export default function Payment(props) {
  const [payTypesArrey, setPayTypesArrey] = useState([]);
  const addPayMove = () => {
    setPayTypesArrey((prev) =>
      prev?.length
        ? [
            ...prev,
            <Type
              setPayTypesArrey={setPayTypesArrey}
              payTypesArrey={payTypesArrey}
            />,
          ]
        : [
            <Type
              setPayTypesArrey={setPayTypesArrey}
              payTypesArrey={payTypesArrey}
            />,
          ]
    );
  };

  return (
    <div>
      <div>
        <h1> פירוט תשלום</h1>
        <button onClick={addPayMove}>הוסף שורה</button>
        <button name="pay=>menu" onClick={props.handleClick}>
          חזור לתפריט
        </button>
      </div>
      <div />
      {payTypesArrey}
    </div>
  );
}
