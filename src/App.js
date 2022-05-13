import './App.css';
import React from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem'

class App extends React.Component {
  
    
  render() {

    return (
      <div className="App">
      <Navbar title='GitHub Finder' icon="fba fa-github"/>
      <UserItem />
      </div>
    )
  };
  
}

export default App;
