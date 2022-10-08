import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({transactions}) => {
    return (<div className={css.table}>
        <table className={css.transaction_history}>
        <thead>
            <tr className={css.head}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {transactions.map((transaction) => (
                <tr key={transaction.id} className={css.row}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
    );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.object),
    transaction: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })
}
