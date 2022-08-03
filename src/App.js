import React, { useState } from "react";
import "./App.css";
import Select from "react-select";
import Payment from "./components/Payments";
import { drivers, colorStyles } from "./stylesNmock";

export default function App() {
  const [renderControler, setRenderController] = useState({
    renderDriversSelect: true,
    renderMainMenu: false,
    renderPayment: false,
  });

  const handleClick = (e) => {
    console.log("Clicked");
    if (e.target.name === "auth") {
      setRenderController((prev) => {
        return { ...prev, renderDriversSelect: false, renderMainMenu: true };
      });
    }
    if (e.target.name === "menu") {
      setRenderController((prev) => {
        return { ...prev, renderDriversSelect: true, renderMainMenu: false };
      });
    }
    if (e.target.name === "pay=>menu") {
      setRenderController((prev) => {
        return {
          ...prev,
          renderDriversSelect: false,
          renderMainMenu: true,
          renderPayment: false,
        };
      });
    }
    if (e.target.name === "pay") {
      setRenderController((prev) => {
        return {
          ...prev,
          renderDriversSelect: false,
          renderMainMenu: false,
          renderPayment: true,
        };
      });
    }
  };

  const handleDropDownInput = (value, metaData) => {
    console.log(metaData, value);
  };
  return (
    <div className="App">
      {renderControler.renderDriversSelect && (
        <div className="auth-screen">
          <input placeholder="סיסמה" />
          <Select
            name="select-state"
            styles={colorStyles}
            className="drop-select"
            onChange={handleDropDownInput}
            options={drivers}
          />
          <button name="auth" onClick={handleClick}>
            {" "}
            לתפריט{" "}
          </button>
        </div>
      )}
      {renderControler.renderMainMenu && (
        <div className="menu">
          <button>מסלול</button>
          <button name="pay" onClick={handleClick}>
            פירוט תשלום
          </button>
          <button>החתמה</button>
          <button>זיכוי</button>
          <button name="menu" onClick={handleClick}>
            {" "}
            החלפת נהג{" "}
          </button>
        </div>
      )}
      {renderControler.renderPayment && <Payment handleClick={handleClick} />}
    </div>
  );
}
