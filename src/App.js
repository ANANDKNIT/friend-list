import * as React from 'react';
import './App.css';
import CreateFriend from './component/CreateFriendList'
import Header from './component/AppBar'
import ShowFriendsList from './component/ShowFriendsList';

const App = () => {

  return (
    <div className="App">
      <Header />
      <CreateFriend />
      <ShowFriendsList />
    </div>
  );
}


export default App;