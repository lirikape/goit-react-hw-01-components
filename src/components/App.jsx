import user from '../path/to/user.json';
import Profile from './profile/Profile';
import Statistics from './data/Statistics';
import data from '../path/to/data.json';
import friends from '../path/to/friends.json';
import FriendList from './friends/FriendList';
import transactions from '../path/to/transactions.json';
import TransactionHistory from './transaction/TransactionHistory';

function App() {
  return (
    <div className="App">
          <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App