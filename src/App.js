import "./App.css";
import React from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  // async componentDidMount() {
  //   this.setState({loading: true})
  //   const res = await axios.get(`https://api.github.com/users?client_id=e2b30149ffdffa0c63f5&client_secret=21474ecec82d398cd6f570427579d6dd6aa37934`)
  //   this.setState({users: res.data, loading: false})
  // }

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=e2b30149ffdffa0c63f5&client_secret=a87fc628763c61de80e731aa4e31d4a52d997635`
    );
    console.log(res.data.items);
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    return (
      <div className="App">
        <Navbar title="GitHub Finder" icon="fba fa-github" />
        <div className="container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
