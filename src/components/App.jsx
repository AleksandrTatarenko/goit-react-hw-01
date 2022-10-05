import { Profile } from 'components/Profile/Profile'
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from 'path/to/user.json';
import data from 'path/to/data.json';
import friends from 'path/to/friends.json';
import transactions from "path/to/transactions.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex-column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        stats={data}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        transactions={transactions}
        id={transactions["id"]}
        type={transactions["type"]}
        amount={transactions["amount"]}
        currency={transactions["currency"]}
      />
    </div>
  );
};
