import React from 'react';
import './App.css';
import Person from './components/Person';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      id: 2,
      user: [],
    }
  }

  handleClick({ id }){
    this.setState({
      id,
    })
  }

  componentDidMount(){
    fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((result) => {
      this.setState({users: result, id: result[0].id})
    })
  }

  render(){
    console.log(this.state.id)

    const foundUser = 
      this.state.users.find((user) => user.id === this.state.id) || {}

    const { login, repos_url, followers_url } = foundUser

    return(
      <div>
        {
          this.state.users.map((user) => {
          return <div onClick={() => this.handleClick(user)}>{user.login}</div>
          })
        }
        <Person 
          headline={login}
          description={repos_url}
          age={followers_url}
        />
      </div>
    )
  }
}

export default App;