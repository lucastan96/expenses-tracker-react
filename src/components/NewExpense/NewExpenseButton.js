const NewExpenseButton = props => {
    const clickHandler = () => {
        props.onOpenForm();
    }

    return (
        <button onClick={clickHandler}>Add New Expense</button>
    )
}

export default NewExpenseButton;