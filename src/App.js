import React, {Component} from 'react';
import './App.css';
import persons from './client_data/persons';
import Person from './components/Person';

// styles
const wrapper = {
  margin: '2rem 3%'
}

class App extends Component {
  constructor(){
    super()

    this.state = {
      personList: persons
    }
  }

  render(){
    const personMap = this.state.personList.map(item => <Person key={item.id} name={item.name} age={item.age} description={item.description} />)

    return(
      <React.Fragment>
        <div style={wrapper}>
          {personMap}
        </div>
      </React.Fragment>
    )
  }
}

export default App;
