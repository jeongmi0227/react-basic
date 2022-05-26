import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// What is component?
// A component is a self-contained piece of code that returns some visual UI representation of HTML,CSS,JS

// rendering concept
// Developer really understands when React is rendering and re-rendering the website.
class App extends Component{
  // constructor will be invovled first
  constructor() {
    super();

    // local state
    this.state = {
      monsters: [],
    };
  }
  // will run whenever the component mounts
  // Mounting is the first time a component gets placed onto the top
  // First time React renders a component onto the page that is mounting.
  // It only happens once througout the components life.
  // The only time when a coponent might re mount is if it's been unmounted it, 
  // meaning it's been completely removed form the DOM.
  componentDidMount() { 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      }, () => { 
        console.log(this.state);
      }));
  }

  // The way that react to text it that there's a change is that uses 
  // JavaScript underlying reference by memeory for an object.
  // In memeory, whenever we instantiate a variable
  // state is diffent is if there is a comopletely different object in memeory.
  
  render() {
    return (
      <div className="App">
        {
          // callback function 
          this.state.monsters.map((monster) => { 
            return <div key={monster.id}><h1>{monster.name}</h1></div>;
            // why do we need key? 
            // optimizing purpose when it comes to re rendering or updating components
            // using this key is able to be much more performant and efficient when it
            // comes to differentiating these components from each other and then figuring out 
            // which ones to render appropriately when their value update.
          })}
          
      </div>
    );
  }

}


export default App;
