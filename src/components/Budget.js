import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { dispatch, currency, budget, expenses } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (value) => {
    if (value > 20000) {
      alert("The budget cannot exceed 20000");
      return;
    }

    const totalExpenses = expenses.reduce((total, item) => {
      return total + item.cost;
    }, 0);

    if (value < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending");
      return;
    }

    setNewBudget(value);
    dispatch({ type: "SET_BUDGET", payload: value });
  };

  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency}
        {budget}
      </span>
      <input
        type="number"
        step="10"
        max="20000"
        value={newBudget}
        onChange={(event) => handleBudgetChange(event.target.value)}
      ></input>
    </div>
  );
};

export default Budget;
