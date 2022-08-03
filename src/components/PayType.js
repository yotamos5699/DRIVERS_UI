import React, { useState } from "react";
import "../App.css";
import Select from "react-select";
import { payTypes, colorStyles } from "../stylesNmock";

export default function Type(props) {
  const handlePayTypeInput = (e) => {
    console.log(e);
  };

  const deleteMove = (id) => {
    console.log("id is ", id);
    props.payTypesArrey.filter((value) => {
      console.log(`value.id ${value.id} id ${id}`);
      return value !== id;
    });
    console.log(props.payTypesArrey);
  };

  return (
    <div className="pay-type">
      <Select
        name="select-state"
        styles={colorStyles}
        className="drop-select"
        onChange={handlePayTypeInput}
        options={payTypes}
      />

      <input type="number" />
      <button onClick={deleteMove}>מחק</button>
    </div>
  );
}
