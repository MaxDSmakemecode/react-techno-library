import React, {Component} from 'react';
import './App.css';
import Person from './components/Person';

// styles
const wrapper = {
  margin: '2rem 3%'
}

class App extends Component {
  constructor(){
    super()

  }

  handleClick({id}){
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
    const foundUser = this.state.users.find((user) => user.id === this.state.id || {})
    const {login, repos_url, followers_url} = foundUser

    return(
      <React.Fragment>
        <div style={wrapper}>
          
        </div>
        <Person 
          headline={login}
          description={repos_url}
          age={followers_url}
        />
      </React.Fragment>
    )
  }
}

export default App;
