import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
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
      searchField:''
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
        // console.log(this.state);
      }));
  }
  // Optimization2
  // declare a function (once it is initialized when class component initializes, it will not re-render)
  // anonymous functions will be re-render whenever call is being called.
  onSearchChange=(event) => {
    // console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    })
    // this.state.monsters.filter((monster) => event.target.value == monster);
  }
  // The way that react to text it that there's a change is that uses 
  // JavaScript underlying reference by memeory for an object.
  // In memeory, whenever we instantiate a variable
  // state is diffent is if there is a comopletely different object in memeory.
  
  render() {
    // Optimization1 readable
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    // Filtering down a list, always want a filter from the full list.
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <input className='search-box' type='text' placeholder='search monsters' onChange={onSearchChange} />
        {/* {
          // callback function 
          filteredMonsters.map((monster) => { 
            return <div key={monster.id}><h1>{monster.name}</h1></div>;
            // why do we need key? 
            // optimizing purpose when it comes to re rendering or updating components
            // using this key is able to be much more performant and efficient when it
            // comes to differentiating these components from each other and then figuring out 
            // which ones to render appropriately when their value update.
          })} */}
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }

}


export default App;
