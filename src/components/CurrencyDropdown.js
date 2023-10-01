import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import styles from "./CurrencyDropdown.module.css";

const CurrencyDropdown = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <div className={`${styles.currency} alert`}>
      {" "}
      Currency{" "}
      {
        <select
          name="Currency"
          id="Currency"
          onChange={(event) => changeCurrency(event.target.value)}
        >
          <option value="£">£ Pound</option>
          <option value="₹">₹ Ruppee</option>
          <option value="€">€ Euro</option>
          <option value="$">$ Dollar</option>
        </select>
      }
    </div>
  );
};

export default CurrencyDropdown;
