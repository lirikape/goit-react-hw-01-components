import user from './assets/user.json';
import Profile from './profile/Profile';
import Statistics from './data/Statistics';
import data from './assets/data.json';
import friends from './assets/friends.json';
import FriendList from './friends/FriendList';
import transactions from './assets/transactions.json';
import TransactionHistory from './transaction/TransactionHistory';

function App() {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
