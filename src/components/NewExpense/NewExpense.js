import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import NewExpenseButton from "./NewExpenseButton";

import "../../styles/NewExpense/NewExpense.css";

const NewExpense = props => {
    const [isFormEnabled, setFormEnabled] = useState(false);

    const saveExpenseDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
        closeFormHandler();
    }

    const openFormHandler = () => {
        setFormEnabled(true);
    }

    const closeFormHandler = () => {
        setFormEnabled(false);
    }

    return (
        <div className="new-expense">
            {isFormEnabled ? (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={closeFormHandler} />
            ) : (
                <NewExpenseButton onOpenForm={openFormHandler} />
            )}
        </div>
    );
}

export default NewExpense;