import './App.css';
import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users'
import axios from 'axios'


class App extends React.Component {
  state = {
    users: [],
    loading: false
  }


  async componentDidMount() {
    this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/users?client_id=e2b30149ffdffa0c63f5&client_secret=a87fc628763c61de80e731aa4e31d4a52d997635`)
    this.setState({users: res.data, loading: false})
  }
  
    
  render() {

    return (
      <div className="App">
      <Navbar title='GitHub Finder' icon="fba fa-github"/>
      <div className='container'>
      <Users loading={this.state.loading} users={this.state.users} />
      </div>
      </div>
    )
  };
  
}

export default App;
