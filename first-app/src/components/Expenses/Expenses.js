import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setSelectedFilter(selectedYear);
    console.log(selectedFilter);
  }
  
  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedFilter);

  return (
    <Card className="expenses">
      <ExpenseFilter onChangeFilter={filterChangeHandler} selected={selectedFilter} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
