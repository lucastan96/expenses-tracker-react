import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";

import "../../styles/Expenses/Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = props => {
    const [year, setYear] = useState("2022");

    const yearChangeHandler = (year) => {
        setYear(year);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter year={year} onSelectYear={yearChangeHandler} />
            <ExpensesChart items={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;