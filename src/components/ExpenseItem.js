import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: -10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <button
          style={{ background: "none", border: "0" }}
          onClick={(event) => increaseAllocation(props.name)}
        >
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/480/plus--v1.png"
            alt="plus--v1"
          />
        </button>
      </td>
      <td>
        <button
          style={{ background: "none", border: "0" }}
          onClick={(event) => decreaseAllocation(props.name)}
        >
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/minus.png"
            alt="minus"
          />
        </button>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
