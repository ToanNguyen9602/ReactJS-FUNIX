import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate2 = new Date(2024, 4, 14)
    const expenseTitle2 = 'Car Insurance';
    const expenseAmount = 294.67;

    return (
        <div className='expense-item'>
            <div>{expenseDate2.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle2}</h2>
                <div className='expense-item__price'>{expenseAmount}</div>
            </div>
        </div>    
    )
}
export default ExpenseItem