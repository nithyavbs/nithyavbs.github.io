import Person from './Person/Person';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { //state is object
    persons: [
      { name: 'selvi', age: 60 },
      { name: 'kavitha', age: 34 },
      { name: 'Nithya', age: 30 }
    ],
    otherState: "some value"
  }
  switchName = (newName) => {
    // console.log("Click me");
    // dont do this.state.persons[0].name="kalai";
    this.setState({
      persons: [
        { name: newName, age: 60 },
        { name: 'Kavitha', age: 36 },
        { name: 'Nithya', age: 30 }
      ]
    }
    )
  }
  changeName = (event) => {
    this.setState({
      persons: [
        { name: 'Selvi', age: 60 },
        { name: event.target.value, age: 36 },
        { name: 'Nithya', age: 30 }
      ]
    })
  }
  render() {
    const style={
      backgroundColor:'grey',
        font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor:'poniter'
    };
    return (//jsx codes starts
      <div className="App">
        <h1>Hello World</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchName.bind(this, "Kalai!")} 
          changed={this.changeName}/>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />

        <button
         style={style}
          onClick={this.switchName.bind(this, "Kalai Selvi!")}>Name Switch</button>
        {/* <Person name="Nithya" age="32">My Aim:I Want to be SW Developer</Person> */}
        {/* <Person name="Kavitha" age="37" /> */}
      </div>
    );//jsx end
  }
}
export default App;
